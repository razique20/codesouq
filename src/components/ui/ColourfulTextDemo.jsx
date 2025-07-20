"use client";
import { ColourfulText } from "./colourful-text.jsx";
import { motion } from "motion/react";
import React from "react";

export function ColourfulTextDemo() {
  return (
    <div className="h-screen w-full flex items-center justify-center relative overflow-hidden bg-black">
      <motion.img
        src="https://assets.aceternity.com/linear-demo.webp"
        className="h-full w-full object-cover absolute inset-0 [mask-image:radial-gradient(circle,transparent,black_80%)] pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ duration: 1 }}
      />
      <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-center text-white relative z-2 font-sans">
        Where <ColourfulText text="AI" /> meets <br /> <ColourfulText text="Algorithms" />
      </h1>
    </div>
  );
}
