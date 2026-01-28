'use client';

import { Canvas } from '@react-three/fiber';
import { Float, Sphere, Box, Torus, MeshDistortMaterial } from '@react-three/drei';
import { motion } from 'framer-motion';
import { useRef } from 'react';
import * as THREE from 'three';

function Scene() {
  const meshRef = useRef<THREE.Mesh>(null);

  return (
    <group>
      {/* Floating sphere with distortion */}
      <Float speed={1.4} rotationIntensity={1} floatIntensity={2}>
        <Sphere ref={meshRef} args={[1, 32, 32]} position={[-2, 0, 0]}>
          <MeshDistortMaterial
            color="#3b82f6"
            attach="material"
            distort={0.3}
            speed={2}
            roughness={0}
            metalness={0.8}
          />
        </Sphere>
      </Float>

      {/* Floating torus */}
      <Float speed={1.2} rotationIntensity={1.5} floatIntensity={1.5}>
        <Torus args={[1, 0.4, 16, 100]} position={[2, -1, 0]}>
          <meshStandardMaterial
            color="#8b5cf6"
            roughness={0.1}
            metalness={0.9}
          />
        </Torus>
      </Float>

      {/* Floating box */}
      <Float speed={1.8} rotationIntensity={2} floatIntensity={1}>
        <Box args={[1.2, 1.2, 1.2]} position={[0, 2, -1]}>
          <meshStandardMaterial
            color="#06b6d4"
            roughness={0.2}
            metalness={0.7}
          />
        </Box>
      </Float>
    </group>
  );
}

export default function FloatingGeometry() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 75 }}
        style={{ background: 'transparent' }}
      >
        <ambientLight intensity={0.4} />
        <directionalLight position={[10, 10, 5]} intensity={0.8} />
        <pointLight position={[-10, -10, -5]} intensity={0.5} />
        <Scene />
      </Canvas>
    </div>
  );
}
