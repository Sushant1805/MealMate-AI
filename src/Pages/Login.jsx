import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import MicrosoftBtn from "../Buttons/MicrosoftBtn";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  // Submit Handler (Custom login logic)
  const handleLogin = (e) => {
    e.preventDefault();
    // TODO: Implement custom authentication logic here
    // For now, just redirect for demonstration
    setError("");
    navigate("/personalised-diet");
  };

  return (
    <>
      <div className="flex w-screen h-screen overflow-hidden">
        <div className="w-1/2 px-20 py-20 flex flex-col justify-start h-screen">
          <form onSubmit={handleLogin} className="w-full">
            <div className="w-100 flex flex-col gap-3 p-5">
              <h1 className="text-3xl font-bold text-[#0C0D4D]">
                Sign In to your account
              </h1>
              <p className="font-semibold">Welcome Back! Please enter your details</p>

              <p className="font-medium mt-2">Email Address</p>
              <input
                className="focus:outline focus:outline-sky-900 focus:border-sky-500 border-1 border-gray-200 h-10 rounded-md p-5 text-center"
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />

              <p className="font-medium">Password</p>
              <input
                className="focus:outline focus:outline-sky-900 focus:border-sky-500 border-1 border-gray-200 h-10 rounded-md p-5 text-center"
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />

              {error && <p className="text-red-500">{error}</p>}

              <div className="flex gap-2">
                <input type="checkbox" />
                <p className="text-gray-700">Remember Me</p>
                <p className="font-semibold text-[#0C0D4D] ml-20 hover:text-sky-600 cursor-pointer">
                  Forgot Password?
                </p>
              </div>

              <button
                type="submit"
                className="text-white h-10 px-5 py-2 rounded-md bg-[#0C0D4D] hover:bg-sky-600 cursor-pointer mt-2"
              >
                Sign In
              </button>

              <div className="flex gap-2">
                <p className="text-gray-700">Not Registered Yet?</p>
                <p
                  className="font-semibold text-[#0C0D4D] ml-15 hover:text-sky-600 cursor-pointer"
                  onClick={() => navigate("/register")}
                >
                  Create an Account
                </p>
              </div>
             
            </div>
          </form>
        </div>

        <div className="w-1/2 bg-[#0C0D4D] text-white text-center flex flex-col justify-start h-screen">
          <div className="flex flex-col">
            <img className="w-120 h-120 ml-20 mt-5" src="./login-img2.svg" alt="" />
          </div>
          <div>
            <h1 className="font-semibold">Join the Future of your health journey.</h1>
            <p>Simplify, personalize, and thrive with our tailored nutrition platform.</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
