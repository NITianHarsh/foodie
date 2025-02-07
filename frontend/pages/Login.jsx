import React, { useState } from "react";
import Navbar from "../components/navbar";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setEmail("");
    setPassword("");
    console.log("Form submitted!");
  };

  return (
    <div className="w-full min-h-screen text-white relative bg-[url(https://images.unsplash.com/photo-1517936401693-1dbb51e467c5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] bg-center bg-cover flex flex-col">
      <Navbar />
      <div className="w-full max-w-md mx-auto p-6 bg-[#212121] opacity-95 rounded-lg shadow-lg mt-20 md:mt-32">
        <h1 className="font-semibold italic text-3xl text-center mb-6">
          Login
        </h1>
        <form onSubmit={handleSubmit} className="flex flex-col">
          <div className="mb-6">
            <label className="font-medium text-lg">Email Address</label>
            <input
              type="email"
              placeholder="Enter your email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-[#1F1F1F] border-none rounded-md shadow-sm px-3 py-2 mt-1 focus:outline-none w-full"
            />
            <p className="text-sm mt-1">
              We'll never share your email with anyone
            </p>
          </div>
          <div className="mb-6">
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
          <div className="mt-6 flex flex-col sm:flex-row gap-4">
            <button
              type="submit"
              className="w-full sm:w-auto px-6 py-2 bg-teal-800 rounded-md font-medium active:scale-95"
            >
              Submit
            </button>
            <button
              type="button"
              className="w-full sm:w-auto px-6 py-2 bg-red-500 rounded-md font-medium active:scale-95"
              onClick={() => navigate("/signup")}
            >
              New User
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
