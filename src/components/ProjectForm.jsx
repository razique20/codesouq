// src/components/ProjectForm.jsx
"use client";

import React, { useEffect, useRef, useState } from "react";

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
      const timer = setTimeout(() => {
        setIsSuccess(false);
      }, 4000);
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

    // Simulate form submission with a delay
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSuccess(true);
    setIsSubmitting(false);
    setFormData({
      name: "",
      email: "",
      country: "",
      types: [],
      description: "",
    });

    // Scroll to success message
    if (successRef.current) {
      successRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-4">
      {isSuccess && (
        <div
          ref={successRef}
          className="max-w-2xl mx-auto bg-emerald-900/70 backdrop-blur-sm border border-emerald-500/50 rounded-xl mb-6 p-5 text-center animate-fade-in"
        >
          <div className="flex items-center justify-center gap-3">
            <div className="bg-emerald-500 p-1.5 rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
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
              <h3 className="text-xl font-bold text-emerald-100">Success!</h3>
              <p className="text-emerald-200">
                We've received your project request.
              </p>
            </div>
          </div>
        </div>
      )}

      <form
        onSubmit={handleSubmit}
        className="bg-gray-900/70 backdrop-blur-lg border border-indigo-900/50 rounded-2xl p-6 md:p-8 shadow-2xl shadow-indigo-950/50 relative overflow-hidden"
      >
        {/* Decorative elements */}
        <div className="absolute -top-32 -right-32 w-64 h-64 bg-indigo-700/20 rounded-full blur-3xl -z-10"></div>
        <div className="absolute -bottom-32 -left-32 w-64 h-64 bg-purple-700/20 rounded-full blur-3xl -z-10"></div>

        <div className="relative z-10">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-purple-400 via-indigo-300 to-cyan-300 bg-clip-text text-transparent">
              Tell Us About Your Project
            </h2>
            <p className="mt-2 text-gray-400 max-w-md mx-auto">
              Share details about your vision and we'll help bring it to life
            </p>
          </div>

          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Your Name
                </label>
                <input
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  type="text"
                  placeholder="John Doe"
                  className="w-full bg-gray-800/60 border border-gray-700 rounded-xl py-3 px-4 text-gray-200 placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500 transition-all"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Your Email
                </label>
                <input
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  type="email"
                  placeholder="john@example.com"
                  className="w-full bg-gray-800/60 border border-gray-700 rounded-xl py-3 px-4 text-gray-200 placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500 transition-all"
                  required
                />
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Country
                </label>
                <select
                  name="country"
                  value={formData.country}
                  onChange={handleChange}
                  className="w-full bg-gray-800/60 border border-gray-700 rounded-xl py-3 px-4 text-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500 transition-all"
                  required
                >
                  <option value="" disabled className="text-gray-500">
                    Select your country
                  </option>
                  {countries.map((country, idx) => (
                    <option
                      key={idx}
                      value={country}
                      className="text-gray-200 bg-gray-800"
                    >
                      {country}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-3">
                Type of Project
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
                {projectTypes.map((type) => (
                  <label
                    key={type}
                    className={`flex items-center gap-2 px-4 py-2.5 rounded-xl cursor-pointer transition-all ${
                      formData.types.includes(type)
                        ? "bg-indigo-900/60 border border-indigo-700"
                        : "bg-gray-800/60 border border-gray-700 hover:border-gray-600"
                    }`}
                  >
                    <input
                      type="checkbox"
                      name="types"
                      value={type}
                      checked={formData.types.includes(type)}
                      onChange={handleChange}
                      className="sr-only"
                    />
                    <div
                      className={`w-5 h-5 rounded flex items-center justify-center ${
                        formData.types.includes(type)
                          ? "bg-indigo-500"
                          : "bg-gray-700 border border-gray-600"
                      }`}
                    >
                      {formData.types.includes(type) && (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-3.5 w-3.5 text-white"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      )}
                    </div>
                    <span className="text-gray-300 text-sm">{type}</span>
                  </label>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Project Description
              </label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                placeholder="Briefly describe your project goals, requirements, and timeline..."
                className="w-full bg-gray-800/60 border border-gray-700 rounded-xl py-3 px-4 text-gray-200 placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500 transition-all min-h-[120px]"
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full py-3.5 px-6 rounded-xl font-medium text-white transition-all flex items-center justify-center gap-2 ${
                isSubmitting
                  ? "bg-indigo-800 cursor-not-allowed"
                  : "bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 shadow-lg shadow-indigo-900/30"
              }`}
            >
              {isSubmitting ? (
                <>
                  <svg
                    className="animate-spin -ml-1 mr-2 h-5 w-5 text-white"
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
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  Processing...
                </>
              ) : (
                <>
                  Submit Project
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </>
              )}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ProjectForm;
