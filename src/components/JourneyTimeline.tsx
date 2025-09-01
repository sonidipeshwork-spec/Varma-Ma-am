import { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Baby, GraduationCap, BookOpen, Heart, Star, Sparkles } from 'lucide-react';
import image_2 from "@/assets/image_2.png";
import image_3 from "@/assets/image_3.jpg";
import image_4 from "@/assets/image_4.jpg";
import image_5 from "@/assets/image_5.jpg";
import image_9 from "@/assets/image_9.jpg";
import image_12 from "@/assets/image_12.jpg";

const timelineEvents = [
  {
    year: "2006",
    title: "A Star is Born",
    description: "September 16th - The world became brighter",
    icon: Star,
    details: "First word: 'Mama' at 10 months, First steps at 11 months, Loved to giggle and chase butterflies",
    color: "text-sky-blue"
  },
  {
    year: "2010",
    title: "Little Explorer",
    description: "Curious mind discovering the world",
    icon: Baby,
    details: "Loved collecting colorful stones and drawing rainbows",
    color: "text-royal-blue"
  },
  {
    year: "2015",
    title: "Academic Excellence",
    description: "School achievements and friendships",
    icon: BookOpen,
    details: "Class topper, loved mathematics and art",
    color: "text-sky-blue"
  },
  {
    year: "2022",
    title: "High School Graduate",
    description: "Ready for new adventures",
    icon: GraduationCap,
    details: "Graduated with honors, dreams of higher education",
    color: "text-royal-blue"
  },
  {
    year: "2023",
    title: "College Journey Begins",
    description: "Second year student, growing beautifully",
    icon: Sparkles,
    details: "Pursuing dreams with determination and grace",
    color: "text-sky-blue"
  },
  {
    year: "2024",
    title: "Our Story",
    description: "When hearts connected",
    icon: Heart,
    details: "The moment everything changed for the better",
    color: "text-royal-blue"
  }
];

