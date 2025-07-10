import React, { useState } from "react";

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

    const formUrl = "https://formspree.io/f/mdkzqgnj";

    const payload = new FormData();
    payload.append("name", formData.name);
    payload.append("email", formData.email);
    payload.append("country", formData.country);
    payload.append("description", formData.description);
    formData.types.forEach((type) => payload.append("types", type));

    try {
      const res = await fetch(formUrl, {
        method: "POST",
        body: payload,
        headers: {
          Accept: "application/json",
        },
      });

      if (res.ok) {
        setIsSuccess(true);
        setFormData({
          name: "",
          email: "",
          country: "",
          types: [],
          description: "",
        });
      } else {
        alert("Submission failed. Please try again.");
      }
    } catch (err) {
      console.error("Formspree error:", err);
      alert("Something went wrong.");
    }
  };

  return (
    <>
      {isSuccess && (
        <div className="max-w-2xl mx-auto bg-green-100 text-green-800 p-4 rounded-xl mb-4 text-center">
          ✅ Thank you! We received your project request.
        </div>
      )}

      <form
        onSubmit={handleSubmit}
        className="max-w-4xl mx-auto bg-white p-6 rounded-l space-y-6 mb-10"
      >
        <h2 className="text-2xl font-bold text-center">
          Tell Us About Your Project
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            name="name"
            value={formData.name}
            onChange={handleChange}
            type="text"
            placeholder="Your Name"
            className="border p-3 rounded-xl w-full"
            required
          />
          <input
            name="email"
            value={formData.email}
            onChange={handleChange}
            type="email"
            placeholder="Your Email"
            className="border p-3 rounded-xl w-full"
            required
          />
          <select
            name="country"
            value={formData.country}
            onChange={handleChange}
            className="border p-3 rounded-xl w-full col-span-1 md:col-span-2"
            required
          >
            <option value="">Select Country</option>
            {countries.map((country, idx) => (
              <option key={idx} value={country}>
                {country}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="font-medium block mb-2">Type of Project</label>
          <div className="flex flex-wrap gap-4">
            {projectTypes.map((type) => (
              <label key={type} className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  name="types"
                  value={type}
                  checked={formData.types.includes(type)}
                  onChange={handleChange}
                />
                <span>{type}</span>
              </label>
            ))}
          </div>
        </div>

        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          placeholder="Briefly describe your project (optional)"
          className="border p-3 rounded-xl w-full h-28"
        />

        <button
          type="submit"
          className="w-full bg-primary text-white py-3 rounded-xl hover:bg-second transition"
        >
          Submit Project
        </button>
      </form>
    </>
  );
};

export default ProjectForm;
