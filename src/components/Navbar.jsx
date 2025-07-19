"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { RxCross2, RxHamburgerMenu } from "react-icons/rx";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "unset";
  }, [menuOpen]);

  const navItems = ["About", "Services", "Projects", "Contact"];

  return (
    <>
      {/* Navbar */}
      <nav
        className={`fixed top-0 w-full z-50 py-4 px-6 lg:px-8 transition-all duration-500 ${
          isScrolled
            ? "bg-gray-900/95 backdrop-blur-xl shadow-2xl border-b border-purple-500/20"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <Link href="/" aria-label="Home">
            {/* Mobile: show logo image */}
            <img
              src="/assets/logo.png"
              alt="Algorithinn Logo"
              className="h-8 w-auto md:hidden"
            />
            {/* Desktop: show text */}
            <span className="text-transparent  font-bold bg-clip-text bg-gradient-to-r from-white via-violet-200 to-purple-300">
              Algorithinn
            </span>
          </Link>

          {/* Desktop nav items */}
          <ul className="hidden md:flex space-x-10 text-white font-medium text-md">
            {navItems.map((item) => (
              <li key={item}>
                <Link
                  href={item === "Projects" ? "/projects" : `/#${item.toLowerCase()}`}
                  className="hover:text-purple-400 transition-colors"
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>

          {/* Mobile menu toggle */}
          <button
            className="md:hidden text-white text-3xl"
            onClick={() => setMenuOpen(true)}
            aria-label="Open menu"
          >
            <RxHamburgerMenu />
          </button>
        </div>
      </nav>

      {/* Mobile Overlay Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="mobileMenu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-gradient-to-br from-[#0f051d] via-purple-900 to-black/90 backdrop-blur-md text-white px-8 py-16"
          >
            <div className="flex justify-between items-center mb-16">
              <Link href="/" onClick={() => setMenuOpen(false)}>
                <img
                  src="/assets/logo.png"
                  alt="Algorithinn Logo"
                  className="h-10 w-auto"
                />
              </Link>
              <button
                onClick={() => setMenuOpen(false)}
                className="text-white text-3xl"
                aria-label="Close menu"
              >
                <RxCross2 />
              </button>
            </div>

            <ul className="space-y-8 text-center text-2xl font-semibold">
              {navItems.map((item) => (
                <motion.li
                  key={item}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.1 * navItems.indexOf(item) }}
                >
                  <Link
                   href={item === "Projects" ? "/projects" : `/#${item.toLowerCase()}`}
                    onClick={() => setMenuOpen(false)}
                    className="hover:text-purple-400 transition-colors"
                  >
                    {item}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
