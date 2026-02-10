/**
 * Конфигурация интерактивности пробирок
 */

export interface InteractionConfig {
  dragRotationSpeed: number;
  dragSensitivity: number;
  dragDeceleration: number;
  minRotationSpeed: number;
  hoverRotationSpeed: number;
  tooltipPosition: [number, number, number];
}

export const interactionConfig: InteractionConfig = {
  // Скорость вращения при перетаскивании
  dragRotationSpeed: 0.2,
  
  // Множитель скорости вращения при движении мыши
  dragSensitivity: 0.008,
  
  // Коэффициент замедления после отпускания мыши (0.95 = замедление на 5% за кадр)
  dragDeceleration: 0.95,
  
  // Минимальная скорость для остановки вращения
  minRotationSpeed: 0.01,
  
  // Скорость автоматического вращения при наведении
  hoverRotationSpeed: 0.003,
  
  // Позиция подсказки при наведении относительно пробирки
  tooltipPosition: [0, -1, 0] as [number, number, number],
};
