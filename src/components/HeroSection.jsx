import React from 'react';
import bgVideo from "../assets/bg-video.mp4"; // Make sure you have a video file inside assets

const HeroSection = () => {
  return (
    <section className="relative w-full h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src={bgVideo}
        autoPlay
        loop
        muted
        playsInline
      />

      {/* Overlay to make text readable */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/40"></div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4">
        <h2 className="text-5xl font-bold mb-6">
          Welcome to <span className="text-primary">Algorithinn</span>
        </h2>
        <p className="text-xl text-gray-200 mb-8">
          Code, Collaborate, Create—Empowering businesses through innovative digital solutions.
        </p>
        <button className="bg-secondary text-white py-3 px-8 rounded-lg hover:bg-fourth transition">
          Get Started
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
