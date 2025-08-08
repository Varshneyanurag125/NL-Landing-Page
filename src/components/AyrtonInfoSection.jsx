"use client";
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function AyrtonInfoSection() {
  // Array of Ayrton Senna images (you can replace these with actual image paths)
  const images = [
    "/images/ayrton/img1.webp",
    "/images/ayrton/img2.webp", 
    "/images/ayrton/img3.webp",
    "/images/ayrton/img4.webp",
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Auto-change images every 5 seconds
  useEffect(() => {
    if (isPaused) return; // Don't start interval if paused
    
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [images.length, isPaused]);

  return (
    <section className="w-full min-h-fit bg-black text-white py-20 px-4 md:px-8 lg:px-16 relative">
      {/* Separation line at top */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-20 h-px bg-gradient-to-r from-transparent via-white to-transparent opacity-50"></div>
      
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-cente px-2">
          
          {/* Left side - Text Content */}
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div>
              <motion.h2 
                className="text-5xl md:text-6xl lg:text-7xl font-bold font-montserrat mb-6"
                style={{
                  background: 'linear-gradient(to bottom, #ffffff 0%, #888888 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text'
                }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                Ayrton
              </motion.h2>
              
              <motion.p 
                className="text-lg md:text-xl lg:text-xl text-gray-300 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
              >
                Models pouring flows, solidification, and thermal analysis, providing actionable design improvement suggestions based on simulation data.
              </motion.p>
            </div>

            {/* Additional Info Points */}
            <motion.div 
              className="space-y-3 lg:space-y-6 md:space-y-5 xl:space-y-8 "
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="flex items-start space-x-4">
                <div className="w-2 h-2 bg-white rounded-full mt-3 flex-shrink-0"></div>
                <p className="text-gray-400 text-lg">Three-time Formula One World Champion</p>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-2 h-2 bg-white rounded-full mt-3 flex-shrink-0"></div>
                <p className="text-gray-400 text-lg">41 Grand Prix victories</p>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-2 h-2 bg-white rounded-full mt-3 flex-shrink-0"></div>
                <p className="text-gray-400 text-lg">65 pole positions</p>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-2 h-2 bg-white rounded-full mt-3 flex-shrink-0"></div>
                <p className="text-gray-400 text-lg">Racing legend and Brazilian icon</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Right side - Image Carousel */}
          <motion.div 
            className="relative h-80 md:h-96 lg:h-[450px] w-full"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {/* Main Image Container */}
            <div 
              className="relative w-full h-[75%] rounded-lg overflow-hidden mb-4"
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentImageIndex}
                  className="absolute inset-0 w-full h-full"
                  initial={{ opacity: 0, y: -50 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 50 }}
                  transition={{ duration: 0.6 }}
                >
                  <img
                    src={images[currentImageIndex]}
                    alt={`Ayrton Senna ${currentImageIndex + 1}`}
                    className="w-full h-full object-cover transition-all duration-500"
                    onError={(e) => {
                      // Fallback to a placeholder if image doesn't exist
                      e.target.src = `data:image/svg+xml;base64,${btoa(`
                        <svg width="600" height="400" xmlns="http://www.w3.org/2000/svg">
                          <rect width="100%" height="100%" fill="#333"/>
                          <text x="50%" y="50%" font-family="Arial" font-size="24" fill="#666" text-anchor="middle" dy=".3em">
                            Ayrton Senna ${currentImageIndex + 1}
                          </text>
                        </svg>
                      `)}`;
                    }}
                  />
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Thumbnail Images Row */}
            <div className="flex justify-center space-x-3 h-[20%]">
              {images.map((image, index) => (
                <motion.div
                  key={index}
                  className={`relative cursor-pointer rounded-md overflow-hidden transition-all duration-300 ${
                    index === currentImageIndex 
                      ? 'ring-2 ring-white scale-105 opacity-100' 
                      : 'opacity-60 hover:opacity-90'
                  }`}
                  style={{ aspectRatio: '16/9', width: '18%' }}
                  onClick={() => setCurrentImageIndex(index)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <img
                    src={image}
                    alt={`Thumbnail ${index + 1}`}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.src = `data:image/svg+xml;base64,${btoa(`
                        <svg width="100" height="60" xmlns="http://www.w3.org/2000/svg">
                          <rect width="100%" height="100%" fill="#444"/>
                          <text x="50%" y="50%" font-family="Arial" font-size="10" fill="#666" text-anchor="middle" dy=".3em">
                            ${index + 1}
                          </text>
                        </svg>
                      `)}`;
                    }}
                  />
                  {/* Active indicator */}
                  {index === currentImageIndex && (
                    <motion.div
                      className="absolute inset-0 border-2 border-white rounded-md"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                  )}
                </motion.div>
              ))}
            </div>

            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 border-2 border-gray-600 rounded-lg opacity-50"></div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 border-2 border-gray-600 rounded-lg opacity-30"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
