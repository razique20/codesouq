import TechnologyExpertise from "@/components/TechnologyExpertise";
import { CarouselDemo } from "@/components/ui/CarouselDemo";
import { ColourfulTextDemo } from "@/components/ui/ColourfulTextDemo";
import { FeaturesSectionDemo } from "@/components/ui/FeaturesSectionDemo";
import { PlaceholdersAndVanishInputDemo } from "@/components/ui/PlaceholdersAndVanishInputDemo";
import { TextHoverEffectDemo } from "@/components/ui/TextHoverEffectDemo";
import { WobbleCardDemo } from "@/components/ui/WobbleCardDemo";
import AboutSection from "../components/AboutSection";
import ProjectForm from "../components/ProjectForm";
import { SparklesPreview } from "@/components/ui/SparkleReview";

export default function HomePage() {
  return (
    <div className=" min-h-screen">
      <div className="relative isolate">
        {/* Subtle grid pattern overlay */}
        <div
          className="absolute inset-0 -z-10 bg-grid-slate-900/10"
          aria-hidden="true"
        >
          {/* Diagonal gradient overlay */}
          {/* <div className="absolute inset-0 bg-gradient-to-tr from-violet-900/20 to-black/80"></div> */}
        </div>

        <SparklesPreview/>

        
        <ColourfulTextDemo />

        <AboutSection />
        <PlaceholdersAndVanishInputDemo />
        <TechnologyExpertise />
        <CarouselDemo />
        <FeaturesSectionDemo />

      

        {/* <ServicesSection /> */}
        <ProjectForm />

        <WobbleCardDemo />
       
      </div>
    </div>
  );
}
