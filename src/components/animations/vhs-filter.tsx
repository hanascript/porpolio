'use client';

import { useEffect, useState } from 'react';

export const VHSFilter = ({ children, intensity = 0.75 }: { children: React.ReactNode; intensity?: number }) => {
  const [glitchOffset, setGlitchOffset] = useState(0);
  const [noiseOpacity, setNoiseOpacity] = useState(0.1);

  useEffect(() => {
    // Create random glitch effect
    const glitchInterval = setInterval(() => {
      if (Math.random() < 0.1) {
        // 10% chance every interval
        setGlitchOffset(Math.random() * 4 - 2);
        setTimeout(() => setGlitchOffset(0), 100 + Math.random() * 200);
      }
    }, 500);

    // Animate noise
    const noiseInterval = setInterval(() => {
      setNoiseOpacity(0.05 + Math.random() * 0.15);
    }, 100);

    return () => {
      clearInterval(glitchInterval);
      clearInterval(noiseInterval);
    };
  }, []);

  return (
    <div className='relative w-full min-h-screen overflow-hidden'>
      {/* Main content */}
      <div
        className='relative z-10'
        style={{
          transform: `translateX(${glitchOffset}px)`,
          transition: 'transform 0.1s ease-out',
        }}
      >
        {children}
      </div>

      {/* VHS Filter Overlays */}
      <div className='fixed inset-0 pointer-events-none z-20'>
        {/* Scanlines */}
        <div
          className='absolute inset-0'
          style={{
            background: `repeating-linear-gradient(
              0deg,
              transparent,
              transparent 2px,
              rgba(0, 0, 0, ${0.1 * intensity}) 2px,
              rgba(0, 0, 0, ${0.1 * intensity}) 4px
            )`,
            animation: 'scanlines 0.1s linear infinite',
          }}
        />

        {/* Film grain/noise */}
        <div
          className='absolute inset-0 mix-blend-multiply'
          style={{
            opacity: noiseOpacity * intensity,
            background: `
              radial-gradient(circle at 20% 80%, rgba(120, 119, 198, 0.3) 0%, transparent 50%),
              radial-gradient(circle at 80% 20%, rgba(255, 119, 198, 0.15) 0%, transparent 50%),
              radial-gradient(circle at 40% 40%, rgba(120, 119, 198, 0.2) 0%, transparent 50%)
            `,
            filter: 'contrast(200%) brightness(150%)',
          }}
        />

        {/* Color aberration */}
        <div
          className='absolute inset-0 mix-blend-screen'
          style={{
            opacity: 0.1 * intensity,
            background: `
              linear-gradient(45deg, 
                rgba(255, 0, 0, 0.1) 0%, 
                transparent 25%, 
                rgba(0, 255, 0, 0.1) 50%, 
                transparent 75%, 
                rgba(0, 0, 255, 0.1) 100%
              )
            `,
          }}
        />

        {/* Vignette */}
        <div
          className='absolute inset-0'
          style={{
            background: `radial-gradient(
              ellipse at center,
              transparent 0%,
              transparent 65%,
              rgba(0, 0, 0, ${0.3 * intensity}) 100%
            )`,
          }}
        />

        {/* Tracking lines (horizontal distortion) */}
        <div
          className='absolute inset-0'
          style={{
            background: `repeating-linear-gradient(
              0deg,
              transparent 0px,
              transparent 100px,
              rgba(255, 255, 255, ${0.02 * intensity}) 100px,
              rgba(255, 255, 255, ${0.02 * intensity}) 102px,
              transparent 102px,
              transparent 200px
            )`,
            animation: 'tracking 8s linear infinite',
          }}
        />
      </div>

      {/* CSS Animations */}
      <style jsx>{`
        @keyframes scanlines {
          0% {
            transform: translateY(0);
          }
          100% {
            transform: translateY(4px);
          }
        }

        @keyframes tracking {
          0% {
            transform: translateY(0px);
          }
          100% {
            transform: translateY(-200px);
          }
        }

        .vhs-content {
          filter: contrast(110%) brightness(90%) saturate(120%) hue-rotate(2deg);
        }
      `}</style>
    </div>
  );
};
