"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export function HeroSectionOne() {
  return (
    <div className="relative mx-auto flex max-w-7xl flex-col items-center justify-center min-h-screen px-4 bg-black overflow-hidden">
      {/* Animated background with higher opacity */}
      <motion.div 
        className="absolute inset-0 z-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.7 }}
        transition={{ duration: 1.5 }}
        style={{
          background: `radial-gradient(ellipse at center, rgba(76, 29, 149, 0.5) 0%, rgba(0,0,0,0) 80%)`,
        }}
      />
      
      {/* Enhanced grid pattern with higher opacity */}
      <div className="absolute inset-0 z-0 grid grid-cols-10 grid-rows-10">
        {Array.from({ length: 100 }).map((_, i) => (
          <motion.div
            key={i}
            className="border border-purple-900/50"
            initial={{ opacity: 0.2 }}
            animate={{ 
              opacity: [0.2, 0.5, 0.2],
              borderColor: ["#4c1d95", "#8b5cf6", "#4c1d95"]
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              delay: Math.random() * 2,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>
      
      {/* Floating particles with higher opacity */}
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-purple-500/50 z-0"
          initial={{ 
            opacity: 0,
            scale: 0,
          }}
          animate={{ 
            opacity: [0, 0.8, 0],
            scale: [0, Math.random() * 0.8 + 0.5, 0],
          }}
          transition={{
            duration: Math.random() * 8 + 6,
            repeat: Infinity,
            delay: Math.random() * 3,
            ease: "easeOut"
          }}
          style={{
            width: `${Math.random() * 15 + 5}px`,
            height: `${Math.random() * 15 + 5}px`,
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
        />
      ))}
      
      {/* Animated connecting lines */}
      {[...Array(12)].map((_, i) => (
        <motion.div
          key={`line-${i}`}
          className="absolute top-1/2 left-1/2 h-0.5 bg-gradient-to-r from-transparent via-purple-500/60 to-transparent"
          initial={{ 
            width: 0,
            opacity: 0,
            rotate: i * 30,
            x: "-50%",
            y: "-50%"
          }}
          animate={{ 
            width: ["0vw", "100vw", "0vw"],
            opacity: [0, 0.8, 0]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            delay: i * 0.2,
            ease: "easeInOut"
          }}
        />
      ))}

      <div className="relative z-10 py-10 md:py-20 w-full">
        <motion.h1 
          className="mx-auto max-w-4xl text-center text-3xl sm:text-4xl md:text-5xl lg:text-8xl font-bold text-slate-200 leading-snug sm:leading-tight md:leading-snug"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {"Algorithinn".split(" ").map((word, index) => {
            const isBrand = word.trim().includes("AlgorithInn");

            return (
              <motion.span
                key={index}
                initial={{ opacity: 0, filter: "blur(4px)", y: 10 }}
                animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.15,
                  ease: "easeInOut",
                }}
                className={`mr-2 inline-block ${
                  isBrand
                    ? "bg-gradient-to-r text-7xl text-transparent bg-clip-text from-violet-300 to-purple-500"
                    : ""
                }`}
                whileHover={isBrand ? { 
                  scale: 1.05, 
                  textShadow: "0 0 25px rgba(167, 139, 250, 0.9)" 
                } : {}}
              >
                {word}
              </motion.span>
            );
          })}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.9 }}
          className="mx-auto max-w-xl py-6 text-center text-lg sm:text-xl font-normal text-neutral-300 px-2 sm:px-0"
        >
          Crafting algorithms for exponential business growth
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.1 }}
          className="mt-8 sm:mt-10 flex flex-col sm:flex-row flex-wrap items-center justify-center gap-6"
        >
          <Link href="/services">
            <motion.button 
              className="relative w-full sm:w-64 rounded-xl px-8 py-4 text-base sm:text-lg font-medium text-white overflow-hidden"
              whileHover={{ 
                y: -5,
                scale: 1.05
              }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.3 }}
            >
              <span className="relative z-10">Explore Solutions</span>
              <motion.div 
                className="absolute inset-0 bg-gradient-to-r from-purple-700 to-violet-600 z-0"
                initial={{ opacity: 1 }}
                whileHover={{ opacity: 0.95 }}
              />
              <motion.div 
                className="absolute inset-0 bg-gradient-to-r from-purple-400/80 to-violet-300/80 z-0"
                animate={{ 
                  x: [-100, 100],
                  opacity: [0, 0.8, 0]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: Math.random() * 2
                }}
              />
            </motion.button>
          </Link>

          <Link href="/contact">
            <motion.button 
              className="relative w-full sm:w-64 rounded-xl px-8 py-4 text-base sm:text-lg font-medium text-white overflow-hidden"
              whileHover={{ 
                y: -5,
                scale: 1.05
              }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.3 }}
            >
              <span className="relative z-10">Contact Our Team</span>
              <motion.div 
                className="absolute inset-0 bg-gradient-to-r from-violet-700 to-purple-600 z-0"
                initial={{ opacity: 1 }}
                whileHover={{ opacity: 0.95 }}
              />
              <motion.div 
                className="absolute inset-0 bg-gradient-to-r from-violet-400/80 to-purple-300/80 z-0"
                animate={{ 
                  x: [100, -100],
                  opacity: [0, 0.8, 0]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: Math.random() * 2
                }}
              />
            </motion.button>
          </Link>
        </motion.div>
      </div>
      
      {/* Floating animated elements */}
      <motion.div 
        className="absolute bottom-20 left-10 w-8 h-8 rounded-full bg-purple-500/60 blur-sm"
        animate={{ 
          y: [0, -20, 0],
          opacity: [0.6, 1, 0.6]
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div 
        className="absolute top-20 right-10 w-12 h-12 rounded-lg bg-violet-600/60 blur-sm"
        animate={{ 
          y: [0, 15, 0],
          rotate: [0, 10, 0]
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div 
        className="absolute top-1/3 left-1/4 w-6 h-6 rounded-full bg-purple-400/70 blur-sm"
        animate={{ 
          x: [0, 30, 0],
          y: [0, -30, 0]
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
    </div>
  );
}