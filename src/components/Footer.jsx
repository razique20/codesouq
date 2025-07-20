"use client";
import React from "react";
import Link from "next/link";
import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaWhatsapp,
} from "react-icons/fa";

const Footer = () => {
  const phoneNumber = "+971504220329";
  const message = "Hello, I need help with my project!";
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-950 text-gray-300 pt-16 pb-10 px-4 sm:px-10 lg:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10">

        {/* Brand + Description */}
        <div className="lg:col-span-2">
          <h2 className="text-2xl font-bold text-white mb-3">Algorithinn</h2>
          <p className="text-sm text-gray-400 mb-6">
            Empowering businesses with AI-driven solutions, algorithms, and
            digital innovation. Build smarter, faster, and scalable tech with us.
          </p>

          {/* Newsletter */}
          <form className="flex flex-col sm:flex-row items-center gap-3">
            <input
              type="email"
              placeholder="Your email address"
              className="px-4 py-2 rounded-md w-full sm:w-auto flex-1 bg-gray-800 border border-gray-700 text-sm placeholder-gray-400 focus:outline-none"
            />
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 px-5 py-2 text-sm font-semibold rounded-md text-white transition"
            >
              Subscribe
            </button>
          </form>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-white font-semibold mb-4 text-lg">Services</h3>
          <ul className="space-y-2 text-sm text-gray-400">
            <li>Web Development</li>
            <li>Mobile Development</li>
            <li>Cloud Solutions</li>
            <li>AI Consulting</li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h3 className="text-white font-semibold mb-4 text-lg">Company</h3>
          <ul className="space-y-2 text-sm text-gray-400">
            <li><Link href="/our-team" className="hover:text-white">Our Team</Link></li>
            <li><Link href="/careers" className="hover:text-white">Careers</Link></li>
            <li><Link href="/blog" className="hover:text-white">Blog</Link></li>
            <li><Link href="/contact" className="hover:text-white">Contact Us</Link></li>
          </ul>
        </div>

        {/* Legal */}
        <div>
          <h3 className="text-white font-semibold mb-4 text-lg">Legal</h3>
          <ul className="space-y-2 text-sm text-gray-400">
            <li><Link href="/termsofpolicy" className="hover:text-white">Terms of Service</Link></li>
            <li><Link href="/privacypolicy" className="hover:text-white">Privacy Policy</Link></li>
            <li><Link href="/cookie" className="hover:text-white">Cookie Policy</Link></li>
          </ul>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-800 mt-12 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Social Icons */}
        <div className="flex space-x-4">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
            <FaFacebook className="text-blue-500 hover:scale-110 transition-transform text-xl" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
            <FaTwitter className="text-blue-400 hover:scale-110 transition-transform text-xl" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <FaInstagram className="text-pink-600 hover:scale-110 transition-transform text-xl" />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <FaLinkedin className="text-blue-700 hover:scale-110 transition-transform text-xl" />
          </a>
          <a href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
            <FaWhatsapp className="text-green-600 hover:scale-110 transition-transform text-xl" />
          </a>
        </div>

        {/* Language Switcher */}
        <div>
          <select
            aria-label="Select language"
            className="bg-gray-800 text-sm text-gray-300 border border-gray-700 px-3 py-2 rounded-md"
            defaultValue="English"
          >
            <option>English</option>
            <option>Arabic</option>
          </select>
        </div>

        {/* Copyright */}
        <p className="text-xs text-gray-500 mt-2 md:mt-0">&copy; {currentYear} Algorithinn. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
