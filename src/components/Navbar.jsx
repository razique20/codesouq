import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHomePage, setIsHomePage] = useState(true);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > window.innerHeight - 100);
    };

    const checkCurrentPage = () => {
      setIsHomePage(window.location.pathname === "/");
    };

    checkCurrentPage();
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("popstate", checkCurrentPage);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("popstate", checkCurrentPage);
    };
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 py-4 px-6 transition-all duration-300 ${
        isScrolled || !isHomePage
          ? "bg-white text-black shadow-md"
          : "bg-transparent text-gray-200"
      }`}
    >
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">Algorithinn</h1>

        {/* Hamburger Icon */}
        <div
          className="md:hidden flex items-center cursor-pointer"
          onClick={toggleMenu}
        >
          <FaBars size={30} />
        </div>

        {/* Desktop Nav */}
        <ul className="hidden md:flex md:space-x-6">
          <li><a href="/" className="hover:text-blue-600">Home</a></li>
          <li><a href="/#about" className="hover:text-blue-600">About</a></li>
          <li><a href="/#services" className="hover:text-blue-600">Services</a></li>
          <li><a href="/project" className="hover:text-blue-600">Projects</a></li>
          <li><a href="/contact" className="hover:text-blue-600">Contact</a></li>
        </ul>
      </div>

      {/* Mobile Menu Overlay */}
      {menuOpen && (
        <div className="fixed inset-0 bg-white text-black z-50 flex flex-col items-center justify-center transition-all duration-300">
          {/* Close Button */}
          <button
            onClick={toggleMenu}
            className="absolute top-4 right-4 text-3xl"
          >
            <FaTimes />
          </button>

          <ul className="flex flex-col space-y-6 text-2xl text-center">
            <li>
              <a href="/" onClick={toggleMenu} className="hover:text-blue-600">Home</a>
            </li>
            <li>
              <a href="/#about" onClick={toggleMenu} className="hover:text-blue-600">About</a>
            </li>
            <li>
              <a href="/#services" onClick={toggleMenu} className="hover:text-blue-600">Services</a>
            </li>
            <li>
              <a href="/project" onClick={toggleMenu} className="hover:text-blue-600">Projects</a>
            </li>
            <li>
              <a href="/contact" onClick={toggleMenu} className="hover:text-blue-600">Contact</a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
