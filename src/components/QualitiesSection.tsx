import { motion } from 'framer-motion';
import { Heart, Sparkles, Sun, Star, Flower, Smile } from 'lucide-react';
import image_1 from '@/assets/image_1.png';


const qualities = [
  {
    title: "Radiant Smile",
    description: "Lights up every room she enters",
    icon: Smile,
    color: "from-sky-blue to-pure-white"
  },
  {
    title: "Kind Heart",
    description: "Always caring for others",
    icon: Heart,
    color: "from-royal-blue to-sky-blue"
  },
  {
    title: "Brilliant Mind",
    description: "Intelligence that inspires",
    icon: Sparkles,
    color: "from-silver-accent to-sky-blue"
  },
  {
    title: "Graceful Soul",
    description: "Elegance in every movement",
    icon: Flower,
    color: "from-sky-blue to-royal-blue"
  },
  {
    title: "Positive Energy",
    description: "Brings sunshine wherever she goes",
    icon: Sun,
    color: "from-pure-white to-sky-blue"
  },
  {
    title: "Unique Beauty",
    description: "One of a kind in every way",
    icon: Star,
    color: "from-royal-blue to-silver-accent"
  }
];

const QualitiesSection = () => {
  return (
    <section className="py-10 sm:py-16 md:py-20 bg-gradient-to-br from-sky-blue/10 to-pure-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-5 sm:top-10 left-5 sm:left-10 text-3xl sm:text-4xl md:text-6xl animate-float">💫</div>
        <div className="absolute top-16 sm:top-32 right-10 sm:right-20 text-4xl sm:text-6xl md:text-8xl animate-float" style={{ animationDelay: '2s' }}>🌟</div>
        <div className="absolute bottom-10 sm:bottom-20 left-1/4 sm:left-1/3 text-3xl sm:text-5xl md:text-7xl animate-float" style={{ animationDelay: '4s' }}>✨</div>
      </div>

      {/* Background Image */}
      <div
        className="absolute right-0 top-0 w-1/2 sm:w-2/5 md:w-1/3 h-full bg-cover bg-center opacity-50 sm:opacity-60"
        style={{ backgroundImage: `url(${image_1})` }}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-10 sm:mb-12 md:mb-16"
        >
          <h2 className="font-playfair text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-royal-blue mb-2 sm:mb-4 px-2">
            What Makes You Special
          </h2>
          <p className="font-vibes text-lg sm:text-xl md:text-2xl text-midnight-black/70 px-4">
            A constellation of beautiful qualities
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 max-w-6xl mx-auto">
          {qualities.map((quality, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50, rotateY: -15 }}
              whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              whileHover={{
                y: -10,
                rotateY: 5,
                transition: { duration: 0.3 }
              }}
              className="group perspective-1000"
            >
              <div className="glass-card p-4 sm:p-6 md:p-8 rounded-2xl sm:rounded-3xl text-center transform-gpu transition-all duration-500 group-hover:shadow-2xl relative overflow-hidden min-h-[280px] sm:min-h-[300px] md:min-h-[320px] flex flex-col justify-center">
                {/* Gradient Background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${quality.color} opacity-10 rounded-2xl sm:rounded-3xl`} />

                {/* Icon */}
                <div className="relative z-10 mb-4 sm:mb-6">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 mx-auto bg-gradient-to-br from-royal-blue to-sky-blue rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <quality.icon className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-pure-white" />
                  </div>
                </div>

                {/* Content */}
                <div className="relative z-10 flex-1 flex flex-col justify-center">
                  <h3 className="font-vibes text-xl sm:text-2xl md:text-3xl text-royal-blue mb-3 sm:mb-4 group-hover:text-sky-blue transition-colors duration-300 leading-tight">
                    {quality.title}
                  </h3>
                  <p className="font-lora text-sm sm:text-base md:text-lg text-midnight-black/80 leading-relaxed px-2 sm:px-0">
                    {quality.description}
                  </p>
                </div>

                {/* Shimmer Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-pure-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default QualitiesSection;