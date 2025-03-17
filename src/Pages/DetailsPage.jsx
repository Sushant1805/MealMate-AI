import React from 'react'
import DetailsCard from '../Components/DetailsCard'
import { CgInsights } from "react-icons/cg";
import { BsFillPersonCheckFill   } from "react-icons/bs";
import { RiProgress6Fill  } from "react-icons/ri";
const DetailsPage = () => {
    
  return (
    <>
    <div className='flex flex-col bg-white items-center justify-center gap-15 p-10 h-screen'>
    <h1 className='text-[#0C0D4D] text-4xl font-bold mt-10'>Why MealMate?</h1>
    <p className='font-semibold text-center w-250'>At MealMate, we make healthy eating simple. Our platform offers personalized meal plans based on your unique goals,
whether it’s weight loss, muscle gain, or maintaining balance.With tailored suggestions, nutritional insights, and progress tracking,
SmartEats takes the guesswork out of nutrition, helping you thrive on your health journey.</p>
    <div className=" flex flex-row gap-10 m-5 items-center justify-center">
      <DetailsCard Img={BsFillPersonCheckFill} title="Personalized Meal Plans"
      headline="Fuel Your Goals with Smart Choices"
      Description="
      Get customized meal plans designed for your unique health goals—whether it’s weight loss, muscle gain, or balanced nutrition. SmartEats helps you eat right with ease."
      />
        <DetailsCard Img={CgInsights} title="Personalized Meal Plans"
      headline="Fuel Your Goals with Smart Choices"
      Description="
      Get customized meal plans designed for your unique health goals—whether it’s weight loss, muscle gain, or balanced nutrition. SmartEats helps you eat right with ease."
      />
        <DetailsCard Img={RiProgress6Fill} title="Personalized Meal Plans"
      headline="Fuel Your Goals with Smart Choices"
      Description="
      Get customized meal plans designed for your unique health goals—whether it’s weight loss, muscle gain, or balanced nutrition. SmartEats helps you eat right with ease."
      />
    </div>

    </div>
   
    </>
  )
}


export default DetailsPage
