import React from 'react'
import { FaCircleNotch } from "react-icons/fa";
const NutritionCard = (props) => {
  return (
    <div className='w-35 rounded-md py-2 px-5 border-2 border-[#DDEB9D] h-15 gap-2 flex items-center'>
                    <FaCircleNotch className='h-7 w-7'/>
                    <div className='text-sm'>
                        <h1>{props.title}</h1>
                        <h4>{props.value}</h4>
                    </div>
                </div>
  )
}

export default NutritionCard
