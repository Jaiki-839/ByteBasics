"use client";

import { useRef } from "react";
import { Canvas, useFrame, ThreeEvent } from "@react-three/fiber";
import { RoundedBox, Text, Environment } from "@react-three/drei";
import * as THREE from "three";

interface PartProps {
  id: string;
  label: string;
  position: [number, number, number];
  args: [number, number, number];
  color: string;
  selected: boolean;
  onSelect: (id: string) => void;
}

function Part({ id, label, position, args, color, selected, onSelect }: PartProps) {
  const mesh = useRef<THREE.Mesh>(null);

  function handleClick(e: ThreeEvent<MouseEvent>) {
    e.stopPropagation();
    onSelect(id);
  }

  return (
    <group position={position}>
      <RoundedBox
        ref={mesh as any}
        args={args}
        radius={0.03}
        onClick={handleClick}
        onPointerOver={(e) => {
          e.stopPropagation();
          document.body.style.cursor = "pointer";
        }}
        onPointerOut={() => {
          document.body.style.cursor = "auto";
        }}
      >
        <meshStandardMaterial
          color={selected ? "#57C6FF" : color}
          emissive={selected ? "#2F6FED" : "#000000"}
          emissiveIntensity={selected ? 0.4 : 0}
          metalness={0.3}
          roughness={0.5}
        />
      </RoundedBox>
      <Text
        position={[0, args[1] / 2 + 0.14, 0]}
        fontSize={0.13}
        color={selected ? "#57C6FF" : "#8B9AC0"}
        anchorX="center"
        anchorY="bottom"
      >
        {label}
      </Text>
    </group>
  );
}

function Rotator({ children }: { children: React.ReactNode }) {
  const group = useRef<THREE.Group>(null);
  useFrame((state) => {
    if (!group.current) return;
    group.current.rotation.y = THREE.MathUtils.lerp(
      group.current.rotation.y,
      (state.pointer.x * Math.PI) / 8,
      0.03
    );
  });
  return <group ref={group}>{children}</group>;
}

export function LabScene({
  onSelect,
  selected,
}: {
  onSelect: (id: string) => void;
  selected: string | null;
}) {
  return (
    <Canvas camera={{ position: [0, 0.5, 5.5], fov: 40 }} dpr={[1, 1.6]}>
      <ambientLight intensity={0.7} />
      <directionalLight position={[4, 5, 5]} intensity={1} />
      <pointLight position={[-3, -1, 2]} intensity={0.5} color="#2F6FED" />

      <Rotator>
        {/* Tower case outline */}
        <RoundedBox args={[1.6, 3, 1.6]} radius={0.04} position={[0, 0, 0]}>
          <meshStandardMaterial color="#121A2E" transparent opacity={0.35} />
        </RoundedBox>

        <Part
          id="motherboard"
          label="Motherboard"
          position={[0, -0.9, 0]}
          args={[1.35, 1.1, 0.06]}
          color="#1E2A44"
          selected={selected === "motherboard"}
          onSelect={onSelect}
        />
        <Part
          id="cpu"
          label="CPU"
          position={[-0.25, -0.5, 0.1]}
          args={[0.35, 0.35, 0.1]}
          color="#2F6FED"
          selected={selected === "cpu"}
          onSelect={onSelect}
        />
        <Part
          id="ram"
          label="RAM"
          position={[0.45, -0.4, 0.1]}
          args={[0.14, 0.7, 0.06]}
          color="#57C6FF"
          selected={selected === "ram"}
          onSelect={onSelect}
        />
        <Part
          id="gpu"
          label="GPU"
          position={[0, 0.3, 0.3]}
          args={[1.2, 0.35, 0.5]}
          color="#0D9488"
          selected={selected === "gpu"}
          onSelect={onSelect}
        />
        <Part
          id="ssd"
          label="SSD"
          position={[0.55, 0.9, 0]}
          args={[0.6, 0.15, 0.5]}
          color="#B47A0C"
          selected={selected === "ssd"}
          onSelect={onSelect}
        />
        <Part
          id="psu"
          label="Power Supply"
          position={[-0.5, 1.15, 0]}
          args={[0.55, 0.5, 0.55]}
          color="#374151"
          selected={selected === "psu"}
          onSelect={onSelect}
        />
      </Rotator>

      <Environment preset="city" />
    </Canvas>
  );
}

export default LabScene;
