"use client";
import React from 'react';
import { motion } from 'framer-motion';

export default function AyrtonDetail() {
  return (
    <section className=" min-h-fit bg-black text-white px-4 md:px-8 lg:px-16 relative overflow-hidden">
      {/* Animated Red Glowing Bubbles */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Bubble 1 */}
        <motion.div
          className="absolute w-32 h-32 bg-red-500/10 rounded-full blur-xl shadow-red-500/50 shadow-2xl"
          style={{ left: '10%', top: '20%' }}
          animate={{
            x: [0, 50, 0],
            y: [0, -30, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        {/* Bubble 2 */}
        <motion.div
          className="absolute w-24 h-24 bg-red-400/10 rounded-full blur-lg shadow-red-400/40 shadow-xl"
          style={{ right: '15%', top: '30%' }}
          animate={{
            x: [0, -40, 0],
            y: [0, 40, 0],
            scale: [1, 0.8, 1],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />
        
        {/* Bubble 3 */}
        <motion.div
          className="absolute w-20 h-20 bg-red-500/10 rounded-full blur-md shadow-red-600/50 shadow-xl"
          style={{ left: '70%', bottom: '20%' }}
          animate={{
            x: [0, 30, 0],
            y: [0, -50, 0],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />
        
        {/* Bubble 4 */}
        <motion.div
          className="absolute w-16 h-16 bg-red-500/10 rounded-full blur-lg shadow-red-500/40 shadow-lg"
          style={{ left: '20%', bottom: '40%' }}
          animate={{
            x: [0, -25, 0],
            y: [0, 35, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 3
          }}
        />
        
        {/* Bubble 5 */}
        <motion.div
          className="absolute w-28 h-28 bg-red-500/120 rounded-full blur-xl shadow-red-400/45 shadow-2xl"
          style={{ right: '25%', bottom: '10%' }}
          animate={{
            x: [0, 45, 0],
            y: [0, -25, 0],
            scale: [1, 0.9, 1],
          }}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 4
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Main Heading */}
        <div className="text-center mb-10">
          <h1 className="text-xl md:text-3xl lg:text-2xl font-light leading-relaxed max-w-6xl mx-auto text-justify px-4">
            Ayrton completely transforms how engineers simulate pouring and casting simulation in 3 ways:
          </h1>
        </div>

        {/* Three Content Sections */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-0 relative ">
          
          {/* Section A */}
          <div className="p-8 lg:p-10 rounded-xl backdrop-blur-md bg-white/5 border border-white/10 shadow-xl">
            <h2 className="text-xl md:text-2xl text-center font-bold mb-10 tracking-wide">
                A. Start to results in three easy steps.
            </h2>
            
            <div className="space-y-8">
              <div className="flex items-center text-center">
                <span className="text-lg font-bold mr-4 flex-shrink-0">1.</span>
                <p className="text-md">Upload the 3D Model</p>
              </div>
              
              <div className="flex items-start">
                <span className="text-lg font-bold mr-4 flex-shrink-0">2.</span>
                <p className="text-md">Tell us about the Melt and the Mold</p>
              </div>
              
              <div className="flex items-start">
                <span className="text-lg font-bold mr-4 flex-shrink-0">3.</span>
                <p className="text-md">Click Simulate</p>
              </div>
            </div>
          </div>

          {/* Dotted Separator 1 */}
          <div className="hidden lg:flex absolute left-1/3 top-0 bottom-0 w-px">
            <div className="w-full border-l-2 border-dotted border-gray-400 opacity-50"></div>
          </div>

          {/* Section B */}
          <div className="p-8 lg:p-10 rounded-xl backdrop-blur-md bg-white/5 border border-white/10 shadow-xl">
            <h2 className="text-xl md:text-2xl text-center font-bold mb-10 tracking-wide">
              B. Cloud Based Architecture.
            </h2>
            
            <div className="space-y-8">
              <div className="flex items-start">
                <div className="w-3 h-3 bg-white rounded-full mr-4 mt-2 flex-shrink-0"></div>
                <p className="text-md">No specific Hardware requirements.</p>
              </div>
              
              <div className="flex items-start">
                <div className="w-3 h-3 bg-white rounded-full mr-4 mt-2 flex-shrink-0"></div>
                <p className="text-md">All you need is a Laptop and an Internet connection</p>
              </div>
            </div>
          </div>

          {/* Dotted Separator 2 */}
          <div className="hidden lg:flex absolute left-2/3 top-0 bottom-0 w-px">
            <div className="w-full border-l-2 border-dotted border-gray-400 opacity-50"></div>
          </div>

          {/* Section C */}
          <div className="p-8 lg:p-10 rounded-xl backdrop-blur-md bg-white/5 border border-white/10 shadow-xl">
            <h2 className="text-xl md:text-2xl text-center font-bold mb-10 tracking-wide2">
              C. A Genius Assistant
            </h2>
            
            <div className="space-y-8">
              <div className="flex items-start">
                <div className="w-3 h-3 bg-white rounded-full mr-4 mt-2 flex-shrink-0"></div>
                <p className="text-md">Ayrton understands your engineering intent.</p>
              </div>
              
              <div className="flex items-start">
                <div className="w-3 h-3 bg-white rounded-full mr-4 mt-2 flex-shrink-0"></div>
                <p className="text-md">Ayrton assesses the simulation and the results and suggests logical design improvements on the fly</p>
              </div>
              
              <div className="flex items-start">
                <div className="w-3 h-3 bg-white rounded-full mr-4 mt-2 flex-shrink-0"></div>
                <div>
                  <span className="font-bold text-lg">Vertical-Specific Intelligence:</span>
                  <span className="text-md"> Models trained on industry-specific data and requirements</span>
                </div>
              </div>
            </div>
          </div>

        </div>
        
        {/* Bottom dotted line */}
        <div className="w-full h-px bg-dotted bg-gradient-to-r from-transparent via-gray-400 to-transparent opacity-50 mt-16"></div>
      </div>
    </section>
  );
}
