import TechnologyExpertise from "@/components/TechnologyExpertise";
import { CarouselDemo } from "@/components/ui/CarouselDemo";
import { ColourfulTextDemo } from "@/components/ui/ColourfulTextDemo";
import { HeroSectionOne } from "@/components/ui/HeroSectionOne";
import { InfiniteMovingCardsDemo } from "@/components/ui/InfiniteMovingCardsDemo";
import { PlaceholdersAndVanishInputDemo } from "@/components/ui/PlaceholdersAndVanishInputDemo";
import { TextHoverEffectDemo } from "@/components/ui/TextHoverEffectDemo";
import { WobbleCardDemo } from "@/components/ui/WobbleCardDemo";
import AboutSection from "../components/AboutSection";
import ProjectForm from "../components/ProjectForm";

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

        <HeroSectionOne />

        <ColourfulTextDemo />

        <AboutSection />
        <PlaceholdersAndVanishInputDemo />
        <TechnologyExpertise />
        <CarouselDemo />
        <InfiniteMovingCardsDemo />

        <TextHoverEffectDemo />

        

        {/* <ServicesSection /> */}
        <ProjectForm />

        <WobbleCardDemo />

      </div>
    </div>
  );
}
