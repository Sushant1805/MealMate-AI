import React from 'react'

const Navbar = () => {
  return (
    <>
    <div className='text-black h-15 flex gap-15 px-5 py-5 items-center justify-evenly text-xl font-medium '>
        <h1 className='flex font-medium text-black'>Meal <span className='text-blue-400 text-xl'>Mate</span></h1>
        <ul className='flex text-black gap-15'>
            <li>Home</li>
            <li>About</li>
            <li>Services</li>
            <li>Contact</li>
        </ul>
        <button className='btn-hover color-9 text-white bg-[#293FCC] h-10 w-30 rounded-xl text-xl'>Get Started</button>
    </div>
    </>
  )
}

export default Navbar
