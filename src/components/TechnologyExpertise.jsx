"use client";

import React from "react";

const technologies = [
  // Frontend
  "React",
  "Next.js",
  "Angular",
  "Tailwind CSS",
  "TypeScript",
  "JavaScript",

  // Backend
  "Node.js",
  "Express.js",
  "Django",
  "Flask",

  // DevOps & Tools
  "Docker",
  "Git",
  "Vercel",
  "Netlify",

  // AI & Automation
  "n8n",
  "Langchain",
  "OpenAI",
  "Chatbots",
  "Pinecone",

  // CMS
  "WordPress",
  "Shopify",

  // Databases
  "MongoDB",
  "SQL",
  "PostgreSQL",
  "Firebase",
];

const TechnologyExpertise = () => {
  return (
    <div className="max-w-4xl mx-auto mb-10 mt-12 p-6 md:p-8 bg-gray-900/70 backdrop-blur-lg border border-indigo-900/50 rounded-2xl shadow-2xl shadow-indigo-950/50 relative overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute -top-32 -right-32 w-64 h-64 bg-indigo-700/20 rounded-full blur-3xl -z-10" />
      <div className="absolute -bottom-32 -left-32 w-64 h-64 bg-purple-700/20 rounded-full blur-3xl -z-10" />

      <div className="relative z-10 text-center mb-8">
        <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-purple-400 via-indigo-300 to-cyan-300 bg-clip-text text-transparent">
          Our Technology Expertise
        </h2>
        <p className="mt-2 text-gray-400 max-w-md mx-auto">
          A wide stack of modern tools and technologies we specialize in
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-3 relative z-10">
        {technologies.map((tech, index) => (
          <span
            key={index}
            className="px-4 py-2 bg-gray-800/50 text-cyan-300 rounded-full text-sm border border-cyan-500/20 hover:bg-cyan-800/20 hover:text-cyan-100 transition-all cursor-default"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
};

export default TechnologyExpertise;
