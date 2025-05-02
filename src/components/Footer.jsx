import React from "react";
import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {/* Services Section */}
          <div>
            <h3 className="text-white font-bold mb-4">SERVICES</h3>
            <ul className="space-y-2">
              <li>Web Development</li>
              <li>Mobile Development</li>
              <li>Cloud Solutions</li>
              <li>Consulting</li>
            </ul>
          </div>

          {/* About Section */}
          <div>
            <h3 className="text-white font-bold mb-4">ABOUT</h3>
            <ul className="space-y-2">
              <li>Our Team</li>
              <a href="careers"><li>Careers</li></a>
              <a href="blog"><li>Blog</li></a>
              <a href="contact"><li>Contact Us</li></a>
            </ul>
          </div>

          {/* Legal Section */}
          <div>
            <h3 className="text-white font-bold mb-4">LEGAL</h3>
            <ul className="space-y-2">
              <li>
                <a href="/terms-of-policy" className="hover:text-white transition">Terms of Service</a>
              </li>
              <li>
                <a href="/privacy-policy" className="hover:text-white transition">Privacy Policy</a>
              </li>
              <li>
                <a href="/cookie-policy" className="hover:text-white transition">Cookie Policy</a>
              </li>
            </ul>
          </div>

          {/* Social Media Section */}
          <div>
            <h3 className="text-white font-bold mb-4">FOLLOW US</h3>
            <div className="flex space-x-4 mb-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <FaFacebook className="text-blue-600 text-2xl hover:scale-110 transition-transform" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <FaTwitter className="text-blue-400 text-2xl hover:scale-110 transition-transform" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <FaInstagram className="text-pink-600 text-2xl hover:scale-110 transition-transform" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <FaLinkedin className="text-blue-700 text-2xl hover:scale-110 transition-transform" />
              </a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                <FaGithub className="text-gray-300 text-2xl hover:scale-110 transition-transform" />
              </a>
            </div>
            <p className="text-gray-400 text-sm">
              Stay updated with our latest projects and resources.
            </p>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-700 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm">&copy; 2024 CodeSouq. All rights reserved.</p>
          <div className="mt-4 md:mt-0">
            <select
              className="bg-gray-800 text-gray-300 border border-gray-600 px-4 py-2 rounded"
              defaultValue="English"
            >
              <option>English</option>
              <option>Arabic</option>
            </select>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
