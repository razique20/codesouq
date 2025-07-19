"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const projects = [
  {
    name: "DeiraEscapes",
    description:
      "AI-based platform for tour packages and suggestions. Using machine learning algorithms, it provides personalized recommendations for tourists based on their preferences and location.",
    image: "/assets/deiraescapes.jpeg",
  },
  {
    name: "Estaite",
    description:
      "Bed rental to real estate platform in UAE. Connecting landlords and tenants with seamless property management and flexible rental options.",
    image: "/assets/estaite.png",
  },
  {
    name: "Homewise",
    description:
      "Package-based platform for automation and security in UAE and Qatar. Offering smart home solutions, security systems, and energy-efficient devices tailored to regional needs.",
    image: "/assets/homewise.png",
  },
];

const OngoingProjects = () => {
  return (
    <section
      id="ongoing-projects"
      className="relative py-20 px-6 min-h-screen overflow-hidden"
      style={{
        background:
          "radial-gradient(ellipse at top, #0f0a1d, #060311), radial-gradient(ellipse at bottom, #1a0d36, #060311)",
      }}
    >
      {/* Decorative blur circles */}
      <div className="absolute top-10 left-10 w-64 h-64 rounded-full bg-purple-500/10 blur-[100px]"></div>
      <div className="absolute bottom-10 right-20 w-72 h-72 rounded-full bg-indigo-500/10 blur-[120px]"></div>

      <div className="container mx-auto max-w-6xl relative z-10">
        {/* Header */}
        <motion.header
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Ongoing{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-purple-500">
              Projects
            </span>
          </h2>
          <p className="max-w-2xl mx-auto text-gray-300 text-lg">
            Our innovative platforms currently under development and coming soon.
          </p>
          <div className="mt-6 flex justify-center">
            <div className="h-1 w-20 bg-gradient-to-r from-violet-500 to-purple-600 rounded-full"></div>
          </div>
        </motion.header>

        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map(({ name, description, image }, index) => (
            <motion.div
              key={name}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              whileHover={{ y: -10 }}
              className="group rounded-2xl border border-violet-900/50 bg-gradient-to-b from-purple-900/30 to-violet-900/20 shadow-xl shadow-violet-900/20 backdrop-blur-sm cursor-pointer overflow-hidden flex flex-col"
            >
              <div className="relative h-52 w-full">
                <Image
                  src={image}
                  alt={name}
                  fill
                  className="object-cover rounded-t-2xl"
                  priority={index === 0}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent rounded-t-2xl" />
                <span className="absolute top-4 left-4 bg-purple-600/80 text-white text-xs px-3 py-1 rounded-full font-semibold tracking-wide">
                  Coming Soon
                </span>
              </div>

              <div className="p-6 flex flex-col flex-grow justify-between">
                <h3 className="text-white text-2xl font-semibold mb-3">{name}</h3>
                <p className="text-gray-300 text-sm leading-relaxed">{description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OngoingProjects;
