'use client';

import { useEffect, useRef } from 'react';

type Props = {
  values?: {
    R1: number;
    R2: number;
    K2: number;
  };
};

export const SpinningDonut = ({ values }: Props) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const context = canvas.getContext('2d');
    if (!context) return;

    let animationFrameId: number;

    const R1 = values?.R1 || 1; // ring size: 1
    const R2 = values?.R2 || 2; // ring size: 2
    // const K1 = 150;
    const K2 = values?.K2 || 5; // This is the scale of the donut: 5

    // CHANGED: Adjusted dimensions for tighter fit
    const WIDTH = 60;
    const HEIGHT = 35;
    const PIXEL_SIZE = 5; // Size of each ASCII character in pixels

    const calculateDonut = (A: number, B: number): string => {
      const cos = Math.cos;
      const sin = Math.sin;
      const output: string[] = [];
      const zBuffer: number[] = [];

      // CHANGED: Updated array size for new dimensions
      for (let i = 0; i < WIDTH * HEIGHT; i++) {
        output[i] = ' ';
        zBuffer[i] = 0;
      }

      for (let theta = 0; theta < 6.28; theta += 0.07) {
        for (let phi = 0; phi < 6.28; phi += 0.02) {
          const sinPhi = sin(phi);
          const cosPhi = cos(phi);
          const cosTheta = cos(theta);
          const sinTheta = sin(theta);
          const sinA = sin(A);
          const cosA = cos(A);
          const cosB = cos(B);
          const sinB = sin(B);

          const circleX = R2 + R1 * cosTheta;
          const circleY = R1 * sinTheta;

          const x = circleX * (cosB * cosPhi + sinA * sinB * sinPhi) - circleY * cosA * sinB;
          const y = circleX * (sinB * cosPhi - sinA * cosB * sinPhi) + circleY * cosA * cosB;
          const z = K2 + cosA * circleX * sinPhi + circleY * sinA;
          const ooz = 1 / z;

          // CHANGED: Adjusted calculations for tighter fit
          const xp = Math.floor(WIDTH / 2 + 35 * ooz * x);
          const yp = Math.floor(HEIGHT / 2 + 20 * ooz * y);
          const idx = xp + WIDTH * yp;
          const luminance = Math.floor(
            8 *
              ((cosB * sinTheta - sinA * cosTheta * sinPhi) * cosA +
                cosTheta * cosPhi +
                sinTheta * sinA +
                sinPhi * cosA)
          );

          // CHANGED: Updated bounds checking for new dimensions
          if (yp < HEIGHT && yp >= 0 && xp >= 0 && xp < WIDTH && ooz > zBuffer[idx]) {
            zBuffer[idx] = ooz;
            output[idx] = '@$#*!=;:~-,. '[luminance > 0 ? (luminance < 12 ? luminance : 11) : 0];
          }
        }
      }

      return output.join('');
    };

    let A = 1;
    let B = 1;

    const render = (): void => {
      // CHANGED: Removed the white background fill
      context.clearRect(0, 0, canvas.width, canvas.height);

      context.font = `${PIXEL_SIZE}px monospace`;
      context.fillStyle = '#CFC0AE';

      const donutAscii = calculateDonut(A, B);
      // CHANGED: Adjusted rendering to account for padding
      for (let i = 0; i < HEIGHT; i++) {
        context.fillText(
          donutAscii.slice(i * WIDTH, (i + 1) * WIDTH),
          30, // Left padding
          10 + i * PIXEL_SIZE // Top padding + line height
        );
      }

      A += 0.07 * 0.15;
      B += 0.03 * 0.15;

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [values]);

  // CHANGED: Adjusted canvas size to account for padding and ASCII character size
  return (
    <canvas
      ref={canvasRef}
      width={225}
      height={175}
    />
  );
};
