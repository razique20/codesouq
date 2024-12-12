import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-white opacity-90 py-4 px-6 fixed w-full z-10 top-0">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold text-black">CodeSouq</h1>
        <ul className="flex space-x-6">
          <li><a href="#" className="text-black hover:text-blue-600">Home</a></li>
          <li><a href="#about" className="text-black hover:text-blue-600">About</a></li>
          <li><a href="#services" className="text-black hover:text-blue-600">Services</a></li>
          <li><a href="#contact" className="text-black hover:text-blue-600">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
