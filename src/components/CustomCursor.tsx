import { useEffect, useState, useRef } from 'react';
import { motion, useSpring } from 'framer-motion';

const CustomCursor = () => {
  const [isVisible, setIsVisible] = useState(false);
  const cursorX = useSpring(0, { stiffness: 300, damping: 20 });
  const cursorY = useSpring(0, { stiffness: 300, damping: 20 });
  const cursorScale = useSpring(1, { stiffness: 300, damping: 10 });
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      setIsVisible(true);

      // Clear any existing timeout
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }

      // Set a new timeout to hide cursor after inactivity
      timeoutRef.current = setTimeout(() => {
        setIsVisible(false);
      }, 2000);
    };

    const handleMouseEnter = () => {
      cursorScale.set(1.2);
    };

    const handleMouseLeave = () => {
      cursorScale.set(1);
      setIsVisible(false);
    };

    const handleMouseDown = () => {
      cursorScale.set(0.8);
    };

    const handleMouseUp = () => {
      cursorScale.set(1.2);
    };

    window.addEventListener('mousemove', updateMousePosition);
    window.addEventListener('mouseenter', handleMouseEnter);
    window.addEventListener('mouseleave', handleMouseLeave);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      window.removeEventListener('mouseenter', handleMouseEnter);
      window.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);

      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [cursorX, cursorY, cursorScale]);

  if (!isVisible) return null;

  return (
    <motion.div
      className="fixed pointer-events-none z-50"
      style={{
        x: cursorX,
        y: cursorY,
        scale: cursorScale,
        translateX: '-50%',
        translateY: '-50%',
        willChange: 'transform',
      }}
    >
      <motion.div
        className="text-2xl"
        animate={{
          rotate: [0, 10, -10, 0],
          scale: [1, 1.1, 1]
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        style={{ willChange: 'transform' }}
      >
        💕
      </motion.div>
    </motion.div>
  );
};

export default CustomCursor;