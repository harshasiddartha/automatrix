'use client';

import { useEffect, useRef, useState } from 'react';

export default function ScrollableDashboard3D() {
  const dashboardRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Rotation settings
  const INITIAL_ROTATION = 110;
  const FINAL_ROTATION = 0;

  const [rotation, setRotation] = useState(INITIAL_ROTATION);
  const [translateY, setTranslateY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!dashboardRef.current || !containerRef.current) return;

      const heroSection = containerRef.current.closest('.hero-section');
      if (!heroSection) return;

      const windowHeight = window.innerHeight;
      const scrollY = window.scrollY;

      const dashboardRect = dashboardRef.current.getBoundingClientRect();
      const dashboardCenter = dashboardRect.top + (dashboardRect.height / 2);
      const viewportCenter = windowHeight / 2;
      const distanceFromCenter = dashboardCenter - viewportCenter;

      // Range for full rotation from sleeping to standing
      const rotationRange = windowHeight * 0.2;
      let scrollProgress: number;

      if (distanceFromCenter >= rotationRange) {
        scrollProgress = 0;
      } else if (distanceFromCenter <= -rotationRange) {
        scrollProgress = 1;
      } else {
        scrollProgress = 1 - ((distanceFromCenter + rotationRange) / (rotationRange * 2));
        scrollProgress = Math.min(1, Math.max(0, scrollProgress));
      }

      // Apply cubic ease-out
      const easedProgress = 1 - Math.pow(1 - scrollProgress, 3);

      // Interpolate rotation
      const interpolatedRotation = INITIAL_ROTATION - easedProgress * (INITIAL_ROTATION - FINAL_ROTATION);
      setRotation(interpolatedRotation);

      // Parallax effect for float
      setTranslateY(scrollY * 0.5);
    };

    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="w-full py-6 px-6 -mt-40"
      style={{
        perspective: '1000px',
        perspectiveOrigin: 'center',
      }}
    >
      <div
        ref={dashboardRef}
        className="w-full max-w-6xl mx-auto"
        style={{
          transform: `rotateX(${rotation}deg) translateY(${translateY}px)`,
          transformStyle: 'preserve-3d',
          transformOrigin: 'center center',
        }}
      >
        <div
          className="bg-[#1a1a1a] rounded-xl p-8 shadow-2xl border border-gray-800"
          style={{
            backfaceVisibility: 'hidden',
            WebkitBackfaceVisibility: 'hidden',
          }}
        >
          <div className="mb-6">
            <h2 className="text-2xl font-semibold text-white mb-2">Analytics Dashboard</h2>
            <p className="text-gray-400 text-sm">Real-time performance metrics</p>
          </div>
          <div className="mb-6 flex justify-center">
            <img
              src="/herodash.avif"
              alt="Analytics dashboard visual"
              className="rounded-lg shadow-lg border border-gray-800 w-full max-w-3xl object-cover"
              style={{ background: "#0f0f0f" }}
              loading="eager"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

