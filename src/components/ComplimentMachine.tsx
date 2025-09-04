import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, Sparkles, Gift, Star, Crown, Flower } from 'lucide-react';

const compliments = [
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
];

const ComplimentMachine = () => {
  const [currentCompliment, setCurrentCompliment] = useState('');
  const [floatingCompliments, setFloatingCompliments] = useState<Array<{ id: number; text: string; x: number; color: string }>>([]);
  const [isAutoPlay, setIsAutoPlay] = useState(true);
  const [hearts, setHearts] = useState<Array<{ id: number; x: number; y: number; size: number }>>([]);
  const [buttonScale, setButtonScale] = useState(1);
  const containerRef = useRef<HTMLDivElement>(null);

  const getRandomCompliment = () => {
    const randomIndex = Math.floor(Math.random() * compliments.length);
    return compliments[randomIndex];
  };

  const getRandomColor = () => {
    const colors = ['from-rose-400 to-pink-600', 'from-sky-blue to-royal-blue', 'from-amber-400 to-orange-500', 'from-emerald-400 to-teal-600'];
    return colors[Math.floor(Math.random() * colors.length)];
  };

  const addFloatingCompliment = (text: string) => {
    const newCompliment = {
      id: Date.now(),
      text,
      x: Math.random() * 80 + 10, // Random position between 10% and 90%
      color: getRandomColor()
    };
    setFloatingCompliments(prev => [...prev, newCompliment]);
    // Remove after animation
    setTimeout(() => {
      setFloatingCompliments(prev => prev.filter(c => c.id !== newCompliment.id));
    }, 4000);
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

    // Remove after animation
    setTimeout(() => {
      setHearts(prev => prev.filter(h => h.id !== newHeart.id));
    }, 2000);
  };

  const generateCompliment = () => {
    // Button animation
    setButtonScale(0.95);
    setTimeout(() => setButtonScale(1), 200);

    const compliment = getRandomCompliment();
    setCurrentCompliment(compliment);
    addFloatingCompliment(compliment);
  };

  useEffect(() => {
    if (isAutoPlay) {
      const interval = setInterval(() => {
        generateCompliment();
      }, 7000);
      return () => clearInterval(interval);
    }
  }, [isAutoPlay]);

  useEffect(() => {
    // Initial compliment
    generateCompliment();
  }, []);

  return (
    <section
      ref={containerRef}
      className="py-20 bg-gradient-to-br from-royal-blue/10 via-sky-blue/20 to-pure-white relative overflow-hidden min-h-screen"
      onClick={addHeart}
    >
      {/* Background Pattern with Enhanced Animations */}
      <div className="absolute inset-0 opacity-10">
        <motion.div
          className="absolute top-20 left-10 text-6xl"
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 6, repeat: Infinity }}
        >💖</motion.div>
        <motion.div
          className="absolute top-40 right-20 text-8xl"
          animate={{ y: [0, -25, 0] }}
          transition={{ duration: 7, repeat: Infinity, delay: 1 }}
        >💝</motion.div>
        <motion.div
          className="absolute bottom-20 left-1/4 text-7xl"
          animate={{ y: [0, -30, 0] }}
          transition={{ duration: 8, repeat: Infinity, delay: 2 }}
        >🌸</motion.div>
        <motion.div
          className="absolute bottom-40 right-1/3 text-6xl"
          animate={{ y: [0, -15, 0] }}
          transition={{ duration: 5, repeat: Infinity, delay: 3 }}
        >🌙</motion.div>
      </div>

      {/* Floating Hearts on Click */}
      <AnimatePresence>
        {hearts.map((heart) => (
          <motion.div
            key={heart.id}
            initial={{ opacity: 1, y: 0, x: 0 }}
            animate={{
              opacity: 0,
              y: -100,
              x: heart.x > window.innerWidth / 2 ? heart.x + 50 : heart.x - 50
            }}
            exit={{ opacity: 0 }}
            transition={{ duration: 2, ease: "easeOut" }}
            className="absolute pointer-events-none"
            style={{
              left: heart.x,
              top: heart.y,
              fontSize: heart.size
            }}
          >
            <Heart className="text-rose-500 fill-current" />
          </motion.div>
        ))}
      </AnimatePresence>

      {/* Floating Compliments */}
      <div className="absolute inset-0 pointer-events-none">
        <AnimatePresence>
          {floatingCompliments.map((compliment) => (
            <motion.div
              key={compliment.id}
              initial={{ opacity: 0, y: 100, scale: 0.8 }}
              animate={{ opacity: 1, y: -100, scale: 1 }}
              exit={{ opacity: 0, y: -200, scale: 0.8 }}
              transition={{ duration: 4, ease: "easeOut" }}
              className="absolute bottom-0 glass-card p-4 rounded-2xl max-w-xs"
              style={{ left: `${compliment.x}%` }}
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
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-playfair text-5xl md:text-6xl font-bold text-royal-blue mb-4">
            Compliment Machine
          </h2>
          <p className="font-vibes text-2xl text-midnight-black/70">
            Endless love notes just for you
          </p>
        </motion.div>

        <div className="max-w-2xl mx-auto text-center">
          {/* Main Heart Button with Enhanced Animation */}
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="mb-12"
            animate={{ scale: buttonScale }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <button
              onClick={(e) => {
                e.stopPropagation();
                generateCompliment();
              }}
              className="relative w-32 h-32 mx-auto group"
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
                transition={{ duration: 2, repeat: Infinity }}
              />
              <div className="relative w-full h-full bg-gradient-to-br from-sky-blue to-royal-blue rounded-full flex items-center justify-center border-4 border-pure-white shadow-2xl group-hover:shadow-3xl transition-all duration-300">
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <Heart className="w-12 h-12 text-pure-white fill-current" />
                </motion.div>
              </div>
            </button>
          </motion.div>

          {/* Current Compliment Display with Enhanced Animation */}
          <AnimatePresence mode="wait">
            {currentCompliment && (
              <motion.div
                key={currentCompliment}
                initial={{ opacity: 0, scale: 0.8, y: 30 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.8, y: -30 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="glass-card p-8 rounded-3xl mb-8 relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-sky-blue/10 to-royal-blue/10 rounded-3xl" />
                <p className="font-lora text-2xl md:text-3xl text-midnight-black/90 leading-relaxed relative z-10">
                  {currentCompliment}
                </p>

                {/* Decorative Elements */}
                <div className="absolute top-4 left-4 text-royal-blue/30 text-2xl animate-pulse">💕</div>
                <div className="absolute bottom-4 right-4 text-sky-blue/30 text-2xl animate-pulse" style={{ animationDelay: '1s' }}>💕</div>

                {/* Shimmer Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-pure-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out" />
              </motion.div>
            )}
          </AnimatePresence>

          {/* Controls with Enhanced Design */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={(e) => {
                e.stopPropagation();
                generateCompliment();
              }}
              className="btn-romantic px-6 py-3 rounded-full font-medium flex items-center gap-2 group"
            >
              <Gift className="w-5 h-5 group-hover:rotate-12 transition-transform" />
              New Compliment
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                setIsAutoPlay(!isAutoPlay);
              }}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 flex items-center gap-2 ${isAutoPlay
                ? 'bg-royal-blue text-pure-white'
                : 'bg-sky-blue/20 text-royal-blue'
                }`}
            >
              {isAutoPlay ? (
                <>
                  <span className="flex h-3 w-3">
                    <span className="animate-ping absolute h-3 w-3 rounded-full bg-pure-white opacity-75"></span>
                    <span className="relative h-3 w-3 rounded-full bg-pure-white"></span>
                  </span>
                  Stop Auto
                </>
              ) : (
                <>
                  <Heart className="w-5 h-5" />
                  Start Auto
                </>
              )}
            </button>
          </div>

          <p className="font-lora text-sm text-midnight-black/60 mt-4">
            {isAutoPlay ? 'New compliments every 7 seconds' : 'Click the heart for love notes'}
          </p>

          {/* Decorative Message */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-12 glass-card p-4 rounded-2xl max-w-md mx-auto"
          >
            <p className="font-vibes text-xl text-royal-blue">
              Every compliment is a reflection of your beautiful soul
            </p>
          </motion.div>
        </div>
      </div>

      <style>{`
        .glass-card {
          background: rgba(255, 255, 255, 0.7);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.3);
          box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.1);
        }
        .btn-romantic {
          background: linear-gradient(to right, #3b82f6, #1e40af);
          color: white;
          box-shadow: 0 4px 15px 0 rgba(31, 64, 175, 0.3);
          transition: all 0.3s ease;
        }
        .btn-romantic:hover {
          box-shadow: 0 6px 20px 0 rgba(31, 64, 175, 0.4);
          transform: translateY(-2px);
        }
      `}</style>
    </section>
  );
};

export default ComplimentMachine;