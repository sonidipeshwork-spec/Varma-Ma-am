import { useEffect, useRef, useState } from "react";
import { NAV } from "@/love/content";
import { openLocketWithGsap, scrollLoveTo, useLoveGsap } from "@/love/useLoveGsap";
import {
  QuestionGate,
  LocketGate,
  BirthdayStorySection,
  OpeningSection,
  QualitiesSection,
  JourneySection,
  FilmSection,
  BirthdayBookSection,
  UnsaidSection,
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
  const [stage, setStage] = useState<"questions" | "locket" | "opened">("questions");
  const [activeNav, setActiveNav] = useState(0);
  const [audioOn, setAudioOn] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const opened = stage === "opened";

  useLoveGsap(opened, reduced);

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

  const handleQuestionsComplete = () => {
    setStage("locket");
  };

  const openLocket = () => {
    if (stage === "opened") return;
    openLocketWithGsap(reduced, () => {
      window.scrollTo(0, 0);
      setStage("opened");
    });
  };

  const toggleAudio = () => {
    const a = audioRef.current;
    if (!a) return;
    if (audioOn) a.pause();
    else a.play().catch(() => undefined);
    setAudioOn(!audioOn);
  };

  const scrollToSection = (id: string) => {
    scrollLoveTo(`#${id}`);
  };

  return (
    <div className="love-root">
      <div className="love-vignette" aria-hidden />
      <div className="love-grain" aria-hidden />

      {stage === "questions" && <QuestionGate onComplete={handleQuestionsComplete} />}

      {stage === "locket" && <LocketGate onOpen={openLocket} />}

      {stage === "opened" && (
        <>
          <BirthdayStorySection />
          <OpeningSection />
          <QualitiesSection />
          <JourneySection />
          <FilmSection />
          <BirthdayBookSection />
          <UnsaidSection />
          <EndingSection />
        </>
      )}
    </div>
  );
}
