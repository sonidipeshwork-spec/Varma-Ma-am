import { motion } from 'framer-motion';
import { Heart, Sparkles, Sun, Star, Flower, Smile, Gift, Crown } from 'lucide-react';
import image_1 from '@/assets/image_1.png';

const qualities = [
  {
    title: "Radiant Smile",
    description: "Lights up every room she enters",
    icon: Smile,
    color: "from-sky-blue to-pure-white",
    detail: "Your smile has the power to brighten even the darkest days and bring joy to everyone around you."
  },
  {
    title: "Kind Heart",
    description: "Always caring for others",
    icon: Heart,
    color: "from-royal-blue to-sky-blue",
    detail: "Your compassion knows no bounds, and your selflessness inspires everyone who knows you."
  },
  {
    title: "Brilliant Mind",
    description: "Intelligence that inspires",
    icon: Sparkles,
    color: "from-silver-accent to-sky-blue",
    detail: "Your intellect and wisdom shine through in everything you do, lighting the path for others."
  },
  {
    title: "Graceful Soul",
    description: "Elegance in every movement",
    icon: Flower,
    color: "from-sky-blue to-royal-blue",
    detail: "You move through life with a grace and elegance that leaves everyone in awe."
  },
  {
    title: "Positive Energy",
    description: "Brings sunshine wherever she goes",
    icon: Sun,
    color: "from-pure-white to-sky-blue",
    detail: "Your positive outlook and energy are contagious, lifting spirits wherever you go."
  },
  {
    title: "Unique Beauty",
    description: "One of a kind in every way",
    icon: Star,
    color: "from-royal-blue to-silver-accent",
    detail: "Your beauty, both inside and out, is as rare and precious as a perfect star in the night sky."
  }
];

