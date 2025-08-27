import { motion } from 'framer-motion';
import { Heart, Infinity, Star } from 'lucide-react';

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

      {/* Starry Background */}
      <div className="absolute inset-0">
        {Array.from({ length: 80 }, (_, i) => (
          <div
            key={i}
            className="absolute rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${1 + Math.random() * 3}px`,
              height: `${1 + Math.random() * 3}px`,
              backgroundColor: 'hsl(var(--pure-white))',
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${2 + Math.random() * 3}s`
            }}
          />
        ))}
      </div>

      {/* Modern Floating Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-20 text-3xl text-sky-blue/40 animate-float">❄️</div>
        <div className="absolute top-40 right-32 text-4xl text-pure-white/30 animate-float" style={{ animationDelay: '2s' }}>✿</div>
        <div className="absolute bottom-32 left-1/4 text-3xl text-sky-blue/50 animate-float" style={{ animationDelay: '4s' }}>💙</div>
        <div className="absolute bottom-20 right-20 text-3xl text-pure-white/40 animate-float" style={{ animationDelay: '6s' }}>🌸</div>
        <div className="absolute top-1/3 right-1/4 text-2xl text-royal-blue/30 animate-float" style={{ animationDelay: '1s' }}>⭐</div>
        <div className="absolute bottom-1/3 left-1/3 text-2xl text-sky-blue/40 animate-float" style={{ animationDelay: '3s' }}>🤍</div>
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

            <div className="flex items-center justify-center gap-6 mb-12">
              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
              >
                <Heart className="w-8 h-8 text-sky-blue fill-current" />
              </motion.div>
              <motion.div
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
              >
                <Infinity className="w-12 h-12 text-pure-white" />
              </motion.div>
              <motion.div
                animate={{ rotate: [0, -360] }}
                transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
              >
                <Heart className="w-8 h-8 text-sky-blue fill-current" />
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
            <div className="absolute inset-0 bg-gradient-to-br from-pure-white/10 to-sky-blue/20 rounded-3xl" />

            <div className="relative z-10">
              <motion.p
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.3 }}
                className="font-vibes text-3xl md:text-4xl text-pure-white mb-8 leading-relaxed text-center"
              >
                "This is only the beginning of forever with you, Shraddha"
              </motion.p>

              <div className="grid md:grid-cols-2 gap-8 font-lora text-lg md:text-xl text-sky-blue/90 leading-relaxed">
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                  className="space-y-4"
                >
                  <p>
                    <span className="text-pure-white font-semibold">Today, September 16th, 2024,</span> marks not just your 18th birthday,
                    but the dawn of infinite possibilities. Every sunrise whispers your name,
                    every star in the night sky reflects your brilliance.
                  </p>

                  <p>
                    <span className="text-pure-white font-semibold">Your journey from childhood to now</span> has been a masterpiece
                    in the making. From your first word to your first day of college,
                    each moment has sculpted the extraordinary woman you've become.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.7 }}
                  className="space-y-4"
                >
                  <p>
                    <span className="text-pure-white font-semibold">As you step into adulthood,</span> remember that your potential
                    knows no bounds. Your intelligence illuminates every room you enter,
                    your kindness touches every heart you meet.
                  </p>

                  <p>
                    <span className="text-pure-white font-semibold">The world awaits your magic.</span> Every dream you dare to chase
                    will bend to your will, every goal you set will bow to your determination.
                    You are destined for greatness, my love.
                  </p>
                </motion.div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 1 }}
                className="mt-12 p-8 rounded-3xl bg-gradient-to-r from-pure-white/10 to-sky-blue/20 border border-pure-white/20"
              >
                <p className="font-lora text-xl md:text-2xl text-pure-white leading-relaxed text-center">
                  <span className="font-vibes text-3xl text-sky-blue">Happy 18th Birthday, Shraddha Varma.</span><br />
                  May this year paint your world with endless joy, fill your days with magical adventures,
                  crown your academic journey with success, and surround you with all the love
                  your beautiful heart deserves. Here's to new chapters written in starlight,
                  dreams materializing into reality, and a future as radiant as your smile.
                </p>
              </motion.div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute top-4 left-4 text-sky-blue/30 text-3xl animate-pulse">🌸</div>
            <div className="absolute top-4 right-4 text-pure-white/30 text-3xl animate-pulse">🤍</div>
            <div className="absolute bottom-4 left-4 text-pure-white/30 text-3xl animate-pulse">⭐</div>
            <div className="absolute bottom-4 right-4 text-sky-blue/30 text-3xl animate-pulse">💕</div>
          </motion.div>

          {/* Signature */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 1.5 }}
            className="text-center"
          >
            <p className="font-vibes text-4xl text-sky-blue mb-4">
              With all Love and Wishes,
            </p>
            <p className="font-vibes text-5xl text-pure-white mb-4">
              🤍 Happiest Birthday 🤍
            </p>

            <div className="mt-8 space-y-2">
              <p className="font-lora text-lg text-pure-white/70">
                19th Birthday
              </p>
              <p className="font-lora text-base text-sky-blue/80">
                A day as special and beautiful as you, Miss Shraddha Varma
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FutureSection;