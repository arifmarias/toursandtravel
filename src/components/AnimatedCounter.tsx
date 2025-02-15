import React, { useState, useEffect } from 'react';

const AnimatedCounter = ({ end, duration = 2000, label }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime;
    let animationFrame;

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const percentage = Math.min(progress / duration, 1);
      
      // Easing function for smooth animation
      const easeOutQuad = 1 - Math.pow(1 - percentage, 2);
      setCount(Math.floor(easeOutQuad * end));

      if (progress < duration) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration]);

  return (
    <div className="bg-white p-4 rounded-lg shadow-md text-center transform hover:scale-105 transition-transform duration-300">
      <h4 className="text-3xl font-bold text-blue-600">
        {count}
        <span className="text-2xl">+</span>
      </h4>
      <p className="text-gray-600">{label}</p>
    </div>
  );
};

export default AnimatedCounter;