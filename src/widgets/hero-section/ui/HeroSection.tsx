'use client';

import { Leva } from 'leva';
import { TestTubeScene } from '@/src/features/interactive-test-tubes';
import { Button } from '@/src/shared/ui/Button';
import { testTubesConfig, containerConfig } from '@/src/widgets/hero-section/config/testTubesConfig';

interface HeroSectionProps {
  onTubeClick?: (id: string) => void;
  onScrollToNext?: () => void;
}

export const HeroSection = ({ onTubeClick, onScrollToNext }: HeroSectionProps) => {
  const handleTubeClick = (id: string) => {
    onTubeClick?.(id);
    onScrollToNext?.();
  };

  return (
    <section className="relative min-h-screen bg-[#EEEFF0]">
      {/* GUI панель для настройки параметров - сверху справа */}
      <Leva collapsed={false} />

      {/* Main Content */}
      <div className="w-full min-h-screen mx-auto">
        <div className="pt-[134px] flex flex-col gap-[40px] max-w-[1440px] mx-auto">
          <div className="max-w-[660px] relative z-[2]">

            <h1 className="text-[48px] leading-[1.1] tracking-[-2px] text-[#1F1F1F] mb-[35px]">
              Пробирки для плазмотерапии, соответствующие медицинским стандартам
            </h1>

            <div className="md:max-h-[152px] flex items-start gap-[40px] mb-[124px]">

              <div className="flex flex-col gap-[10px] p-[21px] bg-white rounded-[4px] w-[360px]">
                <h2 className="text-[24px] font-normal leading-[110%] tracking-[-1px] text-[#1F1F1F]">
                  Для профессионального использования
                </h2>
                <p className="text-[16px] font-light leading-[150%] tracking-[-.4px]  text-[#1F1F1F]">
                  Косметология, трихология, ортопедия, стоматология, лаборатории.
                </p>
              </div>


              <div className="flex flex-col gap-[10px] p-[21px] bg-white rounded-[4px] w-[260px]">
                <h2 className="text-[24px] font-normal leading-[110%] tracking-[-1px] text-[#1F1F1F]">
                  100% стерильность и контроль качества
                </h2>
                <p className="text-[16px] font-light leading-[150%] tracking-[-.4px]  text-[#1F1F1F]">
                  Производство с соблюдением всех требований.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-[40px]">
              <p className="text-[16px] font-light leading-[150%] tracking-[-.4px] text-[#1F1F1F] max-w-[360px]">
                Вакуумные пробирки для специалистов, которым важна безопасность и стабильный результат.
              </p>
              <Button variant="primary" className="w-[260px] h-[51px] text-[20px]">
                Бесплатный образец
              </Button>
            </div>
          </div>
        </div>

        {/* 3D Test Tubes */}
        <div
          className="absolute top-0 w-[100dvw] h-[100vh] cursor-pointer z-0"
        // style={{
        //   width: `${containerConfig.width}px`,
        //   height: `${containerConfig.height}px`,
        //   cursor: containerConfig.cursor,
        // }}
        >
          <TestTubeScene tubes={testTubesConfig} onTubeClick={handleTubeClick} />

          {/* Labels - positioned according to Figma */}
          {/* <div className="absolute top-0 left-[30px] pointer-events-none z-10">
            <p className="text-[16px] font-light leading-[1.3] text-[#1F1F1F] whitespace-pre-line">
              Пробирка вакуумная{'\n'}с гепарином
            </p>
            <div className="mt-[7px] h-[3px] w-[160px] bg-[#0A4E8D]" />
          </div>
          
          <div className="absolute bottom-[120px] right-[30px] pointer-events-none z-10">
            <p className="text-[16px] font-light leading-[1.5] text-[#1F1F1F]">
              Пробирка с цитратом натрия 3,2%
            </p>
            <div className="mt-[7px] h-[3px] w-[160px] bg-[#0A4E8D]" />
          </div> */}
        </div>
      </div>
    </section>
  );
};
