"use client";
import React, { useState, useEffect } from "react";
import { motion } from "motion/react";

// import { twMerge } from "tailwind-merge";
import { TracingBeam } from "./ui/tracing-beam";

export function TracingBeamDemo() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return (
      <div className="w-full px-6 py-2 bg-white relative">
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-10">
            <h1 className="text-6xl font-bold font-montserrat bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent mb-4">
              Our Vision
            </h1>
            <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-white to-transparent mx-auto opacity-60"></div>
          </div>
          <TracingBeam className="w-full pl-16 md:pl-24">
            <div className="w-full antialiased relative">
              {visionContent.map((item, index) => (
                <div key={`content-${index}`} className="mb-20 w-full">
                  <h2 className="bg-white text-black rounded-full text-sm w-fit px-6 py-2 mb-8 font-montserrat shadow-sm">
                    {item.badge}
                  </h2>
                  <div className="mb-8">
                    <h3 className="text-3xl font-bold font-montserrat text-white mb-3">
                      {item.title}
                    </h3>
                    <div className="w-full h-0.5 bg-white opacity-60"></div>
                  </div>
                  <div className="text-lg leading-relaxed font-montserrat text-gray-300 max-w-4xl">
                    {item.description}
                  </div>
                </div>
              ))}
            </div>
          </TracingBeam>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full px-6 py-8 bg-transparent relative overflow-hidden">
      <div 
        className="absolute top-0 left-0 right-0 h-32 pointer-events-none z-30"
        style={{
          background: `linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0) 100%, rgba(0,0,0,0) 100%, transparent 100%)`
        }}
      />
      {/* Top Border Linear Gradient - Up from the text */}
      
      {/* Vignette/Radial Filter Overlay */}
      <div 
        className="absolute inset-0 pointer-events-none z-20"
        style={{
          background: `radial-gradient(ellipse at center, transparent 20%, rgba(0,0,0,0.3) 60%, rgba(0,0,0,0.8) 100%)`
        }}
      />
      
      {/* Animated Reddish Grid Background */}
      <motion.div 
        className="absolute inset-0 opacity-50"
        animate={{
          backgroundPosition: ["0px 0px", "80px 80px"],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "linear"
        }}
        style={{
          backgroundImage: `
            linear-gradient(rgba(220, 38, 38, 0.25) 1px, transparent 1px),
            linear-gradient(90deg, rgba(220, 38, 38, 0.25) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px',
          maskImage: `radial-gradient(ellipse at center, white 30%, transparent 80%)`,
          WebkitMaskImage: `radial-gradient(ellipse at center, white 30%, transparent 80%)`
        }}
      />

      {/* Floating Particles */}
      <div 
        className="absolute inset-0"
        style={{
          maskImage: `radial-gradient(ellipse at center, white 40%, transparent 80%)`,
          WebkitMaskImage: `radial-gradient(ellipse at center, white 40%, transparent 80%)`
        }}
      >
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-4 h-4 bg-red-400/40 rounded-full"
            animate={{
              x: [0, 100 + i * 20, 200 - i * 15, 0],
              y: [0, -50 + i * 10, 100 - i * 20, 0],
              opacity: [0, 0.8, 1, 0],
              scale: [0.5, 1.2, 0.8, 0.5],
            }}
            transition={{
              duration: 12 + i * 0.8,
              repeat: Infinity,
              delay: i * 0.8,
              ease: "easeInOut"
            }}
            style={{
              left: `${10 + i * 10}%`,
              top: `${10 + i * 8}%`,
            }}
          />
        ))}
      </div>

      {/* Gradient Orbs */}
      <div 
        className="absolute inset-0"
        style={{
          maskImage: `radial-gradient(ellipse at center, white 50%, transparent 85%)`,
          WebkitMaskImage: `radial-gradient(ellipse at center, white 50%, transparent 85%)`
        }}
      >
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-red-500/15 to-orange-500/15 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.6, 0.9, 0.6],
            x: [0, 50, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-l from-red-600/15 to-pink-500/15 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.5, 0.8, 0.5],
            x: [0, -40, 0],
            y: [0, 40, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 3
          }}
        />
      </div>

      {/* Pulsing Dots */}
      <div 
        className="absolute inset-0"
        style={{
          maskImage: `radial-gradient(ellipse at center, white 35%, transparent 75%)`,
          WebkitMaskImage: `radial-gradient(ellipse at center, white 35%, transparent 75%)`
        }}
      >
        {[...Array(4)].map((_, i) => (
          <motion.div
            key={`dot-${i}`}
            className="absolute w-2 h-2 bg-red-300/60 rounded-full"
            animate={{
              scale: [0, 3, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              delay: i * 1,
              ease: "easeOut"
            }}
            style={{
              left: `${20 + i * 20}%`,
              top: `${30 + i * 10}%`,
            }}
          />
        ))}
      </div>
      
      <div className="max-w-6xl mx-auto relative z-10 shadow-[0_-8px_10px_-2px_rgba(0,0,0,0.9)]">
        <div className="text-center mb-10">
          <h1 className="text-5xl lg:text-6xl font-bold font-montserrat bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent mb-2">
            Our Vision
          </h1>
          <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-white to-transparent mx-auto opacity-60"></div>
        </div>
        <TracingBeam className="w-full pl-6 md:pl-24 ">
          <div className="w-full antialiased relative">
            {visionContent.map((item, index) => (
              <div key={`content-${index}`} className="mb-20 w-full">
                <h2 className="bg-white text-black rounded-full text-sm w-fit px-6 py-2 mb-8 font-montserrat shadow-sm">
                  {item.badge}
                </h2>

                <div className="mb-8">
                  <h3 className="text-3xl font-bold font-montserrat text-white relative mb-3">
                    <span 
                      className="relative z-10"
                      style={{
                        background: `
                          linear-gradient(rgba(220, 38, 38, 0.15) 1px, transparent 1px),
                          linear-gradient(90deg, rgba(220, 38, 38, 0.15) 1px, transparent 1px)
                        `,
                        backgroundSize: '20px 20px',
                        WebkitBackgroundClip: 'text',
                        backgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundImage: `
                          linear-gradient(rgba(220, 38, 38, 0.15) 1px, transparent 1px),
                          linear-gradient(90deg, rgba(220, 38, 38, 0.15) 1px, transparent 1px),
                          linear-gradient(to right, #ffffff, #ffffff)
                        `
                      }}
                    >
                      {item.title}
                    </span>
                  </h3>
                  <div className="w-full h-0.5 bg-white opacity-60"></div>
                </div>

                <div className="text-3 leading-relaxed text-justify font-montserrat text-gray-200 max-w-4xl">
                  {item.description}
                </div>
              </div>
            ))}
          </div>
        </TracingBeam>
      </div>
    </div>
  );
}

const visionContent = [
  {
    title: "Redefining the Engineering Frontier",
    description: (
      <p>
        At Noether Labs, we believe progress happens when the boundaries between human intuition and machine intelligence dissolve. <br /> Ayrton is a paradigm shift: a platform that transforms the entire design iteration process making it instantaneous, insightful, and profoundly more powerful.
      </p>
    ),
    badge: "Vision",
  },
  {
    title: "The World's First Physics-Native AI for Design",
    description: (
      <p>
        We are creating the world's first AI agent that understands physical laws as naturally as it processes data. This system "thinks" in physics, comprehending materials, forces, and flows at a fundamental level. It predicts performance, anticipates failure, and optimizes solutions in real time becoming not just a tool, but a collaborative partner in engineering innovation.
      </p>
    ),
    badge: "Innovation",
  },  
  {
    title: "The GPT Moment for Machine Design",
    description: (
      <>
        <p>
          Just as generative language models revolutionized the way we access and create information, we are ushering in a new era for engineering. Our AI acts as a conversational co-designer fluent in the language of engineering, aware of your goals, and deeply attuned to real-world constraints. Describe your vision, and our platform translates intent into production-ready designs and simulations instantly, intelligently, and reliably.
        </p>
        <p className="mt-4">
          By fusing deep learning with frontier physics research, we are making seamless, rapid iteration the new standard empowering engineers, inventors, and creators everywhere to design, test and realize the extraordinary.
        </p>
      </>
    ),
    badge: "Future",
  },
];
