export interface TestTubeConfig {
  id: string;
  name: string;
  modelPath: string; // Path to .gltf or .glb file
  position: [number, number, number];
  rotation?: [number, number, number];
  scale?: number;
  capColor?: string; // Цвет крышки (hex цвет, например '#808080' для серого)
  annotation?: {
    text: string;
    textPosition: [number, number, number];
    arrowStart: [number, number, number];
    arrowEnd: [number, number, number];
    lineStart: [number, number, number];
    lineEnd: [number, number, number];
  };
}

export interface TestTubeProps {
  config: TestTubeConfig;
  onInteract?: (id: string) => void;
  isInteractive?: boolean;
}
