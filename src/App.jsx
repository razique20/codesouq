import { Route, Routes } from "react-router-dom";
import AboutSection from "./components/AboutSection";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import ServicesSection from "./components/ServicesSection";
import WhatsAppIcon from "./components/WhatsAppIcon";
import CareerPage from "./pages/CareerPage";
import ContactPage from "./pages/ContactPage";
import CookiePolicy from "./pages/CookiePolicy";
import OngoingProjects from "./pages/OngoingProjects"; // Import the OngoingProjects component
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfPolicy from "./pages/TermsOfPolicy";
import BlogPage from "./pages/BlogPage";
import ProjectForm from "./components/ProjectForm";

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
              <ProjectForm/>
              <WhatsAppIcon />
              {/* <ContactPage /> */}
            </>
          }
        />
        <Route path="/project" element={<OngoingProjects />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/termsofpolicy" element={<TermsOfPolicy />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/cookie-policy" element={<CookiePolicy />} />
        <Route path="/careers" element={<CareerPage />} />
        <Route path="/blog" element={<BlogPage />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
