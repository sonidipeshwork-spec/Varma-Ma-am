import { useEffect, useState } from 'react';

const FloatingPetals = () => {
  const [petals, setPetals] = useState<Array<{ id: number; delay: number; size: number; duration: number; horizontal: number }>>([]);

  useEffect(() => {
    const petalArray = Array.from({ length: 30 }, (_, i) => ({
      id: i,
      delay: Math.random() * 20,
      size: 0.5 + Math.random() * 1,
      duration: 15 + Math.random() * 15,
      horizontal: -30 + Math.random() * 60,
    }));
    setPetals(petalArray);
  }, []);

  const icons = ['🌕', '🌙', '⭐', '☁️', '🪷', '✨'];

  return (
    <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden text-blue-100/40">
      {petals.map((petal) => (
        <div
          key={petal.id}
          className="floating-petal"
          style={{
            animationDelay: `${petal.delay}s`,
            fontSize: `${petal.size}rem`,
            left: `${Math.random() * 100}%`,
            animationDuration: `${petal.duration}s`,
            '--horizontal-drift': `${petal.horizontal}%`,
          } as React.CSSProperties}
        >
          {icons[Math.floor(Math.random() * icons.length)]}
        </div>
      ))}

      <style>{`
        .floating-petal {
          position: absolute;
          top: -30px;
          animation: float linear infinite;
          will-change: transform, opacity;
          opacity: 0;
          text-shadow: 0 0 5px rgba(255, 255, 255, 0.5);
        }
        
        @keyframes float {
          0% {
            transform: translateY(0) translateX(0) rotate(0deg);
            opacity: 0;
          }
          10% {
            opacity: 0.6;
          }
          90% {
            opacity: 0.6;
          }
          100% {
            transform: translateY(105vh) translateX(var(--horizontal-drift, 0)) rotate(360deg);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
};

export default FloatingPetals;