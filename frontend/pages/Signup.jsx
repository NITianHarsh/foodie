import React, { useState } from "react";
import Navbar from "../components/navbar";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
  const [address, setAddress] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setName("");
    setAddress("");
    setEmail("");
    setPassword("");
    console.log("Form submitted!");
  };

  return (
    <div className="w-full min-h-screen text-white relative bg-[url(https://media.istockphoto.com/id/589135154/photo/herbs-and-spices-over-black-stone-background.jpg?s=2048x2048&w=is&k=20&c=FPDdj0lmWVEjyvVW2dlz0RQ_3c2URSz9iPk_l8qAQg4=)] bg-center bg-cover flex flex-col">
      <Navbar />
      <div className="w-full max-w-md mx-auto p-6 bg-[#212121] opacity-98 rounded-lg shadow-lg mt-20 md:mt-32">
        <h1 className="font-semibold italic text-3xl text-center mb-4">
          Sign Up
        </h1>
        <form onSubmit={handleSubmit} className="flex flex-col">
          <div className="mb-4">
            <label className="font-medium text-lg">Name</label>
            <input
              type="text"
              placeholder="Enter your name"
              required
              value={name}
              onChange={(e)=>setName(e.target.value)}
              className="bg-[#1F1F1F] border-none rounded-md shadow-sm px-3 py-2 mt-1 focus:outline-none w-full"
            />
          </div>
          <div className="mb-4">
            <label className="font-medium text-lg">Email Address</label>
            <input
              type="email"
              placeholder="Enter your email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-[#1F1F1F] border-none rounded-md shadow-sm px-3 py-2 mt-1 focus:outline-none w-full"
            />
          </div>
          <div className="mb-4">
            <label className="font-medium text-lg">Address</label>
            <input
              type="text"
              placeholder="Enter your address"
              required
              value={address}
              onChange={(e)=>setAddress(e.target.value)}
              className="bg-[#1F1F1F] border-none rounded-md shadow-sm px-3 py-2 mt-1 focus:outline-none w-full"
            />
            <button
              type="button"
              className="py-1 w-full bg-teal-600 rounded-md text-black font-medium active:scale-95 mt-2"
            >
              Click for current location
            </button>
          </div>
          <div className="mb-4">
            <label className="font-medium text-lg">Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="bg-[#1F1F1F] border-none rounded-md shadow-sm px-3 py-2 mt-1 focus:outline-none w-full"
            />
          </div>
          <div className="mt-4 flex flex-col sm:flex-row gap-4">
            <button
              type="submit"
              className="w-full sm:w-auto px-6 py-2 bg-teal-800 rounded-md font-medium active:scale-95"
            >
              Submit
            </button>
            <button
              type="button"
              className="w-full sm:w-auto px-6 py-2 bg-red-500 rounded-md font-medium active:scale-95"
              onClick={() => navigate("/login")}
            >
              Already a User
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
