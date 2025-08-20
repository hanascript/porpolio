'use client';

import { Canvas } from '@react-three/fiber';
import Model from './model';

export default function Background() {
  return (
    <div className='fixed -z-999 top-0 w-full h-full bg-background opacity-50'>
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
