import { useEffect, useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Heart, Sparkles } from 'lucide-react';
import heroImage from '@/assets/hero-bg.png';
import image_1 from '@/assets/image_1.png';
import image_2 from '@/assets/image_2.png';

const HeroSection = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 300);
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => {
      clearTimeout(timer);
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  // Adjust particle count based on screen size (reduced for performance)
  const particleCount = useMemo(() => isMobile ? 6 : 10, [isMobile]);
  const sparkleCount = useMemo(() => isMobile ? 2 : 4, [isMobile]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Custom CSS with enhanced animations */}
      <style>{`
        @keyframes subtleFloat {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          25% { transform: translateY(-8px) translateX(5px); }
          50% { transform: translateY(-5px) translateX(-5px); }
          75% { transform: translateY(-10px) translateX(3px); }
        }
        
        @keyframes gradient-x {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        
        @keyframes pulse-glow {
          0%, 100% { box-shadow: 0 0 15px rgba(59, 130, 246, 0.4); }
          50% { box-shadow: 0 0 30px rgba(59, 130, 246, 0.8), 0 0 40px rgba(59, 130, 246, 0.6); }
        }
        
        .animate-gradient-x {
          background-size: 200% 200%;
          animation: gradient-x 4s ease infinite;
        }
        
        .bg-gradient-radial {
          background: radial-gradient(circle at center, var(--tw-gradient-from), var(--tw-gradient-to));
        }
        
        .glass-card {
          background: rgba(255, 255, 255, 0.3);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border: 1px solid rgba(255, 255, 255, 0.25);
          box-shadow: 0 8px 32px rgba(31, 38, 135, 0.15);
          will-change: transform;
        }
        
        .text-shimmer {
          background: linear-gradient(90deg, #0ea5e9, #3b82f6, #1d4ed8, #0ea5e9);
          background-size: 300% 300%;
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: gradient-x 3s ease infinite;
        }
        
        .font-playfair {
          font-family: 'Playfair Display', serif;
        }
        
        .font-vibes {
          font-family: 'Great Vibes', cursive;
        }
        
        .font-lora {
          font-family: 'Lora', serif;
        }
        
        .floating {
          animation: subtleFloat 12s ease-in-out infinite;
        }
        
        .pulse-glow {
          animation: pulse-glow 3s ease-in-out infinite;
        }
      `}</style>

      {/* Enhanced Background Particles with optimized performance */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(particleCount)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              width: `${Math.random() * 6 + 2}px`,
              height: `${Math.random() * 6 + 2}px`,
              background: `rgba(${125 + Math.random() * 50}, ${200 + Math.random() * 55}, 255, ${0.1 + Math.random() * 0.2})`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              willChange: 'transform, opacity'
            }}
            animate={{
              x: [0, 30 + Math.random() * 30, 0],
              y: [0, -20 - Math.random() * 30, 0],
              opacity: [0, 0.7, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: 8 + i * 0.5, // Reduced duration
              repeat: Infinity,
              delay: i * 0.4,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      {/* Enhanced Background Image with parallax effect */}
      <motion.div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30 floating"
        style={{
          backgroundImage: `url(${heroImage})`,
          transform: isMobile ? 'scale(1.05)' : 'scale(1.15)',
          willChange: 'transform'
        }}
        animate={{
          y: [0, -15, 0], // Reduced movement
        }}
        transition={{
          duration: 15, // Reduced duration
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Enhanced Gradient Overlays with animated opacity */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-white/90 via-sky-400/60 to-blue-800/80"
        animate={{
          opacity: [0.85, 0.95, 0.85],
        }}
        transition={{
          duration: 6, // Reduced duration
          repeat: Infinity,
          ease: "easeInOut"
        }}
        style={{ willChange: 'opacity' }}
      />

      <motion.div
        className="absolute inset-0 bg-gradient-radial from-transparent via-sky-400/15 to-blue-800/30"
        animate={{
          scale: [1, 1.08, 1], // Reduced scale change
        }}
        transition={{
          duration: 10, // Reduced duration
          repeat: Infinity,
          ease: "easeInOut"
        }}
        style={{ willChange: 'transform' }}
      />

      <div className="absolute inset-0 bg-gradient-to-t from-gray-900/10 via-transparent to-white/20" />

      {/* Enhanced Floating Sparkles with more natural movement */}
      <div className="absolute inset-0">
        {[...Array(sparkleCount)].map((_, i) => (
          <motion.div
            key={`sparkle-${i}`}
            className="absolute text-sky-400/70"
            animate={{
              y: [-30, 40, -30], // Reduced movement
              x: [0, Math.random() * 15 - 7.5, 0], // Reduced movement
              rotate: [0, 180, 360],
              scale: [0.4, 1, 0.4],
              opacity: [0.2, 1, 0.2],
            }}
            transition={{
              duration: 4 + i * 0.5, // Reduced duration
              repeat: Infinity,
              delay: i * 1,
              ease: "easeInOut"
            }}
            style={{
              left: `${15 + i * 20}%`, // Adjusted spacing
              top: `${20 + (i % 3) * 25}%`, // Adjusted spacing
              willChange: 'transform, opacity'
            }}
          >
            <Sparkles className="w-4 h-4" />
          </motion.div>
        ))}
      </div>

      {/* Main Content with enhanced animations */}
      <div className="relative z-20 text-center px-4 sm:px-6 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isLoaded ? 1 : 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Enhanced Title with more dynamic effects */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{
              opacity: isLoaded ? 1 : 0,
              y: isLoaded ? 0 : 50
            }}
            transition={{
              duration: 0.8,
              delay: 0.2,
              type: "spring",
              damping: 12,
              stiffness: 100
            }}
            className="relative mb-6 sm:mb-8"
          >
            <motion.h1
              className="font-playfair text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold relative"
              animate={{
                textShadow: [
                  '0 0 10px rgba(59, 130, 246, 0.4)',
                  '0 0 20px rgba(59, 130, 246, 0.7)',
                  '0 0 10px rgba(59, 130, 246, 0.4)'
                ],
                scale: [1, 1.01, 1]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              style={{ willChange: 'transform, text-shadow' }}
            >
              <span className="text-shimmer">
                Happy Birthday
              </span>
            </motion.h1>

            {/* Decorative elements */}
            <motion.div
              className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-transparent via-sky-400 to-transparent"
              animate={{
                width: [80, 120, 80],
                opacity: [0.5, 1, 0.5]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              style={{ willChange: 'transform, opacity' }}
            />
          </motion.div>

          {/* Enhanced Name Section with improved glow effect */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{
              opacity: isLoaded ? 1 : 0,
              y: isLoaded ? 0 : 50
            }}
            transition={{
              duration: 0.8,
              delay: 0.4,
              type: "spring",
              damping: 12,
              stiffness: 100
            }}
            className="relative flex flex-col-reverse space-y-reverse mb-6 sm:mb-8"
          >
            <motion.h2
              className="font-vibes text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-blue-800 mb-4 relative z-10"
              animate={{
                filter: [
                  'drop-shadow(0 0 10px rgba(30, 64, 175, 0.4))',
                  'drop-shadow(0 0 25px rgba(30, 64, 175, 0.8))',
                  'drop-shadow(0 0 10px rgba(30, 64, 175, 0.4))'
                ]
              }}
              transition={{
                duration: 4, // Reduced duration
                repeat: Infinity,
                ease: "easeInOut"
              }}
              style={{ willChange: 'filter' }}
            >
              Miss Princess, Shruu Ji
            </motion.h2>

            <motion.div
              className="absolute inset-0 rounded-full blur-3xl bg-gradient-radial from-sky-400/50 via-sky-400/30 to-transparent"
              animate={{
                scale: [1, 1.2, 1], // Reduced scale change
                opacity: [0.4, 0.7, 0.4],
              }}
              transition={{
                duration: 3, // Reduced duration
                repeat: Infinity,
                ease: "easeInOut"
              }}
              style={{ willChange: 'transform, opacity' }}
            />
          </motion.div>

          {/* Enhanced Glass Card with more sophisticated effects */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{
              opacity: isLoaded ? 1 : 0,
              y: isLoaded ? 0 : 50
            }}
            transition={{
              duration: 0.8,
              delay: 0.6,
              type: "spring",
              damping: 12,
              stiffness: 100
            }}
            className="glass-card p-4 sm:p-6 rounded-3xl mb-8 sm:mb-10 inline-block relative overflow-hidden pulse-glow"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-sky-400/15 to-blue-800/15 opacity-60" />
            <div className="relative z-10">
              <motion.p
                className="font-vibes text-xl sm:text-2xl md:text-3xl text-blue-600 mb-3"
                animate={{
                  textShadow: [
                    '0 0 5px rgba(14, 165, 233, 0.4)',
                    '0 0 15px rgba(14, 165, 233, 0.7)',
                    '0 0 5px rgba(14, 165, 233, 0.4)'
                  ]
                }}
                transition={{
                  duration: 3, // Reduced duration
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                style={{ willChange: 'text-shadow' }}
              >
                <span className='text-xl sm:text-2xl text-blue-700 px-3'>
                  ⚝
                </span>
                September 16, 2006
                <span className='text-xl sm:text-2xl text-blue-700 px-3'>
                  ⚝
                </span>
              </motion.p>
              <p className="font-lora text-base sm:text-lg text-gray-900/80 font-medium">
                A day that made the world more beautiful
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{
              opacity: isLoaded ? 1 : 0,
              y: isLoaded ? 0 : 50
            }}
            transition={{
              duration: 0.8,
              delay: 0.8,
              type: "spring",
              damping: 12,
              stiffness: 100
            }}
            className="relative mb-10 sm:mb-12"
          >
            <motion.p
              className="font-lora text-lg sm:text-xl md:text-2xl text-gray-900/80 relative"
              animate={{
                color: [
                  'rgba(15, 23, 42, 0.8)',
                  'rgba(30, 64, 175, 0.9)',
                  'rgba(15, 23, 42, 0.8)'
                ]
              }}
              transition={{
                duration: 4, // Reduced duration
                repeat: Infinity,
                ease: "easeInOut"
              }}
              style={{ willChange: 'color' }}
            >
              <span className="relative z-10">"Every moment 𖹭 today sings for you"</span>
            </motion.p>

            <motion.div
              className="absolute -inset-2 bg-gradient-to-r from-sky-400/10 to-blue-800/10 rounded-lg -z-10"
              animate={{
                opacity: [0, 0.6, 0],
                scale: [0.95, 1.05, 0.95]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              style={{ willChange: 'transform, opacity' }}
            />
          </motion.div>
        </motion.div>

        {/* Enhanced Photo Gallery with more sophisticated animations */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{
            opacity: isLoaded ? 1 : 0,
            scale: isLoaded ? 1 : 0.8
          }}
          transition={{
            duration: 1.2,
            delay: 0.5,
            type: "spring",
            stiffness: 100,
            damping: 15
          }}
          className="flex justify-center gap-4 sm:gap-8 mb-12 sm:mb-14"
        >
          <motion.div
            className="relative group"
            whileHover={{
              scale: isMobile ? 1.05 : 1.15,
              rotate: isMobile ? 3 : 6,
              transition: {
                type: "spring",
                stiffness: 300,
                damping: 20
              }
            }}
            animate={{
              y: [-5, 5, -5],
            }}
            transition={{
              y: {
                duration: 4,
                repeat: Infinity,
                delay: 0,
                ease: "easeInOut"
              }
            }}
            style={{ willChange: 'transform' }}
          >
            <div className="absolute -inset-2 bg-gradient-to-r from-sky-400/40 to-blue-800/40 rounded-3xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            <img
              src={image_1}
              alt="Shraddha"
              className="relative w-32 h-40 sm:w-40 sm:h-48 md:w-48 md:h-60 object-cover rounded-3xl shadow-2xl glass-card border-2 border-gray-300/40 transition-all duration-700"
            />

            <motion.div
              className="absolute -top-3 -right-3"
              animate={{
                scale: [1, 1.3, 1],
                rotate: [0, 15, 0]
              }}
              transition={{
                duration: 2, // Reduced duration
                repeat: Infinity,
                ease: "easeInOut"
              }}
              style={{ willChange: 'transform' }}
            >
              <Heart className="w-5 h-5 sm:w-7 sm:h-7 text-blue-800 fill-current drop-shadow-lg" />
            </motion.div>
          </motion.div>

          <motion.div
            className="relative mt-4 sm:mt-8 group"
            whileHover={{
              scale: isMobile ? 1.05 : 1.15,
              rotate: isMobile ? -3 : -6,
              transition: {
                type: "spring",
                stiffness: 300,
                damping: 20
              }
            }}
            animate={{
              y: [5, -5, 5],
            }}
            transition={{
              y: {
                duration: 4, // Reduced duration
                repeat: Infinity,
                delay: 1.2,
                ease: "easeInOut"
              }
            }}
            style={{ willChange: 'transform' }}
          >
            <div className="absolute -inset-2 bg-gradient-to-r from-blue-800/40 to-sky-400/40 rounded-3xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            <img
              src={image_2}
              alt="Shraddha"
              className="relative w-32 h-40 sm:w-40 sm:h-48 md:w-48 md:h-60 object-cover rounded-3xl shadow-2xl glass-card border-2 border-gray-300/40 transition-all duration-700"
            />

            <motion.div
              className="absolute -top-3 -left-3"
              animate={{
                scale: [1, 1.3, 1],
                rotate: [0, -15, 0]
              }}
              transition={{
                duration: 2, // Reduced duration
                repeat: Infinity,
                delay: 0.7,
                ease: "easeInOut"
              }}
              style={{ willChange: 'transform' }}
            >
              <Heart className="w-5 h-5 sm:w-7 sm:h-7 text-sky-800 fill-current drop-shadow-lg" />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;