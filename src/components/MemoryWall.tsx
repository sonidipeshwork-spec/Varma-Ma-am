import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, X, ChevronLeft, ChevronRight, Download, Share2, Camera } from 'lucide-react';
import image_1 from '@/assets/image_1.png';
import image_2 from '@/assets/image_2.png';
import image_3 from '@/assets/image_3.jpg';
import image_4 from '@/assets/image_4.jpg';
import image_5 from '@/assets/image_5.jpg';
import image_9 from '@/assets/image_9.jpg';
import image_7 from '@/assets/image_7.jpg';
import image_8 from '@/assets/image_8.jpg';
import image_10 from '@/assets/image_10.jpg';
import image_11 from '@/assets/image_11.jpg';
import image_12 from '@/assets/image_12.jpg';

// Simplified memories array without date and location
const memories = [
  {
    id: 1,
    url: image_1,
    caption: "Sweetest Smile 😊",
  },
  {
    id: 2,
    url: image_2,
    caption: "Cutest Person 🥰",
  },
  {
    id: 3,
    url: image_3,
    caption: "Beautiful Eyes 👀",
  },
  {
    id: 4,
    url: image_4,
    caption: "Miss Charming 😍",
  },
  {
    id: 5,
    url: image_11,
    caption: "Special Moment 🎉",
  },
  {
    id: 6,
    url: image_9,
    caption: "SweetHeart 💖",
  },
  {
    id: 7,
    url: image_7,
    caption: "Elegant Character 💞",
  },
  {
    id: 8,
    url: image_8,
    caption: "Super Cute 🌸",
  },
  {
    id: 9,
    url: image_10,
    caption: "Sunset Glow 🌅",
  },
  {
    id: 10,
    url: image_5,
    caption: "Miss Adorable 💙",
  },
  {
    id: 11,
    url: image_12,
    caption: "Silent Beauty 🍃",
  },
  {
    id: 12,
    url: image_1,
    caption: "True Charm ✨",
  }
];

