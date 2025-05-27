'use client';

import { useEffect, useRef, useState } from 'react';

export const TextScroll = ({ text = 'PROJECTS //' }: { text: string }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [copies, setCopies] = useState(2);
  const [animationDuration, setAnimationDuration] = useState(20);

  useEffect(() => {
    if (!containerRef.current) return;

    const calculateRequiredCopies = () => {
      const container = containerRef.current;
      if (!container) return;

      // Measure a single text element to determine width
      const tempSpan = document.createElement('span');
      tempSpan.style.visibility = 'hidden';
      tempSpan.style.position = 'absolute';
      tempSpan.style.whiteSpace = 'nowrap';
      tempSpan.innerText = text;
      document.body.appendChild(tempSpan);

      const textWidth = tempSpan.offsetWidth;
      const containerWidth = container.offsetWidth;

      document.body.removeChild(tempSpan);

      if (textWidth === 0 || containerWidth === 0) return;

      // Calculate how many copies needed to fill container twice (for seamless loop)
      const neededCopies = Math.ceil((containerWidth * 2) / textWidth) + 1;

      // Update duration based on content length for consistent speed
      const newDuration = (textWidth * neededCopies) / 700;

      setCopies(neededCopies);
      setAnimationDuration(newDuration);
    };

    // Initial calculation
    calculateRequiredCopies();

    // Recalculate on window resize
    const handleResize = () => {
      calculateRequiredCopies();
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [text]);

  return (
    <div
      ref={containerRef}
      className='relative overflow-hidden w-full whitespace-nowrap text-xs cursor-default select-none uppercase'
    >
      <div
        className='inline-block animate-marquee'
        style={{
          animation: `marquee ${animationDuration}s linear infinite`,
        }}
      >
        {Array(copies)
          .fill(text)
          .map((item, index) => (
            <span
              key={index}
              className='inline-block mx-2'
            >
              {item}
            </span>
          ))}
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-${100 / copies}%);
          }
        }
      `}</style>
    </div>
  );
};
