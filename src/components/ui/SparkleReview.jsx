"use client";
import Link from "next/link";
import React from "react";
import { SparklesCore } from "./HeroSparkle";

export function SparklesPreview() {
  return (
    <div className="relative min-h-screen w-full bg-black flex flex-col items-center justify-center overflow-hidden rounded-md px-4">
      {/* Subheading */}

      {/* Title */}
      <h1 className="text-5xl md:text-7xl lg:text-9xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-white via-violet-400 to-violet-900 z-20 drop-shadow-md">
        Algorithinn
      </h1>
      <p className="text-center text-md  md:text-xl text-white/80 mb-4 z-20">
        Crafting algorithms for{" "}
        <span className="text-violet-400">exponential business growth</span>
      </p>

      <Link href="/pricing">
        <button className="p-[3px] relative">
          <div className="absolute inset-0 bg-gradient-to-r from-violet-500 to-violet-500 rounded-lg" />
          <div className="px-8 py-2  bg-black rounded-[6px]  relative group transition duration-200 text-white hover:bg-transparent">
            Explore Plans
          </div>
        </button>
      </Link>

      {/* Sparkle Area */}
      <div className="relative w-full max-w-3xl h-40 mt-6">
        {/* Gradient lines */}
        <div className="absolute inset-x-20 top-0 h-[2px] w-3/4 bg-gradient-to-r from-transparent via-indigo-500 to-transparent blur-sm" />
        <div className="absolute inset-x-20 top-0 h-px w-3/4 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
        <div className="absolute inset-x-60 top-0 h-[5px] w-1/4 bg-gradient-to-r from-transparent via-sky-500 to-transparent blur-sm" />
        <div className="absolute inset-x-60 top-0 h-px w-1/4 bg-gradient-to-r from-transparent via-sky-500 to-transparent" />

        {/* Sparkles */}
        <SparklesCore
          background="transparent"
          minSize={0.4}
          maxSize={1}
          particleDensity={1200}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />

        {/* Radial Mask */}
        <div className="absolute inset-0 w-full h-full bg-black [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]" />
      </div>
    </div>
  );
}
