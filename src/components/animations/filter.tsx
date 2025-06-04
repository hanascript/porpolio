'use client';

import { useEffect, useState } from 'react';
import Waves from '../blocks/Backgrounds/Waves/Waves';

// const StaticFilterOverlay = ({ intensity = 0.3, enabled = true }) => {
//   const canvasRef = useRef<HTMLCanvasElement>(null);
//   const animationRef = useRef<number | null>(null);

//   useEffect(() => {
//     if (!enabled) return;

//     if (!canvasRef.current) return;

//     const canvas = canvasRef.current;
//     const ctx = canvas.getContext('2d');

//     if (!ctx) return;

//     // Set canvas size to window size
//     const updateCanvasSize = () => {
//       canvas.width = window.innerWidth;
//       canvas.height = window.innerHeight;
//     };

//     updateCanvasSize();
//     window.addEventListener('resize', updateCanvasSize);

//     // Generate static noise
//     const generateStatic = () => {
//       const imageData = ctx.createImageData(canvas.width, canvas.height);
//       const data = imageData.data;

//       for (let i = 0; i < data.length; i += 4) {
//         const noise = Math.random() * 255;
//         data[i] = noise; // Red
//         data[i + 1] = noise; // Green
//         data[i + 2] = noise; // Blue
//         data[i + 3] = Math.random() * intensity * 255; // Alpha (transparency)
//       }

//       ctx.putImageData(imageData, 0, 0);
//     };

//     // Animation loop
//     const animate = () => {
//       generateStatic();
//       animationRef.current = requestAnimationFrame(animate);
//     };

//     animate();

//     // Cleanup
//     return () => {
//       window.removeEventListener('resize', updateCanvasSize);
//       if (animationRef.current) {
//         cancelAnimationFrame(animationRef.current);
//       }
//     };
//   }, [intensity, enabled]);

//   if (!enabled) return null;

//   return (
//     <div className='fixed inset-0 pointer-events-none z-50'>
//       <canvas
//         ref={canvasRef}
//         className='w-full h-full'
//         style={{
//           mixBlendMode: 'multiply',
//           opacity: intensity,
//         }}
//       />
//     </div>
//   );
// };

const VHSFilter = ({ children, intensity = 0.85 }: { children: React.ReactNode; intensity?: number }) => {
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

export const Filter = ({ children }: { children: React.ReactNode }) => {
  return (
    <VHSFilter>
      {children}
      {/* <StaticFilterOverlay /> */}
      <div className='fixed -z-10 top-0 w-full h-full flex items-center justify-center text-secondary flex-col'>
        <div className='relative'>
          <p className='font-satoshi font-black uppercase text-primary-100 text-[4rem] lg:text-[10rem]'>HANASCRIPT</p>
          <p className='relative uppercase text-primary-100 text-[0.6rem] lg:text-[0.875rem] bottom-2 lg:bottom-14 left-1 lg:left-3'>
            ver 011 01110 00001 10110 00101
          </p>
        </div>
      </div>
      <Waves
        lineColor='#8E8175'
        backgroundColor='transparent'
        waveSpeedX={0.02}
        waveSpeedY={0.01}
        waveAmpX={40}
        waveAmpY={20}
        friction={0.9}
        tension={0.01}
        maxCursorMove={60}
        xGap={24}
        yGap={56}
        className='-z-50'
      />
    </VHSFilter>
  );
};
