import HeroSection from '../components/HeroSection';
import dynamic from 'next/dynamic';

const AboutSection = dynamic(() => import('../components/AboutSection'), { ssr: true });
const ServicesSection = dynamic(() => import('../components/ServicesSection'), { ssr: true });
const ProjectForm = dynamic(() => import('../components/ProjectForm'), { ssr: true });

export default function HomePage() {
  return (
    <div className="bg-theme min-h-screen">
      <div className="relative isolate">
        <div className="absolute inset-0 -z-10 bg-grid-slate-900/10" aria-hidden="true">
          <div className="absolute inset-0 bg-gradient-to-tr from-violet-900/20 to-black/80"></div>
        </div>

        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <ProjectForm />
      </div>
    </div>
  );
}
