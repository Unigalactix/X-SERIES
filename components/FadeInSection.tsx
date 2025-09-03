import React, { useState, useRef, useEffect } from 'react';

interface FadeInSectionProps {
  children: React.ReactNode;
}

export const FadeInSection: React.FC<FadeInSectionProps> = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Stop observing after it becomes visible to prevent re-triggering
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1 // Animate when 10% of the element is visible
    });

    const currentRef = domRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return (
    <div ref={domRef} className={isVisible ? 'fade-in' : 'opacity-0'}>
      {children}
    </div>
  );
};
