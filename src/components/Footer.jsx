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
    <footer className="bg-black text-gray-300 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {/* Services Section */}
          <div>
            <h3 className="text-white font-bold mb-4">SERVICES</h3>
            <ul className="space-y-2">
              <li><span>Web Development</span></li>
              <li><span>Mobile Development</span></li>
              <li><span>Cloud Solutions</span></li>
              <li><span>Consulting</span></li>
            </ul>
          </div>

          {/* About Section */}
          <div>
            <h3 className="text-white font-bold mb-4">ABOUT</h3>
            <ul className="space-y-2">
              <li><Link href="/our-team" className="hover:text-white transition">Our Team</Link></li>
              <li><Link href="/careers" className="hover:text-white transition">Careers</Link></li>
              <li><Link href="/blog" className="hover:text-white transition">Blog</Link></li>
              <li><Link href="/contact" className="hover:text-white transition">Contact Us</Link></li>
            </ul>
          </div>

          {/* Legal Section */}
          <div>
            <h3 className="text-white font-bold mb-4">LEGAL</h3>
            <ul className="space-y-2">
              <li><Link href="/termsofpolicy" className="hover:text-white transition">Terms of Service</Link></li>
              <li><Link href="/privacypolicy" className="hover:text-white transition">Privacy Policy</Link></li>
              <li><Link href="/cookie" className="hover:text-white transition">Cookie Policy</Link></li>
            </ul>
          </div>

          {/* Social Media Section */}
          <div>
            <h3 className="text-white font-bold mb-4">FOLLOW US</h3>
            <div className="flex space-x-4 mb-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <FaFacebook className="text-blue-600 text-2xl hover:scale-110 transition-transform" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                <FaTwitter className="text-blue-400 text-2xl hover:scale-110 transition-transform" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <FaInstagram className="text-pink-600 text-2xl hover:scale-110 transition-transform" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <FaLinkedin className="text-blue-700 text-2xl hover:scale-110 transition-transform" />
              </a>
              {/* <a
                href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
              >
                <FaWhatsapp className="text-green-700 text-2xl hover:scale-110 transition-transform" />
              </a> */}
            </div>
            <p className="text-gray-400 text-sm">
              Stay updated with our latest projects and resources.
            </p>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-700 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm">&copy; {currentYear} Algorithinn. All rights reserved.</p>
          <div className="mt-4 md:mt-0">
            <select
              aria-label="Select language"
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
