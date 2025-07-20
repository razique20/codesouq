"use client";

import { motion } from "motion/react";
import { cn } from "../../app/lib/utils";

export const BackgroundLines = ({ children, className, svgOptions = {} }) => {
  return (
    <section
      className={cn(
        "relative overflow-hidden h-[20rem] md:h-screen w-full bg-white dark:bg-black",
        className
      )}
    >
      <SVG svgOptions={svgOptions} />
      <div className="relative z-10">{children}</div>
    </section>
  );
};

const SVG = ({ svgOptions }) => {
  const defaultPaths = [
    "M0 100 Q720 200 1440 100", // Wave
    "M0 200 Q720 100 1440 200",
    "M0 300 Q720 200 1440 300",
    "M0 400 Q720 300 1440 400"
  ];

  const paths = svgOptions.paths && svgOptions.paths.length > 0 ? svgOptions.paths : defaultPaths;

  return (
    <svg
      viewBox="0 0 1440 900"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="absolute inset-0 w-full h-full z-0"
    >
      {paths.map((d, i) => (
        <motion.path
          key={i}
          d={d}
          stroke="currentColor"
          strokeWidth="1.5"
          className="text-neutral-300 dark:text-neutral-700"
          initial={{ strokeDashoffset: 800, strokeDasharray: "50 800", opacity: 0 }}
          animate={{
            strokeDashoffset: 0,
            strokeDasharray: "20 800",
            opacity: [0, 1, 1, 0],
          }}
          transition={{
            duration: 5,
            ease: "easeInOut",
            repeat: Infinity,
          }}
        />
      ))}
    </svg>
  );
};
