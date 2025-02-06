import React from "react";
import Navbar from "../components/navbar";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const navigate = useNavigate();
  return (
    <div className="w-full h-screen text-white relative bg-[url(https://images.unsplash.com/photo-1517936401693-1dbb51e467c5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] bg-center bg-cover">
      <Navbar></Navbar>
      <div className="w-1/2 h-1/2 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#212121] opacity-95 border-1 p-3">
        <h1 className="font-semibold italic text-4xl text-center mb-6">
          Login
        </h1>
        <div className="flex flex-col justify-start mb-6">
          <p className="font-medium text-lg">Email Address</p>
          <input
            type="email"
            placeholder="Enter your email"
            required
            className="bg-[#1F1F1F] border-none rounded-[1rem] shadow-[0_0.1rem_#dfd9d9] cursor-pointer px-2 py-1 my-1"
          />
          <p className="text-sm">We'll never share your email with anyone</p>
        </div>
        <div className="flex flex-col justify-start">
          <p className="font-medium text-lg">Password</p>
          <input
            type="password"
            placeholder="Enter your email"
            required
            className="bg-[#1F1F1F] border-none rounded-[1rem] shadow-[0_0.1rem_#dfd9d9] cursor-pointer px-2 py-1 my-1"
          />
        </div>
        <div className="mt-4 flex gap-4">
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
          New User{" "}
        </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
