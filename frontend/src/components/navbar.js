// src/components/Navbar.js
import React, { useState } from 'react';
import { Link } from 'react-scroll'; // Import Link from react-scroll

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // State to control the mobile menu

  const toggleMenu = () => {
    setIsOpen(!isOpen); // Toggle the mobile menu visibility
  };

  return (
    <nav className="bg-blue-600 p-4 flex justify-between items-center">
      {/* Logo on the left */}
      <div className="text-white text-2xl font-bold">Magnus</div>

      {/* Centered Links for Medium Screens and Up */}
      <div className="hidden md:flex flex-grow justify-center space-x-4 pl-3 font-medium cursor-pointer">
        <Link to="events" smooth={true} duration={500} className="text-white hover:text-opacity-80">Events</Link>
        <Link to="about" smooth={true} duration={500} className="text-white hover:text-opacity-80">About</Link>
        <Link to="rules" smooth={true} duration={500} className="text-white hover:text-opacity-80">Rules & Regulations</Link>
        <Link to="members" smooth={true} duration={500} className="text-white hover:text-opacity-80">Members</Link>
      </div>

      {/* Hamburger Icon for Small Screens */}
      <div className="md:hidden flex items-center cursor-pointer">
        <button onClick={toggleMenu} className="text-white text-2xl">
          <i className={isOpen ? "fa-solid fa-times" : "fa-solid fa-bars"}></i>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="cursor-pointer font-medium md:hidden absolute top-16 left-0 w-full bg-blue-600 text-white p-4 flex flex-col items-center">
          <Link to="about" smooth={true} duration={500} className="py-2 hover:text-opacity-80">About</Link>
          <Link to="rules" smooth={true} duration={500} className="py-2 hover:text-opacity-80">Rules & Regulations</Link>
          <Link to="members" smooth={true} duration={500} className="py-2 hover:text-opacity-80">Members</Link>
          <div className="mt-4 flex space-x-4">
            <button className="bg-white text-blue-600 px-4 py-2 rounded-md hover:bg-blue-600 hover:text-white transition">
              Register
            </button>
          </div>
        </div>
      )}

      {/* Login and Register buttons for Medium Screens and Up */}
      <div className="hidden md:flex space-x-4">
        <button className="bg-white text-blue-600 px-4 py-2 rounded-md hover:bg-blue-600 hover:text-white transition">
          Register
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
