import React from "react"
import ButtonBlue from "./ButtonBlue";
import ButtonBlue500 from "./ButtonBlue500";


const Landing = () => {
  return (
    <>
      <div className="main flex gap-10 h-screen">
      <div className=" mt-50 ml-35 flex flex-col gap-5">
      <p className="text-white text-5xl font-bold flex flex-col">
        <span>Take control of your health with </span>
        <span className="text-blue-500">AI-powered, personalized</span>
        <span>nutrition plans.</span> 
      </p>
      <p className="text-xl font-normal  text-white">SmartEats: Your personalized guide to a healthier lifestyle through <br/>
      tailored diet plans and expert nutritional advices.</p>
     <ButtonBlue500 title="Try for Free!"/>
     
    </div>
    
    <div>
      <img src="/src/Components/LandingImage.png" alt="" className="mt-20 h-130 w-130" />
    </div>
      </div>
    </>
  );
};

export default Landing;
