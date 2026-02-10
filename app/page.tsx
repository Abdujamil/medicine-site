'use client';

import { HeroSection } from '@/src/widgets/hero-section';
// import { useSmoothScroll } from '@/src/shared/lib/scroll/useSmoothScroll';

export default function Home() {
  // const { scrollToSection } = useSmoothScroll({
  //   sectionCount: 3,
  //   onSectionChange: (index) => {
  //     console.log('Section changed to:', index);
  //   },
  // });

  // const handleTubeClick = (id: string) => {
  //   console.log('Test tube clicked:', id);
  //   scrollToSection(1);
  // };

  // const handleScrollToNext = () => {
  //   scrollToSection(1);
  // };

  return (
    <main className="overflow-x-hidden scroll-smooth">
      <HeroSection />

      <section className='h-screen fle flex-col item-center justify-center'>
        <div className='h-full flex flex-col item-center justify-center'>
          <h2 className='text-4xl text-center'> 2 block </h2>
          <p className='text-center'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. </p>
        </div>
      </section>
    </main>
  );
}
