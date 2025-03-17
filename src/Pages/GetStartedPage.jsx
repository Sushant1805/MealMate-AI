import React from 'react'
import ButtonBlue500 from '../Components/ButtonBlue500'


const GetStartedPage = () => {
  return (
   <>
   <div className="bg-[#0C0D4D] h-screen text-white flex gap-20 items-center justify-center ">
   <div className="text flex flex-col gap-5 ">
    <h1 className='text-3xl font-semibold w-80'> Get Started with MealMate !</h1>
    <p className='w-80'>
    Achieving your nutrition goals is simple with MealMate. Just follow these steps to begin your personalized health journey today!
    </p>
    <ButtonBlue500 title="Get Started"/>
    </div>
    
    <div>
        <img src="/dashboard.png" alt="" className='w-200 ml-15 rounded-3xl'/>
    </div>
   
  

   </div>
 
   </>
  )
}

export default GetStartedPage
