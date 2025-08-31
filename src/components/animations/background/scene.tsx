'use client';

import { Canvas } from '@react-three/fiber';

import { Model } from './model';

export default function Scene() {
  return (
    <div className='bg-background fixed top-0 -z-999 h-full w-full opacity-40 dark:opacity-15'>
      <Canvas
        orthographic
        camera={{
          zoom: 100,
          position: [0, 0, 2],
        }}
        dpr={[1, 2]}
        gl={{ alpha: true, toneMappingExposure: 0.6 }}
        fallback={<div>Sorry no WebGL supported!</div>}
      >
        <Model />
      </Canvas>
    </div>
  );
}
