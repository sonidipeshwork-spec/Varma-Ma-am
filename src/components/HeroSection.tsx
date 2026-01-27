import { useRef, useEffect, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Moon, Sparkles, Star, ArrowDown } from 'lucide-react';
import { Button } from "@/components/ui/button";
import heroImage from '@/assets/image_1.png';

gsap.registerPlugin(ScrollTrigger);

const HeroSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);

  // 3D Tilt State
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateXValue = ((y - centerY) / centerY) * -10; // Max tilt 10deg
    const rotateYValue = ((x - centerX) / centerX) * 10;

    setRotateX(rotateXValue);
    setRotateY(rotateYValue);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Background Blobs Floating
      gsap.to('.blob', {
        y: "random(-100, 100)",
        x: "random(-100, 100)",
        scale: "random(0.8, 1.2)",
        duration: "random(10, 20)",
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        stagger: { amount: 5 }
      });

      // Reveal Animations
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.from('.hero-content', {
        y: 100,
        opacity: 0,
        duration: 1.2,
        stagger: 0.2
      })
        .from('.floating-star', {
          scale: 0,
          opacity: 0,
          duration: 1,
          stagger: 0.1,
          ease: "back.out(1.7)"
        }, "-=0.8");

    }, containerRef);

    return () => ctx.revert();
  }, []);

  const scrollToTimeline = () => {
    const timelineSection = document.getElementById('timeline-section');
    timelineSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-midnight-black selection:bg-royal-blue/30"
      onMouseMove={handleMouseMove}
    >
      {/* Noise Overlay */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none mix-blend-overlay"
        style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}>
      </div>

      {/* Animated Gradient Blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="blob absolute top-0 left-0 w-[500px] h-[500px] bg-royal-blue/30 rounded-full mix-blend-screen filter blur-[100px] opacity-50 animate-pulse"></div>
        <div className="blob absolute bottom-0 right-0 w-[600px] h-[600px] bg-sky-blue/20 rounded-full mix-blend-screen filter blur-[120px] opacity-40"></div>
        <div className="blob absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-purple-500/20 rounded-full mix-blend-screen filter blur-[90px] opacity-30"></div>
      </div>

      {/* Floating Particles/Stars */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="floating-star absolute text-white/40"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              transform: `scale(${Math.random() * 0.5 + 0.3})`,
              animation: `float ${Math.random() * 5 + 5}s infinite ease-in-out alternate`
            }}
          >
            <Star size={Math.random() * 15 + 5} fill="currentColor" />
          </div>
        ))}
      </div>

      <div className="container mx-auto px-4 z-10 perspective-1000">
        {/* Glass Card */}
        <div
          ref={cardRef}
          className="relative max-w-4xl mx-auto p-8 md:p-16 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-2xl transition-transform duration-100 ease-out"
          style={{
            transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
            transformStyle: 'preserve-3d'
          }}
          onMouseLeave={handleMouseLeave}
        >
          {/* Content */}
          <div className="hero-content text-center transform translate-z-12 flex flex-col items-center">

            {/* Image Container */}
            <div className="mb-8 relative group cursor-pointer w-64 h-64 md:w-80 md:h-80 mx-auto">
              <div className="absolute -inset-1 bg-gradient-to-r from-sky-blue to-royal-blue rounded-full blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
              <img
                src={heroImage}
                alt="Moon & Lotus"
                className="relative w-full h-full object-cover rounded-full border-4 border-white/10 shadow-2xl hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </div>

      <style>{`
         @keyframes float {
           0% { transform: translateY(0px); }
           50% { transform: translateY(-20px); }
           100% { transform: translateY(0px); }
         }
       `}</style>
    </div>
  );
};

export default HeroSection;