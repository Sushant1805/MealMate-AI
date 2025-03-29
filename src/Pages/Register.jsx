import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import MicrosoftBtn from "../Buttons/MicrosoftBtn";

// ✅ Firebase Configuration
const firebaseConfig = {
  apiKey: "AIzaSyAT69wmPHm9tZ3xBWhpvAVO5hRJsQ-WSC0",
  authDomain: "smarteats-bc8c9.firebaseapp.com",
  projectId: "smarteats-bc8c9",
  storageBucket: "smarteats-bc8c9.appspot.com",
  messagingSenderId: "915448268413",
  appId: "1:915448268413:web:569c30db72dbd90b739314",
};

// ✅ Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const Register = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // ✅ Submit Handler (Handles Firebase Signup)
  const SubmitHandler = async (e) => {
    e.preventDefault();
    if (!email || !password) {
      alert("Please enter both email and password.");
      return;
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      alert("Account created successfully!");
      console.log("User:", userCredential.user);
      navigate("/login"); // Redirect to login after successful signup
    } catch (error) {
      alert(`Error: ${error.message}`);
    }

    // Reset form fields
    setName("");
    setEmail("");
    setPassword("");
  };

  return (
    <div className="flex w-screen h-screen">
      {/* Left Side */}
      <div className="w-1/2 bg-[#0C0D4D] text-white text-center">
        <div className="flex flex-col">
          <img className="w-100 h-100 ml-40 mt-40" src="./sign-up.svg" alt="Signup Illustration" />
        </div>
        <div className="mt-10">
          <h1 className="font-semibold">Join the Future of your health journey.</h1>
          <p>Simplify, personalize, and thrive with our tailored nutrition platform.</p>
        </div>
      </div>

      {/* Right Side */}
      <div className="w-1/2 px-50 py-30">
        <form onSubmit={SubmitHandler}>
          <div className="w-100 flex flex-col gap-3">
            <h1 className="text-3xl font-bold text-[#0C0D4D]">Create your account</h1>
            <p className="font-semibold">Enter your details to create an account!</p>

            <label className="font-medium mt-5">Name</label>
            <input
              type="text"
              className="focus:outline focus:outline-sky-900 border border-gray-200 h-10 rounded-md p-5 text-center"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />

            <label className="font-medium">Email Address</label>
            <input
              type="email"
              className="focus:outline focus:outline-sky-900 border border-gray-200 h-10 rounded-md p-5 text-center"
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <label className="font-medium">Password</label>
            <input
              type="password"
              className="focus:outline focus:outline-sky-900 border border-gray-200 h-10 rounded-md p-5 text-center"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <div className="flex gap-2 mt-2">
              <input type="checkbox" />
              <p className="text-gray-700 text-sm">I agree with all terms and conditions</p>
            </div>

            <button type="submit" className="text-white mt-5 h-10 px-5 py-2 rounded-md bg-[#0C0D4D] hover:bg-sky-600">
              Sign Up
            </button>

            <div className="flex gap-2 mt-2 items-center justify-center">
              <p className="text-gray-700">Already have an account?</p>
              <p
                className="font-semibold text-[#0C0D4D] hover:text-sky-600 cursor-pointer"
                onClick={() => navigate("/login")}
              >
                Sign in
              </p>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