const JourneyTimeline = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

  const journeyImages = [
    image_2,
    image_3,
    image_4,
    image_5,
    image_9,
    image_12
  ];

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px'
    };
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, observerOptions);
    const elements = document.querySelectorAll('.timeline-item');
    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={containerRef} className="py-12 md:py-20 bg-gradient-to-br from-pure-white to-sky-blue/20 relative overflow-hidden">
      {/* Enhanced Background Decorations */}
      <motion.div style={{ y }} className="absolute inset-0 opacity-5 md:opacity-10 pointer-events-none">
        <motion.div
          className="absolute top-10 md:top-20 left-4 md:left-10 text-4xl md:text-9xl"
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 6, repeat: Infinity }}
        >🍀</motion.div>
        <motion.div
          className="absolute top-20 md:top-40 right-4 md:right-20 text-3xl md:text-7xl"
          animate={{ y: [0, -15, 0] }}
          transition={{ duration: 5, repeat: Infinity, delay: 1 }}
        >❄️</motion.div>
        <motion.div
          className="absolute bottom-10 md:bottom-20 left-8 md:left-1/4 text-4xl md:text-8xl"
          animate={{ y: [0, -25, 0] }}
          transition={{ duration: 7, repeat: Infinity, delay: 2 }}
        >💙</motion.div>
      </motion.div>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-sky-blue/20 rounded-full"
            animate={{
              x: [0, 100, 0],
              y: [0, -100, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 8 + i * 0.5,
              repeat: Infinity,
              delay: i * 0.3,
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="font-playfair text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-royal-blue mb-4">
            A Beautiful Journey
          </h2>
          <p className="font-vibes text-lg sm:text-xl md:text-2xl text-midnight-black/70 px-4">
            Every chapter tells a story of grace and growth
          </p>
        </motion.div>

        <div className="relative max-w-6xl mx-auto">
          {/* Enhanced Timeline Line - Desktop */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-sky-blue to-royal-blue rounded-full">
            <motion.div
              className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-sky-blue to-royal-blue rounded-full"
              style={{ scaleY: scrollYProgress }}
              initial={{ scaleY: 0 }}
            />
          </div>

          {/* Timeline Line - Mobile */}
          <div className="md:hidden absolute left-6 top-0 w-0.5 h-full bg-gradient-to-b from-sky-blue to-royal-blue rounded-full">
            <motion.div
              className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-sky-blue to-royal-blue rounded-full"
              style={{ scaleY: scrollYProgress }}
              initial={{ scaleY: 0 }}
            />
          </div>

          {timelineEvents.map((event, index) => {
            const isEven = index % 2 === 0;
            return (
              <div key={index} className="timeline-item fade-in-up relative mb-12 md:mb-20">
                {/* Mobile Layout */}
                <div className="md:hidden flex items-start gap-6">
                  {/* Timeline Dot - Mobile */}
                  <div className="flex-shrink-0 mt-2">
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      transition={{ duration: 0.5, delay: index * 0.2 + 0.4 }}
                      className="relative"
                    >
                      <div className="w-4 h-4 bg-royal-blue rounded-full border-2 border-pure-white shadow-lg animate-pulse-glow"></div>
                      <div className="absolute inset-0 w-4 h-4 bg-sky-blue rounded-full animate-ping"></div>
                    </motion.div>
                  </div>

                  {/* Content - Mobile */}
                  <div className="flex-1 min-w-0">
                    <motion.div
                      initial={{ opacity: 0, x: 50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.8, delay: index * 0.2 }}
                      className="space-y-4"
                    >
                      {/* Card - Mobile */}
                      <div className="glass-card p-4 sm:p-6 rounded-xl hover:scale-105 transition-all duration-500 ease-out relative overflow-hidden">
                        <div className="relative z-10">
                          <div className="flex items-center gap-3 mb-3">
                            <event.icon className={`w-5 h-5 sm:w-6 sm:h-6 ${event.color}`} />
                            <span className="font-playfair text-xl sm:text-2xl font-bold text-royal-blue">
                              {event.year}
                            </span>
                          </div>
                          <h3 className="font-vibes text-2xl sm:text-3xl text-midnight-black mb-2">
                            {event.title}
                          </h3>
                          <p className="font-lora text-base sm:text-lg text-midnight-black/80 mb-3">
                            {event.description}
                          </p>
                          <p className="font-lora text-sm text-royal-blue/70 italic">
                            {event.details}
                          </p>
                        </div>
                      </div>

                      {/* Image - Mobile */}
                      <div className="relative group">
                        <div className="absolute inset-0 bg-gradient-to-br from-sky-blue/30 to-royal-blue/30 rounded-xl blur-sm group-hover:blur-none transition-all duration-500"></div>
                        <div className="relative overflow-hidden rounded-xl shadow-xl">
                          <img
                            src={journeyImages[index]}
                            alt={`${event.title} - ${event.year}`}
                            className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110 min-h-[200px] max-h-[400px]"
                            style={{ aspectRatio: 'auto' }}
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-midnight-black/20 to-transparent"></div>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </div>

                {/* Desktop Layout */}
                <div className="hidden md:flex items-center">
                  {/* Left side - Card (even) or Image (odd) */}
                  <div className="w-5/12">
                    {isEven ? (
                      <motion.div
                        initial={{ opacity: 0, x: -100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: index * 0.2 }}
                        className="pr-6 lg:pr-8 text-right"
                      >
                        <div className="glass-card p-4 lg:p-6 rounded-2xl hover:scale-110 hover:rotate-2 transition-all duration-500 ease-out relative overflow-hidden">
                          <div className="relative z-10">
                            <div className="flex items-center justify-end gap-3 mb-3">
                              <span className="font-playfair text-xl lg:text-2xl font-bold text-royal-blue">
                                {event.year}
                              </span>
                              <event.icon className={`w-5 h-5 lg:w-6 lg:h-6 ${event.color}`} />
                            </div>
                            <h3 className="font-vibes text-2xl lg:text-3xl text-midnight-black mb-2">
                              {event.title}
                            </h3>
                            <p className="font-lora text-base lg:text-lg text-midnight-black/80 mb-3">
                              {event.description}
                            </p>
                            <p className="font-lora text-sm text-royal-blue/70 italic">
                              {event.details}
                            </p>
                          </div>
                        </div>
                      </motion.div>
                    ) : (
                      <motion.div
                        initial={{ opacity: 0, x: -100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: index * 0.2 }}
                        className="pr-6 lg:pr-8"
                      >
                        <div className="relative group">
                          <div className="absolute inset-0 bg-gradient-to-br from-sky-blue/30 to-royal-blue/30 rounded-2xl blur-sm group-hover:blur-none transition-all duration-500"></div>
                          <div className="relative overflow-hidden rounded-2xl shadow-xl">
                            <img
                              src={journeyImages[index]}
                              alt={`${event.title} - ${event.year}`}
                              className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110 min-h-[200px] max-h-[350px]"
                              style={{ aspectRatio: 'auto' }}
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-midnight-black/20 to-transparent"></div>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </div>

                  {/* Timeline Dot - Desktop */}
                  <div className="w-2/12 flex justify-center">
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      transition={{ duration: 0.5, delay: index * 0.2 + 0.4 }}
                      className="relative"
                    >
                      <div className="w-5 h-5 lg:w-6 lg:h-6 bg-royal-blue rounded-full border-3 lg:border-4 border-pure-white shadow-lg animate-pulse-glow"></div>
                      <div className="absolute inset-0 w-5 h-5 lg:w-6 lg:h-6 bg-sky-blue rounded-full animate-ping"></div>
                    </motion.div>
                  </div>

                  {/* Right side - Image (even) or Card (odd) */}
                  <div className="w-5/12">
                    {isEven ? (
                      <motion.div
                        initial={{ opacity: 0, x: 100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: index * 0.2 }}
                        className="pl-6 lg:pl-8"
                      >
                        <div className="relative group">
                          <div className="absolute inset-0 bg-gradient-to-br from-sky-blue/30 to-royal-blue/30 rounded-2xl blur-sm group-hover:blur-none transition-all duration-500"></div>
                          <div className="relative overflow-hidden rounded-2xl shadow-xl">
                            <img
                              src={journeyImages[index]}
                              alt={`${event.title} - ${event.year}`}
                              className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110 min-h-[200px] max-h-[350px]"
                              style={{ aspectRatio: 'auto' }}
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-midnight-black/20 to-transparent"></div>
                          </div>
                        </div>
                      </motion.div>
                    ) : (
                      <motion.div
                        initial={{ opacity: 0, x: 100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: index * 0.2 }}
                        className="pl-6 lg:pl-8 text-left"
                      >
                        <div className="glass-card p-4 lg:p-6 rounded-2xl hover:scale-110 hover:rotate-2 transition-all duration-500 ease-out relative overflow-hidden">
                          <div className="relative z-10">
                            <div className="flex items-center gap-3 mb-3">
                              <event.icon className={`w-5 h-5 lg:w-6 lg:h-6 ${event.color}`} />
                              <span className="font-playfair text-xl lg:text-2xl font-bold text-royal-blue">
                                {event.year}
                              </span>
                            </div>
                            <h3 className="font-vibes text-2xl lg:text-3xl text-midnight-black mb-2">
                              {event.title}
                            </h3>
                            <p className="font-lora text-base lg:text-lg text-midnight-black/80 mb-3">
                              {event.description}
                            </p>
                            <p className="font-lora text-sm text-royal-blue/70 italic">
                              {event.details}
                            </p>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Journey Complete Message */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center mt-16"
        >
          <div className="glass-card p-6 rounded-2xl max-w-2xl mx-auto">
            <h3 className="font-vibes text-3xl text-royal-blue mb-3">
              The Journey Continues...
            </h3>
            <p className="font-lora text-lg text-midnight-black/80">
              Every moment with you is a new chapter in our beautiful story
            </p>
          </div>
        </motion.div>
      </div>

      <style>{`
        @keyframes pulse-glow {
          0%, 100% { box-shadow: 0 0 15px rgba(59, 130, 246, 0.5); }
          50% { box-shadow: 0 0 25px rgba(59, 130, 246, 0.8); }
        }
        .animate-pulse-glow {
          animation: pulse-glow 2s ease-in-out infinite;
        }
        .glass-card {
          background: rgba(255, 255, 255, 0.7);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.3);
          box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.1);
        }
        .fade-in-up {
          opacity: 0;
          transform: translateY(30px);
          transition: all 0.6s ease-out;
        }
        .fade-in-up.visible {
          opacity: 1;
          transform: translateY(0);
        }
        @media (max-width: 768px) {
          .glass-card:hover {
            transform: scale(1.02) !important;
          }
        }
      `}</style>
    </section>
  );
};

export default JourneyTimeline;