import { useEffect, useState } from 'react';

const FloatingPetals = () => {
  const [petals, setPetals] = useState<Array<{ id: number; delay: number; size: number; duration: number; horizontal: number }>>([]);

  useEffect(() => {
    const petalArray = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      delay: Math.random() * 15,
      size: 0.8 + Math.random() * 0.4,
      duration: 10 + Math.random() * 10, // Random duration between 10-20s
      horizontal: -20 + Math.random() * 40, // Random horizontal drift between -20% to 20%
    }));
    setPetals(petalArray);
  }, []);

  const petalTypes = ['🍀', '🤍', '💙', '🌸', '✿', '❄️'];

  return (
    <div className="fixed inset-0 pointer-events-none z-10 overflow-hidden">
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
          {petalTypes[Math.floor(Math.random() * petalTypes.length)]}
        </div>
      ))}

      <style>{`
        .floating-petal {
          position: absolute;
          top: -20px;
          animation: float linear infinite;
          will-change: transform, opacity;
          opacity: 0;
        }
        
        @keyframes float {
          0% {
            transform: translateY(0) translateX(0) rotate(0deg);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          90% {
            opacity: 1;
          }
          100% {
            transform: translateY(100vh) translateX(var(--horizontal-drift, 0)) rotate(360deg);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
};

export default FloatingPetals;