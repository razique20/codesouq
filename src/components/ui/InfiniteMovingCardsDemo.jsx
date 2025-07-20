"use client";

import React from "react";
import { InfiniteMovingCards } from "../ui/infinite-moving-cards";

export function InfiniteMovingCardsDemo() {
  return (
    <div className="h-[15rem] rounded-md flex flex-col antialiased bg-transparent dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
      />
    </div>
  );
}

const testimonials = [
  {
    quote:
      "Artificial Intelligence is not just the future — it's the present evolving faster than we think.",
    name: "AlgorithInn R&D",
    title: "Innovation Lab",
  },
  {
    quote:
      "When algorithms understand intent, technology becomes indistinguishable from intelligence.",
    name: "AlgorithInn Team.",
    title: "Founder, AlgorithInn",
  },
  {
    quote: "Code is poetry. AI is rhythm. Together, they compose the future.",
    name: "AlgorithInn Team",
    title: "Creative AI Division",
  },
  {
    quote:
      "We don't just build systems — we architect intelligent experiences.",
    name: "AlgorithInn",
    title: "AI Solutions",
  },
  {
    quote:
      "Every algorithm we craft brings ideas closer to reality, and intelligence closer to humanity.",
    name: "AlgorithInn",
    title: "R&D Department",
  },
];
