import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Heart, Sparkles } from 'lucide-react';
import heroImage from '@/assets/hero-bg.jpg';
import image_1 from '@/assets/image_1.png';
import image_2 from '@/assets/image_2.png';

const HeroSection = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 500);

    // Check if mobile
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

  // Adjust particle count based on screen size
  const particleCount = isMobile ? 10 : 20;
  const sparkleCount = isMobile ? 4 : 8;

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Custom CSS */}
      <style>{`
        @keyframes subtleFloat {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        
        @keyframes gradient-x {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        
        .animate-gradient-x {
          background-size: 200% 200%;
          animation: gradient-x 3s ease infinite;
        }
        
        .bg-gradient-radial {
          background: radial-gradient(circle, var(--tw-gradient-from), var(--tw-gradient-to));
        }
        
        .glass-card {
          background: rgba(255, 255, 255, 0.25);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.18);
        }
        
        .text-shimmer {
          background: linear-gradient(90deg, #0ea5e9, #1e40af, #0ea5e9);
          background-size: 200% 200%;
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
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
      `}</style>

      {/* Animated Background Particles - Reduced on mobile */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(particleCount)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-sky-400/20 rounded-full"
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

      {/* Background Image with Responsive Effects */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40"
        style={{
          backgroundImage: `url(${heroImage})`,
          animation: 'subtleFloat 20s ease-in-out infinite',
          transform: isMobile ? 'scale(1.05)' : 'scale(1.1)'
        }}
      />

      {/* Multiple Gradient Overlays for Depth */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/90 via-sky-400/70 to-blue-800/90" />
      <div className="absolute inset-0 bg-gradient-radial from-transparent via-sky-400/10 to-blue-800/20" />
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900/10 via-transparent to-white/20" />

      {/* Floating Sparkles - Reduced on mobile */}
      <div className="absolute inset-0">
        {[...Array(sparkleCount)].map((_, i) => (
          <motion.div
            key={`sparkle-${i}`}
            className="absolute text-sky-400/60"
            animate={{
              y: [-20, 40, -20],
              rotate: [0, 180, 360],
              scale: [0.5, 1, 0.5],
              opacity: [0.3, 1, 0.3],
            }}
            transition={{
              duration: 4 + i * 0.5,
              repeat: Infinity,
              delay: i * 0.8,
            }}
            style={{
              left: `${20 + i * 10}%`,
              top: `${30 + (i % 3) * 20}%`,
            }}
          >
            <Sparkles className="w-4 h-4" />
          </motion.div>
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-20 text-center px-4 sm:px-6 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 50 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        >
          {/* Enhanced Title with Responsive Sizing */}
          <div className="relative mb-6 sm:mb-8">
            <motion.h1
              className="font-playfair text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold relative"
              animate={{
                textShadow: [
                  '0 0 10px rgba(59, 130, 246, 0.3)',
                  '0 0 20px rgba(59, 130, 246, 0.5)',
                  '0 0 10px rgba(59, 130, 246, 0.3)'
                ]
              }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              <span className="text-shimmer animate-gradient-x">
                Happy Birthday
              </span>
            </motion.h1>
          </div>

          {/* Enhanced Name Section with Responsive Sizing */}
          <div className="relative flex flex-col-reverse space-y-reverse mb-6 sm:mb-8">
            <motion.h2
              className="font-vibes text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-blue-800 mb-4 relative z-10"
              animate={{
                filter: [
                  'drop-shadow(0 0 10px rgba(30, 64, 175, 0.3))',
                  'drop-shadow(0 0 20px rgba(30, 64, 175, 0.6))',
                  'drop-shadow(0 0 10px rgba(30, 64, 175, 0.3))'
                ]
              }}
              transition={{ duration: 4, repeat: Infinity }}
            >
              Miss Princess, Shruu Ji
            </motion.h2>
            <motion.div
              className="absolute inset-0 rounded-full blur-3xl bg-gradient-radial from-sky-400/40 via-sky-400/20 to-transparent"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{ duration: 3, repeat: Infinity }}
            />
          </div>

          {/* Enhanced Glass Card with Responsive Padding */}
          <motion.div
            className="glass-card p-4 sm:p-6 rounded-3xl mb-8 sm:mb-10 inline-block relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-sky-400/10 to-blue-800/10 opacity-50" />
            <div className="relative z-10">
              <motion.p
                className="font-vibes text-xl sm:text-2xl md:text-3xl text-blue-600 mb-3"
                animate={{
                  textShadow: [
                    '0 0 5px rgba(14, 165, 233, 0.3)',
                    '0 0 15px rgba(14, 165, 233, 0.6)',
                    '0 0 5px rgba(14, 165, 233, 0.3)'
                  ]
                }}
                transition={{ duration: 2.5, repeat: Infinity }}
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

          {/* Enhanced Quote with Responsive Sizing */}
          <motion.p
            className="font-lora text-lg sm:text-xl md:text-2xl text-gray-900/80 mb-10 sm:mb-12 relative"
            animate={{
              color: [
                'rgba(15, 23, 42, 0.8)',
                'rgba(30, 64, 175, 0.9)',
                'rgba(15, 23, 42, 0.8)'
              ]
            }}
            transition={{ duration: 4, repeat: Infinity }}
          >
            <span className="relative z-10">"Every moment 𖹭 today sings for you"</span>
            <motion.div
              className="absolute -inset-2 bg-gradient-to-r from-sky-400/5 to-blue-800/5 rounded-lg -z-10"
              animate={{ opacity: [0, 0.5, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
            />
          </motion.p>
        </motion.div>

        {/* Enhanced Photo Gallery with Responsive Sizing */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: isLoaded ? 1 : 0, scale: isLoaded ? 1 : 0.8 }}
          transition={{ duration: 1.2, delay: 0.5 }}
          className="flex justify-center gap-4 sm:gap-8 mb-12 sm:mb-14"
        >
          <motion.div
            className="relative group"
            whileHover={{
              scale: isMobile ? 1.05 : 1.15,
              rotate: isMobile ? 3 : 6,
              transition: { type: "spring", stiffness: 300 }
            }}
            animate={{
              y: [-5, 5, -5],
            }}
            transition={{
              y: { duration: 4, repeat: Infinity, delay: 0 }
            }}
          >
            <div className="absolute -inset-2 bg-gradient-to-r from-sky-400/30 to-blue-800/30 rounded-3xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <img
              src={image_1}
              alt="Shraddha"
              className="relative w-24 h-32 sm:w-32 sm:h-40 md:w-40 md:h-48 object-cover rounded-3xl shadow-2xl glass-card border-2 border-gray-300/40 transition-all duration-500"
            />
            <motion.div
              className="absolute -top-3 -right-3"
              animate={{
                scale: [1, 1.3, 1],
                rotate: [0, 15, 0]
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Heart className="w-5 h-5 sm:w-7 sm:h-7 text-blue-800 fill-current drop-shadow-lg" />
            </motion.div>
          </motion.div>

          <motion.div
            className="relative mt-4 sm:mt-8 group"
            whileHover={{
              scale: isMobile ? 1.05 : 1.15,
              rotate: isMobile ? -3 : -6,
              transition: { type: "spring", stiffness: 300 }
            }}
            animate={{
              y: [5, -5, 5],
            }}
            transition={{
              y: { duration: 4, repeat: Infinity, delay: 1 }
            }}
          >
            <div className="absolute -inset-2 bg-gradient-to-r from-blue-800/30 to-sky-400/30 rounded-3xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <img
              src={image_2}
              alt="Shraddha"
              className="relative w-24 h-32 sm:w-32 sm:h-40 md:w-40 md:h-48 object-cover rounded-3xl shadow-2xl glass-card border-2 border-gray-300/40 transition-all duration-500"
            />
            <motion.div
              className="absolute -top-3 -left-3"
              animate={{
                scale: [1, 1.3, 1],
                rotate: [0, -15, 0]
              }}
              transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
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