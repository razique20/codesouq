"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import Link from "next/link";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHomePage, setIsHomePage] = useState(true);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "unset";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [menuOpen]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
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
      className={`fixed top-0 w-full z-50 py-4 px-6 lg:px-8 transition-all duration-500 ${
        isScrolled || !isHomePage
          ? "bg-gray-900/98 backdrop-blur-xl shadow-2xl border-b border-purple-500/20"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo/Brand */}
        <div className="flex items-center">
          {/* Desktop: Show full name only */}
          <div className="hidden md:flex items-center">
            <h1 className="text-2xl lg:text-3xl font-bold bg-gradient-to-r from-purple-400 via-purple-300 to-indigo-300 bg-clip-text text-transparent tracking-wide">
              Algorithinn
            </h1>
          </div>

          {/* Mobile: Show only logo */}
          <div className="md:hidden w-10 h-10">
            <Link href="/">
             <Image
              src="/assets/logo.png"
              alt="Algorithinn Logo"
              width={40}
              height={40}
            />
            
            </Link>
           
          </div>
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden lg:flex lg:space-x-12">
          {["Home", "About", "Services", "Projects", "Contact"].map((item) => (
            <li key={item}>
              <a
                href={
                  item === "Home"
                    ? "/"
                    : item === "Contact"
                    ? "/contact"
                    : `/#${item.toLowerCase()}`
                }
                className="text-gray-200 hover:text-purple-300 transition-all duration-300 font-medium text-lg relative group py-2"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-indigo-400 transition-all duration-300 group-hover:w-full rounded-full"></span>
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          onClick={toggleMenu}
          className="lg:hidden relative w-12 h-12 bg-gray-800/80 backdrop-blur-sm rounded-xl border border-purple-400/30 flex items-center justify-center text-purple-300 hover:text-purple-200 hover:bg-purple-500/20 transition-all duration-300"
        >
          <div className="relative">
            <FaBars
              size={20}
              className={`transition-all duration-300 ${
                menuOpen ? "opacity-0 rotate-180" : "opacity-100 rotate-0"
              }`}
            />
            <FaTimes
              size={20}
              className={`absolute inset-0 transition-all duration-300 ${
                menuOpen ? "opacity-100 rotate-0" : "opacity-0 -rotate-180"
              }`}
            />
          </div>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-gray-900/95 backdrop-blur-xl z-50 transition-all duration-500 ${
          menuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full relative">
          {/* Close Button */}
          <button
            onClick={toggleMenu}
            className="absolute top-6 right-6 w-12 h-12 bg-gray-800/80 backdrop-blur-sm rounded-xl border border-purple-400/30 flex items-center justify-center text-purple-300 hover:text-purple-200 hover:bg-purple-500/20 transition-all duration-300 z-60"
          >
            <FaTimes size={20} />
          </button>

          {/* Mobile Menu Content */}
          <div className="relative z-10 text-center space-y-6">
            {/* Logo in mobile menu */}
            <div className="mb-10">
              <div className="w-20 h-20 mx-auto mb-4">
                <Image
                  src="/assets/logo.png"
                  alt="Algorithinn Logo"
                  width={70}
                  height={70}
                />
              </div>
              <h2 className="text-3xl font-bold bg-gradient-to-r from-purple-400 via-purple-300 to-indigo-300 bg-clip-text text-transparent">
                Algorithinn
              </h2>
            </div>

            <ul className="space-y-4">
              {["Home", "About", "Services", "Projects", "Contact"].map(
                (item, index) => (
                  <li key={item} className="overflow-hidden">
                    <a
                      href={
                        item === "Home"
                          ? "/"
                          : item === "Contact"
                          ? "/contact"
                          : `/#${item.toLowerCase()}`
                      }
                      onClick={toggleMenu}
                      className={`block text-xl font-medium text-gray-200 hover:text-purple-300 transition-all duration-300 py-3 px-6 rounded-xl ${
                        menuOpen
                          ? "animate-in slide-in-from-right-5 fade-in"
                          : ""
                      }`}
                      style={{
                        animationDelay: `${index * 100}ms`,
                        animationFillMode: "both",
                      }}
                    >
                      {item}
                    </a>
                  </li>
                )
              )}
            </ul>

            {/* Social Links */}
            <div className="mt-10 pt-6 border-t border-purple-500/20">
              <div className="flex justify-center space-x-4">
                {["📧", "💼", "🔗"].map((icon, i) => (
                  <div
                    key={i}
                    className="w-10 h-10 bg-gray-800/50 rounded-full flex items-center justify-center border border-purple-400/30 hover:bg-purple-500/20 transition-all duration-300 cursor-pointer"
                  >
                    <span className="text-purple-300">{icon}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="absolute bottom-8 text-center">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Algorithinn
            </p>
            <p className="text-purple-400/60 text-xs mt-1">
              Innovating Tomorrow
            </p>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
