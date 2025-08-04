"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import Image from "next/image";

export function SiteOpeningAnimation({ children }) {
  const [isLoading, setIsLoading] = useState(true);
  const [showMainContent, setShowMainContent] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    
    const timer = setTimeout(() => {
      setIsLoading(false);
      setTimeout(() => {
        setShowMainContent(true);
      }, 1000);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (!isClient) {
    return <>{children}</>;
  }

  if (showMainContent) {
    return <>{children}</>;
  }

  return (
    <AnimatePresence mode="wait">
      {isLoading && (
        <motion.div
          key="loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black"
        >
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1 }}
            className="text-center"
          >
            <motion.div
              className="w-20 h-20 rounded-full overflow-hidden border-2 border-red-500 mx-auto mb-4"
              animate={{ rotate: 360 }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            >
              <Image
                src="/images/logo.png"
                alt="Noether Labs Logo"
                fill
                className="object-cover"
                priority
              />
            </motion.div>
            <h1 className="text-3xl font-bold text-white mb-2">
              NOETHER LABS
            </h1>
            <p className="text-gray-400 text-sm">
              PHYSICS SIMULATIONS
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
