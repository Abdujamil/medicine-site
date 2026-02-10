'use client';

import { useControls } from 'leva';
import { cameraConfig, lightingConfig } from '../config/sceneConfig';
import { testTubesConfig } from '@/src/widgets/hero-section/config/testTubesConfig';

/**
 * Типы для контролов GUI
 */
export interface SceneControls {
  cameraX: number;
  cameraY: number;
  cameraZ: number;
  cameraFov: number;
  tube1X: number;
  tube1Y: number;
  tube1Z: number;
  tube1RotX: number;
  tube1RotY: number;
  tube1RotZ: number;
  tube1Scale: number;
  // tube1AnnotationText: string;
  // tube1AnnotationTextPosX: number;
  // tube1AnnotationTextPosY: number;
  // tube1AnnotationTextPosZ: number;
  // tube1AnnotationArrowStartX: number;
  // tube1AnnotationArrowStartY: number;
  // tube1AnnotationArrowStartZ: number;
  // tube1AnnotationArrowEndX: number;
  // tube1AnnotationArrowEndY: number;
  // tube1AnnotationArrowEndZ: number;
  // tube1AnnotationLineStartX: number;
  // tube1AnnotationLineStartY: number;
  // tube1AnnotationLineStartZ: number;
  // tube1AnnotationLineEndX: number;
  // tube1AnnotationLineEndY: number;
  // tube1AnnotationLineEndZ: number;
  tube2X: number;
  tube2Y: number;
  tube2Z: number;
  tube2RotX: number;
  tube2RotY: number;
  tube2RotZ: number;
  tube2Scale: number;
  // tube2AnnotationText: string;
  // tube2AnnotationTextPosX: number;
  // tube2AnnotationTextPosY: number;
  // tube2AnnotationTextPosZ: number;
  // tube2AnnotationArrowStartX: number;
  // tube2AnnotationArrowStartY: number;
  // tube2AnnotationArrowStartZ: number;
  // tube2AnnotationArrowEndX: number;
  // tube2AnnotationArrowEndY: number;
  // tube2AnnotationArrowEndZ: number;
  // tube2AnnotationLineStartX: number;
  // tube2AnnotationLineStartY: number;
  // tube2AnnotationLineStartZ: number;
  // tube2AnnotationLineEndX: number;
  // tube2AnnotationLineEndY: number;
  // tube2AnnotationLineEndZ: number;
  ambientIntensity: number;
  directional1Intensity: number;
  directional2Intensity: number;
  pointIntensity: number;
  spotIntensity: number;
}

