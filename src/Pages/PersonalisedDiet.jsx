import { useState } from "react";
import dotenv from "dotenv"
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import ButtonBlue500 from "../Components/ButtonBlue500";
import { GoogleGenerativeAI } from "@google/generative-ai";


const PersonalisedDiet = () => {
    const [meals, setmeals] = useState("")
    const [formData, setFormData] = useState({
        goal: "",
        preference: "",
        workoutFrequency: "",
        age: "",
        height: "",
        weight: ""
    });
 
    const generateDietPrompt = (formData) => {
        const { goal, preference, workoutFrequency, age, height, weight } = formData;
    
        let prompt = `Generate a personalized diet plan for a person with the following details:\n\n`;
    
        prompt += `Goal: ${goal.replace('-', ' ').toUpperCase()}\n`;
        prompt += `Dietary Preference: ${preference.charAt(0).toUpperCase() + preference.slice(1)}\n`;
        prompt += `Workout Frequency: ${workoutFrequency.replace(/-/g, ' ').toUpperCase()}\n`;
        prompt += `Age: ${age} years\nHeight: ${height} cm\nWeight: ${weight} kg\n\n`;
    
        prompt += `Provide the diet plan in the following JSON format:\n\n`;
        prompt += `const meals = [\n`;
        prompt += `    { time: "Breakfast", title1: "Food Item 1", quantity1: "Amount", title2: "Food Item 2", quantity2: "Amount" },\n`;
        prompt += `    { time: "Lunch", title1: "Food Item 1", quantity1: "Amount", title2: "Food Item 2", quantity2: "Amount" },\n`;
        prompt += `    { time: "Snack", title1: "Food Item 1", quantity1: "Amount", title2: "Food Item 2", quantity2: "Amount" },\n`;
        prompt += `    { time: "Dinner", title1: "Food Item 1", quantity1: "Amount", title2: "Food Item 2", quantity2: "Amount" }\n`;
        prompt += `];\n\n`;
    
        prompt += `Ensure the food choices align with the person's goal, dietary preference, and activity level.`;
    
        return prompt;
    };
    
    

    const genAI = new GoogleGenerativeAI("");
    const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });
    
    async function getData(prompt){
        const result = await model.generateContent(prompt);
        setmeals(result.response.text());
        console.log(meals)
    }
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };
    const onSubmit = (e) => {
        e.preventDefault();
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
        console.log(formData)
        console.log("OnSubmit")
        const prompt = generateDietPrompt(formData)
        getData(prompt)
    };
    
    return (
        <>
        <Navbar/>
        <div className="bg-[#0C0D4D] flex  justify-center w-screen items-center ">
            <form onSubmit={onSubmit}>
            <div className="bg-[#f0f8ff] mb-10 flex flex-col gap-3 mt-15 p-10 pl-15 shadow-lg rounded-lg w-170">
                <h1 className="font-bold text-[#0C0D4D] text-3xl pt-4">Get Personalised Diet</h1>
                <p className="text-gray-500 mb-4">Please Provide your Information:</p>
                
                {/* Goal */}
                <div>
                    <p className="font-bold mb-2">Goal</p>
                    {['weight-loss', 'muscle-gain', 'maintain-weight'].map((goal) => (
                        <div key={goal} className="flex items-center mb-2">
                            <input id={goal} type="radio" name="goal" value={goal} className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500" onChange={handleChange} />
                            <label htmlFor={goal} className="ml-2 text-sm text-black">{goal.replace('-', ' ')}</label>
                        </div>
                    ))}
                </div>
                
                {/* Preference */}
                <div>
                    <p className="font-bold mb-2">Preference</p>
                    {['vegetarian', 'non-vegetarian', 'vegan', 'keto'].map((preference) => (
                        <div key={preference} className="flex items-center mb-2">
                            <input id={preference} type="radio" name="preference" value={preference} className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500" onChange={handleChange} />
                            <label htmlFor={preference} className="ml-2 text-sm text-black">{preference}</label>
                        </div>
                    ))}
                </div>
                
                {/* Workout Frequency */}
                <div>
                    <p className="font-bold mb-2">Workout Frequency</p>
                    {[
                        { id: "no-workout", label: "No Workout" },
                        { id: "low-medium", label: "2-4 Times a Week (Low - Medium Intensity)" },
                        { id: "medium-high", label: "4-6 Times a Week (Medium - High Intensity)" }
                    ].map((workout) => (
                        <div key={workout.id} className="flex items-center mb-2">
                            <input id={workout.id} type="radio" name="workoutFrequency" value={workout.id} className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500" onChange={handleChange} />
                            <label htmlFor={workout.id} className="ml-2 text-sm text-black">{workout.label}</label>
                        </div>
                    ))}
                </div>
                
                {/* Personal Information */}
                <div>
                    <p className="font-bold mb-2">Personal Information</p>
                    <label className="block mb-2 text-sm font-medium">Age:</label>
                    <input type="number" name="age" className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg w-1/4 p-2.5 focus:outline-sky-500   focus:border-sky-500" onChange={handleChange} required />
                    
                    <label className="block mt-3 mb-2 text-sm font-medium">Height (cm):</label>
                    <input type="number" name="height" className="bg-gray-50 border  border-gray-300 text-black text-sm rounded-lg w-1/4 p-2.5 focus:outline-blue-500 focus:border-blue-500" onChange={handleChange} required />
                    
                    <label className="block mt-3 mb-2 text-sm font-medium">Weight (kg):</label>
                    <input type="number" name="weight" className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg w-1/4 p-2.5 focus:outline-blue-500 focus:border-blue-500" onChange={handleChange} required />
                </div>
                
                {/* Button */}
                <button className="w-full mt-4 text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br font-medium rounded-lg text-sm px-5 py-2.5 text-center">
                    Get Diet Plan
                </button>
            </div>
            </form>
        </div>
        <Footer/>
        </>
    );
};

export default PersonalisedDiet;
