"use client";
import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
    console.log("Form Submitted", formData);
  };

  return (
    <section
      id="contact"
      className="py-20 px-4 bg-gradient-to-br from-gray-950 via-gray-900 to-black overflow-hidden"
    >
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Decorative blobs */}
        <div className="absolute -top-32 -right-32 w-64 h-64 bg-indigo-700/20 rounded-full blur-3xl -z-10" />
        <div className="absolute -bottom-32 -left-32 w-64 h-64 bg-purple-700/20 rounded-full blur-3xl -z-10" />

        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-400 via-indigo-300 to-cyan-300 bg-clip-text text-transparent">
            Contact Us
          </h2>
          <p className="mt-2 text-gray-400 max-w-2xl mx-auto">
            We’d love to hear from you! Fill out the form or reach us through the info below.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Contact Form */}
          <div className="bg-gray-900/70 backdrop-blur-lg border border-indigo-900/50 rounded-2xl p-6 md:p-8 shadow-2xl shadow-indigo-950/50">
            <h3 className="text-xl font-semibold text-cyan-100 mb-6">
              Send Us a Message
            </h3>
            <form onSubmit={handleSubmit} className="space-y-5">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                className="w-full bg-gray-800/60 border border-gray-700 rounded-xl py-3 px-4 text-gray-200 placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500 transition-all"
                required
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email"
                className="w-full bg-gray-800/60 border border-gray-700 rounded-xl py-3 px-4 text-gray-200 placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500 transition-all"
                required
              />
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message"
                rows="6"
                className="w-full bg-gray-800/60 border border-gray-700 rounded-xl py-3 px-4 text-gray-200 placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500 transition-all"
                required
              ></textarea>

              <button
                type="submit"
                className="w-full py-3.5 px-6 rounded-xl font-medium text-white bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 shadow-lg shadow-indigo-900/30 transition-all"
              >
                Send Message
              </button>

              {formSubmitted && (
                <div className="mt-4 text-emerald-400 text-center">
                  Thank you! We’ll get back to you shortly.
                </div>
              )}
            </form>
          </div>

          {/* Contact Info */}
          <div className="bg-gray-900/70 backdrop-blur-lg border border-indigo-900/50 rounded-2xl p-6 md:p-8 shadow-2xl shadow-indigo-950/50">
            <h3 className="text-xl font-semibold text-cyan-100 mb-4">
              Contact Information
            </h3>
            <p className="text-gray-400 mb-6">
              You can also reach us through the following:
            </p>
            <ul className="space-y-4 text-gray-300 text-base">
              <li>
                <strong>Email:</strong> algorithinn@gmail.com
              </li>
              <li>
                <strong>Phone:</strong> +971 0504220329
              </li>
              <li>
                <strong>Address:</strong> Dubai, UAE
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
