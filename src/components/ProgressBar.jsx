"use client";
import React, { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';

export default function ProgressBar() {
  const [loading, setLoading] = useState(false);
  const [progress, setProgress] = useState(0);
  const pathname = usePathname();

  useEffect(() => {
    let progressInterval;
    let timeoutId;

    const startLoading = () => {
      setLoading(true);
      setProgress(0);
      
      // Simulate progressive loading
      progressInterval = setInterval(() => {
        setProgress(prev => {
          if (prev >= 90) return prev; // Stop at 90%
          return prev + Math.random() * 15;
        });
      }, 50);

      // Complete the loading after a short delay
      timeoutId = setTimeout(() => {
        setProgress(100);
        setTimeout(() => {
          setLoading(false);
          setProgress(0);
        }, 200);
      }, 300);
    };

    // Trigger loading animation on route change
    startLoading();

    return () => {
      if (progressInterval) clearInterval(progressInterval);
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [pathname]);

  // Also listen for link clicks to start loading immediately
  useEffect(() => {
    const handleLinkClick = (e) => {
      const link = e.target.closest('a');
      if (link && link.href && link.href !== window.location.href) {
        setLoading(true);
        setProgress(0);
      }
    };

    document.addEventListener('click', handleLinkClick);
    return () => document.removeEventListener('click', handleLinkClick);
  }, []);

  return (
    <>
      <AnimatePresence>
        {loading && (
          <motion.div
            className="fixed top-0 left-0 right-0 z-[9999] h-1"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            {/* Background bar */}
            <div className="w-full h-full bg-black/20" />
            
            {/* Progress bar */}
            <motion.div
              className="absolute top-0 left-0 h-full bg-white shadow-lg"
              style={{
                background: 'linear-gradient(90deg, #ffffff 0%, rgba(255,255,255,0.9) 50%, #ffffff 100%)',
                boxShadow: '0 0 8px rgba(255, 255, 255, 0.4)',
              }}
              initial={{ width: '0%' }}
              animate={{ width: `${progress}%` }}
              transition={{
                duration: 0.2,
                ease: 'easeOut'
              }}
            />
            
            {/* Shimmer effect */}
            <motion.div
              className="absolute top-0 h-full w-32 bg-gradient-to-r from-transparent via-white/40 to-transparent"
              animate={{
                x: ['-128px', 'calc(100vw + 128px)']
              }}
              transition={{
                duration: 1.2,
                repeat: Infinity,
                ease: 'linear'
              }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
