import { motion, useScroll, useTransform } from 'framer-motion';
import { Heart, Star, Sparkles, Gift, Crown } from 'lucide-react';
import image_1 from "@/assets/image_1.png";
import image_2 from "@/assets/image_2.png";
import image_3 from "@/assets/image_3.jpg";
import image_4 from "@/assets/image_4.jpg";
import image_5 from "@/assets/image_5.jpg";
import image_6 from "@/assets/image_6.jpg";
import image_7 from "@/assets/image_7.jpg";
import image_8 from "@/assets/image_8.jpg";
import image_9 from "@/assets/image_9.jpg";
import image_10 from "@/assets/image_10.jpg";

const CollageSection = () => {
  const collageImages = [
    image_1,
    image_2,
    image_3,
    image_4,
    image_5,
    image_6,
    image_7,
    image_8,
    image_9,
    image_10
  ];

  return (
    <section className="py-12 md:py-16 lg:py-20 bg-gradient-to-br from-royal-blue/5 via-sky-blue/10 to-pure-white relative overflow-hidden">
      {/* Enhanced Background Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating Particles */}
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

        {/* Decorative Icons */}
        <motion.div
          className="absolute top-10 left-5 md:top-20 md:left-10 text-4xl md:text-6xl"
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 6, repeat: Infinity }}
        >🤍</motion.div>
        <motion.div
          className="absolute top-20 right-10 md:top-40 md:right-20 text-5xl md:text-8xl"
          animate={{ y: [0, -25, 0] }}
          transition={{ duration: 7, repeat: Infinity, delay: 1 }}
        >✨</motion.div>
        <motion.div
          className="absolute bottom-10 left-1/4 md:bottom-20 text-4xl md:text-7xl"
          animate={{ y: [0, -30, 0] }}
          transition={{ duration: 8, repeat: Infinity, delay: 2 }}
        >❣️</motion.div>
      </div>

      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-8 md:mb-12 lg:mb-16"
        >

          <h2 className="font-playfair text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-royal-blue mb-4">
            Beautiful Collage
          </h2>
          <p className="font-vibes text-xl md:text-2xl text-midnight-black/70">
            A mosaic of precious moments
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          {/* Main Collage Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="relative bg-gradient-to-br from-pure-white to-sky-blue/20 rounded-2xl md:rounded-3xl p-6 md:p-8 lg:p-12 shadow-2xl overflow-hidden"
          >
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
              <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgdmlld0JveD0iMCAwIDYwIDYwIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMwMDAiIGZpbGwtb3BhY2l0eT0iMC4xIj48Y2lyY2xlIGN4PSI3IiBjeT0iNyIgcj0iMSIvPjwvZz48L2c+PC9zdmc+')]"></div>
            </div>

            {/* Creative Collage Layout - Heart Shape */}
            <div className="relative min-h-[500px] md:min-h-[600px] lg:min-h-[700px] flex items-center justify-center">
              {/* Center Main Portrait */}
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
                className="relative z-30 group"
              >
                <div className="w-60 h-70 md:w-66 md:h-90 lg:w-72 lg:h-96 rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl border-4 border-pure-white transform hover:scale-110 hover:rotate-3 transition-all duration-500 ease-out bg-gradient-to-br from-sky-blue/20 to-royal-blue/20 hover:z-50">
                  <img
                    src={collageImages[0]}
                    alt="Shruu"
                    className="w-full h-full object-cover filter brightness-110 transform hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Decorative Elements */}
                <motion.div
                  className="absolute -top-4 -right-4 w-8 h-8 md:w-12 md:h-12 bg-gradient-to-br from-royal-blue to-sky-blue rounded-full flex items-center justify-center shadow-lg"
                  animate={{
                    scale: [1, 1.2, 1],
                    rotate: [0, 10, 0]
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  <Heart className="w-4 h-4 md:w-6 md:h-6 text-pure-white fill-current" />
                </motion.div>

                <motion.div
                  className="absolute -bottom-4 -left-4 w-6 h-6 md:w-10 md:h-10 bg-gradient-to-br from-sky-blue to-pure-white rounded-full flex items-center justify-center shadow-lg"
                  animate={{
                    scale: [1, 1.2, 1],
                    rotate: [0, -10, 0]
                  }}
                  transition={{ duration: 3, repeat: Infinity, delay: 1 }}
                >
                  <Star className="w-3 h-3 md:w-5 md:h-5 text-royal-blue fill-current" />
                </motion.div>
              </motion.div>

              {/* Heart Shape Left Side - Upper */}
              <motion.div
                initial={{ opacity: 0, x: -50, y: -40, rotate: -20 }}
                whileInView={{ opacity: 1, x: -175, y: -80, rotate: -15 }}
                transition={{ duration: 0.8, delay: 0.7 }}
                className="absolute z-20 group"
              >
                <div className="w-28 h-40 md:w-36 md:h-48 lg:w-48 lg:h-60 rounded-2xl overflow-hidden shadow-xl border-4 border-pure-white transform hover:scale-115 hover:rotate-6 transition-all duration-500 ease-out bg-gradient-to-br from-sky-blue/10 to-royal-blue/10 hover:z-50">
                  <img
                    src={collageImages[1]}
                    alt="Beautiful Moment"
                    className="w-full h-full object-cover filter brightness-105 transform hover:scale-110 transition-transform duration-500"
                  />
                </div>

                <motion.div
                  className="absolute -top-3 -left-3 w-6 h-6 md:w-8 md:h-8 text-sky-blue fill-current"
                  transition={{ duration: 8, repeat: Infinity }}
                >
                  <Sparkles className="w-full h-full" />
                </motion.div>
              </motion.div>

              {/* Heart Shape Right Side - Upper */}
              <motion.div
                initial={{ opacity: 0, x: 50, y: -40, rotate: 20 }}
                whileInView={{ opacity: 1, x: 175, y: -80, rotate: 15 }}
                transition={{ duration: 0.8, delay: 0.9 }}
                className="absolute z-20 group"
              >
                <div className="w-28 h-40 md:w-36 md:h-48 lg:w-48 lg:h-60 rounded-2xl overflow-hidden shadow-xl border-4 border-pure-white transform hover:scale-110 transition-all duration-300 bg-gradient-to-br from-royal-blue/10 to-sky-blue/10 hover:z-50">
                  <img
                    src={collageImages[2]}
                    alt="Precious Memory"
                    className="w-full h-full object-cover filter brightness-105"
                  />
                </div>

                <motion.div
                  className="absolute -top-3 -right-3 w-6 h-6 md:w-8 md:h-8 text-royal-blue fill-current"
                  transition={{ duration: 8, repeat: Infinity }}
                >
                  <Star className="w-full h-full" />
                </motion.div>
              </motion.div>

              {/* Heart Shape Left Side - Lower */}
              <motion.div
                initial={{ opacity: 0, x: -40, y: 20, rotate: -15 }}
                whileInView={{ opacity: 1, x: -175, y: 90, rotate: -15 }}
                transition={{ duration: 0.8, delay: 1.1 }}
                className="absolute z-15 group"
              >
                <div className="w-24 h-36 md:w-32 md:h-44 lg:w-44 lg:h-56 rounded-2xl overflow-hidden shadow-lg border-3 border-pure-white transform hover:scale-110 transition-all duration-300 hover:z-50">
                  <img
                    src={collageImages[3]}
                    alt="Sweet Memory"
                    className="w-full h-full object-cover"
                  />
                </div>

                <motion.div
                  className="absolute -bottom-3 -left-3 w-5 h-5 md:w-7 md:h-7 text-sky-blue fill-current"
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <Heart className="w-full h-full" />
                </motion.div>
              </motion.div>

              {/* Heart Shape Right Side - Lower */}
              <motion.div
                initial={{ opacity: 0, x: 40, y: 20, rotate: 15 }}
                whileInView={{ opacity: 1, x: 175, y: 90, rotate: 15 }}
                transition={{ duration: 0.8, delay: 1.3 }}
                className="absolute z-15 group"
              >
                <div className="w-24 h-36 md:w-32 md:h-44 lg:w-44 lg:h-56 rounded-2xl overflow-hidden shadow-lg border-3 border-pure-white transform hover:scale-110 transition-all duration-300 hover:z-50">
                  <img
                    src={collageImages[4]}
                    alt="Cherished Moment"
                    className="w-full h-full object-cover"
                  />
                </div>

                <motion.div
                  className="absolute -bottom-3 -right-3 w-5 h-5 md:w-7 md:h-7 text-royal-blue fill-current"
                  transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                >
                  <Sparkles className="w-full h-full" />
                </motion.div>
              </motion.div>

              {/* Heart Bottom Point */}
              <motion.div
                initial={{ opacity: 0, y: 60, rotate: 5 }}
                whileInView={{ opacity: 1, y: 215, rotate: 0 }}
                transition={{ duration: 0.8, delay: 1.5 }}
                className="absolute z-10 group"
              >
                <div className="w-24 h-36 md:w-32 md:h-44 lg:w-40 lg:h-52 rounded-xl overflow-hidden shadow-lg border-3 border-pure-white transform hover:scale-110 transition-all duration-300 hover:z-50">
                  <img
                    src={collageImages[5]}
                    alt="Heart of Memories"
                    className="w-full h-full object-cover"
                  />
                </div>
              </motion.div>

              {/* Accent Photos - Far Corners */}
              <motion.div
                initial={{ opacity: 0, x: -75, y: 0, rotate: -30 }}
                whileInView={{ opacity: 1, x: -250, y: -10, rotate: -25 }}
                transition={{ duration: 0.8, delay: 1.7 }}
                className="absolute z-5 group"
              >
                <div className="w-20 h-28 md:w-24 md:h-32 lg:w-32 lg:h-40 rounded-xl overflow-hidden shadow-md border-2 border-pure-white transform hover:scale-110 transition-all duration-300 hover:z-50">
                  <img
                    src={collageImages[6]}
                    alt="Side Memory"
                    className="w-full h-full object-cover"
                  />
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 75, y: 0, rotate: 30 }}
                whileInView={{ opacity: 1, x: 250, y: -10, rotate: 25 }}
                transition={{ duration: 0.8, delay: 1.9 }}
                className="absolute z-5 group"
              >
                <div className="w-20 h-28 md:w-24 md:h-32 lg:w-32 lg:h-40 rounded-xl overflow-hidden shadow-md border-2 border-pure-white transform hover:scale-110 transition-all duration-300 hover:z-50">
                  <img
                    src={collageImages[7]}
                    alt="Side Memory"
                    className="w-full h-full object-cover"
                  />
                </div>
              </motion.div>

              {/* Top Accent Photos */}
              <motion.div
                initial={{ opacity: 0, y: -60, x: -30, rotate: -20 }}
                whileInView={{ opacity: 1, y: -190, x: -120, rotate: -15 }}
                transition={{ duration: 0.8, delay: 2.1 }}
                className="absolute z-5 group"
              >
                <div className="w-16 h-24 md:w-20 md:h-28 lg:w-28 lg:h-36 rounded-lg overflow-hidden shadow-md border-2 border-pure-white transform hover:scale-110 transition-all duration-300 hover:z-50">
                  <img
                    src={collageImages[8]}
                    alt="Top Memory"
                    className="w-full h-full object-cover"
                  />
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: -60, x: 30, rotate: 20 }}
                whileInView={{ opacity: 1, y: -190, x: 120, rotate: 15 }}
                transition={{ duration: 0.8, delay: 2.3 }}
                className="absolute z-5 group"
              >
                <div className="w-16 h-24 md:w-20 md:h-28 lg:w-28 lg:h-36 rounded-lg overflow-hidden shadow-md border-2 border-pure-white transform hover:scale-110 transition-all duration-300 hover:z-50">
                  <img
                    src={collageImages[9]}
                    alt="Top Memory"
                    className="w-full h-full object-cover"
                  />
                </div>
              </motion.div>
            </div>

            {/* Decorative Text Elements */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="text-center mt-8 md:mt-12 lg:mt-16"
            >
              <h3 className="font-vibes py-5 text-2xl md:text-3xl lg:text-4xl text-royal-blue mb-4">
                Moments That Matter
              </h3>
              <p className="font-lora text-base md:text-lg text-midnight-black/80 max-w-2xl mx-auto px-4">
                Every photograph tells a story, every smile captures a moment,
                and every memory brings us closer together. This collage represents
                the beautiful journey we've shared and the countless more moments to come.
              </p>
            </motion.div>

            {/* Floating Hearts */}
            <motion.div
              className="top-4 left-4 text-royal-blue/30 text-2xl md:text-3xl absolute"
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
            >💕</motion.div>
            <motion.div
              className="top-8 right-8 text-sky-blue/40 text-xl md:text-2xl absolute"
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 5, repeat: Infinity, delay: 1 }}
            >💖</motion.div>
            <motion.div
              className="bottom-4 left-8 text-royal-blue/30 text-2xl md:text-3xl absolute"
              animate={{ y: [0, -25, 0] }}
              transition={{ duration: 6, repeat: Infinity, delay: 2 }}
            >💝</motion.div>
            <motion.div
              className="bottom-8 right-4 text-sky-blue/40 text-xl md:text-2xl absolute"
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 4.5, repeat: Infinity, delay: 3 }}
            >🌸</motion.div>
          </motion.div>

          {/* Quote Below Collage */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.5 }}
            className="text-center mt-8 md:mt-12"
          >
            <div className="glass-card p-4 md:p-6 rounded-2xl max-w-2xl mx-auto relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-sky-blue/10 to-royal-blue/10 rounded-2xl"></div>
              <div className="relative z-10 flex items-center justify-center mb-3">
                <Gift className="w-6 h-6 text-rose-500 mr-2" />
                <p className="font-vibes text-xl md:text-2xl lg:text-3xl text-royal-blue">
                  "In every picture, I see the same thing..."
                </p>
                <Gift className="w-6 h-6 text-rose-500 ml-2" />
              </div>
              <p className="font-lora text-base md:text-xl text-midnight-black/80">
                Pure beauty, endless grace, and the reason for my smile.
              </p>
            </div>
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
      `}</style>
    </section>
  );
};

export default CollageSection;