import React from "react";
import { Link, useNavigate } from "react-router-dom";
const Navbar = () => {
  const navigate = useNavigate();
  return (
    <div className="w-full h-20 fixed top-0 left-0 z-50 bg-teal-600 text-white flex justify-between px-3 items-center shadow-xl shadow-gray-900/60">
      <div className="one flex gap-5 items-center">
        <h1 className="text-3xl font-bold italic">GoFood</h1>
        <Link to="/" className="text-lg">
          Home
        </Link>
      </div>
      <div className="two flex gap-3" >
        <button
          className="px-4 py-1 text-teal-800 rounded-md font-medium bg-white active:scale-95"
          onClick={() => navigate("/login")}
        >
          {" "}
          Login{" "}
        </button>
        <button
          className="px-4 py-1 text-teal-800 rounded-md font-medium bg-white active:scale-95"
          onClick={() => navigate("/signup")}
        >
          {" "}
          Signup{" "}
        </button>
      </div>
    </div>
  );
};

export default Navbar;
