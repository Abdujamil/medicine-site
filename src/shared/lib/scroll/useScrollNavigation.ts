// import { useEffect, useCallback } from 'react';

// interface UseScrollNavigationOptions {
//   onSectionChange?: (sectionIndex: number) => void;
//   sections?: number;
//   scrollThreshold?: number;
// }

// export const useScrollNavigation = ({
//   onSectionChange,
//   sections = 1,
//   scrollThreshold = 0.5,
// }: UseScrollNavigationOptions = {}) => {
//   const scrollToSection = useCallback(
//     (index: number) => {
//       const sectionHeight = window.innerHeight;
//       window.scrollTo({
//         top: sectionHeight * index,
//         behavior: 'smooth',
//       });
//       onSectionChange?.(index);
//     },
//     [onSectionChange]
//   );

//   useEffect(() => {
//     let lastScrollY = window.scrollY;
//     let ticking = false;

//     const handleScroll = () => {
//       if (!ticking) {
//         window.requestAnimationFrame(() => {
//           const currentScrollY = window.scrollY;
//           const sectionHeight = window.innerHeight;
//           const currentSection = Math.round(currentScrollY / sectionHeight);

//           if (Math.abs(currentScrollY - lastScrollY) > sectionHeight * scrollThreshold) {
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
//   }, [onSectionChange, scrollThreshold]);

//   return { scrollToSection };
// };
