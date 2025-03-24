import React from 'react'

const MealCard = (props) => {
  return (
    <div className='m-10 rounded-2xl bg-emerald-500 w-65 h-80 p-5 flex flex-col gap-5'>
            <h1 className='text-2xl font-semibold'>{props.time}</h1>
            <h3>{props.item1}</h3>
            <h2>Quantity : {props.item1_quantity}</h2>
            <h2 className='font-semibold text-center'>Or</h2>
            <h3>{props.item2}</h3>
            <h2>Quantity : {props.item2_quantity}</h2>
        </div>
  )
}

export default MealCard
