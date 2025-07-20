import React from "react";
import { BackgroundLines } from "./background-lines";

export function BackgroundLinesDemo() {
  return (
    <BackgroundLines className="flex items-center justify-center w-full flex-col px-4">
      <h2 className="bg-clip-text text-transparent text-center bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-neutral-600 dark:to-white text-2xl md:text-4xl lg:text-7xl font-sans py-2 md:py-10 relative z-20 font-bold tracking-tight">
        AlgorithInn,
        <br /> Where ideas meet intelligence.
      </h2>
      <p className="max-w-xl mx-auto text-sm md:text-lg text-neutral-700 dark:text-neutral-400 text-center">
       Empowering innovation through cutting-edge software solutions and AI-driven creativity to transform your vision into reality.
      </p>
    </BackgroundLines>
  );
}
