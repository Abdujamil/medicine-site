'use client';

import { Suspense, useMemo } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment, PerspectiveCamera } from '@react-three/drei';
import { TestTube3D, TestTubeConfig } from '@/src/entities/test-tube';
import { cameraConfig, orbitControlsConfig, lightingConfig, canvasConfig } from '../config/sceneConfig';
import { useSceneControls } from './SceneGUI';

interface TestTubeSceneProps {
  tubes: TestTubeConfig[];
  onTubeClick?: (id: string) => void;
  cameraPosition?: [number, number, number];
}

export const TestTubeScene = ({
  tubes,
  onTubeClick,
  cameraPosition,
}: TestTubeSceneProps) => {
  const controls = useSceneControls();
  
  // Обновленные настройки камеры из GUI
  const cameraPos = useMemo(() => 
    cameraPosition || [controls.cameraX, controls.cameraY, controls.cameraZ] as [number, number, number],
    [controls.cameraX, controls.cameraY, controls.cameraZ, cameraPosition]
  );
  
  // Обновленные конфиги пробирок из GUI
  const updatedTubes = useMemo((): TestTubeConfig[] => {
    return tubes.map((tube, index): TestTubeConfig => {
      if (index === 0) {
        return {
          ...tube,
          position: [controls.tube1X, controls.tube1Y, controls.tube1Z] as [number, number, number],
          rotation: [controls.tube1RotX, controls.tube1RotY, controls.tube1RotZ] as [number, number, number],
          scale: controls.tube1Scale,
          // Аннотации берутся из исходного конфига
        };
      } else {
        return {
          ...tube,
          position: [controls.tube2X, controls.tube2Y, controls.tube2Z] as [number, number, number],
          rotation: [controls.tube2RotX, controls.tube2RotY, controls.tube2RotZ] as [number, number, number],
          scale: controls.tube2Scale,
          // Аннотации берутся из исходного конфига
        };
      }
    });
  }, [
    tubes,
    controls.tube1X,
    controls.tube1Y,
    controls.tube1Z,
    controls.tube1RotX,
    controls.tube1RotY,
    controls.tube1RotZ,
    controls.tube1Scale,
    controls.tube2X,
    controls.tube2Y,
    controls.tube2Z,
    controls.tube2RotX,
    controls.tube2RotY,
    controls.tube2RotZ,
    controls.tube2Scale,
  ]);
  
  return (
    <div className="w-full h-full">
      <Canvas shadows gl={canvasConfig}>
        {/* Камера с настройками из GUI */}
        <PerspectiveCamera 
          makeDefault 
          position={cameraPos} 
          fov={controls.cameraFov} 
        />
        
        {/* Освещение с настройками из GUI */}
        <ambientLight intensity={controls.ambientIntensity} />
        <directionalLight 
          position={lightingConfig.directional1.position} 
          intensity={controls.directional1Intensity} 
          castShadow 
          shadow-mapSize={lightingConfig.directional1.shadowMapSize} 
        />
        <directionalLight 
          position={lightingConfig.directional2.position} 
          intensity={controls.directional2Intensity} 
        />
        <pointLight 
          position={lightingConfig.point.position} 
          intensity={controls.pointIntensity} 
        />
        <spotLight 
          position={lightingConfig.spot.position} 
          angle={lightingConfig.spot.angle} 
          intensity={controls.spotIntensity} 
          penumbra={lightingConfig.spot.penumbra} 
        />
        
        <Suspense fallback={null}>
          <Environment preset="studio" />
          
          {/* Пробирки с настройками из GUI */}
          {updatedTubes.map((tube) => (
            <TestTube3D
              key={tube.id}
              config={tube}
              onInteract={onTubeClick}
              isInteractive
            />
          ))}
        </Suspense>
        
        {/* Управление камерой с настройками из конфига */}
        <OrbitControls
          enablePan={orbitControlsConfig.enablePan}
          enableZoom={orbitControlsConfig.enableZoom}
          minDistance={orbitControlsConfig.minDistance}
          maxDistance={orbitControlsConfig.maxDistance}
          minPolarAngle={orbitControlsConfig.minPolarAngle}
          maxPolarAngle={orbitControlsConfig.maxPolarAngle}
          autoRotate={orbitControlsConfig.autoRotate}
          enableDamping={orbitControlsConfig.enableDamping}
          dampingFactor={orbitControlsConfig.dampingFactor}
          target={orbitControlsConfig.target}
        />
      </Canvas>
    </div>
  );
};
