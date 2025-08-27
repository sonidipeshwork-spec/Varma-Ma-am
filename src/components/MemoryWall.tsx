import { useState } from 'react';
import { motion } from 'framer-motion';
import { Heart, X, ChevronLeft, ChevronRight } from 'lucide-react';

import image_1 from '@/assets/image_1.png';
import image_2 from '@/assets/image_2.png';
import image_3 from '@/assets/image_3.jpg';
import image_4 from '@/assets/image_4.jpg';
import image_5 from '@/assets/image_5.jpg';
import image_9 from '@/assets/image_9.jpg';
import image_7 from '@/assets/image_7.jpg';
import image_8 from '@/assets/image_8.jpg';

// Using placeholder images that represent memories
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
    url: image_5,
    caption: "Miss Adorable 💙",
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
  }
];

const MemoryWall = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  const openLightbox = (id: number) => {
    setSelectedImage(id);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const navigateImage = (direction: 'prev' | 'next') => {
    if (selectedImage === null) return;

    const currentIndex = memories.findIndex(m => m.id === selectedImage);
    let newIndex;

    if (direction === 'prev') {
      newIndex = currentIndex > 0 ? currentIndex - 1 : memories.length - 1;
    } else {
      newIndex = currentIndex < memories.length - 1 ? currentIndex + 1 : 0;
    }

    setSelectedImage(memories[newIndex].id);
  };

  const selectedMemory = memories.find(m => m.id === selectedImage);

  return (
    <section className="py-20 bg-gradient-to-br from-sky-blue/10 to-royal-blue/10 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 text-6xl animate-float">📸</div>
        <div className="absolute top-32 right-20 text-8xl animate-float" style={{ animationDelay: '2s' }}>💖</div>
        <div className="absolute bottom-20 left-1/3 text-7xl animate-float" style={{ animationDelay: '4s' }}>🌸</div>
      </div>

      <div className="container mx-auto px-4">
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
            Polaroid moments of beautiful nature
          </p>
        </motion.div>

        {/* Masonry Grid */}
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
              <div className="relative polaroid-frame bg-pure-white p-4 pb-16 rounded-lg shadow-lg transform rotate-1 group-hover:rotate-3 group-hover:scale-125 transition-all duration-500 ease-out">
                {/* Image */}
                <div className="relative overflow-hidden rounded-md">
                  <img
                    src={memory.url}
                    alt={memory.caption}
                    className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-115"
                  />

                  {/* Hover Overlay */}
                  <div className={`absolute inset-0 bg-royal-blue/20 transition-opacity duration-300 ${hoveredId === memory.id ? 'opacity-100' : 'opacity-0'
                    }`}>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Heart className="w-8 h-8 text-pure-white fill-current animate-pulse" />
                    </div>
                  </div>
                </div>

                {/* Caption */}
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="font-vibes text-lg text-midnight-black text-center">
                    {memory.caption}
                  </p>
                </div>

                {/* Heart Corner */}
                <div className="absolute top-2 right-2">
                  <Heart className="w-4 h-4 text-royal-blue/50 fill-current" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Lightbox */}
        {selectedImage && selectedMemory && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-midnight-black/90 z-50 flex items-center justify-center p-4"
            onClick={closeLightbox}
          >
            <div className="relative max-w-4xl max-h-[90vh] w-full h-full flex items-center justify-center">
              {/* Close Button */}
              <button
                onClick={closeLightbox}
                className="absolute top-4 right-4 z-10 w-10 h-10 bg-pure-white/20 rounded-full flex items-center justify-center hover:bg-pure-white/30 transition-colors"
              >
                <X className="w-6 h-6 text-pure-white" />
              </button>

              {/* Navigation Buttons */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  navigateImage('prev');
                }}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-pure-white/20 rounded-full flex items-center justify-center hover:bg-pure-white/30 transition-colors"
              >
                <ChevronLeft className="w-6 h-6 text-pure-white" />
              </button>

              <button
                onClick={(e) => {
                  e.stopPropagation();
                  navigateImage('next');
                }}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-pure-white/20 rounded-full flex items-center justify-center hover:bg-pure-white/30 transition-colors"
              >
                <ChevronRight className="w-6 h-6 text-pure-white" />
              </button>

              {/* Image */}
              <div className="glass-card p-6 rounded-2xl max-w-3xl max-h-full">
                <img
                  src={selectedMemory.url}
                  alt={selectedMemory.caption}
                  className="w-full h-auto max-h-[70vh] object-contain rounded-lg"
                  onClick={(e) => e.stopPropagation()}
                />

                {/* Caption */}
                <div className="mt-4 text-center">
                  <p className="font-vibes text-2xl text-midnight-black">
                    {selectedMemory.caption}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </div>

    </section>
  );
};

export default MemoryWall;