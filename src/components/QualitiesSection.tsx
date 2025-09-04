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
    <section className="py-16 md:py-24 bg-gradient-to-br from-sky-blue/10 via-pure-white to-royal-blue/10 relative overflow-hidden">
      {/* Enhanced Background with Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Floating Stars */}
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={`star-${i}`}
            className="absolute text-blue-300/20"
            animate={{
              y: [0, -30, 0],
              x: [0, 10, 0],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: 5 + i * 0.5,
              repeat: Infinity,
              delay: i * 0.3,
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          >
            <Star className="w-4 h-4 fill-current" />
          </motion.div>
        ))}

        {/* Floating Hearts */}
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={`heart-${i}`}
            className="absolute text-blue-400/20"
            animate={{
              y: [0, -40, 0],
              x: [0, -10, 0],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: 6 + i * 0.7,
              repeat: Infinity,
              delay: i * 0.5,
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          >
            <Heart className="w-5 h-5 fill-current" />
          </motion.div>
        ))}

        {/* Decorative Icons */}
        <div className="absolute top-10 left-10 text-3xl md:text-4xl">💙</div>
        <div className="absolute top-32 right-20 text-4xl md:text-6xl">🧿</div>
        <div className="absolute bottom-20 left-1/8 text-3xl md:text-6xl">🩵</div>
      </div>

      {/* Enhanced Background Image with Parallax */}
      <motion.div
        className="absolute right-0 top-0 w-1/3 h-full bg-cover bg-center opacity-30"
        style={{ backgroundImage: `url(${image_1})` }}
        initial={{ x: 100 }}
        whileInView={{ x: 0 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 md:mb-20"
        >

          <h2 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-bold text-royal-blue mb-4 px-2">
            What Makes You Special
          </h2>
          <p className="font-vibes text-xl md:text-2xl text-midnight-black/70 px-4">
            A constellation of beautiful qualities
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
          {qualities.map((quality, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50, rotateY: -15 }}
              whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              whileHover={{
                y: -15,
                rotateY: 5,
                transition: { duration: 0.3 }
              }}
              className="group perspective-1000"
            >
              <div className="glass-card p-6 md:p-8 rounded-3xl text-center transform-gpu transition-all duration-500 group-hover:shadow-2xl relative overflow-hidden min-h-[320px] flex flex-col justify-between">
                {/* Gradient Background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${quality.color} opacity-10 rounded-3xl`} />

                {/* Decorative Pattern Overlay */}
                <div className="absolute inset-0 opacity-5">
                  <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgdmlld0JveD0iMCAwIDYwIDYwIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMwMDAiIGZpbGwtb3BhY2l0eT0iMC4xIj48Y2lyY2xlIGN4PSI3IiBjeT0iNyIgcj0iMSIvPjwvZz48L2c+PC9zdmc+')]"></div>
                </div>

                {/* Icon with Floating Animation */}
                <div className="relative z-10 mb-6">
                  <div
                    className="w-16 h-16 mx-auto bg-gradient-to-br from-royal-blue to-sky-blue rounded-full flex items-center justify-center shadow-lg"
                  >
                    <quality.icon className="w-8 h-8 text-pure-white" />
                  </div>
                </div>

                {/* Content */}
                <div className="relative z-10 flex-1 flex flex-col justify-center">
                  <h3 className="font-vibes text-2xl md:text-3xl text-royal-blue mb-3 group-hover:text-sky-blue transition-colors duration-300 leading-tight">
                    {quality.title}
                  </h3>
                  <p className="font-lora text-base md:text-lg text-midnight-black/80 leading-relaxed px-2">
                    {quality.description}
                  </p>

                  {/* Additional Detail on Hover */}
                  <motion.div
                    className="mt-4 overflow-hidden"
                    initial={{ height: 0 }}
                    whileHover={{ height: "auto" }}
                    transition={{ duration: 0.3 }}
                  >
                    <p className="font-lora text-sm text-royal-blue/80 italic pt-3 border-t border-sky-blue/20">
                      {quality.detail}
                    </p>
                  </motion.div>
                </div>

                {/* Decorative Gift Icon at Bottom */}
                <div className="relative z-10 flex justify-center mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Gift className="w-5 h-5 text-rose-500" />
                </div>

                {/* Shimmer Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-pure-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Closing Message */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center mt-16 md:mt-20"
        >
          <div className="glass-card p-6 rounded-3xl max-w-2xl mx-auto">
            <h3 className="font-vibes text-3xl text-royal-blue mb-3">
              Truly One of a Kind
            </h3>
            <p className="font-lora text-lg text-midnight-black/80">
              These qualities make you the extraordinary person you are - a rare gem in a world of ordinary stones
            </p>
          </div>
        </motion.div>
      </div>

      <style>{`
        .glass-card {
          background: rgba(255, 255, 255, 0.7);
          backdrop-filter: blur(10px);
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
          50% { transform: translateY(-20px); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default QualitiesSection;