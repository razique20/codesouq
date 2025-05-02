import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHomePage, setIsHomePage] = useState(true);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

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
        <h1 className="text-2xl font-bold">CodeSouq</h1>

        {/* Hamburger Icon */}
        <div
          className="md:hidden flex items-center cursor-pointer"
          onClick={toggleMenu}
        >
          {menuOpen ? <FaTimes size={30} /> : <FaBars size={30} />}
        </div>

        {/* Navigation Links */}
        <ul
          className={`flex md:flex-row flex-col md:space-x-6 space-y-4 md:space-y-0 absolute md:relative md:top-0 top-16 right-0
            ${
              menuOpen
                ? "bg-white text-black shadow-lg w-full left-0"
                : isScrolled || !isHomePage
                ? "bg-white text-black"
                : "bg-transparent text-gray-200"
            }
            md:bg-transparent md:text-inherit md:flex md:justify-end p-4 md:p-0 transition-all duration-300 ${
              menuOpen ? "block" : "hidden"
            }`}
        >
          <li>
            <a
              href="/"
              className="hover:text-blue-600"
              onClick={() => setMenuOpen(false)}
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="/#about"
              className="hover:text-blue-600"
              onClick={() => setMenuOpen(false)}
            >
              About
            </a>
          </li>
          <li>
            <a
              href="/#services"
              className="hover:text-blue-600"
              onClick={() => setMenuOpen(false)}
            >
              Services
            </a>
          </li>
          <li>
            <a
              href="/project"
              className="hover:text-blue-600"
              onClick={() => setMenuOpen(false)}
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="/contact"
              className="hover:text-blue-600"
              onClick={() => setMenuOpen(false)}
            >
              Contact
            </a>
          </li>
        </ul>
      </div>

      {/* Full-screen overlay for mobile */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 md:hidden transition-all duration-300"
          onClick={toggleMenu}
        ></div>
      )}
    </nav>
  );
};

export default Navbar;
