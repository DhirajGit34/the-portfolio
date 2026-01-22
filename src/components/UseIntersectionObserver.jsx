import React, { useEffect, useRef } from 'react'

const UseIntersectionObserver = () => {
    const observerRef = useRef(null);
  return (
    
    useEffect(() => {
      observerRef.current = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in-up');
            entry.target.classList.remove('opacity-0', 'translate-y-10');
            observerRef.current.unobserve(entry.target);
          }
        });
      }, { threshold: 0.1 });

      const elements = document.querySelectorAll('.reveal-on-scroll');
      elements.forEach((el) => observerRef.current.observe(el));

      return () => {
        if (observerRef.current) observerRef.current.disconnect();
      };
    }, [])
  )
}

export default UseIntersectionObserver

// const useIntersectionObserver = () => {
//     const observerRef = useRef(null);
    
//     useEffect(() => {
//       observerRef.current = new IntersectionObserver((entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             entry.target.classList.add('animate-fade-in-up');
//             entry.target.classList.remove('opacity-0', 'translate-y-10');
//             observerRef.current.unobserve(entry.target);
//           }
//         });
//       }, { threshold: 0.1 });

//       const elements = document.querySelectorAll('.reveal-on-scroll');
//       elements.forEach((el) => observerRef.current.observe(el));

//       return () => {
//         if (observerRef.current) observerRef.current.disconnect();
//       };
//     }, []);
//   };