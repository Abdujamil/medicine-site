// import { useCallback, useEffect, useRef } from 'react';

// interface UseSmoothScrollOptions {
//   sectionCount: number;
//   onSectionChange?: (index: number) => void;
//   scrollThreshold?: number;
// }

// export const useSmoothScroll = ({
//   sectionCount,
//   onSectionChange,
//   scrollThreshold = 0.3,
// }: UseSmoothScrollOptions) => {
//   const isScrollingRef = useRef(false);
//   const currentSectionRef = useRef(0);

//   const scrollToSection = useCallback(
//     (index: number) => {
//       if (index < 0 || index >= sectionCount || isScrollingRef.current) return;
      
//       isScrollingRef.current = true;
//       const sectionHeight = window.innerHeight;
      
//       window.scrollTo({
//         top: sectionHeight * index,
//         behavior: 'smooth',
//       });

//       currentSectionRef.current = index;
//       onSectionChange?.(index);

//       setTimeout(() => {
//         isScrollingRef.current = false;
//       }, 800);
//     },
//     [sectionCount, onSectionChange]
//   );

//   useEffect(() => {
//     let lastScrollY = window.scrollY;
//     let ticking = false;

//     const handleScroll = () => {
//       if (isScrollingRef.current) return;

//       if (!ticking) {
//         window.requestAnimationFrame(() => {
//           const currentScrollY = window.scrollY;
//           const sectionHeight = window.innerHeight;
//           const currentSection = Math.round(currentScrollY / sectionHeight);
          
//           if (currentSection !== currentSectionRef.current) {
//             currentSectionRef.current = currentSection;
//             onSectionChange?.(currentSection);
//           }

//           lastScrollY = currentScrollY;
//           ticking = false;
//         });

//         ticking = true;
//       }
//     };

//     window.addEventListener('scroll', handleScroll, { passive: true });
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, [onSectionChange]);

//   useEffect(() => {
//     let timeoutId: NodeJS.Timeout;
//     let isWheeling = false;

//     const handleWheel = (e: WheelEvent) => {
//       if (isScrollingRef.current) {
//         e.preventDefault();
//         return;
//       }

//       clearTimeout(timeoutId);
//       isWheeling = true;

//       timeoutId = setTimeout(() => {
//         isWheeling = false;
//       }, 150);

//       const delta = e.deltaY;
//       const sectionHeight = window.innerHeight;
//       const currentScroll = window.scrollY;
//       const currentSection = Math.round(currentScroll / sectionHeight);
      
//       let targetSection = currentSection;
      
//       if (Math.abs(delta) > 50) {
//         if (delta > 0 && currentSection < sectionCount - 1) {
//           targetSection = currentSection + 1;
//         } else if (delta < 0 && currentSection > 0) {
//           targetSection = currentSection - 1;
//         }
        
//         if (targetSection !== currentSection) {
//           e.preventDefault();
//           scrollToSection(targetSection);
//         }
//       }
//     };

//     window.addEventListener('wheel', handleWheel, { passive: false });
//     return () => {
//       window.removeEventListener('wheel', handleWheel);
//       clearTimeout(timeoutId);
//     };
//   }, [sectionCount, scrollToSection]);

//   return { scrollToSection, currentSection: currentSectionRef.current };
// };
