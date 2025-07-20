"use client";

import { motion } from "motion/react";
import Link from "next/link";

export function HeroSectionOne() {
  return (
    <div className="relative mx-auto my-10 flex max-w-7xl flex-col items-center justify-center min-h-screen px-4">
      <div className="py-10 md:py-20 w-full">
        <h1 className="relative z-10 mx-auto max-w-4xl text-center text-2xl sm:text-2xl md:text-4xl lg:text-7xl font-bold text-slate-300 leading-snug sm:leading-tight md:leading-snug">
          {"AlgorithInn Where ideas meet intelligence"
            .split(" ")
            .map((word, index) => {
              const isBrand = word.trim().includes("AlgorithInn");

              return (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, filter: "blur(4px)", y: 10 }}
                  animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
                  transition={{
                    duration: 0.3,
                    delay: index * 0.1,
                    ease: "easeInOut",
                  }}
                  className={`mr-2 inline-block ${
                    isBrand
                      ? "bg-gradient-to-r text-6xl  text-transparent bg-clip-text from-violet-200 to-purple-600"
                      : ""
                  }`}
                >
                  {word}
                </motion.span>
              );
            })}
        </h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.8 }}
          className="relative z-10 mx-auto max-w-xl py-4 text-center text-base sm:text-lg font-normal text-neutral-400 px-2 sm:px-0"
        >
          Empowering innovation through cutting-edge software solutions and
          AI-driven creativity to transform your vision into reality.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: 1 }}
          className="relative z-10 mt-6 sm:mt-8 flex flex-col sm:flex-row flex-wrap items-center justify-center gap-4"
        >
          <Link href="/services">
            <button className="w-full sm:w-60 transform rounded-lg border px-6 py-3 text-sm sm:text-base font-medium transition-all duration-300 hover:-translate-y-0.5 border-gray-700 bg-black text-white hover:bg-gray-900">
              Explore Now
            </button>
          </Link>

          <Link href="/contact">
            <button className="w-full sm:w-60 transform rounded-lg border px-6 py-3 text-sm sm:text-base font-medium transition-all duration-300 hover:-translate-y-0.5 border-gray-700 bg-black text-white hover:bg-gray-900">
              Contact Support
            </button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
