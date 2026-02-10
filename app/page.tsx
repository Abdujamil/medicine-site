'use client';

import { HeroSection } from '@/src/widgets/hero-section';

export default function Home() {

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
