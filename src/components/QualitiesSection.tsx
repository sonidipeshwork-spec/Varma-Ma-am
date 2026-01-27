import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Sparkles, Sun, Star, Flower, Wind, Droplet, HeartHandshake, Smile, Moon } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const qualities = [
  {
    title: "Pure Like a Lotus",
    description: "Growing through every challenge with grace.",
    icon: Flower,
    color: "from-pink-100 to-white",
    textColor: "text-pink-900"
  },
  {
    title: "Calm Like Moon",
    description: "A presence that brings peace to chaos.",
    icon: Moon,
    color: "from-blue-100 to-white",
    textColor: "text-blue-900"
  },
  {
    title: "Radiant Smile",
    description: "Lighting up the world effortlessly.",
    icon: Sun,
    color: "from-yellow-100 to-white",
    textColor: "text-amber-900"
  },
  {
    title: "Kind Spirit",
    description: "A heart that understands without words.",
    icon: HeartHandshake,
    color: "from-teal-100 to-white",
    textColor: "text-teal-900"
  },
  {
    title: "Resilient Soul",
    description: "Stronger than you know.",
    icon: Star,
    color: "from-violet-100 to-white",
    textColor: "text-violet-900"
  },
  {
    title: "Refreshing Vibe",
    description: "Like the first drop of rain.",
    icon: Droplet,
    color: "from-sky-100 to-white",
    textColor: "text-sky-900"
  }
];

const QualitiesSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const colorWrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const track = trackRef.current;
      const scrollTween = gsap.to(track, {
        x: () => -(track!.scrollWidth - window.innerWidth),
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          pin: true,
          scrub: 1,
          end: () => "+=" + track!.scrollWidth,
        }
      });

      // Black & White to Color Transition
      // We want it to be fully B&W at start, and fully colorful by the middle/end
      gsap.fromTo(colorWrapperRef.current,
        { filter: "grayscale(100%) brightness(0.8)" },
        {
          filter: "grayscale(0%) brightness(1)",
          ease: "none",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top top",
            end: () => "+=" + (track!.scrollWidth * 0.6), // Transition completes at 60% of scroll
            scrub: 1,
          }
        }
      );

      // Animate generic elements in the horizontal flow if needed
      // e.g., parralax on the text vs cards? 

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative min-h-[100vh] bg-slate-950 overflow-hidden"
    >
      <div
        ref={colorWrapperRef}
        className="w-full h-full transition-all duration-300"
      >
        {/* Background that shifts from dark/mono to vibrant */}
        <div className="fixed inset-0 bg-gradient-to-r from-slate-950 via-slate-900 to-blue-950 z-0"></div>
        <div className="fixed inset-0 opacity-10 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] pointer-events-none z-0"></div>

        {/* Horizontal Track */}
        <div
          ref={trackRef}
          className="relative z-10 flex h-full items-center pl-20 pr-20"
          style={{ width: 'fit-content' }}
        >
          {/* 1. Intro Title (Starts B&W) */}
          <div className="w-[100vw] h-screen flex-shrink-0 flex flex-col justify-center px-12 md:px-24">
            <h2 className="font-playfair text-6xl md:text-9xl font-bold text-white mb-8 leading-tight">
              The Essence <br /> of Her Soul
            </h2>
            <div className="w-24 h-1 bg-white/50"></div>
            <p className="mt-8 font-lora text-white/60 text-xl">Scroll to unfold</p>
          </div>

          {/* 2. Narrative Text Flow (Transitioning to Color) */}
          <div className="flex-shrink-0 flex items-center gap-32 px-24">
            <p className="font-playfair text-4xl md:text-6xl text-slate-200 leading-snug w-[800px]">
              A soul that shines with the quiet grace of the moon...
            </p>

            <p className="font-vibes text-5xl md:text-7xl text-blue-300 w-[600px] text-center">
              Possessing strength that rivals the tides...
            </p>

            <div className="w-[500px] text-left">
              <Flower className="w-24 h-24 text-pink-300 mb-6 animate-spin-slow" />
              <p className="font-lora text-2xl md:text-4xl text-white leading-relaxed">
                Yet mimics the gentleness of a lotus blooming in stillness.
              </p>
            </div>

            <p className="font-playfair text-4xl md:text-6xl text-slate-200 w-[700px]">
              Her kindness is a constellation map guiding lost ships home.
            </p>

            <div className="w-[600px] flex flex-col items-center text-center">
              <Sparkles className="w-20 h-20 text-yellow-200 mb-8" />
              <p className="font-lora text-2xl md:text-4xl text-white leading-relaxed">
                Her laughter, a melody that rewrites the morning sky with colors of joy, wisdom, and infinite peace.
              </p>
            </div>

            <p className="font-vibes text-6xl md:text-8xl text-white w-[900px] leading-tight">
              She is the calm in the storm and the light in the dark.
            </p>
          </div>

          {/* 3. The Qualities Cards (Fully Colored) */}
          <div className="flex-shrink-0 flex gap-12 px-24 items-center h-screen">
            {qualities.map((quality, index) => (
              <div
                key={index}
                className="w-[350px] h-[500px] bg-white/10 backdrop-blur-md border border-white/20 rounded-[3rem] p-8 flex flex-col items-center justify-center text-center hover:-translate-y-4 transition-transform duration-500 group"
              >
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-white/20 to-transparent flex items-center justify-center mb-8 border border-white/30 group-hover:scale-110 transition-transform">
                  <quality.icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="font-playfair text-3xl text-white mb-4">{quality.title}</h3>
                <p className="font-lora text-white/70 text-lg">{quality.description}</p>
              </div>
            ))}
          </div>

          {/* 4. Outro */}
          <div className="w-[100vw] h-screen flex-shrink-0 flex items-center justify-center">
            <h2 className="font-vibes text-8xl md:text-[12rem] text-white opacity-20">
              Beautiful
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QualitiesSection;