import { Route, Routes } from "react-router-dom";
import AboutSection from "./components/AboutSection";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import ServicesSection from "./components/ServicesSection";
import WhatsAppIcon from "./components/WhatsAppIcon";
import ContactPage from "./pages/ContactPage";
import OngoingProjects from "./pages/OngoingProjects"; // Import the OngoingProjects component

const App = () => {
  return (
    <div className="bg-gray-50 min-h-screen text-gray-900">
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <HeroSection />
              <AboutSection />
              <ServicesSection />
              <WhatsAppIcon />
              {/* <ContactPage /> */}
            </>
          }
        />
        <Route path="/project" element={<OngoingProjects />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
