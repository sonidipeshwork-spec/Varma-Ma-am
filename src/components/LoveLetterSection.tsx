import { motion } from 'framer-motion';
import { Heart, Pen, Mail, Sparkles } from 'lucide-react';
import image_13 from '@/assets/image_13.png';
import image_16 from '@/assets/image_16.jpg';
const LoveLetterSection = () => {
  return (
    <section className="py-20 md:py-32 bg-gradient-to-br from-pure-white via-sky-blue/10 to-royal-blue/5 relative overflow-hidden">
      {/* Background with Parallax Effect */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute left-0 top-1/4 w-80 h-96 opacity-30 transform hover:scale-105 transition-transform duration-1000">
          <img src={image_13} alt="" className="w-full h-full object-cover rounded-r-full blur-sm" />
        </div>
        <div className="absolute right-0 bottom-1/4 w-80 h-96 opacity-30 transform hover:scale-105 transition-transform duration-1000">
          <img src={image_16} alt="" className="w-full h-full object-cover rounded-l-full blur-sm" />
        </div>
      </div>
      {/* Floating Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-20 left-20 text-4xl opacity-30"
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        >
          🐬
        </motion.div>
        <motion.div
          className="absolute top-40 right-32 text-3xl opacity-40"
          animate={{ y: [0, -15, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        >
          💕
        </motion.div>
        <motion.div
          className="absolute bottom-32 left-1/4 text-4xl opacity-30"
          animate={{ y: [0, -25, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        >
          ❄️
        </motion.div>
        <motion.div
          className="absolute bottom-40 right-20 text-3xl opacity-40"
          animate={{ y: [0, -18, 0] }}
          transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 3 }}
        >
          🍀
        </motion.div>
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-playfair text-5xl md:text-6xl font-bold text-royal-blue mb-4">
            A Special Wish
          </h2>
          <div className="flex items-center justify-center gap-3">
            <p className="font-vibes text-2xl text-midnight-black/70">
              for cutest person in universe
            </p>
          </div>
        </motion.div>
        {/* Main Letter Content with Paper-like Appearance */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative max-w-4xl mx-auto"
        >
          {/* Paper Container with Realistic Paper Look */}
          <div className="relative rounded-lg overflow-hidden transform hover:shadow-3xl transition-shadow duration-500">
            {/* Paper Shadow */}
            <div className="absolute inset-0 bg-blue-200 rounded-lg transform translate-x-1 translate-y-1 z-0"></div>
            {/* Paper Background */}
            <div className="relative bg-blue-50 rounded-lg shadow-xl z-10" style={{
              backgroundImage: `
                linear-gradient(to right, rgba(222, 184, 135, 0.05) 1px, transparent 1px),
                linear-gradient(to bottom, rgba(222, 184, 135, 0.05) 1px, transparent 1px)
              `,
              backgroundSize: '20px 20px',
              boxShadow: 'inset 0 0 30px rgba(0, 0, 0, 0.05)'
            }}>
              {/* Paper Texture Overlay */}
              <div className="absolute inset-0 opacity-20" style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23d4a574' fill-opacity='0.1' fill-rule='evenodd'/%3E%3C/svg%3E")`
              }} />
              {/* Paper Edge Effect */}
              <div className="absolute inset-0 border-2 border-blue-100 rounded-lg pointer-events-none"></div>
              {/* Watermark */}
              <div className="absolute inset-0 flex items-center justify-center opacity-5 pointer-events-none">
                <Heart className="w-64 h-64 text-blue-200 fill-current transform rotate-12" />
              </div>
              {/* Decorative Corner Elements */}
              <div className="absolute top-0 left-0 w-16 h-16 border-t-4 border-l-4 border-blue-200/50 rounded-tl-lg"></div>
              <div className="absolute top-0 right-0 w-16 h-16 border-t-4 border-r-4 border-blue-200/50 rounded-tr-lg"></div>
              <div className="absolute bottom-0 left-0 w-16 h-16 border-b-4 border-l-4 border-blue-200/50 rounded-bl-lg"></div>
              <div className="absolute bottom-0 right-0 w-16 h-16 border-b-4 border-r-4 border-blue-200/50 rounded-br-lg"></div>
              {/* Background Images */}
              <div className="absolute inset-0 z-50 opacity-50">
                <motion.div
                  className="absolute top-8 right-8 w-32 h-32 object-cover rounded-full overflow-hidden"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                >
                  <img src={image_13} alt="Ma'am ji" className="w-full h-full object-cover" />
                </motion.div>
                <motion.div
                  className="absolute bottom-8 left-8 w-28 h-28 object-cover rounded-full overflow-hidden"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                >
                  <img src={image_16} alt="Shruu" className="w-full h-full object-cover" />
                </motion.div>
              </div>
              <div className="relative z-10 p-12 md:p-16">
                {/* Date with Icon */}
                <div className="flex items-center justify-center gap-2 mb-8">
                  <p className="font-lora text-sm text-blue-800/60">
                    September 16, 2024 • special cute din
                  </p>
                </div>
                {/* Salutation with Icon */}
                <div className="flex items-center justify-center gap-3 mb-8">
                  <p className="font-vibes text-4xl md:text-5xl text-blue-800 text-center">
                    Princess Shraddha Ma'am
                  </p>
                </div>
                {/* Letter Content */}
                <div className="space-y-8 font-lora text-lg md:text-xl text-blue-900/90 leading-relaxed text-justify">
                  <motion.p
                    className="indent-8"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                  >
                    Aapki yeh pyaari si innocence aur aapka yeh cute sa pyaara andaaz, har moment aapko aur bhi special bana deta hai. Aur aaj ka din toh bhoot zayada special hai...
                  </motion.p>
                  <motion.p
                    className="indent-8"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                  >
                    Aapne kitne pyaare tarike se 19 saal ke ho gaye ho. Har ek din aapne life mein kuch naya experience kiya, aur har din ke saath aap aur bhi zyada cute, pyaare aur special bante jaa rahe ho. Yeh saal aapki kahani ke sabse khoobsurat chapters hain, ismein aapne sirf bade hone ka hi nahi, balki zindagi ko jeene ka tareeka bhi seekha, jaise life ko balance kaise karte hain, situation ko handle kaise karte hain. Kuch aise baatein bhi hai jo aapke aur aapke dil ke biche mein hi hai.
                  </motion.p>
                  <motion.p
                    className="indent-8"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                  >
                    aur aap
                  </motion.p>
                  <motion.p
                    className="indent-8"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.8 }}
                  >
                    Aapke saath har din likhi gayi sabse beautiful story ka ek page jaisa lagta hai - magical, unexpected, aur wonder se bhara.
                    Aapki intelligence har conversation mein chamakti hai, aapki creativity har kaam mein jhalakti hai, aur aapki compassion duniya ko better banaati hai.
                  </motion.p>
                  <motion.p
                    className="indent-8"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 1.0 }}
                  >
                    Aur aap kitne aache ho iski explaination dena easy nahi hai,
                  </motion.p>
                  <motion.p
                    className="indent-8"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 1.2 }}
                  >
                    Enjoy your special day just as special as you are. Enjoy your day exactly as you planned it, filled with laughter, love, and everything that makes you smile. Today is yours celebrate it in the most beautiful way.
                  </motion.p>
                </div>
                {/* Closing with Animated Heart */}
                <motion.div
                  className="mt-12 text-center"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 1.4 }}
                >
                  <p className="font-vibes text-2xl text-blue-800">
                    🍀 Take care Ma'am 🍀
                  </p>
                  <div className="flex items-center justify-center gap-2 mt-2">
                    <p className="font-vibes text-3xl text-blue-800">
                      From a person who irritates you the most
                    </p>
                  </div>
                </motion.div>
                {/* Decorative Wax Seal */}
                <motion.div
                  className="absolute bottom-6 right-6 w-16 h-16 rounded-full bg-gradient-to-br from-blue-600 to-blue-800 flex items-center justify-center shadow-lg"
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 1.6 }}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  <Heart className="w-8 h-8 text-blue-100 fill-current" />
                </motion.div>
              </div>
            </div>
          </div>
          {/* Decorative Elements Outside Letter */}
          <div className="flex justify-center mt-8 space-x-4">
            <motion.div
              whileHover={{ y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <Sparkles className="w-6 h-6 text-blue-600/50" />
            </motion.div>
            <motion.div
              whileHover={{ y: -10 }}
              transition={{ duration: 0.3, delay: 0.1 }}
            >
              <Heart className="w-6 h-6 text-blue-700/50 fill-current" />
            </motion.div>
            <motion.div
              whileHover={{ y: -10 }}
              transition={{ duration: 0.3, delay: 0.2 }}
            >
              <Sparkles className="w-6 h-6 text-blue-600/50" />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
export default LoveLetterSection;