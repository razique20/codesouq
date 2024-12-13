import React from 'react';
import aboutImage from '../assets/logo.jpg'; // Ensure you have the image in the assets folder

const AboutSection = () => {
  return (
    <section id="about" className="py-16 px-4 bg-white min-h-screen">
      <div className="container mx-auto flex justify-center items-center flex-col md:flex-row">
        {/* Left Side Content */}
        <div className="text-center md:text-left max-w-2xl mx-auto md:mx-0 p-5">
          <h2 className="text-3xl font-bold mb-6">About Us</h2>
          <p className="text-gray-600 mb-6">
            CodeSouq is a UAE-based software development company dedicated to crafting modern, scalable solutions for your business needs.
          </p>
          <p className="text-gray-600 mb-6">
            Our team is passionate about leveraging technology to help businesses stay ahead of the curve in a competitive digital world. With years of experience in web and mobile development, cloud solutions, and more, we are committed to delivering quality-driven results that make a difference.
          </p>
          <p className="text-gray-600">
            Whether you're a startup looking for a digital presence or an established enterprise needing sophisticated software solutions, CodeSouq has the expertise to bring your ideas to life. Our goal is to help you succeed by providing innovative solutions that drive your business forward.
          </p>
        </div>

        {/* Right Side Image */}
        <div className="mt-8 md:mt-0 md:w-1/3">
          <img src={aboutImage} alt="About CodeSouq" className="w-full h-auto object-contain" />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
