import React from 'react'
import Navbar from '../components/navbar'
import { useNavigate } from "react-router-dom";

const Signup = () => {
    const navigate = useNavigate();
  return (
    <div className="w-full h-screen text-white relative bg-[url(https://images.unsplash.com/photo-1596069080556-867fc4c4d297?q=80&w=1926&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] bg-center bg-cover">
      <Navbar></Navbar>
      <div className="w-1/2 h-[70%] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#212121] opacity-98 border-1 p-3">
        <h1 className="font-semibold italic text-4xl text-center mb-3">
          Sign up
        </h1>
        <div className="flex flex-col justify-start mb-2">
          <p className="font-medium text-lg">Name</p>
          <input
            type="text"
            placeholder="Enter your name"
            required
            className="bg-[#1F1F1F] border-none rounded-[1rem] shadow-[0_0.1rem_#dfd9d9] cursor-pointer px-2 py-1 my-1"
          />
        </div>
        <div className="flex flex-col justify-start mb-2">
          <p className="font-medium text-lg">Email Address</p>
          <input
            type="email"
            placeholder="Enter your email"
            required
            className="bg-[#1F1F1F] border-none rounded-[1rem] shadow-[0_0.1rem_#dfd9d9] cursor-pointer px-2 py-1 my-1"
          />
        </div>
        <div className="flex flex-col justify-start mb-2">
          <p className="font-medium text-lg">Address</p>
          <input
            type="text"
            placeholder="Enter your address"
            required
            className="bg-[#1F1F1F] border-none rounded-[1rem] shadow-[0_0.1rem_#dfd9d9] cursor-pointer px-2 py-1 my-1"
          />
          <button
          className="py-0.5 w-[60%] bg-teal-600 rounded-md text-black font-medium active:scale-95 mt-1"
          
        >
          {" "}
          Click for current location{" "}
        </button>
        </div>
        <div className="flex flex-col justify-start mb-2">
          <p className="font-medium text-lg">Password</p>
          <input
            type="password"
            placeholder="Enter your password"
            required
            className="bg-[#1F1F1F] border-none rounded-[1rem] shadow-[0_0.1rem_#dfd9d9] cursor-pointer px-2 py-1 my-1"
          />
        </div>
        <div className="mt-2 flex gap-4">
        <button
          className="px-4 py-1 bg-teal-800 rounded-md font-medium active:scale-95"
          
        >
          {" "}
          Submit{" "}
        </button>
        <button
          className="px-4 py-1 bg-red-500 rounded-md font-medium active:scale-95"
          onClick={() => {navigate("/signup")}}
        >
          {" "}
          Already a User{" "}
        </button>
        </div>
      </div>
    </div>
  )
}

export default Signup