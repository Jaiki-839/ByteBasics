"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, RoundedBox, Environment } from "@react-three/drei";
import * as THREE from "three";
import { useTheme } from "@/components/layout/ThemeProvider";

function Monitor() {
  return (
    <group position={[0, 0.3, 0]}>
      {/* screen */}
      <RoundedBox args={[2.6, 1.7, 0.12]} radius={0.06} smoothness={4}>
        <meshStandardMaterial color="#0B1220" metalness={0.3} roughness={0.4} />
      </RoundedBox>
      <mesh position={[0, 0, 0.07]}>
        <planeGeometry args={[2.35, 1.45]} />
        <meshStandardMaterial color="#2F6FED" emissive="#2F6FED" emissiveIntensity={0.55} />
      </mesh>
      {/* stand */}
      <mesh position={[0, -1.05, -0.05]}>
        <boxGeometry args={[0.16, 0.6, 0.16]} />
        <meshStandardMaterial color="#1E2A44" metalness={0.5} roughness={0.4} />
      </mesh>
      <mesh position={[0, -1.4, -0.05]}>
        <boxGeometry args={[1.1, 0.08, 0.5]} />
        <meshStandardMaterial color="#1E2A44" metalness={0.5} roughness={0.4} />
      </mesh>
    </group>
  );
}

function Keyboard() {
  return (
    <group position={[0, -1.8, 1.3]} rotation={[-0.35, 0, 0]}>
      <RoundedBox args={[2.2, 0.12, 0.8]} radius={0.04}>
        <meshStandardMaterial color="#E7ECF7" roughness={0.7} />
      </RoundedBox>
    </group>
  );
}

function Mouse() {
  return (
    <group position={[1.5, -1.85, 1.4]} rotation={[-0.35, 0, 0]}>
      <RoundedBox args={[0.35, 0.12, 0.55]} radius={0.14}>
        <meshStandardMaterial color="#E7ECF7" roughness={0.7} />
      </RoundedBox>
    </group>
  );
}

function CpuTower() {
  return (
    <group position={[-2.3, -0.6, 0.4]}>
      <RoundedBox args={[0.9, 2.2, 1.4]} radius={0.05}>
        <meshStandardMaterial color="#121A2E" metalness={0.4} roughness={0.5} />
      </RoundedBox>
      <mesh position={[0, 0.6, 0.71]}>
        <circleGeometry args={[0.16, 24]} />
        <meshStandardMaterial color="#57C6FF" emissive="#57C6FF" emissiveIntensity={0.9} />
      </mesh>
      <mesh position={[0, 0.1, 0.71]}>
        <circleGeometry args={[0.16, 24]} />
        <meshStandardMaterial color="#2F6FED" emissive="#2F6FED" emissiveIntensity={0.9} />
      </mesh>
    </group>
  );
}

function Particles() {
  const ref = useRef<THREE.Points>(null);
  const count = 60;
  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      arr[i * 3] = (Math.random() - 0.5) * 8;
      arr[i * 3 + 1] = (Math.random() - 0.5) * 5;
      arr[i * 3 + 2] = (Math.random() - 0.5) * 4;
    }
    return arr;
  }, []);

  useFrame((state) => {
    if (!ref.current) return;
    ref.current.rotation.y = state.clock.elapsedTime * 0.03;
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial size={0.035} color="#57C6FF" transparent opacity={0.7} sizeAttenuation />
    </points>
  );
}

function Rig() {
  const group = useRef<THREE.Group>(null);
  useFrame((state) => {
    if (!group.current) return;
    const x = (state.pointer.x * Math.PI) / 24;
    const y = (state.pointer.y * Math.PI) / 32;
    group.current.rotation.y = THREE.MathUtils.lerp(group.current.rotation.y, x, 0.04);
    group.current.rotation.x = THREE.MathUtils.lerp(group.current.rotation.x, -y, 0.04);
  });

  return (
    <group ref={group}>
      <Float speed={1.4} rotationIntensity={0.15} floatIntensity={0.5}>
        <Monitor />
        <CpuTower />
        <Keyboard />
        <Mouse />
      </Float>
      <Particles />
    </group>
  );
}

export function HeroScene() {
  const { theme } = useTheme();
  return (
    <Canvas camera={{ position: [0, 0.4, 6.5], fov: 42 }} dpr={[1, 1.6]}>
      <ambientLight intensity={theme === "dark" ? 0.5 : 0.8} />
      <directionalLight position={[4, 5, 5]} intensity={1.1} />
      <pointLight position={[-3, -2, 2]} intensity={0.6} color="#2F6FED" />
      <Rig />
      <Environment preset="city" />
    </Canvas>
  );
}

export default HeroScene;
