import { useEffect, useRef, useMemo } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Moon, Circle, Disc, MapPin, Sparkles, Star } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const JourneyTimeline = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);

  // Phases of the Moon Metaphor
  const timelineEvents = useMemo(() => [
    {
      phase: "New Moon",
      title: "The Beginning",
      year: "2006",
      description: "A seed of light planted in the dark.",
      details: "Like the first sliver of the moon, a journey began with quiet promise and hidden potential.",
      icon: Circle,
      color: "text-slate-400"
    },
    {
      phase: "Waxing Crescent",
      title: "Early Steps",
      year: "2010",
      description: "Curiosity sparking the first glow.",
      details: "Exploring the world with wide eyes, finding colors in the grey, and learning to smile at the stars.",
      icon: Moon,
      color: "text-blue-300"
    },
    {
      phase: "First Quarter",
      title: "Growth & Learning",
      year: "2015",
      description: "Halfway to the light, gathering strength.",
      details: "School days, lessons learned, and the character building that forms the foundation of who you are.",
      icon: Disc,
      color: "text-blue-400"
    },
    {
      phase: "Waxing Gibbous",
      title: "Blossoming",
      year: "2023",
      description: "Almost full, shining brighter every day.",
      details: "Leaving childhood behind, embracing the complexities of growing up with grace and resilience.",
      icon: Moon,
      color: "text-indigo-300"
    },
    {
      phase: "Full Moon",
      title: "Radiance",
      year: "2024",
      description: "Shining with full potential.",
      details: "New chapters in college, meeting new people, and standing tall in your own light. A presence that illuminates.",
      icon: Sparkles,
      color: "text-yellow-100"
    },
    {
      phase: "Waning Gibbous",
      title: "Reflection",
      year: "2025",
      description: "Sharing the light with others.",
      details: "Navigating exams, friendships, and life's little moments with a wisdom beyond years.",
      icon: Star,
      color: "text-blue-200"
    },
  ], []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate the vertical line drawing downwards
      gsap.fromTo(lineRef.current,
        { height: '0%' },
        {
          height: '100%',
          ease: 'none',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top center',
            end: 'bottom center',
            scrub: 1,
          }
        }
      );

      // Animate each event card
      const items = gsap.utils.toArray('.timeline-item');
      items.forEach((item: any, i) => {
        const direction = i % 2 === 0 ? -100 : 100;

        gsap.fromTo(item,
          {
            opacity: 0,
            x: direction,
            rotateY: i % 2 === 0 ? -15 : 15
          },
          {
            opacity: 1,
            x: 0,
            rotateY: 0,
            duration: 1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: item,
              start: 'top 80%',
              end: 'top 50%',
              toggleActions: 'play none none reverse',
            }
          }
        );
      });

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="timeline-section" ref={containerRef} className="py-20 bg-gradient-to-b from-midnight-black via-royal-blue/30 to-midnight-black relative overflow-hidden text-white min-h-screen">

      {/* Decorative Background */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-sky-blue/20 via-transparent to-transparent"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-sky-blue mb-4">
            Phases of a Beautiful Soul
          </h2>
          <p className="font-vibes text-2xl text-blue-200/70">
            A journey from stardust to full radiance
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          {/* Central Line */}
          <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-white/10 rounded-full h-full">
            {/* Animated Line Overlay */}
            <div ref={lineRef} className="w-full bg-gradient-to-b from-sky-blue via-royal-blue to-white shadow-[0_0_15px_rgba(56,189,248,0.6)]"></div>
          </div>

          <div className="space-y-12 md:space-y-24">
            {timelineEvents.map((event, index) => {
              const Icon = event.icon;
              return (
                <div key={index} className={`timeline-item relative flex flex-col md:flex-row items-center ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>

                  {/* Content Card */}
                  <div className="w-full md:w-5/12 pl-12 md:pl-0 md:px-8">
                    <div className="bg-white/5 backdrop-blur-md border border-white/10 p-6 md:p-8 rounded-2xl shadow-xl hover:bg-white/10 transition-colors duration-300">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="font-lora text-sm tracking-widest uppercase text-sky-blue/70 border border-sky-blue/20 px-3 py-1 rounded-full">
                          {event.phase}
                        </span>
                        <span className="font-playfair text-2xl font-bold text-white ml-auto">
                          {event.year}
                        </span>
                      </div>
                      <h3 className={`font-playfair text-3xl font-bold mb-3 ${event.color}`}>
                        {event.title}
                      </h3>
                      <p className="font-lora text-lg text-blue-100/90 italic mb-4">
                        "{event.description}"
                      </p>
                      <p className="font-sans text-base text-slate-300 leading-relaxed">
                        {event.details}
                      </p>
                    </div>
                  </div>

                  {/* Center Node */}
                  <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 w-8 h-8 flex items-center justify-center transform -translate-x-1/2">
                    <div className="w-8 h-8 bg-midnight-black border-2 border-sky-blue rounded-full relative z-20 flex items-center justify-center shadow-[0_0_15px_rgba(56,189,248,0.5)]">
                      <Icon size={14} className="text-white" />
                    </div>
                  </div>

                  {/* Empty Space for Grid */}
                  <div className="w-full md:w-5/12 hidden md:block"></div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default JourneyTimeline;