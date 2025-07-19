"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

const AboutSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById("about");
      if (section) {
        const rect = section.getBoundingClientRect();
        setIsVisible(rect.top < window.innerHeight - 100);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      id="about"
      className="relative min-h-screen flex items-center justify-center px-4 py-16 md:py-24 overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-[10%] left-[5%] w-64 h-64 bg-purple-900/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-[15%] right-[10%] w-80 h-80 bg-indigo-900/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/4 w-32 h-32 bg-cyan-700/10 rounded-full blur-2xl animate-pulse"></div>
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Image with modern frame */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="w-full lg:w-2/5 flex justify-center"
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-tr from-purple-600/20 to-cyan-500/20 rounded-2xl rotate-3 blur-md"></div>
              <div className="relative overflow-hidden rounded-2xl border border-white/10 shadow-2xl">
                <Image
                  src="/assets/a23.png"
                  alt="About Algorithinn"
                  width={500}
                  height={500}
                  className="object-cover w-full h-auto"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
              </div>
            </div>
          </motion.div>

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
            className="w-full lg:w-3/5"
          >
            <div className="bg-gradient-to-br from-gray-900/70 to-gray-900/50 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-12 shadow-2xl shadow-purple-900/10">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-500"></div>
                <span className="text-cyan-400 font-medium tracking-wider">
                  ABOUT US
                </span>
              </div>

              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 bg-gradient-to-r from-cyan-300 via-purple-300 to-cyan-300 bg-clip-text text-transparent">
                Pioneering Digital Solutions from the UAE
              </h2>

              <div className="space-y-6">
                <p className="text-gray-300 text-lg leading-relaxed">
                  <span className="text-cyan-400 font-medium">Algorithinn</span>{" "}
                  is a UAE-based software development powerhouse dedicated to
                  crafting modern, scalable solutions that propel businesses
                  forward in the digital landscape.
                </p>

                <p className="text-gray-300 text-lg leading-relaxed">
                  Our passionate team combines cutting-edge technology with
                  innovative thinking to help you stay ahead of the curve in
                  today's competitive digital world.
                </p>

                <p className="text-gray-300 text-lg leading-relaxed">
                  Whether you're a startup with a bold vision or an enterprise
                  seeking transformation, we bring your ideas to life through
                  elegant, future-proof solutions.
                </p>
              </div>

              {/* Stats Grid */}
              {/* <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-10">
                {[
                  { value: "5+", label: "Years Experience" },
                  { value: "100+", label: "Projects" },
                  { value: "30+", label: "Clients" },
                  { value: "15+", label: "Experts" }
                ].map((stat, index) => (
                  <div key={index} className="text-center p-4 bg-gray-800/30 rounded-xl border border-white/5">
                    <div className="text-2xl md:text-3xl font-bold text-cyan-400 mb-2">{stat.value}</div>
                    <div className="text-sm text-gray-400">{stat.label}</div>
                  </div>
                ))}
              </div> */}

              {/* Tech Stack */}
              <div className="mt-10">
                <h3 className="text-lg font-semibold text-gray-300 mb-4">
                  Our Technology Expertise
                </h3>
                <div className="flex flex-wrap gap-3">
                  {[
                    "React",
                    "Next.js",
                    "Node.js",
                    "TypeScript",
                    "JavaScript",
                    "AWS",
                    "Docker",
                    "MongoDB",
                    "GraphQL",
                    "Langchain",
                    "ChromaDB",
                  ].map((tech, index) => (
                    <span
                      key={index}
                      className="px-4 py-2 bg-gray-800/40 text-cyan-300 rounded-full text-sm border border-cyan-500/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
