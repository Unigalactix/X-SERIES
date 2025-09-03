import React, { useMemo } from 'react';

const createRandomStars = (count: number, size: number) => {
  // Generate stars on a large canvas to avoid repeating patterns on large screens
  return Array.from({ length: count }).map(() => 
    `radial-gradient(${size}px ${size}px at ${Math.floor(Math.random() * 2500)}px ${Math.floor(Math.random() * 5000)}px, rgba(255,255,255, ${Math.random() * 0.5 + 0.5}), transparent)`
  ).join(',');
};

const StarLayer: React.FC<{ count: number, size: number, animationDuration: number }> = ({ count, size, animationDuration }) => {
  const stars = useMemo(() => createRandomStars(count, size), [count, size]);

  const style: React.CSSProperties = {
    position: 'absolute',
    width: '2500px', 
    height: '5000px', 
    top: '-2500px', 
    left: 'calc(50% - 1250px)',
    backgroundImage: stars,
    animation: `move-stars ${animationDuration}s linear infinite`,
    willChange: 'transform',
  };

  return <div style={style}></div>;
};

export const CodeGeneratedBackground: React.FC = () => {
  return (
    <div className="absolute inset-0 overflow-hidden opacity-50 -z-10">
      <style>
        {`
          @keyframes move-stars {
            from { transform: translateY(0px); }
            to { transform: translateY(2500px); }
          }
        `}
      </style>
      {/* Create multiple layers for a parallax effect */}
      <StarLayer count={30} size={3} animationDuration={180} />
      <StarLayer count={80} size={2} animationDuration={120} />
      <StarLayer count={200} size={1} animationDuration={70} />
    </div>
  );
};