const MemoryWall = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  const [isAutoPlay, setIsAutoPlay] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-play functionality for lightbox
  useEffect(() => {
    let interval: NodeJS.Timeout;

    if (isAutoPlay && selectedImage !== null) {
      interval = setInterval(() => {
        navigateImage('next');
      }, 3000);
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isAutoPlay, selectedImage]);

  const openLightbox = (id: number) => {
    setSelectedImage(id);
    const index = memories.findIndex(m => m.id === id);
    setCurrentIndex(index);
    setIsAutoPlay(false); // Start with auto-play off
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    setIsAutoPlay(false);
  };

  const navigateImage = (direction: 'prev' | 'next') => {
    if (selectedImage === null) return;

    let newIndex;
    if (direction === 'prev') {
      newIndex = currentIndex > 0 ? currentIndex - 1 : memories.length - 1;
    } else {
      newIndex = currentIndex < memories.length - 1 ? currentIndex + 1 : 0;
    }

    setCurrentIndex(newIndex);
    setSelectedImage(memories[newIndex].id);
  };

  const toggleAutoPlay = () => {
    setIsAutoPlay(!isAutoPlay);
  };

  const downloadImage = () => {
    if (!selectedMemory) return;

    const link = document.createElement('a');
    link.href = selectedMemory.url;
    link.download = `memory-${selectedMemory.id}.jpg`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const shareImage = () => {
    if (!selectedMemory) return;

    if (navigator.share) {
      navigator.share({
        title: 'Special Memory',
        text: selectedMemory.caption,
        url: window.location.href
      });
    } else {
      // Fallback for browsers that don't support Web Share API
      navigator.clipboard.writeText(window.location.href);
      alert('Link copied to clipboard!');
    }
  };

  const selectedMemory = memories.find(m => m.id === selectedImage);

  return (
    <section className="py-20 bg-gradient-to-br from-sky-blue/10 to-royal-blue/10 relative overflow-hidden">
      {/* Enhanced Background with Multiple Layers */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Floating Camera Icons */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={`camera-${i}`}
            className="absolute text-blue-300/20"
            animate={{
              y: [0, -30, 0],
              x: [0, 15, 0],
              opacity: [0.2, 0.5, 0.2],
              rotate: [0, 15, -15, 0]
            }}
            transition={{
              duration: 6 + i * 0.7,
              repeat: Infinity,
              delay: i * 0.4,
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          >
            <Camera className="w-6 h-6 fill-current" />
          </motion.div>
        ))}

        {/* Floating Hearts */}
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={`heart-${i}`}
            className="absolute text-pink-300/20"
            animate={{
              y: [0, -40, 0],
              x: [0, -10, 0],
              opacity: [0.2, 0.5, 0.2],
              scale: [1, 1.2, 1]
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
            <Heart className="w-5 h-5 fill-current" />
          </motion.div>
        ))}

        {/* Decorative Icons */}
        <motion.div
          className="absolute top-10 left-10 text-4xl md:text-6xl"
          animate={{ y: [0, -15, 0] }}
          transition={{ duration: 4, repeat: Infinity }}
        >🪬</motion.div>
        <motion.div
          className="absolute top-32 right-20 text-5xl md:text-7xl"
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 5, repeat: Infinity, delay: 1 }}
        >💖</motion.div>
        <motion.div
          className="absolute bottom-20 left-1/3 text-4xl md:text-6xl"
          animate={{ y: [0, -25, 0] }}
          transition={{ duration: 6, repeat: Infinity, delay: 2 }}
        >🫧</motion.div>
        <motion.div
          className="absolute bottom-40 right-1/4 text-3xl md:text-5xl"
          animate={{ y: [0, -18, 0] }}
          transition={{ duration: 4.5, repeat: Infinity, delay: 1.5 }}
        >🩵</motion.div>
        <motion.div
          className="absolute top-1/2 left-10 text-3xl md:text-5xl"
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 5.5, repeat: Infinity, delay: 0.7 }}
        >❄️</motion.div>
      </div>

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgdmlld0JveD0iMCAwIDYwIDYwIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMwMDAiIGZpbGwtb3BhY2l0eT0iMC4xIj48Y2lyY2xlIGN4PSI3IiBjeT0iNyIgcj0iMSIvPjwvZz48L2c+PC9zdmc+')]"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-playfair text-5xl md:text-6xl font-bold text-royal-blue mb-4">
            Memory Wall
          </h2>
          <p className="font-vibes text-2xl text-midnight-black/70">
            Captured moments of beauty and joy
          </p>
        </motion.div>

        {/* Enhanced Masonry Grid */}
        <div className="columns-1 md:columns-2 lg:columns-3 xl:columns-4 gap-6 max-w-7xl mx-auto">
          {memories.map((memory, index) => (
            <motion.div
              key={memory.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="break-inside-avoid mb-6 group cursor-pointer"
              onMouseEnter={() => setHoveredId(memory.id)}
              onMouseLeave={() => setHoveredId(null)}
              onClick={() => openLightbox(memory.id)}
            >
              <div className="relative polaroid-frame bg-pure-white p-4 pb-16 rounded-lg shadow-lg transform rotate-1 group-hover:rotate-3 group-hover:scale-105 transition-all duration-500 ease-out">
                {/* Image with enhanced hover effect */}
                <div className="relative overflow-hidden rounded-md">
                  <img
                    src={memory.url}
                    alt={memory.caption}
                    className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-115"
                  />

                  {/* Enhanced Hover Overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-t from-royal-blue/70 to-transparent transition-opacity duration-300 ${hoveredId === memory.id ? 'opacity-100' : 'opacity-0'}`}>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <motion.div
                        initial={{ scale: 0.8 }}
                        animate={{ scale: hoveredId === memory.id ? 1 : 0.8 }}
                        className="bg-pure-white/30 backdrop-blur-sm rounded-full p-3"
                      >
                        <Heart className="w-8 h-8 text-pure-white fill-current animate-pulse" />
                      </motion.div>
                    </div>
                  </div>
                </div>

                {/* Enhanced Caption */}
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="font-vibes text-lg text-midnight-black text-center">
                    {memory.caption}
                  </p>
                </div>

                {/* Heart Corner with animation */}
                <motion.div
                  className="absolute top-2 right-2"
                  animate={{ scale: hoveredId === memory.id ? [1, 1.2, 1] : 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <Heart className="w-4 h-4 text-royal-blue/50 fill-current" />
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Enhanced Lightbox */}
        <AnimatePresence>
          {selectedImage && selectedMemory && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-midnight-black/90 z-50 flex items-center justify-center p-4"
              onClick={closeLightbox}
            >
              <div className="relative max-w-5xl max-h-[90vh] w-full h-full flex items-center justify-center">
                {/* Close Button */}
                <button
                  onClick={closeLightbox}
                  className="absolute top-4 right-4 z-10 w-10 h-10 bg-pure-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-pure-white/30 transition-colors"
                >
                  <X className="w-6 h-6 text-pure-white" />
                </button>

                {/* Navigation Buttons */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    navigateImage('prev');
                  }}
                  className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-pure-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-pure-white/30 transition-colors"
                >
                  <ChevronLeft className="w-6 h-6 text-pure-white" />
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    navigateImage('next');
                  }}
                  className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-pure-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-pure-white/30 transition-colors"
                >
                  <ChevronRight className="w-6 h-6 text-pure-white" />
                </button>

                {/* Image Counter */}
                <div className="absolute top-4 left-1/2 transform -translate-x-1/2 z-10 bg-pure-white/20 backdrop-blur-sm text-pure-white px-4 py-2 rounded-full text-sm font-lora">
                  {currentIndex + 1} of {memories.length}
                </div>

                {/* Action Buttons */}
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-10 flex space-x-3">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleAutoPlay();
                    }}
                    className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors ${isAutoPlay ? 'bg-rose-500' : 'bg-pure-white/20 hover:bg-pure-white/30'}`}
                  >
                    <div className="w-4 h-4 rounded-sm bg-pure-white"></div>
                  </button>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      downloadImage();
                    }}
                    className="w-10 h-10 bg-pure-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-pure-white/30 transition-colors"
                  >
                    <Download className="w-5 h-5 text-pure-white" />
                  </button>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      shareImage();
                    }}
                    className="w-10 h-10 bg-pure-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-pure-white/30 transition-colors"
                  >
                    <Share2 className="w-5 h-5 text-pure-white" />
                  </button>
                </div>

                {/* Image with Enhanced Styling */}
                <motion.div
                  initial={{ scale: 0.9 }}
                  animate={{ scale: 1 }}
                  exit={{ scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  className="glass-card p-6 rounded-2xl max-w-4xl max-h-full w-full"
                  onClick={(e) => e.stopPropagation()}
                >
                  <div className="relative overflow-hidden rounded-lg">
                    <img
                      src={selectedMemory.url}
                      alt={selectedMemory.caption}
                      className="w-full h-auto max-h-[70vh] object-contain"
                    />

                    {/* Image Overlay with Caption */}
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-midnight-black/80 to-transparent p-6">
                      <div className="flex justify-between items-end">
                        <div>
                          <h3 className="font-vibes text-2xl text-pure-white mb-1">
                            {selectedMemory.caption}
                          </h3>
                        </div>
                        <Heart className="w-6 h-6 text-rose-500 fill-current" />
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <style>{`
        .glass-card {
          background: rgba(255, 255, 255, 0.8);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.3);
          box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.1);
        }
        .polaroid-frame {
          box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
          transform-origin: center bottom;
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default MemoryWall;