import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
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
              <li>Careers</li>
              <li>Blog</li>
              <li>Contact Us</li>
            </ul>
          </div>

          {/* Legal Section */}
          <div>
            <h3 className="text-white font-bold mb-4">LEGAL</h3>
            <ul className="space-y-2">
              <li>Terms of Service</li>
              <li>Privacy Policy</li>
              <li>Cookie Policy</li>
            </ul>
          </div>

          {/* Social Media Section */}
          <div>
            <h3 className="text-white font-bold mb-4">FOLLOW US</h3>
            <div className="flex space-x-4 mb-4">
              <FaFacebook className="text-blue-600 text-xl" />
              <FaTwitter className="text-blue-400 text-xl" />
              <FaInstagram className="text-pink-600 text-xl" />
              <FaLinkedin className="text-blue-700 text-xl" />
              <FaGithub className="text-gray-300 text-xl" />
            </div>
            <p className="text-gray-400 text-sm">
              Stay updated with our latest projects and resources.
            </p>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-4 flex flex-col md:flex-row justify-between items-center">
          <p>&copy; 2024 CodeSouq. All rights reserved.</p>
          <div>
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
