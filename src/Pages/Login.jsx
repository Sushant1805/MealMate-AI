import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import MicrosoftBtn from "../Buttons/MicrosoftBtn";

// Firebase Configuration
const firebaseConfig = {
  apiKey: "AIzaSyAT69wmPHm9tZ3xBWhpvAVO5hRJsQ-WSC0",
  authDomain: "smarteats-bc8c9.firebaseapp.com",
  projectId: "smarteats-bc8c9",
  storageBucket: "smarteats-bc8c9.appspot.com",
  messagingSenderId: "915448268413",
  appId: "1:915448268413:web:569c30db72dbd90b739314",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/personalised-diet"); // Redirect to PersonalisedDiet page on successful login
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <>
      <div className="flex w-screen h-screen">
        <div className="w-1/2 px-50 py-20">
          <form onSubmit={handleLogin}>
            <div className="h-170 w-100 flex flex-col gap-3 p-5">
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

              <p className="text-center">or</p>
              <MicrosoftBtn />
            </div>
          </form>
        </div>

        <div className="w-1/2 bg-[#0C0D4D] text-white text-center">
          <div className="flex flex-col">
            <img className="w-120 h-120 ml-40 mt-20" src="./login-img2.svg" alt="" />
          </div>
          <div className="mt-10">
            <h1 className="font-semibold">Join the Future of your health journey.</h1>
            <p>Simplify, personalize, and thrive with our tailored nutrition platform.</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
