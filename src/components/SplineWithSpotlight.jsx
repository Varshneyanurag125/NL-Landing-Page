"use client";
import React, { Suspense } from 'react';
import Spline from '@splinetool/react-spline';
import { Spotlight } from "./ui/spotlight";

export default function SplineWithSpotlight() {
  const sceneUrl = "https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode";

  return (
    <div className="relative w-full h-full overflow-hidden bg-black">
        {/* Mesh/Grid Background Pattern */}
        <div 
          className="absolute inset-0 pointer-events-none z-10 opacity-60"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px',
            backgroundPosition: '0 0, 0 0'
          }}
        />
        
        {/* Spotlight background effect - Responsive positioning */}
        <Spotlight
          className="-top-40 left-0 sm:-top-30 sm:left-10 md:left-60 md:-top-20 lg:-top-40 lg:left-0 xl:-top-60 xl:left-100 2xl:-top-80 2xl:left-120"
          fill="white"
        />
        
        {/* Vignette/Radial Black Gradient Overlay - Responsive for all screens */}
        <div 
          className="absolute inset-0 pointer-events-none z-20"
          style={{
            background: `radial-gradient(ellipse at center, transparent 15%, rgba(0,0,0,0.6) 40%, rgba(0,0,0,0.9) 70%, rgba(0,0,0,1) 90%)`
          }}
        />
        
        {/* Text overlay */}
        <div className="absolute top-35 left-0 right-0 flex flex-col items-center justify-center p-5 text-center text-white z-30">
            <span 
              className="text-7xl  px-1 sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold font-montserrat tracking-[0.5rem] sm:tracking-[0.75rem] md:tracking-[1rem]"
              style={{
                background: 'linear-gradient(to bottom, #ffffff 0%, #373737 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}
            > 
              AYRTON 
            </span>
            <span className="font-sans font-light text-gray-300 tracking-wide">One champion to beat them all</span>
        </div>
        
        {/* Spline animation */}
        <div className="flex w-full h-full pt-60 overflow-hidden">
            <Suspense fallback={<div className="w-full h-full bg-black flex items-center justify-center text-white">Loading Spline...</div>}>
                <Spline
                    scene={sceneUrl}
                    className="w-full z-10 h-full"
                    style={{ width: '100%', height: '100%', overflow: 'hidden' }}
                />
            </Suspense>
        </div>
        
        {/* Scroll Down Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-40 animate-bounce">
            <div className="flex items-center text-white opacity-70 hover:opacity-100 transition-opacity duration-300 cursor-pointer">
                <span className="text-sm font-light tracking-wider mr-2">scroll down</span>
                <svg 
                    className="w-4 h-4" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                >
                    <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth={2} 
                        d="M19 14l-7 7m0 0l-7-7" 
                    />
                </svg>
            </div>
        </div>
    </div>
  );
}
