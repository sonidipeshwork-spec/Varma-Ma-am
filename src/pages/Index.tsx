import FloatingPetals from '@/components/FloatingPetals';
import CustomCursor from '@/components/CustomCursor';
import HeroSection from '@/components/HeroSection';
import JourneyTimeline from '@/components/JourneyTimeline';
import QualitiesSection from '@/components/QualitiesSection';
import AppreciationSection from '@/components/AppreciationSection';
import MemoryWall from '@/components/MemoryWall';
import CollageSection from '@/components/CollageSection';
import FutureSection from '@/components/FutureSection';

import IntroReveal from '@/components/IntroReveal';

const Index = () => {
  return (
    <>
      <CustomCursor />
      <IntroReveal>
        <div className="min-h-screen bg-pure-white relative overflow-x-hidden">
          {/* Floating Petals/Stars Overlay */}
          <FloatingPetals />

          {/* Main Content */}
          <main>
            {/* Hero Section - Moon & Lotus Theme */}
            <HeroSection />

            {/* Journey Timeline - Phases of Moon */}
            <JourneyTimeline />

            {/* Qualities Section - The Lotus Blooms */}
            <QualitiesSection />

            {/* Appreciation Message - Replacing Love Letter */}
            <AppreciationSection />

            {/* Memory Wall */}
            <MemoryWall />

            {/* Beautiful Collage */}
            <CollageSection />

            {/* Future & Forever */}
            <FutureSection />
          </main>
        </div>
      </IntroReveal>
    </>
  );
};

export default Index;