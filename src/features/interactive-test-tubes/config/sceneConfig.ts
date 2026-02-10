/**
 * Конфигурация сцены с 3D пробирками
 */

export interface CameraConfig {
  position: [number, number, number];
  fov: number;
}

export interface OrbitControlsConfig {
  target: [number, number, number];
  minDistance: number;
  maxDistance: number;
  minPolarAngle: number;
  maxPolarAngle: number;
  enablePan: boolean;
  enableZoom: boolean;
  autoRotate: boolean;
  enableDamping: boolean;
  dampingFactor: number;
}

export interface LightingConfig {
  ambient: {
    intensity: number;
  };
  directional1: {
    position: [number, number, number];
    intensity: number;
    castShadow: boolean;
    shadowMapSize: number;
  };
  directional2: {
    position: [number, number, number];
    intensity: number;
  };
  point: {
    position: [number, number, number];
    intensity: number;
  };
  spot: {
    position: [number, number, number];
    angle: number;
    intensity: number;
    penumbra: number;
  };
}

export interface CanvasConfig {
  antialias: boolean;
  alpha: boolean;
  powerPreference: WebGLPowerPreference;
}

// Настройки камеры
export const cameraConfig: CameraConfig = {
  // Позиция камеры: [x, y, z]
  // x: горизонтальное смещение (отрицательное = слева, положительное = справа)
  // y: вертикальное смещение (отрицательное = ниже, положительное = выше)
  // z: расстояние от объекта (больше = дальше от сцены)
  position: [0, 0.2, 3.5] as [number, number, number],
  
  // Поле зрения в градусах (меньше = более узкий угол, объекты крупнее)
  fov: 25,
};

// Настройки OrbitControls
export const orbitControlsConfig: OrbitControlsConfig = {
  // Точка, вокруг которой вращается камера (центр сцены)
  target: [0, 0, 0] as [number, number, number],
  
  // Минимальное расстояние от target
  minDistance: 2.5,
  
  // Максимальное расстояние от target
  maxDistance: 10,
  
  // Минимальный угол наклона камеры (в радианах)
  minPolarAngle: Math.PI / 4,
  
  // Максимальный угол наклона камеры (в радианах)
  maxPolarAngle: Math.PI / 2.2,
  
  // Включить панорамирование
  enablePan: false,
  
  // Включить зум
  enableZoom: true,
  
  // Автоповорот
  autoRotate: false,
  
  // Включить плавность (damping)
  enableDamping: true,
  
  // Коэффициент плавности (чем больше, тем медленнее останавливается)
  dampingFactor: 0.05,
};

// Настройки освещения
export const lightingConfig: LightingConfig = {
  // Окружающий свет (ambient light)
  ambient: {
    intensity: 0.8,
  },
  
  // Направленный свет 1 (directional light)
  directional1: {
    position: [5, 10, 5] as [number, number, number],
    intensity: 1.5,
    castShadow: true,
    shadowMapSize: 2048,
  },
  
  // Направленный свет 2 (directional light)
  directional2: {
    position: [-5, 5, -5] as [number, number, number],
    intensity: 0.6,
  },
  
  // Точечный свет (point light)
  point: {
    position: [0, 8, 0] as [number, number, number],
    intensity: 0.5,
  },
  
  // Прожектор (spot light)
  spot: {
    position: [3, 6, 3] as [number, number, number],
    angle: 0.3,
    intensity: 0.8,
    penumbra: 1,
  },
};

// Настройки Canvas
export const canvasConfig: CanvasConfig = {
  // Включить сглаживание
  antialias: true,
  
  // Прозрачный фон
  alpha: true,
  
  // Предпочтение производительности
  powerPreference: 'high-performance' as WebGLPowerPreference,
};
