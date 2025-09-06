import { useState, useEffect, useRef, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, Sparkles, Gift, Star, Crown, Flower } from 'lucide-react';

const ComplimentMachine = () => {
  const compliments = useMemo(() => [
    "Aapko describe karne ke liye dictionary bhi overtime kare 📖😂",
    "Aapki smile andheri se andheri raat ko bhi roshan kar de 🌟",
    "You have the Most Beautiful Heart in this World 💕",
    "Aap simple moments ko bhi magical bana dete ho ✨",
    "Aapki laugh sabse cute awaaz hai 🎵",
    "Aap sabse zayada caring insaan ho 🤗",
    "Chocolate bhi sochti hai — 'yaar main itni sweet kaise hoon jab ye exist karti hain' 🍫",
    "Aapki aankhon ki chamak raat ke sitaron se bhi zyada hai ⭐",
    "Aapka andaaz ekdum royal aur classy hai 👑",
    "Aapki kindness sabke dil ko chhoo jaati hai 🌸",
    "Aap bohot strong aur inspiring hai 💪",
    "Aapki awaaz sabse pyaari hai 🎶",
    "Aapki presence sab kuch better bana deti hai 🌈",
    "Aap ho perfection ki puri definition 💎"
  ], []);

  const colors = useMemo(() => [
    'from-rose-400 to-pink-600',
    'from-sky-blue to-royal-blue',
    'from-amber-400 to-orange-500',
    'from-emerald-400 to-teal-600'
  ], []);

  const [currentCompliment, setCurrentCompliment] = useState('');
  const [floatingCompliments, setFloatingCompliments] = useState<Array<{ id: number; text: string; x: number; color: string }>>([]);
  const [hearts, setHearts] = useState<Array<{ id: number; x: number; y: number; size: number }>>([]);
  const [buttonScale, setButtonScale] = useState(1);
  const [sparkles, setSparkles] = useState<Array<{ id: number; x: number; y: number; size: number }>>([]);
  const containerRef = useRef<HTMLDivElement>(null);

  const getRandomCompliment = () => {
    const randomIndex = Math.floor(Math.random() * compliments.length);
    return compliments[randomIndex];
  };

  const getRandomColor = () => {
    return colors[Math.floor(Math.random() * colors.length)];
  };

  const addFloatingCompliment = (text: string) => {
    const newCompliment = {
      id: Date.now(),
      text,
      x: Math.random() * 80 + 10,
      color: getRandomColor()
    };
    setFloatingCompliments(prev => [...prev, newCompliment]);
    setTimeout(() => {
      setFloatingCompliments(prev => prev.filter(c => c.id !== newCompliment.id));
    }, 3000);
  };

  const addHeart = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const size = Math.random() * 20 + 10;
    const newHeart = {
      id: Date.now(),
      x,
      y,
      size
    };
    setHearts(prev => [...prev, newHeart]);
    setTimeout(() => {
      setHearts(prev => prev.filter(h => h.id !== newHeart.id));
    }, 2000);
  };

  const addSparkles = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const newSparkles = Array.from({ length: 5 }, (_, i) => ({
      id: Date.now() + i,
      x: x + (Math.random() - 0.5) * 100,
      y: y + (Math.random() - 0.5) * 100,
      size: Math.random() * 15 + 5
    }));

    setSparkles(prev => [...prev, ...newSparkles]);
    setTimeout(() => {
      setSparkles(prev => prev.filter(s => !newSparkles.some(ns => ns.id === s.id)));
    }, 1500);
  };

  const generateCompliment = () => {
    setButtonScale(0.95);
    setTimeout(() => setButtonScale(1), 200);
    const compliment = getRandomCompliment();
    setCurrentCompliment(compliment);
    addFloatingCompliment(compliment);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      generateCompliment();
    }, 7000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    generateCompliment();
  }, []);

  return (
    <section
      ref={containerRef}
      className="py-20 bg-gradient-to-br from-royal-blue/10 via-sky-blue/20 to-pure-white relative overflow-hidden min-h-screen"
      onClick={(e) => {
        addHeart(e);
        addSparkles(e);
      }}
    >
      {/* Background Pattern with Enhanced Animations */}
      <div className="absolute inset-0 opacity-10">
        <motion.div
          className="absolute top-20 left-10 text-6xl"
          animate={{
            y: [0, -20, 0],
            rotate: [0, 10, 0]
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          style={{ willChange: 'transform' }}
        >💖</motion.div>
        <motion.div
          className="absolute top-40 right-20 text-8xl"
          animate={{
            y: [0, -25, 0],
            rotate: [0, -15, 0]
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            delay: 1,
            ease: "easeInOut"
          }}
          style={{ willChange: 'transform' }}
        >💝</motion.div>
        <motion.div
          className="absolute bottom-20 left-1/4 text-7xl"
          animate={{
            y: [0, -30, 0],
            rotate: [0, 15, 0]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            delay: 2,
            ease: "easeInOut"
          }}
          style={{ willChange: 'transform' }}
        >🌸</motion.div>
        <motion.div
          className="absolute bottom-40 right-1/3 text-6xl"
          animate={{
            y: [0, -15, 0],
            rotate: [0, -10, 0]
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            delay: 3,
            ease: "easeInOut"
          }}
          style={{ willChange: 'transform' }}
        >🌙</motion.div>
      </div>

      {/* Floating Hearts on Click */}
      <AnimatePresence>
        {hearts.map((heart) => (
          <motion.div
            key={heart.id}
            initial={{
              opacity: 1,
              y: 0,
              x: 0,
              scale: 0
            }}
            animate={{
              opacity: [1, 1, 0],
              y: -100,
              x: heart.x > window.innerWidth / 2 ? heart.x + 50 : heart.x - 50,
              scale: [0, 1, 0.8]
            }}
            exit={{ opacity: 0 }}
            transition={{
              duration: 2,
              ease: "easeInOut"
            }}
            className="absolute pointer-events-none"
            style={{
              left: heart.x,
              top: heart.y,
              fontSize: heart.size,
              willChange: 'transform, opacity'
            }}
          >
            <Heart className="text-rose-500 fill-current" />
          </motion.div>
        ))}
      </AnimatePresence>

      {/* Floating Sparkles on Click */}
      <AnimatePresence>
        {sparkles.map((sparkle) => (
          <motion.div
            key={sparkle.id}
            initial={{
              opacity: 1,
              scale: 0
            }}
            animate={{
              opacity: [1, 1, 0],
              scale: [0, 1, 0],
              rotate: [0, 180]
            }}
            exit={{ opacity: 0 }}
            transition={{
              duration: 1.5,
              ease: "easeInOut"
            }}
            className="absolute pointer-events-none"
            style={{
              left: sparkle.x,
              top: sparkle.y,
              fontSize: sparkle.size,
              willChange: 'transform, opacity'
            }}
          >
            <Sparkles className="text-amber-400 fill-current" />
          </motion.div>
        ))}
      </AnimatePresence>

      {/* Floating Compliments */}
      <div className="absolute inset-0 pointer-events-none">
        <AnimatePresence>
          {floatingCompliments.map((compliment) => (
            <motion.div
              key={compliment.id}
              initial={{
                opacity: 0,
                y: 100,
                scale: 0.8
              }}
              animate={{
                opacity: 1,
                y: -100,
                scale: 1
              }}
              exit={{
                opacity: 0,
                y: -200,
                scale: 0.8
              }}
              transition={{
                duration: 3, // Reduced from 4s
                ease: "easeInOut"
              }}
              className="absolute bottom-0 glass-card p-4 rounded-2xl max-w-xs"
              style={{
                left: `${compliment.x}%`,
                willChange: 'transform, opacity'
              }}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${compliment.color} opacity-20 rounded-2xl`}></div>
              <p className="font-lora text-sm text-midnight-black/80 text-center relative z-10">
                {compliment.text}
              </p>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            ease: "easeInOut"
          }}
          className="text-center mb-16"
        >
          <h2 className="font-playfair text-5xl md:text-6xl font-bold text-royal-blue mb-4">
            For a Queen
          </h2>
          <p className="font-vibes text-2xl text-midnight-black/70">
            NeverEnding Compliments
          </p>
        </motion.div>

        <div className="max-w-2xl mx-auto text-center">
          {/* Main Heart Button with Enhanced Animation */}
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="mb-12"
            animate={{ scale: buttonScale }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 15
            }}
          >
            <button
              onClick={(e) => {
                e.stopPropagation();
                generateCompliment();
              }}
              className="relative w-40 h-40 mx-auto group"
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-royal-blue to-sky-blue rounded-full"
                animate={{
                  boxShadow: [
                    '0 0 15px rgba(59, 130, 246, 0.5)',
                    '0 0 25px rgba(59, 130, 246, 0.8)',
                    '0 0 15px rgba(59, 130, 246, 0.5)'
                  ]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                style={{ willChange: 'box-shadow' }}
              />
              <div className="relative w-full h-full bg-gradient-to-br from-sky-blue to-royal-blue rounded-full flex items-center justify-center border-4 border-pure-white shadow-2xl group-hover:shadow-3xl transition-all duration-300">
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  style={{ willChange: 'transform' }}
                >
                  <Heart className="w-16 h-16 text-pure-white fill-current" />
                </motion.div>
              </div>

              {/* Pulsing rings */}
              <motion.div
                className="absolute inset-0 rounded-full border-4 border-blue-300 opacity-30"
                animate={{
                  scale: [1, 1.3, 1],
                  opacity: [0.3, 0, 0.3]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                style={{ willChange: 'transform, opacity' }}
              />
              <motion.div
                className="absolute inset-0 rounded-full border-4 border-blue-300 opacity-20"
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.2, 0, 0.2]
                }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  delay: 0.5,
                  ease: "easeInOut"
                }}
                style={{ willChange: 'transform, opacity' }}
              />
            </button>
          </motion.div>

          {/* Current Compliment Display with Enhanced Animation */}
          <AnimatePresence mode="wait">
            {currentCompliment && (
              <motion.div
                key={currentCompliment}
                initial={{
                  opacity: 0,
                  scale: 0.8,
                  y: 30
                }}
                animate={{
                  opacity: 1,
                  scale: 1,
                  y: 0
                }}
                exit={{
                  opacity: 0,
                  scale: 0.8,
                  y: -30
                }}
                transition={{
                  duration: 0.7,
                  ease: "easeInOut"
                }}
                className="glass-card p-8 rounded-3xl mb-8 relative overflow-hidden"
                style={{ willChange: 'transform, opacity' }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-sky-blue/10 to-royal-blue/10 rounded-3xl" />
                <p className="font-lora text-2xl md:text-3xl text-midnight-black/90 leading-relaxed relative z-10">
                  {currentCompliment}
                </p>

                {/* Decorative Elements */}
                <motion.div
                  className="absolute top-4 left-4 text-royal-blue/30 text-2xl"
                  animate={{
                    scale: [1, 1.2, 1],
                    rotate: [0, 10, -10, 0]
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  style={{ willChange: 'transform' }}
                >💕</motion.div>
                <motion.div
                  className="absolute bottom-4 right-4 text-sky-blue/30 text-2xl"
                  animate={{
                    scale: [1, 1.2, 1],
                    rotate: [0, -10, 10, 0]
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: 1,
                    ease: "easeInOut"
                  }}
                  style={{ willChange: 'transform' }}
                >💕</motion.div>

                {/* Shimmer Effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-pure-white/30 to-transparent -translate-x-full"
                  animate={{ translateX: ['0%', '200%'] }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    repeatDelay: 3,
                    ease: "easeInOut"
                  }}
                  style={{ willChange: 'transform' }}
                />

                {/* Floating icons */}
                <motion.div
                  className="absolute top-2 right-2 text-blue-400"
                  animate={{
                    y: [0, -10, 0],
                    rotate: [0, 15, -15, 0]
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  style={{ willChange: 'transform' }}
                >
                  <Star className="w-6 h-6" />
                </motion.div>
                <motion.div
                  className="absolute bottom-2 left-2 text-blue-400"
                  animate={{
                    y: [0, -10, 0],
                    rotate: [0, -15, 15, 0]
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    delay: 1,
                    ease: "easeInOut"
                  }}
                  style={{ willChange: 'transform' }}
                >
                  <Flower className="w-6 h-6" />
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Romantic message instead of controls */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              delay: 1,
              duration: 1,
              ease: "easeInOut"
            }}
            className="mt-8"
          >
            <motion.div
              className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-rose-100 to-pink-100 rounded-full"
              whileHover={{
                scale: 1.05,
                boxShadow: "0 5px 15px rgba(244, 63, 94, 0.3)"
              }}
              transition={{
                type: "spring",
                stiffness: 400,
                damping: 10
              }}
            >
              <motion.div
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                style={{ willChange: 'transform' }}
              >
                <Crown className="w-5 h-5 text-amber-500" />
              </motion.div>
              <p className="font-lora text-rose-800">
                Every moment with you is special
              </p>
              <motion.div
                animate={{ rotate: [0, -10, 10, 0] }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: 1,
                  ease: "easeInOut"
                }}
                style={{ willChange: 'transform' }}
              >
                <Crown className="w-5 h-5 text-amber-500" />
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      <style>{`
        .glass-card {
          background: rgba(255, 255, 255, 0.7);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.3);
          box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.1);
          will-change: transform;
        }
        
        * {
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }
      `}</style>
    </section>
  );
};

export default ComplimentMachine;