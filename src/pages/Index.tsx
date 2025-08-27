import React from 'react';
import FloatingPetals from '@/components/FloatingPetals';
import CustomCursor from '@/components/CustomCursor';
import HeroSection from '@/components/HeroSection';
import JourneyTimeline from '@/components/JourneyTimeline';
import QualitiesSection from '@/components/QualitiesSection';
import LoveLetterSection from '@/components/LoveLetterSection';
import ComplimentMachine from '@/components/ComplimentMachine';
import MemoryWall from '@/components/MemoryWall';
import CollageSection from '@/components/CollageSection';
import FutureSection from '@/components/FutureSection';

const Index = () => {
  return (
    <div className="min-h-screen bg-pure-white relative overflow-x-hidden">
      {/* Custom Cursor */}
      <CustomCursor />
      
      {/* Floating Petals */}
      <FloatingPetals />
      
      {/* Main Content */}
      <main>
        {/* Hero Section */}
        <HeroSection />
        
        {/* Journey Timeline */}
        <JourneyTimeline />
        
        {/* Qualities Section */}
        <QualitiesSection />
        
        {/* Love Letter */}
        <LoveLetterSection />
        
        {/* Interactive Compliment Machine */}
        <ComplimentMachine />
        
        {/* Memory Wall */}
        <MemoryWall />
        
        {/* Beautiful Collage */}
        <CollageSection />
        
        {/* Future & Forever */}
        <FutureSection />
      </main>
    </div>
  );
};

export default Index;