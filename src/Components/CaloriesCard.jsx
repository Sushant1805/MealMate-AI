import React from 'react'

const CaloriesCard = (props) => {
  return (
    <div className='bg-[#A1E3F9] rounded-md w-30 h-20 p-5'>
    <h1 className='font-semibold'>{props.title}</h1>
    <h1>{props.calorieCount} kcal</h1>
    </div>
  )
}

export default CaloriesCard
