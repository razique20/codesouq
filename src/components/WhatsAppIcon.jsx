import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

const WhatsAppIcon = () => {
  // Replace with your own WhatsApp phone number (with country code)
  const phoneNumber = "+971504220329"; // Your WhatsApp phone number here
  const message = "Hello, I need help with my project!"; // Optional prefilled message

  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 right-5 bg-green-500 text-white p-3 rounded-full shadow-lg hover:bg-green-600 transition duration-300"
      style={{ zIndex: 1000 }}
    >
      <FaWhatsapp size={30} />
    </a>
  );
};

export default WhatsAppIcon;
