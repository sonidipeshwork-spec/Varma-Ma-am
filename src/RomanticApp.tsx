import { useEffect, useRef, useState } from "react";
import { NAV } from "@/love/content";
import { openLocketWithGsap, useLoveGsap } from "@/love/useLoveGsap";
import {
  LocketGate,
  AmbientControls,
  BirthdayStorySection,
  OpeningSection,
  WhyILoveYouSection,
  HowIFellSection,
  PhotoGallerySection,
  LoveLetterBookSection,
  ComplimentsSection,
  OurFutureSection,
  EndingSection,
} from "@/sections";

function useReducedMotion() {
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(mq.matches);
    const onChange = () => setReduced(mq.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);
  return reduced;
}

export default function RomanticApp() {
  const reduced = useReducedMotion();
  const [opened, setOpened] = useState(false);
  const [activeNav, setActiveNav] = useState(0);
  const [audioOn, setAudioOn] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // GSAP scroll and parallax triggers
  useLoveGsap(opened, reduced);

  // Ambient audio player
  useEffect(() => {
    const a = new Audio("https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3");
    a.loop = true;
    a.volume = 0.28;
    audioRef.current = a;
    return () => {
      a.pause();
      audioRef.current = null;
    };
  }, []);

  // IntersectionObserver for tracking active section in dot navigation
  useEffect(() => {
    if (!opened) return;
    const els = NAV.map((s) => document.getElementById(s.id)).filter(Boolean) as HTMLElement[];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const i = NAV.findIndex((s) => s.id === entry.target.id);
            if (i !== -1) setActiveNav(i);
          }
        });
      },
      { threshold: 0.35 }
    );
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [opened]);

  const openLocket = () => {
    if (opened) return;
    openLocketWithGsap(reduced, () => setOpened(true));
  };

  const toggleAudio = () => {
    const a = audioRef.current;
    if (!a) return;
    if (audioOn) a.pause();
    else a.play().catch(() => undefined);
    setAudioOn(!audioOn);
  };

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="love-root">
      <div className="love-vignette" aria-hidden />
      <div className="love-grain" aria-hidden />

      {/* 1. Locket Lock Gate Screen */}
      {!opened && <LocketGate onOpen={openLocket} />}

      {/* 2. Main Experience & Dedicated Sections */}
      {opened && (
        <>
          <AmbientControls
            audioOn={audioOn}
            activeNav={activeNav}
            onToggleAudio={toggleAudio}
            onNavigate={scrollToSection}
          />

          <BirthdayStorySection />
          <OpeningSection />
          <WhyILoveYouSection />
          <HowIFellSection />
          <PhotoGallerySection />
          <LoveLetterBookSection />
          <ComplimentsSection />
          <OurFutureSection />
          <EndingSection />
        </>
      )}
    </div>
  );
}
