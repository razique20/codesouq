"use client";
import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";

const HeroSection = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if mobile
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    // Create subtle connection lines
    const canvas = document.querySelector(".connection-canvas");
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Adjust node count based on screen size
    const nodeCount = isMobile ? 8 : 15;

    // Nodes for connections
    const nodes = Array.from({ length: nodeCount }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: Math.random() * 0.2 - 0.1,
      vy: Math.random() * 0.2 - 0.1,
    }));

    const drawConnections = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Update node positions
      nodes.forEach((node) => {
        node.x += node.vx;
        node.y += node.vy;

        // Boundary check
        if (node.x < 0 || node.x > canvas.width) node.vx *= -1;
        if (node.y < 0 || node.y > canvas.height) node.vy *= -1;
      });

      // Draw connections
      ctx.lineWidth = 0.3;
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 250) {
            const opacity = 1 - distance / 250;
            ctx.strokeStyle = `rgba(139, 92, 246, ${opacity * 0.08})`;
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.stroke();
          }
        }
      }

      requestAnimationFrame(drawConnections);
    };

    drawConnections();

    return () => cancelAnimationFrame(drawConnections);
  }, [isMobile]);

  return (
    <>
      {/* <BackgroundLinesDemo/> */}
      <section className="relative w-full min-h-[75vh] md:min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#0a0315] via-[#120720] to-[#0a0315]">
        {/* Subtle connection lines canvas */}
        <canvas className="connection-canvas absolute inset-0 z-0 opacity-90" />

        {/* Subtle animated grid pattern - Reduced count on mobile */}
        <div className="absolute inset-0 z-0 opacity-[3]">
          {[...Array(isMobile ? 6 : 12)].map((_, idx) => (
            <motion.div
              key={idx}
              className="absolute w-[120px] h-[120px] md:w-[200px] md:h-[200px] border border-purple-700/10 rounded-full pointer-events-none"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                scale: [1, 1.05, 1],
                opacity: [0.02, 0.04, 0.02],
                rotate: [0, 2, 0],
              }}
              transition={{
                duration: 15 + Math.random() * 20,
                repeat: Infinity,
                ease: "easeInOut",
                delay: Math.random() * 5,
              }}
            />
          ))}
        </div>

        {/* Subtle moving dots pattern - Reduced count on mobile */}
        <div className="absolute inset-0 z-0 opacity-[2]">
          {[...Array(isMobile ? 20 : 40)].map((_, idx) => (
            <motion.div
              key={idx}
              className="absolute rounded-full bg-purple-500/20 pointer-events-none"
              style={{
                width: `${Math.random() * 4 + 2}px`,
                height: `${Math.random() * 4 + 2}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, Math.random() * 20 - 10],
                x: [0, Math.random() * 20 - 10],
              }}
              transition={{
                duration: Math.random() * 10 + 10,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut",
                delay: Math.random() * 5,
              }}
            />
          ))}
        </div>

        {/* Geometric grid with very subtle animation */}
        <motion.div
          className="absolute inset-0 z-0 opacity-[3]"
          animate={{
            backgroundPosition: ["0% 0%", "100% 100%"],
          }}
          transition={{
            duration: 60,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{
            backgroundImage: `
            linear-gradient(rgba(139, 92, 246, 0.2) 1px, transparent 1px),
            linear-gradient(90deg, rgba(139, 92, 246, 0.2) 1px, transparent 1px)
          `,
            backgroundSize: "40px 40px",
          }}
        />

        {/* Subtle pulsing glow - Reduced size on mobile */}
        <motion.div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[90vw] h-[90vh] md:w-[80vw] md:h-[80vh] max-w-4xl rounded-full bg-gradient-to-br from-purple-900/10 to-violet-900/10 blur-[80px] md:blur-[120px] z-0"
          animate={{
            opacity: [1, 15, 1],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Floating particles - Reduced count on mobile */}
        {[...Array(isMobile ? 8 : 12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-purple-500/10 pointer-events-none z-0"
            style={{
              width: `${Math.random() * 6 + 4}px`,
              height: `${Math.random() * 6 + 4}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              filter: "blur(0.5px)",
            }}
            animate={{
              y: [0, Math.random() * 40 - 20],
              x: [0, Math.random() * 40 - 20],
              opacity: [0, Math.random() * 0.1 + 0.05, 0],
            }}
            transition={{
              duration: Math.random() * 20 + 20,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
              delay: Math.random() * 5,
            }}
          />
        ))}

        {/* Content */}
        <div className="relative z-20 text-center px-4 py-12 md:py-16 w-full max-w-6xl">
          <motion.div
            className="relative inline-block mb-6 md:mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="absolute -inset-3 bg-purple-900 rounded-full blur-lg opacity-10 animate-pulse-slow"></div>
            {/* <div className="relative bg-gradient-to-r from-purple-900/40 to-violet-800/40 border border-purple-700/20 rounded-full px-4 py-2 md:px-6 md:py-3">
            <span className="text-purple-300 text-xs sm:text-sm md:text-base font-medium tracking-wider">
             Intelligence. Innovated.
            </span>
          </div> */}
          </motion.div>

          <motion.h1
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 md:mb-6 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.span
              className="block text-violet-200 font-light text-lg sm:text-xl md:text-2xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            ></motion.span>
            <motion.span
              className="relative inline-block mt-2 md:mt-4"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6, type: "spring", stiffness: 300 }}
            >
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-300 via-violet-200 to-purple-300">
                Algorithinn
              </span>
              {/* <motion.span 
              className="absolute -bottom-1 md:-bottom-2 left-0 w-full h-0.5 bg-gradient-to-r from-purple-500 to-violet-500 rounded-full"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.9, duration: 0.8 }}
            /> */}
            </motion.span>
          </motion.h1>

          <motion.p
            className="text-base md:text-lg text-purple-100/80 mb-8 md:mb-10 max-w-3xl mx-auto leading-relaxed px-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            Crafting algorithms for exponential business growth
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-3 md:gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
          >
            <motion.button
              className="relative group bg-gradient-to-r from-purple-800 to-violet-800 hover:from-purple-700 hover:to-violet-700 transition-all text-white font-medium py-2.5 px-6 md:py-3 md:px-8 rounded-lg shadow-lg shadow-purple-900/20 hover:shadow-purple-700/30 text-sm md:text-base"
              whileHover={{
                scale: 1.05,
                y: -3,
              }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="relative z-10 flex items-center gap-2">
                <span>Get Started</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-violet-600 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-0"></div>
            </motion.button>

            {/* <motion.button 
            className="relative group bg-transparent border border-purple-700/30 hover:border-purple-500/50 transition-all text-white font-medium py-2.5 px-6 md:py-3 md:px-8 rounded-lg text-sm md:text-base"
            whileHover={{ 
              scale: 1.05,
              backgroundColor: "rgba(126, 34, 206, 0.08)"
            }}
            whileTap={{ scale: 0.98 }}
          >
            <span className="relative z-10 flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
              </svg>
              <span>View Projects</span>
            </span>
          </motion.button> */}
          </motion.div>
        </div>

        {/* Decorative corners - Hidden on mobile */}
        <div className="hidden md:block absolute top-0 left-0 w-40 h-40 border-t-2 border-l-2 border-purple-700/10 z-10"></div>
        <div className="hidden md:block absolute bottom-0 right-0 w-40 h-40 border-b-2 border-r-2 border-purple-700/10 z-10"></div>
      </section>
    </>
  );
};

export default HeroSection;
