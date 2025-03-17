import React from 'react'
import { CgInsights } from "react-icons/cg";
const DetailsCard = ({Img,title,headline,Description}) => {
  return (
    <>
        <div className='shadow-lg  transition delay-50 duration-200 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-blue-100 w-80 h-80 flex flex-col items-center px-5 rounded-2xl  gap-5 py-5 '>
            <Img className='w-15 h-15 text-[#0C0D4D]'/>
            <h1 className='text-xl font-bold text-[#0C0D4D] '>{title}</h1>
            <p className='text-md font-semibold '>{headline}</p>
            <p className='text-center text-sm'>{Description}</p>

        </div>
    </>
  )
}

export default DetailsCard
