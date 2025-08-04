"use client";
import React, { Suspense } from 'react';
import Spline from '@splinetool/react-spline';

export default function SplineAnimation() {
  const sceneUrl = "https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode";

  return (
    <div className="relative w-full h-full overflow-hidden bg-black">
        <div
            className="absolute top-35  left-0 right-0 flex flex-col items-center justify-center gap-2 p-8 text-center font-heading text-white z-10"
        >
            <span className="text-6xl font-semibold"> AYRTON </span>
            <span className="font-sans font-light">Build spline animations with style.</span>
        </div>
        <div className="flex w-full h-full pt-60 overflow-hidden">
            <Suspense fallback={<div className="w-full h-full bg-black flex items-center justify-center text-white">Loading Spline...</div>}>
                <Spline
                    scene={sceneUrl}
                    className="w-full h-full"
                    style={{ width: '100%', height: '100%', overflow: 'hidden' }}
                />
            </Suspense>
        </div>
    </div>
  );
}
