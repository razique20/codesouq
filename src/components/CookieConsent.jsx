// src/components/CookieConsent.jsx
import React, { useState, useEffect } from "react";

const CookieConsent = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consentGiven = localStorage.getItem("cookiesAccepted");
    if (!consentGiven) {
      setVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookiesAccepted", "true");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-gray-900 text-white px-6 py-6 md:py-4 md:px-8 flex flex-col md:flex-row justify-between items-center gap-4 shadow-2xl z-50">
  <p className="text-sm text-white">
    We use cookies to ensure you get the best experience.{" "}
    <a href="/privacy-policy" className="underline text-purple-300" target="_blank" rel="noreferrer">
      Learn more
    </a>
  </p>
  <button
    onClick={handleAccept}
    className="bg-purple-700 hover:bg-purple-600 px-6 py-2 rounded-md text-white text-sm"
  >
    Accept
  </button>
</div>

  );
};

export default CookieConsent;