export const useSceneControls = (): SceneControls => {
  const controls = useControls({
    Камера: {
      value: {
        x: -10.0,
        y: -10.0,
        z: 0.0,
        fov: 10,
      },
    },
    cameraX: { value: -0.9, min: -10, max: 10, step: 0.1 },
    cameraY: { value: 1.7, min: -10, max: 10, step: 0.1 },
    cameraZ: { value: 3.1, min: 0, max: 100, step: 0.1 },
    cameraFov: { value: 25, min: 12, max: 50, step: 1 },

    'Пробирка 1': {
      value: {
        x: 1.2,
        y: 0.2,
        z: -0.3,
        rotX: -0.6,
        rotY: -0.8,
        rotZ: -0.7,
        scale: 10.0,
      },
    },
    tube1X: { value: 1.2, min: -5, max: 5, step: 0.1 },
    tube1Y: { value: 0.2, min: -5, max: 5, step: 0.1 },
    tube1Z: { value: -0.4, min: -5, max: 5, step: 0.1 },
    tube1RotX: { value: -0.6, min: -Math.PI, max: Math.PI, step: 0.1 },
    tube1RotY: { value: -0.7, min: -Math.PI, max: Math.PI, step: 0.1 },
    tube1RotZ: { value: -0.7, min: -Math.PI, max: Math.PI, step: 0.1 },
    tube1Scale: { value: 10.0, min: 0.1, max: 50, step: 0.1 },
    // tube1AnnotationTextPosX: { value: testTubesConfig[0].annotation?.textPosition[0] || 0, min: -5, max: 5, step: 0.1 },
    // tube1AnnotationTextPosY: { value: testTubesConfig[0].annotation?.textPosition[1] || 0, min: -5, max: 5, step: 0.1 },
    // tube1AnnotationTextPosZ: { value: testTubesConfig[0].annotation?.textPosition[2] || 0, min: -5, max: 5, step: 0.1 },
    // tube1AnnotationArrowStartX: { value: testTubesConfig[0].annotation?.arrowStart[0] || 0, min: -5, max: 5, step: 0.1 },
    // tube1AnnotationArrowStartY: { value: testTubesConfig[0].annotation?.arrowStart[1] || 0, min: -5, max: 5, step: 0.1 },
    // tube1AnnotationArrowStartZ: { value: testTubesConfig[0].annotation?.arrowStart[2] || 0, min: -5, max: 5, step: 0.1 },
    // tube1AnnotationArrowEndX: { value: testTubesConfig[0].annotation?.arrowEnd[0] || 0, min: -5, max: 5, step: 0.1 },
    // tube1AnnotationArrowEndY: { value: testTubesConfig[0].annotation?.arrowEnd[1] || 0, min: -5, max: 5, step: 0.1 },
    // tube1AnnotationArrowEndZ: { value: testTubesConfig[0].annotation?.arrowEnd[2] || 0, min: -5, max: 5, step: 0.1 },
    // tube1AnnotationLineStartX: { value: testTubesConfig[0].annotation?.lineStart[0] || 0, min: -5, max: 5, step: 0.1 },
    // tube1AnnotationLineStartY: { value: testTubesConfig[0].annotation?.lineStart[1] || 0, min: -5, max: 5, step: 0.1 },
    // tube1AnnotationLineStartZ: { value: testTubesConfig[0].annotation?.lineStart[2] || 0, min: -5, max: 5, step: 0.1 },
    // tube1AnnotationLineEndX: { value: testTubesConfig[0].annotation?.lineEnd[0] || 0, min: -5, max: 5, step: 0.1 },
    // tube1AnnotationLineEndY: { value: testTubesConfig[0].annotation?.lineEnd[1] || 0, min: -5, max: 5, step: 0.1 },
    // tube1AnnotationLineEndZ: { value: testTubesConfig[0].annotation?.lineEnd[2] || 0, min: -5, max: 5, step: 0.1 },

    'Пробирка 2': {
      value: {
        x: 0.5,
        y: 0.2,
        z: -0.7,
        rotX: -0.8,
        rotY: 0.1,
        rotZ: 0.3,
        scale: 9.5,
      },
    },
    tube2X: { value: 0.5, min: -5, max: 5, step: 0.1 },
    tube2Y: { value: 0.2, min: -5, max: 5, step: 0.1 },
    tube2Z: { value: -0.7, min: -5, max: 5, step: 0.1 },
    tube2RotX: { value: -0.8, min: -Math.PI, max: Math.PI, step: 0.1 },
    tube2RotY: { value: 0.1, min: -Math.PI, max: Math.PI, step: 0.1 },
    tube2RotZ: { value: 0.3, min: -Math.PI, max: Math.PI, step: 0.1 },
    tube2Scale: { value: 9.5, min: 0.1, max: 50, step: 0.1 },
    // tube2AnnotationTextPosX: { value: testTubesConfig[1].annotation?.textPosition[0] || 0, min: -5, max: 5, step: 0.1 },
    // tube2AnnotationTextPosY: { value: testTubesConfig[1].annotation?.textPosition[1] || 0, min: -5, max: 5, step: 0.1 },
    // tube2AnnotationTextPosZ: { value: testTubesConfig[1].annotation?.textPosition[2] || 0, min: -5, max: 5, step: 0.1 },
    // tube2AnnotationArrowStartX: { value: testTubesConfig[1].annotation?.arrowStart[0] || 0, min: -5, max: 5, step: 0.1 },
    // tube2AnnotationArrowStartY: { value: testTubesConfig[1].annotation?.arrowStart[1] || 0, min: -5, max: 5, step: 0.1 },
    // tube2AnnotationArrowStartZ: { value: testTubesConfig[1].annotation?.arrowStart[2] || 0, min: -5, max: 5, step: 0.1 },
    // tube2AnnotationArrowEndX: { value: testTubesConfig[1].annotation?.arrowEnd[0] || 0, min: -5, max: 5, step: 0.1 },
    // tube2AnnotationArrowEndY: { value: testTubesConfig[1].annotation?.arrowEnd[1] || 0, min: -5, max: 5, step: 0.1 },
    // tube2AnnotationArrowEndZ: { value: testTubesConfig[1].annotation?.arrowEnd[2] || 0, min: -5, max: 5, step: 0.1 },
    // tube2AnnotationLineStartX: { value: testTubesConfig[1].annotation?.lineStart[0] || 0, min: -5, max: 5, step: 0.1 },
    // tube2AnnotationLineStartY: { value: testTubesConfig[1].annotation?.lineStart[1] || 0, min: -5, max: 5, step: 0.1 },
    // tube2AnnotationLineStartZ: { value: testTubesConfig[1].annotation?.lineStart[2] || 0, min: -5, max: 5, step: 0.1 },
    // tube2AnnotationLineEndX: { value: testTubesConfig[1].annotation?.lineEnd[0] || 0, min: -5, max: 5, step: 0.1 },
    // tube2AnnotationLineEndY: { value: testTubesConfig[1].annotation?.lineEnd[1] || 0, min: -5, max: 5, step: 0.1 },
    // tube2AnnotationLineEndZ: { value: testTubesConfig[1].annotation?.lineEnd[2] || 0, min: -5, max: 5, step: 0.1 },

    Освещение: {
      value: {
        ambient: 0.8,
        directional1: 1.9,
        directional2: 2.4,
        point: 2.1,
        spot: 1.2,
      },
    },
    ambientIntensity: { value: 0.8, min: 0, max: 2, step: 0.1 },
    directional1Intensity: { value: 1.9, min: 0, max: 5, step: 0.1 },
    directional2Intensity: { value: 2.4, min: 0, max: 5, step: 0.1 },
    pointIntensity: { value: 2.1, min: 0, max: 5, step: 0.1 },
    spotIntensity: { value: 1.2, min: 0, max: 5, step: 0.1 },
  });

  return controls as SceneControls;
};
