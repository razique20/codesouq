import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa'; // Import hamburger and close icons

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false); // State to control menu visibility

  const toggleMenu = () => {
    setMenuOpen(!menuOpen); // Toggle menu visibility
  };

  return (
    <nav className="bg-white opacity-90 py-4 px-6 fixed w-full z-10 top-0">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold text-black">CodeSouq</h1>

        {/* Hamburger Icon */}
        <div className="md:hidden flex items-center" onClick={toggleMenu}>
          {menuOpen ? <FaTimes size={30} /> : <FaBars size={30} />}
        </div>

        {/* Navigation Links */}
        <ul
          className={`flex md:flex-row flex-col md:space-x-6 space-y-4 md:space-y-0 absolute md:relative md:top-0 top-16 right-0 bg-white md:bg-transparent md:flex md:justify-end p-4 md:p-0 w-full transition-all duration-300 ${
            menuOpen ? 'block' : 'hidden'
          }`}
        >
          <li><a href="#" className="text-black hover:text-blue-600">Home</a></li>
          <li><a href="#about" className="text-black hover:text-blue-600">About</a></li>
          <li><a href="#services" className="text-black hover:text-blue-600">Services</a></li>
          <li><a href="#contact" className="text-black hover:text-blue-600">Contact</a></li>
        </ul>
      </div>

      {/* Full-width mobile menu */}
      <div
        className={`fixed inset-0 bg-gray-800 bg-opacity-75 md:hidden transition-all duration-300 ${
          menuOpen ? 'block' : 'hidden'
        }`}
        onClick={toggleMenu} // Close the menu when clicking outside
      ></div>
    </nav>
  );
};

export default Navbar;
