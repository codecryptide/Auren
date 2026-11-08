import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { ValueStrip } from "@/components/ValueStrip";
import { PhilosophySection } from "@/components/PhilosophySection";
import { PillarCards } from "@/components/PillarCards";
import { FeatureBand } from "@/components/FeatureBand";
import { DashboardPreview } from "@/components/DashboardPreview";
import { HowItWorks } from "@/components/HowItWorks";
import { GrowthCards } from "@/components/GrowthCards";
import { FinalCTA } from "@/components/FinalCTA";
import { CosmicBackdrop } from "@/components/CosmicBackdrop";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-[#08070D] text-[#F8F7FC] selection:bg-[#762BFF] selection:text-white overflow-x-hidden">
      {/* Global Unified Cosmic Atmosphere: Starfield, Nebula Clouds & Orbital Trajectories */}
      <CosmicBackdrop />

      {/* Navigation Header */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="w-full relative z-10">
        <HeroSection />
        <ValueStrip />
        <PhilosophySection />
        <PillarCards />
        <FeatureBand />
        <DashboardPreview />
        <HowItWorks />
        <GrowthCards />
      </main>

      {/* Final Call to Action & Footer */}
      <FinalCTA />
    </div>
  );
}
