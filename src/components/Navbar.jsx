import React, { useState } from 'react';
import { BiLogIn } from "react-icons/bi";
import { BiSolidUserPlus } from "react-icons/bi";
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-100">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center space-x-4">
          <div className="flex-shrink-0">
            <img src="logo.svg" alt="Logo" className="w-20 h-20" />
          </div>
            <Link to="/" className="flex items-center py-5 px-2 text-gray-700 hover:text-gray-900">
              <span className="font-bold">Adoptify</span>
            </Link>
        </div>

        {/* Hamburger Menu */}
        <div className="md:hidden">
          <button
            className="text-gray-700 hover:text-gray-900 focus:outline-none"
            onClick={toggleMenu}
          >
            {isOpen ? (
              <svg
                className="w-6 h-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            )}
          </button>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-1">
          <a href="#" className="py-5 px-3 text-gray-700 hover:text-gray-900">
            Search Pet
          </a>
          <a href="#" className="py-5 px-3 text-gray-700 hover:text-gray-900">
            About
          </a>
        </div>

        {/* Secondary Nav */}
        <div className="hidden md:flex items-center space-x-4 ml-auto">   
            <Link to="/login" className="text-gray-700 hover:text-gray-900">
              <span className="flex items-center space-x-2">
                <BiLogIn className="w-6 h-6" />
                <span>Login</span>
              </span>
            </Link> 
          
            <Link to="/signup" className="py-2 px-6 bg-blue-500 hover:bg-blue-700 text-gray-900 hover:text-white rounded transition duration-300">
              <span className="flex items-center space-x-2">
                <BiSolidUserPlus className="w-6 h-6" />
                <span>Signup</span>
              </span>
            </Link>         
        </div>
      </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden flex flex-col items-start space-y-2 bg-gray-50 p-4 shadow-lg">
            <a
              href="#"
              className="block py-2 px-4 text-gray-700 hover:bg-gray-200 rounded"
            >
              Search Pet
            </a>
            <a
              href="#"
              className="block py-2 px-4 text-gray-700 hover:bg-gray-200 rounded"
            >
              About
            </a>
            <Link
              to="/login"
              className="block py-2 px-4 text-gray-700 hover:bg-gray-200 rounded">
              Login
            </Link>
            <Link
              to="/signup"
              className="block py-2 px-4 text-gray-700 hover:bg-gray-200 rounded">
              Signup
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
