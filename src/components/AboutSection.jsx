import React from 'react';
import aboutImage from '../assets/ai3.jpg'; // Ensure you have the image in the assets folder

const AboutSection = () => {
  return (
    <section id="about" className="min-h-screen flex items-center justify-center bg-white px-4 py-16">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-center">
        
        {/* Left Side Content */}
        <div className="text-center md:text-left max-w-2xl p-5">
          <h2 className="text-3xl font-bold mb-6">About Us</h2>
          <p className="text-gray-600 mb-6">
            CodeSouq is a UAE-based software development company dedicated to crafting modern, scalable solutions for your business needs.
          </p>
          <p className="text-gray-600 mb-6">
            Our team is passionate about leveraging technology to help businesses stay ahead of the curve in a competitive digital world.
          </p>
          <p className="text-gray-600">
            Whether you're a startup or an enterprise, CodeSouq brings your ideas to life through innovative solutions.
          </p>
        </div>

        {/* Right Side Image */}
        <div className="mt-8 md:mt-0 md:w-1/3 flex justify-center relative">
          <div className="relative w-full h-full">
            <img 
              src={aboutImage} 
              alt="About CodeSouq" 
              className="w-full h-auto object-contain  shadow-lg"
            />
            <div className="absolute inset-0  rounded-xl"></div>
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default AboutSection;
