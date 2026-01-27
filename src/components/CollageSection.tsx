import { motion } from 'framer-motion';
import { Star, Sparkles, Moon, Heart } from 'lucide-react';
import image_1 from "@/assets/image_1.png";
import image_2 from "@/assets/image_2.png";
import image_13 from "@/assets/image_13.png";
import baby from "@/assets/baby.png";
import college from "@/assets/college.png";
import school from "@/assets/school.png";
import friend from "@/assets/friend.png";
import foot from "@/assets/foot.png";
import study from "@/assets/study.png";
import flower_1 from "@/assets/flower_1.png"
import flower_2 from "@/assets/flower_2.png"
import flower_3 from "@/assets/flower_3.png"
import flower_4 from "@/assets/flower_4.png"
import flower_5 from "@/assets/flower_5.png"
import flower_1_mirror from "@/assets/flower_1_mirror.png"
import flower_2_mirror from "@/assets/flower_2_mirror.png"

const CollageSection = () => {
  const images = [
    { src: image_1, alt: "Shining Bright", span: "col-span-1 md:col-span-2 md:row-span-2", delay: 0 },
    { src: baby, alt: "Baby Steps", span: "col-span-1 md:row-span-1", delay: 0.1 },
    { src: flower_1, alt: "Blooming Grace", span: "col-span-1", delay: 0.15 },
    { src: college, alt: "College Days", span: "col-span-1 md:row-span-2", delay: 0.2 }, // Changed to Portrait

    { src: flower_3, alt: "Radiance", span: "col-span-1 md:row-span-2", delay: 0.3 },
    { src: school, alt: "School Memories", span: "col-span-1 md:col-span-2 md:row-span-2", delay: 0.25 },
    { src: friend, alt: "Friendship", span: "col-span-1", delay: 0.35 },

    { src: image_2, alt: "Elegant", span: "col-span-1 md:col-span-1 md:row-span-2", delay: 0.4 },
    { src: flower_2, alt: "Elegance", span: "col-span-1", delay: 0.2 },
    { src: study, alt: "Hard Work", span: "col-span-1 md:row-span-2", delay: 0.45 }, // Changed to Portrait

    { src: image_13, alt: "Beautiful", span: "col-span-1 md:col-span-2 md:row-span-2", delay: 0.5 },
    { src: foot, alt: "First Steps", span: "col-span-1", delay: 0.55 },
    { src: flower_5, alt: "Beauty", span: "col-span-1", delay: 0.5 },

    { src: flower_1_mirror, alt: "Reflection", span: "col-span-1 md:row-span-2", delay: 0.6 }, // Changed to Portrait
    { src: flower_2_mirror, alt: "Mirror", span: "col-span-1", delay: 0.7 },
    { src: flower_4, alt: "Joy", span: "col-span-1", delay: 0.75 },
  ];

  return (
    <section className="py-20 bg-pure-white relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-royal-blue/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-sky-blue/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
      </div>

      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center justify-center p-3 mb-6 rounded-full bg-sky-blue/10 text-royal-blue">
            <Heart className="w-6 h-6 fill-current animate-pulse" />
          </div>
          <h2 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-bold text-midnight-black mb-4">
            Mosaic of <span className="text-royal-blue italic">Beauty</span>
          </h2>
          <p className="font-lora text-lg text-gray-600 max-w-2xl mx-auto">
            A collection of moments, flowers, and smiles that light up the world.
          </p>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[200px] md:auto-rows-[250px] grid-flow-dense">
          {images.map((img, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.5, delay: img.delay }}
              className={`relative group rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl hover:z-10 transition-all duration-500 ${img.span}`}
            >
              <div className="absolute inset-0 bg-gray-200 animate-pulse" /> {/* Placeholder */}
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out"
                loading="lazy"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-midnight-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <span className="text-sky-blue text-sm font-bold tracking-widest uppercase mb-1 translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-100">
                  Memory
                </span>
                <h3 className="text-white font-playfair text-xl translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-200">
                  {img.alt}
                </h3>
              </div>

              {/* Shine Effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-20 bg-gradient-to-tr from-white to-transparent pointer-events-none transition-opacity duration-500" />
            </motion.div>
          ))}

          {/* Quote Card inside Grid */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="col-span-1 md:col-span-2 bg-royal-blue rounded-3xl p-8 flex flex-col justify-center items-center text-center relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 -mr-10 -mt-10 w-40 h-40 bg-white/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700"></div>
            <div className="absolute bottom-0 left-0 -ml-10 -mb-10 w-40 h-40 bg-sky-blue/20 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700"></div>

            <Sparkles className="w-8 h-8 text-yellow-300 mb-6 group-hover:rotate-12 transition-transform duration-300" />
            <p className="font-vibes text-3xl md:text-4xl text-white leading-relaxed mb-2">
              "Bloom where you are planted."
            </p>
            <p className="text-sky-blue text-sm uppercase tracking-widest font-bold mt-4">
              Always
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CollageSection;