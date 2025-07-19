"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  FaLaptopCode,
  FaMobileAlt,
  FaCloud,
  FaShoppingCart,
  FaBullhorn,
  FaPalette,
} from "react-icons/fa";

const ServicesSection = () => {
  const services = [
    {
      icon: FaLaptopCode,
      title: "Web Development",
      desc: "Modern and scalable web solutions tailored for your business.",
    },
    {
      icon: FaMobileAlt,
      title: "Mobile Development",
      desc: "Cutting-edge mobile apps for iOS and Android platforms.",
    },
    {
      icon: FaCloud,
      title: "Cloud Solutions",
      desc: "Robust cloud solutions for seamless scalability and growth.",
    },
    {
      icon: FaShoppingCart,
      title: "E-commerce Development",
      desc: "Build scalable and user-friendly online stores with robust features and security.",
    },
    {
      icon: FaBullhorn,
      title: "Digital Marketing",
      desc: "Boost your online presence with effective SEO, social media, and content strategies.",
    },
    {
      icon: FaPalette,
      title: "UI/UX Design",
      desc: "Create intuitive and visually stunning designs for an exceptional user experience.",
    }
  ];

  return (
    <section 
      id="services" 
      className="py-20 px-4 min-h-screen relative overflow-hidden"
      style={{
        background: 'radial-gradient(ellipse at top, #0f0a1d, #060311), radial-gradient(ellipse at bottom, #1a0d36, #060311)'
      }}
    >
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-violet-900/20 to-transparent"></div>
      <div className="absolute top-20 right-20 w-64 h-64 rounded-full bg-purple-500/10 blur-[100px]"></div>
      <div className="absolute bottom-20 left-20 w-64 h-64 rounded-full bg-indigo-500/10 blur-[100px]"></div>
      
      <div className="container mx-auto max-w-6xl relative z-10">
        <motion.header 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-4xl font-bold mb-4 text-white">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-purple-500">Services</span>
          </h2>
          <p className="max-w-2xl mx-auto text-gray-300 text-lg">
            Comprehensive digital solutions designed to transform your business
          </p>
          <div className="mt-6 flex justify-center">
            <div className="h-1 w-20 bg-gradient-to-r from-violet-500 to-purple-600 rounded-full"></div>
          </div>
        </motion.header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map(({ icon: Icon, title, desc }, index) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group"
            >
              <div className="h-full p-8 rounded-2xl backdrop-blur-sm border border-violet-900/50 bg-gradient-to-b from-purple-900/30 to-violet-900/20 shadow-xl shadow-violet-900/20 group-hover:shadow-violet-900/40 transition-all duration-300">
                <div className="w-16 h-16 mb-6 rounded-xl bg-gradient-to-br from-violet-600 to-purple-700 flex items-center justify-center shadow-lg">
                  <Icon className="text-white text-2xl" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-white">{title}</h3>
                <p className="text-gray-300 mb-6">{desc}</p>
                <button className="text-sm font-medium px-5 py-2.5 rounded-lg bg-transparent border border-violet-700 text-white group-hover:bg-gradient-to-r group-hover:from-violet-600 group-hover:to-purple-700 group-hover:border-transparent transition-all">
                  Learn more
                  <span className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;