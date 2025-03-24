import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import CaloriesCard from '../Components/CaloriesCard'
import { FaCircleNotch } from "react-icons/fa";
import NutritionCard from '../Components/NutritionCard';
import MealCard from '../Components/MealCard';

const DietPage = () => {
    const meals = [
        {time:"Breakfast",
            title1:"Avocado", quantity1:1,title2:"Banana", quantity2:2
        },
        {time:"Lunch",
            title1:"Dal Rice", quantity1:"250g",title2:"Apple", quantity2:2
        }
    ];
  return (
    <>
    <Navbar/>
    <div className='h-screen'>
        {/* <div className='ml-10 flex flex-col gap-5 mt-10'>
            <div className=''>
                <p className='text-2xl font-medium text-[#0C0D4D] text-center'>Hello User! Complete Your Today's Meal</p>
            </div>

            {/*CARD
            <div className='flex gap-5 justify-evenly mt-5'>
                <CaloriesCard title="Breakfast" calorieCount="400"/>
                <CaloriesCard title="Breakfast" calorieCount="400"/>
                <CaloriesCard title="Breakfast" calorieCount="400"/>
                <CaloriesCard title="Breakfast" calorieCount="400"/>
            </div>
           

            /* Nutrition Information
            <div className='w-full flex items-center justify-between flex-col gap-5 mt-5 '>
            <h1 className='text-xl'>Nutrition Information</h1>
            <div className='border-2 border-[#4F959D] h-30 rounded-2xl p-5 justify-evenly w-1/2 items-center  flex'>
                <NutritionCard title="Calories" value="400"/>
                <NutritionCard title="Calories" value="400"/>
                
                <NutritionCard title="Calories" value="400"/>
                <NutritionCard title="Calories" value="400"/>
            </div>
            </div>
           
        </div> */}
        <h1>Meals</h1>
        <div className='flex'>
        {meals.map((meal) => (
                        <MealCard time={meal.time} item1={meal.title1} item1_quantity={meal.quantity1} 
                        item2={meal.title2} item2_quantity={meal.quantity2} />
        ))}
        </div>
        



    </div>
    <Footer/>
    
    </>
  )
}

export default DietPage
