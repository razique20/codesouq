import TechnologyExpertise from "@/components/TechnologyExpertise";
import AboutSection from "../components/AboutSection";
import HeroSection from "../components/HeroSection";
import ProjectForm from "../components/ProjectForm";
import ServicesSection from "../components/ServicesSection";
import { CarouselDemo } from "@/components/ui/CarouselDemo";
import {BackgroundLinesDemo} from "@/components/ui/BackgroundLinesDemo";

export default function HomePage() {
  return (
    <div className="bg-theme min-h-screen">
      <div className="relative isolate">
        {/* Subtle grid pattern overlay */}
        <div
          className="absolute inset-0 -z-10 bg-grid-slate-900/10"
          aria-hidden="true"
        >

          {/* Diagonal gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-tr from-violet-900/20 to-black/80"></div>
        </div>

        {/* <HeroSection /> */}
        
        <AboutSection />
        <TechnologyExpertise />
       <CarouselDemo/>
      

        {/* <ServicesSection /> */}
        <ProjectForm />
      </div>
    </div>
  );
}
