import React from 'react';
import { FaLaptopCode, FaMobileAlt, FaCloud, FaShoppingCart, FaBullhorn, FaPalette } from 'react-icons/fa';

const ServicesSection = () => {
  return (
    <section id="services" className="py-16 px-4 bg-gray-50 min-h-screen">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">Our Services</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="p-6 bg-white rounded shadow hover:shadow-lg">
            <FaLaptopCode size={40} className="mx-auto mb-4 text-blue-600" />
            <h3 className="text-xl font-bold mb-2">Web Development</h3>
            <p className="text-gray-600">Modern and scalable web solutions tailored for your business.</p>
          </div>
          <div className="p-6 bg-white rounded shadow hover:shadow-lg">
            <FaMobileAlt size={40} className="mx-auto mb-4 text-blue-600" />
            <h3 className="text-xl font-bold mb-2">Mobile Development</h3>
            <p className="text-gray-600">Cutting-edge mobile apps for iOS and Android platforms.</p>
          </div>
          <div className="p-6 bg-white rounded shadow hover:shadow-lg">
            <FaCloud size={40} className="mx-auto mb-4 text-blue-600" />
            <h3 className="text-xl font-bold mb-2">Cloud Solutions</h3>
            <p className="text-gray-600">Robust cloud solutions for seamless scalability and growth.</p>
          </div>
          <div className="p-6 bg-white rounded shadow hover:shadow-lg">
            <FaShoppingCart size={40} className="mx-auto mb-4 text-blue-600" />
            <h3 className="text-xl font-bold mb-2">E-commerce Development</h3>
            <p className="text-gray-600">Build scalable and user-friendly online stores with robust features and security.</p>
          </div>
          <div className="p-6 bg-white rounded shadow hover:shadow-lg">
            <FaBullhorn size={40} className="mx-auto mb-4 text-blue-600" />
            <h3 className="text-xl font-bold mb-2">Digital Marketing</h3>
            <p className="text-gray-600">Boost your online presence with effective SEO, social media, and content strategies.</p>
          </div>
          {/* UI/UX Design Service */}
          <div className="p-6 bg-white rounded shadow hover:shadow-lg">
            <FaPalette size={40} className="mx-auto mb-4 text-blue-600" />
            <h3 className="text-xl font-bold mb-2">UI/UX Design</h3>
            <p className="text-gray-600">Create intuitive and visually stunning designs for an exceptional user experience.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
