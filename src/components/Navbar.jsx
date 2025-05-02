import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHomePage, setIsHomePage] = useState(true); // Track whether the page is the homepage

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // Check if we're on the homepage or other pages
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > window.innerHeight - 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    const checkCurrentPage = () => {
      if (window.location.pathname !== "/") {
        setIsHomePage(false);
      } else {
        setIsHomePage(true);
      }
    };

    // Initial check when the page loads
    checkCurrentPage();
    
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("popstate", checkCurrentPage); // Re-check page on navigation
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("popstate", checkCurrentPage);
    };
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 py-4 px-6 transition-all duration-300 ${
        isScrolled || !isHomePage ? "bg-white text-black shadow-md" : "bg-transparent text-gray-200"
      }`}
    >
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">CodeSouq</h1>

        {/* Hamburger Icon */}
        <div className="md:hidden flex items-center cursor-pointer" onClick={toggleMenu}>
          {menuOpen ? <FaTimes size={30} /> : <FaBars size={30} />}
        </div>

        {/* Navigation Links */}
        <ul
          className={`flex md:flex-row flex-col md:space-x-6 space-y-4 md:space-y-0 absolute md:relative md:top-0 top-16 right-0 ${
            isScrolled || !isHomePage ? "bg-white" : "bg-transparent"
          } md:bg-transparent md:flex md:justify-end p-4 md:p-0 w-full transition-all duration-300 ${
            menuOpen ? "block" : "hidden"
          }`}
        >
          <li>
            <a href="/" className="hover:text-blue-600" onClick={() => setMenuOpen(false)}>
              Home
            </a>
          </li>
          <li>
            <a href="/#about" className="hover:text-blue-600" onClick={() => setMenuOpen(false)}>
              About
            </a>
          </li>
          <li>
            <a href="/#services" className="hover:text-blue-600" onClick={() => setMenuOpen(false)}>
              Services
            </a>
          </li>
          <li>
            <a href="/project" className="hover:text-blue-600" onClick={() => setMenuOpen(false)}>
              Projects
            </a>
          </li>
          <li>
            <a href="/contact" className="hover:text-blue-600" onClick={() => setMenuOpen(false)}>
              Contact
            </a>
          </li>
        </ul>
      </div>

      {/* Full-width mobile menu overlay */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-gray-800 bg-opacity-40 md:hidden backdrop-blur-sm transition-all duration-300"
          onClick={toggleMenu}
        ></div>
      )}
    </nav>
  );
};

export default Navbar;
