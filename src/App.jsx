import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ServicesSection from './components/ServicesSection';
import WhatsAppIcon from './components/WhatsAppIcon';
const App = () => {
  return (
    <div className="bg-gray-50 min-h-screen text-gray-900">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <WhatsAppIcon />
      <Footer />
    </div>
  );
};

export default App;