import React, { useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Line, OrbitControls, Sphere, Trail } from "@react-three/drei";
import * as THREE from "three";

function HasherCore() {
  const groupRef = useRef<THREE.Group>(null);
  const shellRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();

    if (groupRef.current) {
      groupRef.current.rotation.y = t * 0.24;
      groupRef.current.rotation.x = Math.sin(t * 0.2) * 0.12;
    }

    if (shellRef.current) {
      shellRef.current.rotation.z = t * 0.16;
      shellRef.current.scale.setScalar(1 + Math.sin(t * 0.9) * 0.04);
    }
  });

  return (
    <group ref={groupRef}>
      <Float speed={2.1} rotationIntensity={0.55} floatIntensity={1.4}>
        <Sphere args={[1.25, 64, 64]}>
          <meshStandardMaterial
            color="#8af7df"
            emissive="#2bffd7"
            emissiveIntensity={0.45}
            metalness={0.55}
            roughness={0.08}
            wireframe
          />
        </Sphere>
      </Float>

      <mesh ref={shellRef}>
        <icosahedronGeometry args={[1.95, 1]} />
        <meshPhysicalMaterial
          color="#7eaaff"
          transparent
          opacity={0.12}
          roughness={0.1}
          metalness={0.3}
          transmission={0.8}
          thickness={0.7}
        />
      </mesh>

      <Line
        points={[
          [-2.6, 0.5, -0.2],
          [-0.9, 1.45, 0.3],
          [0.55, 1.15, 0.22],
          [2.45, 0.08, -0.18],
        ]}
        color="#8af7df"
        lineWidth={1.5}
        transparent
        opacity={0.7}
      />
      <Line
        points={[
          [-2.1, -1.28, 0.1],
          [-0.85, -0.38, -0.35],
          [0.9, -1.08, 0.15],
          [2.2, -0.58, -0.25],
        ]}
        color="#7eaaff"
        lineWidth={1.2}
        transparent
        opacity={0.55}
      />
    </group>
  );
}

function OrbitingGlyph({ offset, color, speed }: { offset: number; color: string; speed: number }) {
  const ref = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    const t = state.clock.getElapsedTime() * speed + offset;

    if (ref.current) {
      ref.current.position.x = Math.cos(t) * 2.7;
      ref.current.position.y = Math.sin(t * 1.3) * 1.1;
      ref.current.position.z = Math.sin(t) * 1.6;
      ref.current.rotation.x = t;
      ref.current.rotation.y = t * 1.2;
    }
  });

  return (
    <Trail width={0.5} length={4} color={new THREE.Color(color)} attenuation={(t) => t * t}>
      <mesh ref={ref}>
        <octahedronGeometry args={[0.18, 0]} />
        <meshStandardMaterial color={color} emissive={color} emissiveIntensity={0.65} />
      </mesh>
    </Trail>
  );
}

function DataField() {
  const [positions] = useState(() => {
    const values = new Float32Array(180 * 3);

    for (let i = 0; i < 180; i += 1) {
      const i3 = i * 3;
      values[i3] = (Math.random() - 0.5) * 10;
      values[i3 + 1] = (Math.random() - 0.5) * 7;
      values[i3 + 2] = (Math.random() - 0.5) * 8;
    }

    return values;
  });

  return (
    <points>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={positions.length / 3}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial color="#d8f7ff" size={0.035} transparent opacity={0.65} />
    </points>
  );
}

export default function OrbitalScene() {
  return (
    <Canvas camera={{ position: [0, 0, 6.5], fov: 42 }}>
      <color attach="background" args={["#050816"]} />
      <fog attach="fog" args={["#050816", 6, 14]} />
      <ambientLight intensity={0.7} />
      <pointLight position={[4, 2, 4]} intensity={12} color="#8af7df" />
      <pointLight position={[-4, -2, 3]} intensity={10} color="#7eaaff" />
      <spotLight position={[0, 5, 2]} intensity={18} angle={0.35} penumbra={1} color="#ffffff" />

      <DataField />
      <HasherCore />
      <OrbitingGlyph offset={0} color="#8af7df" speed={0.65} />
      <OrbitingGlyph offset={2.1} color="#7eaaff" speed={0.8} />
      <OrbitingGlyph offset={4.2} color="#f6c177" speed={0.55} />

      <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.35} />
    </Canvas>
  );
}
