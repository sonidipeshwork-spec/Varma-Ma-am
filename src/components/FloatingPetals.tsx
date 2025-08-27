import { useEffect, useState } from 'react';

const FloatingPetals = () => {
  const [petals, setPetals] = useState<Array<{ id: number; delay: number; size: number }>>([]);

  useEffect(() => {
    const petalArray = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      delay: Math.random() * 15,
      size: 0.8 + Math.random() * 0.4,
    }));
    setPetals(petalArray);
  }, []);

  const petalTypes = ['🍀', '🤍', '💙', '🌸', '✿', '❄️'];

  return (
    <div className="fixed inset-0 pointer-events-none z-10">
      {petals.map((petal) => (
        <div
          key={petal.id}
          className="floating-petal"
          style={{
            animationDelay: `${petal.delay}s`,
            fontSize: `${petal.size}rem`,
            left: `${Math.random() * 100}%`,
          }}
        >
          {petalTypes[Math.floor(Math.random() * petalTypes.length)]}
        </div>
      ))}
    </div>
  );
};

export default FloatingPetals;