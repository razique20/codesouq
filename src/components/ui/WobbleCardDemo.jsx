"use client";

import React from "react";
import { WobbleCard } from "../ui/wobble-card";

export function WobbleCardDemo() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-6xl my-4 mx-auto w-full">
      <WobbleCard
        containerClassName="col-span-1 lg:col-span-2 h-full bg-purple-800 min-h-[500px] lg:min-h-[300px]"
        className=""
      >
        <div className="max-w-xs">
          <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
            AI and Algorithms That Power Tomorrow
          </h2>
          <p className="mt-4 text-left text-base/6 text-neutral-200">
            At AlgorithInn, we build intelligent systems designed to accelerate innovation, automate processes, and transform ideas into reality.
          </p>
        </div>
        <img
          src="/assets/ai2.jpg"
          width={500}
          height={500}
          alt="ai technology demo image"
          className="absolute -right-4 lg:-right-[40%] grayscale filter -bottom-10 object-contain rounded-2xl"
        />
      </WobbleCard>

      <WobbleCard containerClassName="col-span-1 min-h-[300px] bg-gray-900">
        <h2 className="max-w-80 text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
          Build Smarter, Scale Faster
        </h2>
        <p className="mt-4 max-w-[26rem] text-left text-base/6 text-neutral-200">
          Our AI-driven solutions help startups and enterprises alike unlock new levels of efficiency and creativity.
        </p>
      </WobbleCard>

      <WobbleCard
        containerClassName="col-span-1 lg:col-span-3 bg-blue-900 min-h-[500px] lg:min-h-[600px] xl:min-h-[300px]"
      >
        <div className="max-w-sm">
          <h2 className="max-w-sm md:max-w-lg text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
            Ready to experience next-gen AI? Start building with AlgorithInn today.
          </h2>
          <p className="mt-4 max-w-[26rem] text-left text-base/6 text-neutral-200">
            From intelligent chatbots to predictive systems, our platform is the launchpad for the AI-first future.
          </p>
        </div>
        <img
          src="/assets/ai3.jpg"
          width={500}
          height={500}
          alt="ai app mockup"
          className="absolute -right-10 md:-right-[40%] lg:-right-[20%] -bottom-10 object-contain rounded-2xl"
        />
      </WobbleCard>
    </div>
  );
}
