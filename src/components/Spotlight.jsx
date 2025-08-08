import React from "react";
import { cn } from "@/lib/utils";
import { Spotlight } from "./ui/spotlight";

export function SpotlightPreview() {
  return (
    <div
      className="relative flex h-[40rem] w-full overflow-hidden rounded-md bg-white dark:bg-black antialiased items-center justify-center">
      <div
        className={cn(
          "absolute inset-0",
          "[background-size:40px_40px]",
          "[background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]",
          "dark:[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]"
        )} />
      {/* Radial gradient for the container to give a faded look */}
      <div
        className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black"></div>
      
      {/* Vignette/Radial Black Gradient Overlay */}
      <div 
        className="absolute inset-0 pointer-events-none z-10"
        style={{
          background: `
            radial-gradient(ellipse at center, transparent 15%, rgba(0,0,0,0.2) 50%, rgba(0,0,0,0.6) 85%, rgba(0,0,0,0.9) 100%),
            linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 30%, transparent 60%)
          `
        }}
      />
      
      <Spotlight />
      <div className="relative z-10 mx-auto w-full max-w-7xl p-4 sm:p-6 md:p-8 flex items-center justify-center h-full mt-12">
        <div className="text-center">
          <h1
            className="text-black dark:bg-opacity-50 dark:bg-gradient-to-b dark:from-neutral-50 dark:to-neutral-400 dark:bg-clip-text 
            text-5xl pb-2 sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 
            tracking-[0.5rem] sm:tracking-[0.75rem] md:tracking-[1rem] 
            px-4 sm:px-6 md:px-8
            dark:text-transparent">
            NOETHER LABS
          </h1>
          <p
            className="mx-auto mt-2 lg:mt-1 sm:mt-3 md:mt-4 max-w-xs sm:max-w-sm md:max-w-lg lg:max-w-2xl 
            text-center text-sm sm:text-base md:text-lg 
            px-4 sm:px-6 md:px-8
            font-normal text-neutral-300">
            "Accelerate engineering design with AI-powered physics simulation."
          </p>
        </div>
      </div>
    </div>
  );
}

