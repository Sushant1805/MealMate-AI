import React, { useState } from 'react'
import MicrosoftBtn from '../Buttons/MicrosoftBtn'


const Register = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  function SubmitHandler(e){
    e.preventDefault();
    console.log("Name: " + name + " Email: " + email + " Password: " + password)
    setEmail('');
    setPassword('');
    setName('');
}
  return (
    <>
      <div className='flex w-screen h-screen'>
        {/* Left Side */}
        <div className='w-1/2 bg-[#0C0D4D] text-white text-center'>
            <div className='flex flex-col'>
              <img className='w-100 h-100  ml-40 mt-40' src="./sign-up.svg" alt="" />
             
            </div>
            <div className='mt-10'>
            <h1 className='font-semibold '>Join the Future of your health journey.</h1>
              <p>
              Simplify, personalize, and thrive with our tailored nutrition platform.</p>
            </div>
        </div>
        {/* Right Side */}
        <div className='w-1/2 px-50 py-30'>
        <form onSubmit={SubmitHandler} >
            <div className='  w-100 flex flex-col gap-3 p-'>
                
                <h1 className='text-3xl font-xl font-bold text-[#0C0D4D]'>Create your account</h1>
                <p className='font-semibold'>Enter your details to create an account!</p>
                <p className='font-medium mt-5'>Name</p>
                <input onChange={(e)=>{setName(e.target.value)}} value={name} className=' focus:outline focus:outline-sky-900 focus:border-sky-500 border-1 border-gray-200  h-10 rounded-md p-5 text-center' type="text" name="" id="" placeholder='Enter your name'/>
                <p className='font-medium'>Email Address</p>
                <input onChange={(e)=>{setEmail(e.target.value)}} value={email} className=' focus:outline focus:outline-sky-900 focus:border-sky-500 border-1 border-gray-200 h-10 rounded-md p-5 text-center' type="text" name="" id="" placeholder='Enter your email address'/>
                <p className='font-medium'>Password</p>
                <input onChange={(e)=>{setPassword(e.target.value)}} value={password} className=' focus:outline focus:outline-sky-900  border-1  focus:border-sky-500 display-block  border-gray-200 h-10 rounded-md p-5 text-center' type="password" id="" placeholder='Enter your password'/>
                <div className='flex gap-2 mt-2 '>
                  <input className='' type="checkbox" name="" id=""/> 
                  <p className='text-gray-700 text-sm'>
                  I agree with all terms and conditions</p>
                  </div>
                
                <button className='text-white mt-5 h-10 px-5 py-2 rounded-md bg-[#0C0D4D] hover:bg-sky-600'>Sign Up</button>
                <div className='flex gap-2 mt-2 items-center justify-center'>
                  <p className='text-gray-700'>Already have an account?</p>
                  <p className='font-semibold text-[#0C0D4D] hover:text-sky-600 cursor-pointer'>
                  Sing in</p>
                </div>
                
          </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default Register
