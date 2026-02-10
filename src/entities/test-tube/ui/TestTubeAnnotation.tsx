'use client';

import { useMemo } from 'react';
import { Group, Vector3 } from 'three';
import { Html, Line } from '@react-three/drei';

interface TestTubeAnnotationProps {
  text: string;
  position: [number, number, number];
  arrowStart: [number, number, number];
  arrowEnd: [number, number, number];
  lineStart: [number, number, number];
  lineEnd: [number, number, number];
}

export const TestTubeAnnotation = ({
  text,
  position,
  arrowStart,
  arrowEnd,
  lineStart,
  lineEnd,
}: TestTubeAnnotationProps) => {
  // Создаем точки для линий
  const linePoints = useMemo(
    () => [new Vector3(...lineStart), new Vector3(...lineEnd)],
    [lineStart[0], lineStart[1], lineStart[2], lineEnd[0], lineEnd[1], lineEnd[2]]
  );

  const arrowPoints = useMemo(
    () => [new Vector3(...arrowStart), new Vector3(...arrowEnd)],
    [arrowStart[0], arrowStart[1], arrowStart[2], arrowEnd[0], arrowEnd[1], arrowEnd[2]]
  );

  const positionKey = useMemo(
    () => `${position[0]}-${position[1]}-${position[2]}`,
    [position[0], position[1], position[2]]
  );

  return (
    <group key={positionKey} position={position}>
      {/* Текст аннотации - всегда видим и следует за пробиркой */}
      <Html
        position={[0, -0.1, 0]}
        center={false}
        transform={false}
        style={{
          pointerEvents: 'none',
          userSelect: 'none',
        }}
      >
        <div className="text-[16px] font-light leading-[1.3] text-[#1F1F1F] whitespace-pre-line text-left">
          {text}
        </div>
      </Html>

      {/* Синяя линия под текстом */}
      <Line
        key={`line-${lineStart[0]}-${lineStart[1]}-${lineStart[2]}-${lineEnd[0]}-${lineEnd[1]}-${lineEnd[2]}`}
        points={linePoints}
        color="#0A4E8D"
        lineWidth={3}
      />

      {/* Серая стрелка от текста к пробирке */}
      <Line
        key={`arrow-${arrowStart[0]}-${arrowStart[1]}-${arrowStart[2]}-${arrowEnd[0]}-${arrowEnd[1]}-${arrowEnd[2]}`}
        points={arrowPoints}
        color="#ADADAD"
        lineWidth={1}
      />
    </group>
  );
};
