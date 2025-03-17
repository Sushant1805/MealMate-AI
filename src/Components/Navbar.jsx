import React from 'react'

const Navbar = () => {
  return (
    <>
    <div className='bg-white text-black border-1 border-gray-300 h-15 sticky top-0 z-50 flex gap-15 px-5 py-5 items-center justify-evenly text-xl font-medium '>
        <h1 className='flex font-bold text-black'>Meal <span className='text-blue-400 text-xl'>Mate</span></h1>
        <ul className='flex text-black gap-15'>
            <li className='hover:text-blue-500 cursor-pointer'>Home</li>
            <li className='hover:text-blue-500 cursor-pointer'>About</li>
            <li className='hover:text-blue-500 cursor-pointer'>Services</li>
            <li className='hover:text-blue-500 cursor-pointer'>Contact</li>
        </ul>
        <button className='btn-hover color-9 text-white bg-[#293FCC] h-10 w-30 rounded-xl text-xl'>Get Started</button>
    </div>
    </>
  )
}

export default Navbar
