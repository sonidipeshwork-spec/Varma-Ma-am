import { motion, useScroll, useTransform } from 'framer-motion';
import { Heart, Infinity, Star, Sparkles, Gift, Crown, Flower } from 'lucide-react';

const FutureSection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-midnight-black via-royal-blue/90 to-sky-blue/80 relative overflow-hidden min-h-screen flex items-center">
      {/* Modern Grid Background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-gradient-to-br from-pure-white/5 to-transparent"></div>
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, hsl(var(--sky-blue)) 0%, transparent 50%), 
                           radial-gradient(circle at 75% 75%, hsl(var(--royal-blue)) 0%, transparent 50%)`
        }}></div>
      </div>

      {/* Animated Starry Background */}
      <div className="absolute inset-0">
        {Array.from({ length: 80 }, (_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${1 + Math.random() * 3}px`,
              height: `${1 + Math.random() * 3}px`,
              backgroundColor: 'hsl(var(--pure-white))',
            }}
            animate={{
              opacity: [0.2, 0.8, 0.2],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 2 + Math.random() * 3,
              delay: Math.random() * 5,
            }}
          />
        ))}
      </div>

      {/* Modern Floating Elements with Enhanced Animations */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-20 left-20 text-3xl text-sky-blue/40"
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 6 }}
        >❄️</motion.div>
        <motion.div
          className="absolute top-40 right-32 text-4xl text-pure-white/30"
          animate={{ y: [0, -25, 0] }}
          transition={{ duration: 7, delay: 1 }}
        >✿</motion.div>
        <motion.div
          className="absolute bottom-32 left-1/4 text-3xl text-sky-blue/50"
          animate={{ y: [0, -30, 0] }}
          transition={{ duration: 8, delay: 2 }}
        >💙</motion.div>
        <motion.div
          className="absolute bottom-20 right-20 text-3xl text-pure-white/40"
          animate={{ y: [0, -15, 0] }}
          transition={{ duration: 5, delay: 3 }}
        >🌸</motion.div>
        <motion.div
          className="absolute top-1/3 right-1/4 text-2xl text-royal-blue/30"
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 6, delay: 1 }}
        >⭐</motion.div>
        <motion.div
          className="absolute bottom-1/3 left-1/3 text-2xl text-sky-blue/40"
          animate={{ y: [0, -25, 0] }}
          transition={{ duration: 7, delay: 3 }}
        >🤍</motion.div>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-sky-blue/30 rounded-full"
            animate={{
              x: [0, 100, 0],
              y: [0, -100, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 8 + i * 0.5,
              delay: i * 0.3,
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main Content */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >

            <h2 className="font-playfair text-5xl md:text-7xl font-bold text-white mb-6 bg-gradient-to-r from-pure-white via-sky-blue to-pure-white bg-clip-text text-transparent animate-shimmer">
              Future & Forever
            </h2>
            <p className="font-vibes text-2xl md:text-3xl text-sky-blue/90 mb-8">
              Where every tomorrow begins with you
            </p>

            {/* Enhanced Icon Animation */}
            <div className="flex items-center justify-center gap-6 mb-12">
              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 20, ease: "linear" }}
                className="relative"
              >
                <div className="absolute -inset-2 bg-sky-blue/30 rounded-full blur-md"></div>
                <Heart className="w-8 h-8 text-sky-blue fill-current relative z-10" />
              </motion.div>

              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2 }}
                className="relative"
              >
                <div className="absolute -inset-2 bg-pure-white/30 rounded-full blur-md"></div>
                <Infinity className="w-12 h-12 text-pure-white relative z-10" />
              </motion.div>

              <motion.div
                animate={{ rotate: [0, -360] }}
                transition={{ duration: 20, ease: "linear" }}
                className="relative"
              >
                <div className="absolute -inset-2 bg-sky-blue/30 rounded-full blur-md"></div>
                <Heart className="w-8 h-8 text-sky-blue fill-current relative z-10" />
              </motion.div>
            </div>
          </motion.div>

          {/* Main Message */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1 }}
            className="glass-card p-8 md:p-12 rounded-3xl mb-12 relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-pure-white/10 to-sky-blue/20 rounded-3xl"></div>

            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
              <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgdmlld0JveD0iMCAwIDYwIDYwIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48Y2lyY2xlIGN4PSI3IiBjeT0iNyIgcj0iMSIvPjwvZz48L2c+PC9zdmc+')]"></div>
            </div>

            <div className="relative z-10">
              <motion.p
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.3 }}
                className="font-vibes text-3xl md:text-4xl text-pure-white mb-8 leading-relaxed text-center"
              >
                "This is only the beginning of your Beautiful Life, Ma'am ji"
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 1 }}
                className="mt-12 p-8 rounded-3xl bg-gradient-to-r from-pure-white/10 to-sky-blue/20 border border-pure-white/20 relative overflow-hidden"
              >
                {/* Shimmer Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-pure-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out"></div>

                <p className="font-lora text-xl md:text-2xl text-pure-white leading-relaxed text-center relative z-10">
                  <span className="font-vibes text-3xl text-sky-blue">Varma Ma'am</span><br />
                  Take care of your beautiful smile. Aapki muskaan aur innocence aapko hamesha sabse alag banati hai. Aapke chhote-chhote gestures mein jo positivity hai, woh bhoot special hain. Sach toh yeh hai ki aapki simplicity hi aapki asli khoobsurti hai. Aap jitne pyaare ho, utna hi mushkil hai aapki tarif ko shabdon mein sametna. Isliye bas itna hi kahunga, aaj ka din poori tarah se aapka hai, ise waise hi enjoy karna jaisa apnae plan kiya hain.
                </p>
              </motion.div>
            </div>
          </motion.div>

          {/* Signature with Enhanced Animation */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 1.5 }}
            className="text-center"
          >
            <p className="font-vibes text-4xl text-sky-blue mb-4">
              With all Love and Wishes,
            </p>

            <motion.div
              className="relative inline-block"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="absolute -inset-4 bg-gradient-to-r from-sky-blue/30 to-royal-blue/30 rounded-full blur-md"></div>
              <p className="font-vibes text-3xl text-pure-white mb-4 relative z-10">
                🤍 Happiest Birthday 🤍
              </p>
            </motion.div>

            <div className="mt-8 space-y-2">
              <p className="font-lora text-base text-sky-blue/80">
                A day as special and beautiful as you, Miss Shraddha Varma
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      <style>{`
        .glass-card {
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.2);
          box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.2);
        }
        @keyframes shimmer {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-shimmer {
          background-size: 200% 200%;
          animation: shimmer 3s ease infinite;
        }
      `}</style>
    </section>
  );
};

export default FutureSection;