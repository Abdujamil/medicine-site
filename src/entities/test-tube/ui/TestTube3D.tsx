'use client';

import { useRef, useState, useMemo } from 'react';
import { useFrame, ThreeEvent } from '@react-three/fiber';
import { Group, Object3D, Mesh, MeshStandardMaterial } from 'three';
import { useGLTF, Html } from '@react-three/drei';
import { TestTubeProps } from '../model/types';
import { interactionConfig } from '../config/interactionConfig';
import { TestTubeAnnotation } from './TestTubeAnnotation';

export const TestTube3D = ({ config, onInteract, isInteractive = true }: TestTubeProps) => {
  const groupRef = useRef<Group>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [rotationSpeed, setRotationSpeed] = useState(0);
  const [mouseX, setMouseX] = useState(0);

  // Load GLTF model
  const { scene } = useGLTF(config.modelPath);
  
  // Clone the scene to avoid conflicts when multiple instances
  const clonedScene = useMemo(() => {
    const cloned = scene.clone();
    // Enable shadows and change cap color if needed
    cloned.traverse((child: Object3D) => {
      if ('isMesh' in child && child.isMesh) {
        const mesh = child as Mesh;
        mesh.castShadow = true;
        mesh.receiveShadow = true;
        
        // Изменяем цвет крышки, если указан capColor
        // Ищем меш крышки по имени (CAPAC - это крышка)
        if (config.capColor && mesh.name.includes('CAPAC')) {
          if (mesh.material) {
            const material = mesh.material as MeshStandardMaterial;
            // Клонируем материал, чтобы не менять оригинал
            const newMaterial = material.clone();
            newMaterial.color.setHex(parseInt(config.capColor.replace('#', ''), 16));
            mesh.material = newMaterial;
          }
        }
      }
    });
    return cloned;
  }, [scene, config.capColor]);

  useFrame((state, delta) => {
    if (!groupRef.current) return;

    if (isDragging) {
      const newSpeed = rotationSpeed * interactionConfig.dragDeceleration;
      groupRef.current.rotation.y += newSpeed * delta;
      setRotationSpeed(newSpeed);
      
      if (Math.abs(newSpeed) < interactionConfig.minRotationSpeed) {
        setIsDragging(false);
      }
    }
  });

  const handlePointerDown = (event: ThreeEvent<PointerEvent>) => {
    if (!isInteractive) return;
    event.stopPropagation();
    setIsDragging(true);
    const nativeEvent = event.nativeEvent;
    const clientX = (nativeEvent as PointerEvent).clientX ?? 0;
    setMouseX(clientX);
    setRotationSpeed(interactionConfig.dragRotationSpeed);
  };

  const handlePointerMove = (event: ThreeEvent<PointerEvent>) => {
    if (!isDragging || !isInteractive) return;
    const nativeEvent = event.nativeEvent;
    const clientX = (nativeEvent as PointerEvent).clientX ?? mouseX;
    const deltaX = (clientX - mouseX) * interactionConfig.dragSensitivity;
    setMouseX(clientX);
    setRotationSpeed(deltaX);
  };

  const handlePointerUp = () => {
    setIsDragging(false);
  };

  const handleClick = (event: ThreeEvent<MouseEvent>) => {
    event.stopPropagation();
    if (isInteractive && onInteract && !isDragging) {
      onInteract(config.id);
    }
  };

  return (
    <group
      ref={groupRef}
      position={config.position}
      rotation={config.rotation || [0, 0, 0]}
      scale={config.scale || 1}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      onPointerOver={() => setIsHovered(true)}
      onPointerOut={() => {
        setIsHovered(false);
        setIsDragging(false);
      }}
      onClick={handleClick}
    >
      {/* GLTF Model */}
      <primitive 
        object={clonedScene} 
        castShadow 
        receiveShadow
      />

      {/* Аннотация пробирки */}
      {/* {config.annotation && (
        <TestTubeAnnotation
          key={`${config.id}-annotation-${config.annotation.textPosition.join('-')}`}
          text={config.annotation.text}
          position={config.annotation.textPosition}
          arrowStart={config.annotation.arrowStart}
          arrowEnd={config.annotation.arrowEnd}
          lineStart={config.annotation.lineStart}
          lineEnd={config.annotation.lineEnd}
        />
      )} */}

      {/* Label overlay on hover */}
      {isHovered && (
        <Html position={interactionConfig.tooltipPosition} center>
          <div className="bg-white/95 px-4 py-2 rounded-lg text-sm text-black whitespace-nowrap pointer-events-none shadow-lg border border-gray-200">
            {config.name}
          </div>
        </Html>
      )}
    </group>
  );
};
