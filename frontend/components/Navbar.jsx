import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <nav className="w-full h-20 fixed top-0 left-0 z-50 bg-teal-600 text-white flex justify-between px-5 items-center shadow-xl shadow-gray-900/60">
      <div className="flex items-center">
        <h1 className="text-3xl font-bold italic">GoFood</h1>
      </div>

      {/* Mobile Menu Toggle */}
      <div className="lg:hidden">
        <button onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Desktop Menu */}
      <div className="hidden lg:flex gap-5 items-center">
        <Link to="/" className="text-lg">
          Home
        </Link>
        <button
          className="px-4 py-1 text-teal-800 rounded-md font-medium bg-white active:scale-95"
          onClick={() => navigate("/login")}
        >
          Login
        </button>
        <button
          className="px-4 py-1 text-teal-800 rounded-md font-medium bg-white active:scale-95"
          onClick={() => navigate("/signup")}
        >
          Signup
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-20 left-0 w-full bg-teal-700 flex flex-col items-center gap-4 py-4 lg:hidden">
          <Link to="/" className="text-lg" onClick={() => setIsOpen(false)}>
            Home
          </Link>
          <button
            className="px-4 py-1 text-teal-800 rounded-md font-medium bg-white active:scale-95"
            onClick={() => {
              navigate("/login");
              setIsOpen(false);
            }}
          >
            Login
          </button>
          <button
            className="px-4 py-1 text-teal-800 rounded-md font-medium bg-white active:scale-95"
            onClick={() => {
              navigate("/signup");
              setIsOpen(false);
            }}
          >
            Signup
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
