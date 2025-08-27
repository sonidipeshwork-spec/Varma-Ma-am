import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, Sparkles } from 'lucide-react';

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
  const [floatingCompliments, setFloatingCompliments] = useState<Array<{ id: number; text: string; x: number }>>([]);
  const [isAutoPlay, setIsAutoPlay] = useState(true);

  const getRandomCompliment = () => {
    const randomIndex = Math.floor(Math.random() * compliments.length);
    return compliments[randomIndex];
  };

  const addFloatingCompliment = (text: string) => {
    const newCompliment = {
      id: Date.now(),
      text,
      x: Math.random() * 80 + 10 // Random position between 10% and 90%
    };

    setFloatingCompliments(prev => [...prev, newCompliment]);

    // Remove after animation
    setTimeout(() => {
      setFloatingCompliments(prev => prev.filter(c => c.id !== newCompliment.id));
    }, 4000);
  };

  const generateCompliment = () => {
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
    <section className="py-20 bg-gradient-to-br from-royal-blue/10 via-sky-blue/20 to-pure-white relative overflow-hidden min-h-screen">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 text-6xl animate-float">💖</div>
        <div className="absolute top-40 right-20 text-8xl animate-float" style={{ animationDelay: '2s' }}>💝</div>
        <div className="absolute bottom-20 left-1/4 text-7xl animate-float" style={{ animationDelay: '4s' }}>🌸</div>
        <div className="absolute bottom-40 right-1/3 text-6xl animate-float" style={{ animationDelay: '6s' }}>🌙</div>
      </div>

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
              <p className="font-lora text-sm text-midnight-black/80 text-center">
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
          {/* Main Heart Button */}
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="mb-12"
          >
            <button
              onClick={generateCompliment}
              className="relative w-32 h-32 mx-auto group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-royal-blue to-sky-blue rounded-full animate-pulse-glow" />
              <div className="relative w-full h-full bg-gradient-to-br from-sky-blue to-royal-blue rounded-full flex items-center justify-center border-4 border-pure-white shadow-2xl group-hover:shadow-3xl transition-all duration-300">
                <Heart className="w-12 h-12 text-pure-white fill-current animate-pulse" />
              </div>
              <Sparkles className="absolute -top-2 -right-2 w-8 h-8 text-silver-accent animate-pulse" />
            </button>
          </motion.div>

          {/* Current Compliment Display */}
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
                <div className="absolute top-4 left-4 text-royal-blue/30 text-2xl">💕</div>
                <div className="absolute bottom-4 right-4 text-sky-blue/30 text-2xl">💕</div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Controls */}
          <div className="flex items-center justify-center gap-6">
            <button
              onClick={generateCompliment}
              className="btn-romantic px-6 py-3 rounded-full font-medium"
            >
              New Compliment
            </button>

            <button
              onClick={() => setIsAutoPlay(!isAutoPlay)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${isAutoPlay
                ? 'bg-royal-blue text-pure-white'
                : 'bg-sky-blue/20 text-royal-blue'
                }`}
            >
              {isAutoPlay ? 'Stop Auto' : 'Start Auto'}
            </button>
          </div>

          <p className="font-lora text-sm text-midnight-black/60 mt-4">
            {isAutoPlay ? 'New compliments every 7 seconds' : 'Click the heart for love notes'}
          </p>
        </div>
      </div>
    </section>
  );
};

export default ComplimentMachine;