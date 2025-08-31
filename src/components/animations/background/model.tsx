import { useEffect, useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { useTheme } from 'next-themes';
import * as THREE from 'three';

import { fragment, vertex } from './shader';

const THEME_COLORS = {
  light: new THREE.Color(0xdfd6c0),
  dark: new THREE.Color(0xcfc0ae),
};

export const Model = () => {
  const { theme } = useTheme();

  const uniforms = useRef({
    uTime: { value: 0 },
    uColor: { value: THEME_COLORS[theme as keyof typeof THEME_COLORS] || THEME_COLORS.light },
  });

  useEffect(() => {
    if (uniforms.current) {
      uniforms.current.uColor.value =
        THEME_COLORS[theme as keyof typeof THEME_COLORS] || THEME_COLORS.light;
    }
  }, [theme]);

  useFrame(state => {
    if (uniforms.current) {
      uniforms.current.uTime.value = state.clock.elapsedTime;
    }
  });

  return (
    <>
      <mesh>
        <planeGeometry args={[20, 15]} />

        <shaderMaterial
          vertexShader={vertex}
          fragmentShader={fragment}
          uniforms={uniforms.current}
          side={2}
        />
      </mesh>
    </>
  );
};
