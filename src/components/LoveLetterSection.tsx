import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';
import image_1 from '@/assets/image_1.png';
import image_2 from '@/assets/image_2.png';

const LoveLetterSection = () => {
  const paragraphs = [
    "My dearest Shraddha, as I write this letter on your special day, my heart overflows with emotions that words can barely capture. You are not just someone I love; you are the very essence of everything beautiful in my world.",

    "From the moment I first saw your radiant smile, I knew my life had found its missing piece. Your laughter is like music that plays in the background of all my happiest memories. The way your eyes light up when you talk about your dreams - it's pure magic.",

    "Your kindness touches everyone around you. I've watched you turn ordinary moments into extraordinary memories just by being yourself. Your intelligence amazes me every day, the way you approach life with such grace and determination.",

    "At just 18, in your second year of college, you're already showing the world what strength and beauty look like. Your dedication to your studies, your caring nature with friends, and the way you chase your dreams - it all makes me so proud to know you.",

    "Today, as you turn another year older, I want you to know that you are cherished beyond measure. You are the star that guides my nights and the sun that brightens my days. Happy Birthday, my love."
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-pure-white via-sky-blue/10 to-pure-white relative overflow-hidden">
      {/* Background Images */}
      <div className="absolute left-0 top-1/4 w-80 h-96 opacity-50">
        <img src={image_1} alt="" className="w-full h-full object-cover rounded-r-full blur-sm" />
      </div>
      <div className="absolute right-0 bottom-1/4 w-80 h-96 opacity-50">
        <img src={image_2} alt="" className="w-full h-full object-cover rounded-l-full blur-sm" />
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-20 text-4xl opacity-30 animate-float">💌</div>
        <div className="absolute top-40 right-32 text-3xl opacity-40 animate-float" style={{ animationDelay: '1s' }}>💕</div>
        <div className="absolute bottom-32 left-1/4 text-4xl opacity-30 animate-float" style={{ animationDelay: '2s' }}>🌹</div>
        <div className="absolute bottom-40 right-20 text-3xl opacity-40 animate-float" style={{ animationDelay: '3s' }}>✨</div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-playfair text-5xl md:text-6xl font-bold text-royal-blue mb-4">
            A Love Letter
          </h2>
          <div className="flex items-center justify-center gap-3">
            <Heart className="w-6 h-6 text-royal-blue fill-current animate-pulse" />
            <p className="font-vibes text-2xl text-midnight-black/70">
              From my heart to yours
            </p>
            <Heart className="w-6 h-6 text-royal-blue fill-current animate-pulse" />
          </div>
        </motion.div>

        {/* Main Letter Content */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative max-w-4xl mx-auto"
        >
          {/* Paper Background */}
          <div className="bg-pure-white rounded-lg shadow-2xl relative overflow-hidden" style={{
            background: 'linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)',
            boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)'
          }}>
            {/* Paper Texture Overlay */}
            <div className="absolute inset-0 opacity-5" style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Ccircle cx='7' cy='7' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
            }} />


            {/* Background Images */}
            <div className="absolute inset-0 opacity-50">
              <img src={image_1} alt="" className="absolute top-8 right-8 w-32 h-32 object-cover rounded-full" />
              <img src={image_2} alt="" className="absolute bottom-8 left-8 w-28 h-28 object-cover rounded-full" />
            </div>

            <div className="relative z-10 p-12 md:p-16">
              {/* Date */}
              <div className="text-center mb-8">
                <p className="font-lora text-sm text-midnight-black/60">
                  September 16, 2024 a special day
                </p>
              </div>

              <p className="font-vibes text-4xl md:text-5xl text-royal-blue mb-8 text-center">
                Sweetest Shraddha Ma'am,
              </p>

              <div className="space-y-8 font-lora text-lg md:text-xl text-midnight-black/90 leading-relaxed text-justify">
                <p className="indent-8">
                  From the moment you graced this world on September 16, 2006, the universe became a more beautiful place.
                  Your laughter became my favorite melody, your smile my greatest treasure, and your presence the very essence of my happiness.
                </p>

                <p className="indent-8">
                  Watching you navigate through your second year of college with such grace, intelligence, and determination fills my heart with immense pride.
                  You are not just beautiful on the outside, but your soul radiates a warmth that touches everyone fortunate enough to know you.
                </p>

                <p className="indent-8">
                  Your kindness knows no bounds - the way you care for others, your gentle spirit, and how you find magic in the simplest moments.
                  Whether you're solving complex problems in your studies or simply sharing a quiet moment, you bring light to everything you touch.
                </p>

                <p className="indent-8">
                  Every day with you feels like a page from the most beautiful story ever written - magical, unexpected, and filled with wonder.
                  Your intelligence shines in every conversation, your creativity sparkles in everything you do, and your compassion makes the world a better place.
                </p>

                <p className="indent-8">
                  As you turn 18 and step into this new chapter of your life, I want you to know that you are capable of achieving anything your heart desires.
                  Your dreams are valid, your goals are within reach, and your potential is limitless.
                </p>

                <p className="indent-8">
                  As you celebrate another year of your beautiful existence, know that you are cherished beyond words,
                  loved beyond measure, and appreciated for the incredible person you are. You make every day brighter just by being you.
                </p>
              </div>

              <div className="mt-12 text-center">
                <p className="font-vibes text-2xl text-royal-blue">
                  Forever and always yours,
                </p>
                <p className="font-vibes text-3xl text-royal-blue mt-2">
                  With all my love ❤️
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default LoveLetterSection;