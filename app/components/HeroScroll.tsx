"use client";

import React from "react";
import { ContainerScroll } from "./ContainerScroll";
import Image from "next/image";

export function HeroScroll() {
  return (
    <div className="flex flex-col">
      <ContainerScroll
        titleComponent={
          <>
            {/* Availability Banner */}
            <div className="flex items-center justify-center gap-2 mb-6">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span className="text-gray-600 dark:text-gray-300 text-sm font-normal">Available now, only 3 spots left</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] mb-6 tracking-tight">
              <span className="block text-[#FF6B35] mb-2">Automation Agency</span>
              <span className="block text-gray-900 dark:text-white flex items-center justify-center gap-2 md:gap-3 mb-2 flex-wrap">
                Beyond
                <svg className="w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2L22 12L12 22L2 12L12 2Z" />
                </svg>
                Limits.
              </span>
              <span className="block text-[#FF6B35]">Amplified With AI.</span>
            </h1>

            {/* Sub-headline */}
            <p className="text-gray-600 dark:text-gray-300 text-base sm:text-lg md:text-xl mb-8 max-w-2xl mx-auto font-normal">
              Design services at your fingertips. Pause or cancel anytime.
            </p>

            {/* CTA Button */}
            <button className="flex items-center gap-2 px-6 py-3 bg-gray-200 dark:bg-[#2a2a2a] border border-gray-300 dark:border-gray-500 rounded-md text-gray-900 dark:text-white text-base font-normal hover:bg-gray-300 dark:hover:bg-[#333] transition-colors mx-auto">
              Learn More
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7l10 10M17 7v10H7" />
              </svg>
            </button>
          </>
        }
      >
        <Image
          src="/herodash.avif"
          alt="Analytics Dashboard"
          height={720}
          width={1400}
          className="mx-auto rounded-2xl object-contain h-full w-full"
          draggable={false}
          priority
          unoptimized
        />
      </ContainerScroll>
    </div>
  );
}

