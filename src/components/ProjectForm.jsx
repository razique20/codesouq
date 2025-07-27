"use client";

import { motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import { TextHoverEffectDemo } from "./ui/TextHoverEffectDemo";

const countries = [
  "United Arab Emirates",
  "India",
  "USA",
  "UK",
  "Germany",
  "Other",
];
const projectTypes = [
  "Web App",
  "Mobile App",
  "E-commerce",
  "Maintenance",
  "Others",
];

const ProjectForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    country: "",
    types: [],
    description: "",
  });
  const [isSuccess, setIsSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const successRef = useRef(null);

  useEffect(() => {
    if (isSuccess) {
      const timer = setTimeout(() => setIsSuccess(false), 4000);
      return () => clearTimeout(timer);
    }
  }, [isSuccess]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox") {
      setFormData((prev) => ({
        ...prev,
        types: checked
          ? [...prev.types, value]
          : prev.types.filter((t) => t !== value),
      }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Build the payload
    const payload = new FormData();
    payload.append("name", formData.name);
    payload.append("email", formData.email);
    payload.append("country", formData.country);
    payload.append("description", formData.description);
    formData.types.forEach((type) => payload.append("types[]", type));

    try {
      const res = await fetch("https://formspree.io/f/mdkzqgnj", {
        method: "POST",
        body: payload,
        headers: {
          Accept: "application/json",
        },
      });

      const result = await res.json();
      if (res.ok) {
        setIsSuccess(true);
        setFormData({
          name: "",
          email: "",
          country: "",
          types: [],
          description: "",
        });
        successRef.current?.scrollIntoView({ behavior: "smooth" });
      } else {
        alert(result?.message || "Submission failed. Please try again.");
      }
    } catch (error) {
      console.error("Form submission error:", error);
      alert("Something went wrong.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-4 md:px-12 py-16 items-center">
      {/* Text Hover Component */}
      <div className="sm:flex justify-center hidden">
        <TextHoverEffectDemo />
      </div>

      {/* Form Section */}
      <div className="relative w-full max-w-2xl mx-auto">
        {isSuccess && (
          <motion.div
            ref={successRef}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-emerald-900/70 border border-emerald-500/50 text-emerald-100 p-5 mb-6 text-center"
          >
            <div className="flex items-center justify-center gap-3">
              <div className="bg-emerald-500 p-2 rounded-full">
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold">Success!</h3>
                <p>We've received your project request.</p>
              </div>
            </div>
          </motion.div>
        )}

        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="backdrop-blur-lg p-8 relative overflow-hidden"
        >
          <div className="absolute -top-32 -right-32 w-64 h-64 blur-3xl -z-10" />
          <div className="absolute -bottom-32 -left-32 w-64 h-64 blur-3xl -z-10" />

          <h2 className="text-center text-3xl font-bold text-transparent bg-gradient-to-r from-purple-400 via-indigo-300 to-cyan-300 bg-clip-text mb-6">
            Tell Us About Your Project
          </h2>
          <p className="text-center text-gray-400 mb-8 max-w-xl mx-auto">
            Share details about your vision and we'll help bring it to life
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-6">
            <input
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              className="bg-gray-800/60 border border-gray-700 rounded-lg py-3 px-4 text-white placeholder:text-gray-500 focus:ring-2 focus:ring-indigo-500/50"
              required
            />
            <input
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              type="email"
              className="bg-gray-800/60 border border-gray-700 rounded-lg py-3 px-4 text-white placeholder:text-gray-500 focus:ring-2 focus:ring-indigo-500/50"
              required
            />
            <select
              name="country"
              value={formData.country}
              onChange={handleChange}
              className="md:col-span-2 bg-gray-800/60 border border-gray-700 rounded-lg py-3 px-4 text-white focus:ring-2 focus:ring-indigo-500/50"
              required
            >
              <option value="" disabled>
                Select your country
              </option>
              {countries.map((country) => (
                <option key={country} value={country}>
                  {country}
                </option>
              ))}
            </select>
          </div>

          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Type of Project
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
              {projectTypes.map((type) => (
                <label
                  key={type}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg cursor-pointer transition-all ${
                    formData.types.includes(type)
                      ? "bg-indigo-700/30 border border-indigo-500"
                      : "bg-gray-800/60 border border-gray-700 hover:border-gray-600"
                  }`}
                >
                  <input
                    type="checkbox"
                    name="types[]"
                    value={type}
                    checked={formData.types.includes(type)}
                    onChange={handleChange}
                    className="sr-only"
                  />
                  <span className="text-white text-sm">{type}</span>
                </label>
              ))}
            </div>
          </div>

          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Briefly describe your project goals..."
            className="w-full bg-gray-800/60 border border-gray-700 rounded-lg py-3 px-4 text-white placeholder:text-gray-500 focus:ring-2 focus:ring-indigo-500/50 min-h-[120px] mb-6"
          />

          <button
            type="submit"
            disabled={isSubmitting}
            className={`w-full py-3 rounded-lg font-medium flex items-center justify-center gap-2 transition-all ${
              isSubmitting
                ? "bg-indigo-800 cursor-not-allowed"
                : "bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 shadow-md"
            } text-white`}
          >
            {isSubmitting ? (
              <>
                <svg
                  className="animate-spin h-5 w-5"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  />
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                  />
                </svg>
                Processing...
              </>
            ) : (
              <>
                Submit Project
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" />
                </svg>
              </>
            )}
          </button>
        </motion.form>
      </div>
    </div>
  );
};

export default ProjectForm;