const QualitiesSection = () => {
  return (
    <section className="py-12 md:py-16 lg:py-24 bg-gradient-to-br from-sky-blue/10 via-pure-white to-royal-blue/10 relative overflow-hidden">
      {/* Enhanced Background with Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Floating Stars - Reduced number for mobile */}
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={`star-${i}`}
            className="absolute text-blue-300/20"
            animate={{
              y: [0, -20, 0],
              x: [0, 5, 0],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: 4 + i * 0.5,
              repeat: Infinity,
              delay: i * 0.3,
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          >
            <Star className="w-3 h-3 md:w-4 md:h-4 fill-current" />
          </motion.div>
        ))}
        {/* Floating Hearts - Reduced number for mobile */}
        {[...Array(7)].map((_, i) => (
          <motion.div
            key={`heart-${i}`}
            className="absolute text-blue-400/20"
            animate={{
              y: [0, -25, 0],
              x: [0, -5, 0],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: 5 + i * 0.7,
              repeat: Infinity,
              delay: i * 0.5,
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          >
            <Heart className="w-4 h-4 md:w-5 md:h-5 fill-current" />
          </motion.div>
        ))}
        {/* Decorative Icons - Responsive sizing */}
        <div className="absolute top-6 left-6 text-2xl md:text-3xl lg:text-4xl">💙</div>
        <div className="absolute top-24 right-16 text-3xl md:text-4xl lg:text-6xl">🧿</div>
        <div className="absolute bottom-16 left-1/4 text-2xl md:text-4xl lg:text-6xl">🩵</div>
      </div>

      {/* Left Background Image with Parallax - Responsive adjustments */}
      <motion.div
        className="absolute left-0 top-0 w-full md:w-1/3 h-1/3 md:h-full bg-cover bg-center opacity-20 md:opacity-30"
        style={{
          backgroundImage: `url(https://images.unsplash.com/photo-1728299805996-afe00d301e28?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)`,
          backgroundPosition: 'center top',
        }}
        initial={{ x: -50, opacity: 0 }}
        whileInView={{ x: 0, opacity: 0.3 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      />

      {/* Right Background Image with Parallax - Responsive adjustments */}
      <motion.div
        className="absolute right-0 bottom-0 w-full md:w-1/3 h-1/3 md:h-full bg-cover bg-center opacity-20 md:opacity-30"
        style={{
          backgroundImage: `url(${image_1})`,
          backgroundPosition: 'center bottom',
        }}
        initial={{ x: 50, opacity: 0 }}
        whileInView={{ x: 0, opacity: 0.3 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 md:mb-16 lg:mb-20"
        >
          <h2 className="font-playfair text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-royal-blue mb-3 md:mb-4 px-2">
            What Makes You Special
          </h2>
          <p className="font-vibes text-lg md:text-xl lg:text-2xl text-midnight-black/70 px-4">
            A constellation of beautiful qualities
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8 max-w-6xl mx-auto">
          {qualities.map((quality, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30, rotateY: -10 }}
              whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{
                y: -10,
                rotateY: 5,
                transition: { duration: 0.3 }
              }}
              className="group perspective-1000"
            >
              <div className="glass-card p-5 md:p-6 lg:p-8 rounded-2xl md:rounded-3xl text-center transform-gpu transition-all duration-500 group-hover:shadow-xl relative overflow-hidden min-h-[280px] md:min-h-[320px] flex flex-col justify-between">
                {/* Gradient Background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${quality.color} opacity-10 rounded-2xl md:rounded-3xl`} />

                {/* Decorative Pattern Overlay */}
                <div className="absolute inset-0 opacity-5">
                  <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgdmlld0JveD0iMCAwIDYwIDYwIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMwMDAiIGZpbGwtb3BhY2l0eT0iMC4xIj48Y2lyY2xlIGN4PSI3IiBjeT0iNyIgcj0iMSIvPjwvZz48L2c+PC9zdmc+')]"></div>
                </div>

                {/* Icon with Floating Animation */}
                <div className="relative z-10 mb-4 md:mb-6">
                  <div className="w-14 h-14 md:w-16 md:h-16 mx-auto bg-gradient-to-br from-royal-blue to-sky-blue rounded-full flex items-center justify-center shadow-lg">
                    <quality.icon className="w-6 h-6 md:w-8 md:h-8 text-pure-white" />
                  </div>
                </div>

                {/* Content */}
                <div className="relative z-10 flex-1 flex flex-col justify-center">
                  <h3 className="font-vibes text-xl md:text-2xl lg:text-3xl text-royal-blue mb-2 md:mb-3 group-hover:text-sky-blue transition-colors duration-300 leading-tight">
                    {quality.title}
                  </h3>
                  <p className="font-lora text-sm md:text-base lg:text-lg text-midnight-black/80 leading-relaxed px-2">
                    {quality.description}
                  </p>

                  {/* Additional Detail on Hover */}
                  <motion.div
                    className="mt-3 md:mt-4 overflow-hidden"
                    initial={{ height: 0 }}
                    whileHover={{ height: "auto" }}
                    transition={{ duration: 0.3 }}
                  >
                    <p className="font-lora text-xs md:text-sm text-royal-blue/80 italic pt-2 md:pt-3 border-t border-sky-blue/20">
                      {quality.detail}
                    </p>
                  </motion.div>
                </div>

                {/* Decorative Gift Icon at Bottom */}
                <div className="relative z-10 flex justify-center mt-3 md:mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Gift className="w-4 h-4 md:w-5 md:h-5 text-rose-500" />
                </div>

                {/* Shimmer Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-pure-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Closing Message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center mt-12 md:mt-16 lg:mt-20"
        >
          <div className="glass-card p-5 md:p-6 rounded-2xl md:rounded-3xl max-w-2xl mx-auto">
            <h3 className="font-vibes text-2xl md:text-3xl text-royal-blue mb-2 md:mb-3">
              Truly One of a Kind
            </h3>
            <p className="font-lora text-base md:text-lg text-midnight-black/80">
              These qualities make you the extraordinary person you are - a rare gem in a world of ordinary stones
            </p>
          </div>
        </motion.div>
      </div>

      <style>{`
        .glass-card {
          background: rgba(255, 255, 255, 0.7);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.3);
          box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.1);
        }
        .perspective-1000 {
          perspective: 1000px;
        }
        .transform-gpu {
          transform-style: preserve-3d;
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        /* Responsive adjustments for background images */
        @media (max-width: 767px) {
          .glass-card {
            background: rgba(255, 255, 255, 0.85);
          }
        }
      `}</style>
    </section>
  );
};

export default QualitiesSection;