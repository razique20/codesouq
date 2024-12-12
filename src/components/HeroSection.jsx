import React from 'react';
import bg from "../assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section
      className="bg-cover bg-center text-center py-40"
      style={{ backgroundImage: `url(${bg})` }} // Fix the backgroundImage URL
    >
      <h2 className="text-5xl font-bold mb-6 text-white">Welcome to <span className='text-black font-bold'>CodeSouq</span></h2>
      <p className="text-xl text-gray-800 mb-6">
        Code, Collaborate, Create—Empowering businesses through innovative digital solutions.
      </p>
      <p className="text-lg text-gray-300 mb-6 max-w-3xl mx-auto">
        At CodeSouq, we provide comprehensive software development services that include web, mobile, cloud, and more.
        Whether you are a startup or an enterprise, we tailor our solutions to meet your unique business needs, ensuring scalable and sustainable growth.
      </p>
      <button className="bg-blue-600 text-white py-3 px-6 rounded hover:bg-blue-700">
        Get Started
      </button>
    </section>
  );
};

export default HeroSection;
