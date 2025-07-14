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
    <section id="contact" className="py-20 px-4 bg-gray-100">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6">Contact Us</h2>
        <p className="text-lg text-gray-600 mb-6">
          We’d love to hear from you! Please fill out the form below or reach
          us through the contact details provided.
        </p>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-semibold mb-4">Send Us a Message</h3>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div className="mb-4">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your Email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div className="mb-4">
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your Message"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  rows="6"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-blue-600 text-white py-3 px-6 rounded hover:bg-blue-700"
              >
                Send Message
              </button>
              {formSubmitted && (
                <div className="mt-4 text-green-600">
                  <p>Thank you for your message! We will get back to you soon.</p>
                </div>
              )}
            </form>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-4">Contact Information</h3>
            <p className="text-lg text-gray-600 mb-4">
              You can also reach us through the following methods:
            </p>
            <ul className="space-y-4 text-lg text-gray-700 text-left">
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
