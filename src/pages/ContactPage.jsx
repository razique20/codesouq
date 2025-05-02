import { useState } from "react";
const ContactPage = () => {
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
    // Simulate form submission
    setFormSubmitted(true);
    console.log("Form Submitted", formData);
    // You can implement actual API calls here, like sending data to your server
  };

  return (
    <section id="contact" className="py-20 px-4 bg-gray-100">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6">Contact Us</h2>
        <p className="text-lg text-gray-600 mb-6">
          We had love to hear from you! Please fill out the form below or reach
          us through the contact details provided.
        </p>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
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
                  <p>
                    Thank you for your message! We will get back to you soon.
                  </p>
                </div>
              )}
            </form>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-2xl font-semibold mb-4">Contact Information</h3>
            <p className="text-lg text-gray-600 mb-4">
              You can also reach us through the following methods:
            </p>
            <ul className="space-y-4 text-lg text-gray-700">
              <li>
                <strong>Email:</strong> info@codesouq.com
              </li>
              <li>
                <strong>Phone:</strong> +971 0504220329
              </li>
              <li>
                <strong>Address:</strong> Dubai, UAE
              </li>
            </ul>

            {/* Optional: Add Google Map */}
            {/* <div className="mt-8">
              <h3 className="text-2xl font-semibold mb-4">Our Location</h3>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d237695.872378332!2d55.2333333!3d25.276987!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f5b87e81da2df%3A0xd350d34a4e3f344!2sDubai%20Silicon%20Oasis%2C%20Dubai%2C%20UAE!5e0!3m2!1sen!2sus!4v1606207037104!5m2!1sen!2sus"
                width="100%"
                height="300"
                frameBorder="0"
                style={{ border: 0 }}
                allowFullScreen=""
                aria-hidden="false"
                tabIndex="0"
              ></iframe>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
