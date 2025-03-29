import React from 'react';
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-white text-black border border-gray-300 h-16 sticky top-0 z-50 flex gap-10 px-5 py-4 items-center justify-evenly text-xl font-medium">
      <h1 className="flex font-bold text-black text-2xl cursor-pointer"  onClick={()=> navigate("/")}>
        Meal <span className="text-blue-400">Mate</span>
      </h1>
      
      <ul className="flex text-black gap-10">
        <li className="hover:text-blue-500 cursor-pointer" onClick={() => navigate("/")}>Home</li>
        <li className="hover:text-blue-500 cursor-pointer" onClick={() => navigate("/details")}>About</li>
        <li className="hover:text-blue-500 cursor-pointer" onClick={() => navigate("/get-started")}>Services</li>
        <li className="hover:text-blue-500 cursor-pointer" onClick={() => navigate("/contact")}>Contact</li>
      </ul>

      <button 
        className="text-white bg-[#293FCC] h-10 w-32 rounded-xl text-xl hover:bg-blue-600 transition duration-300"
        onClick={() => navigate("/login")}
      >
        Get Started
      </button>
    </div>
  );
};

export default Navbar;
