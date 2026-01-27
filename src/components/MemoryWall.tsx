import { useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Sparkles } from 'lucide-react';
import image_1 from '@/assets/image_1.png';
import image_2 from '@/assets/image_2.png';
import image_3 from '@/assets/image_3.jpg';
import image_4 from '@/assets/image_4.jpg';
import image_5 from '@/assets/image_5.jpg';
import image_9 from '@/assets/image_9.jpg';
import image_7 from '@/assets/image_7.jpg';
import image_8 from '@/assets/image_8.jpg';
import image_10 from '@/assets/image_10.jpg';
import image_11 from '@/assets/image_11.jpg';
import image_12 from '@/assets/image_12.jpg';
import image_13 from '@/assets/image_13.png';
import image_14 from '@/assets/image_14.jpg';
import image_16 from '@/assets/image_16.jpg';
import baby from "@/assets/baby.png";
import college from "@/assets/college.png";
import school from "@/assets/school.png";
import friend from "@/assets/friend.png";
import foot from "@/assets/foot.png";
import study from "@/assets/study.png";

// Register ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

const memories = [
  { id: 1, url: image_1, caption: "Radiant Joy ✨", color: "#E0F2FE" },
  { id: 2, url: image_2, caption: "Pure Elegance 🦢", color: "#F0F9FF" },
  { id: 3, url: image_3, caption: "Eyes full of Dreams 🌙", color: "#E0E7FF" },
  { id: 4, url: image_4, caption: "Charming Soul 💫", color: "#DBEAFE" },
  { id: 5, url: image_11, caption: "Blooming Grace 🌸", color: "#FCE7F3" },
  { id: 6, url: image_9, caption: "Heart of Gold 💛", color: "#FEF3C7" },
  { id: 7, url: image_7, caption: "Timeless Beauty ⏳", color: "#EDE9FE" },
  { id: 8, url: image_8, caption: "Simply Cute 🎀", color: "#FAE8FF" },
  { id: 9, url: image_10, caption: "Sunset Serenity 🌅", color: "#FFEDD5" },
  { id: 10, url: image_5, caption: "Adorable Vibes 💙", color: "#D1FAE5" },
  { id: 11, url: image_12, caption: "Quiet Strength 🍃", color: "#F1F5F9" },
  { id: 13, url: image_13, caption: "Ethereal Charm ✨", color: "#EEF2FF" },
  { id: 14, url: image_14, caption: "Simplicity 🤍", color: "#F8FAFC" },
  { id: 15, url: image_16, caption: "Angel Energy 🪽", color: "#E0F2FE" },
  { id: 16, url: baby, caption: "Little Steps 👶", color: "#FEF9C3" },
  { id: 17, url: college, caption: "College Days 🎓", color: "#DBEAFE" },
  { id: 18, url: school, caption: "School Memories 🎒", color: "#FEE2E2" },
  { id: 19, url: friend, caption: "Besties Forever 👯‍♀️", color: "#FCE7F3" },
  { id: 20, url: foot, caption: "First Footsteps 👣", color: "#FFEDD5" },
  { id: 21, url: study, caption: "Studious Mode 📚", color: "#E0E7FF" }
];

const MemoryWall = () => {
  const container = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray(".card-wrapper") as HTMLElement[];
      const totalCards = cards.length;

      cards.forEach((card, index) => {
        // Scaling Animation
        gsap.to(card, {
          scrollTrigger: {
            trigger: card,
            start: () => `top bottom-=100`,
            end: () => `top top+=40`,
            scrub: true,
            // markers: true,
            invalidateOnRefresh: true
          },
          ease: "none",
          scale: () => 1 - (totalCards - index) * 0.025
        });

        // Pinning Logic
        ScrollTrigger.create({
          trigger: card,
          start: "top top",
          pin: true,
          pinSpacing: false,
          markers: false,
          id: 'pin',
          end: () => `+=${totalCards * 100 + window.innerHeight}`, // Finite end so it unpins
          invalidateOnRefresh: true,
        });
      });
    }, container);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={container} className="bg-midnight-black relative pb-20 overflow-hidden" style={{ height: `${memories.length * 100 + 200}vh` }}>

      {/* Background Noise Texture */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none z-0"
        style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}>
      </div>

      {/* Intro Header */}
      <div className="h-[60vh] flex flex-col items-center justify-center relative z-0 text-center px-4">
        <div className="flex justify-center mb-6">
          <div className="p-4 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm shadow-[0_0_20px_rgba(255,255,255,0.1)]">
            <Sparkles className="w-8 h-8 text-sky-blue animate-pulse" />
          </div>
        </div>
        <h2 className="font-playfair text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-sky-blue via-white to-sky-blue mb-4 drop-shadow-sm">
          Timeless Moments
        </h2>
        <p className="font-vibes text-2xl md:text-3xl text-gray-400">
          Scroll to unveil the story.
        </p>
      </div>

      {/* Cards Stack */}
      <div className="relative z-10 w-full max-w-[2000px] mx-auto">
        {memories.map((memory, i) => (
          <div
            key={memory.id}
            ref={(el) => { if (el) cardsRef.current[i] = el }}
            className="card-wrapper flex items-center justify-center h-screen w-full relative"
            style={{ zIndex: i + 1 }}
          >
            <div
              style={{ backgroundColor: memory.color }}
              className="inner-card relative w-[340px] md:w-[700px] h-[500px] md:h-[750px] rounded-[3rem] p-4 shadow-[0_0_50px_-12px_rgba(0,0,0,0.5)] border border-white/40 flex flex-col transform-gpu transition-shadow duration-500 hover:shadow-[0_0_80px_-12px_rgba(255,255,255,0.3)]"
            >
              {/* Card Texture Overlay */}
              <div className="absolute inset-0 opacity-20 pointer-events-none rounded-[3rem]" style={{ backgroundImage: `url("https://www.transparenttextures.com/patterns/cubes.png")` }}></div>

              <div className="flex-1 w-full rounded-[2.5rem] overflow-hidden border-[6px] border-white/80 shadow-inner relative group isolate">
                <div className="absolute inset-0 bg-black/10 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                <img
                  src={memory.url}
                  alt={memory.caption}
                  className="w-full h-full object-cover transition-transform duration-1000 ease-in-out group-hover:scale-110"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Spacer end */}
      <div className="h-[20vh]"></div>
    </section>
  );
};

export default MemoryWall;