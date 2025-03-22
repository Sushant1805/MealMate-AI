import React from 'react'
import { useState } from 'react'
import MicrosoftBtn from '../Buttons/MicrosoftBtn'
const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  
  function onChangeHandler(e){
    setEmail(e.target.value);
  }

  function SubmitHandler(e){
      e.preventDefault();
      console.log("Email: " + email + " Password: " + password)
      setEmail('');
      setPassword('');
  }
  return (
    <>
      <div className='flex w-screen h-screen'>
        <div className='w-1/2 px-50 py-20'>
        <form onSubmit={SubmitHandler} >
            <div className=' h-170 w-100 flex flex-col gap-3 p-5'>
                
                <h1 className='text-3xl font-xl font-bold text-[#0C0D4D]'>Sign In to your account</h1>
                <p className='font-semibold'>Welcome Back! Please enter your details</p>
                <p className='font-medium mt-2'>Email Address</p>
                <input onChange ={onChangeHandler}
                value={email} className=' focus:outline focus:outline-sky-900 focus:border-sky-500 border-1 border-gray-200 border-1 border-gray-200 h-10 rounded-md p-5 text-center' type="text" name="" id="" placeholder='Enter your email address'/>

                <p className='font-medium'>Password</p>
                <input onChange={(e)=>{setPassword(e.target.value)}} value={password} className=' focus:outline focus:outline-sky-900 focus:border-sky-500 border-1 border-gray-200 display-block border-1 border-gray-200 h-10 rounded-md p-5 text-center' type="password" id="" placeholder='Enter your password'/>
                <div className='flex gap-2 '>
                  <input className='' type="checkbox" name="" id=""/> 
                  <p className='text-gray-700'>Remember Me</p>
                  <p className='font-semibold text-[#0C0D4D] ml-20 hover:text-sky-600 cursor-pointer'>Forgot Password?</p>
                  </div>
                
                <button className='text-white h-10 px-5 py-2 rounded-md bg-[#0C0D4D] hover:bg-sky-600 cursor-pointer mt-2'>Sign In</button>
                <div className='flex gap-2'>
                  <p className='text-gray-700'>Not Registered Yet?</p>
                  <p className='font-semibold text-[#0C0D4D] ml-15 hover:text-sky-600 cursor-pointer'>Create an Account</p>
                </div>
                
                
                <p className='text-center'>or</p>
                <MicrosoftBtn/>
          </div>
          </form>
        </div>
        {/* <div className='w-1/2 bg-[#0C0D4D] text-white text-center'>
            <div className='flex flex-col'>
              <img className='w-120 h-120  ml-40 mt-20' src="./login-img2.svg" alt="" />
             
            </div>
            <div className='mt-10'>
            <h1 className='font-semibold '>Join the Future of your health journey.</h1>
              <p>
              Simplify, personalize, and thrive with our tailored nutrition platform.</p>
            </div>
        </div> */}
      </div>
    </>
  )
}

export default Login
