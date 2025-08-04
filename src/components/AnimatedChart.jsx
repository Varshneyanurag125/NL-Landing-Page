"use client";
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function AnimatedChart() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeChart, setActiveChart] = useState(0);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const chartData = [
    {
      title: "Number of steps to simulate:",
      data: [
        { label: "Ayrton", value: 3, color: "#22c55e", maxValue: 30 },
        { label: "Others", value: 25, color: "#3b82f6", maxValue: 30 }
      ]
    },
    {
      title: "Time to setup:",
      data: [
        { label: "Ayrton", value: 22.5, color: "#22c55e", maxValue: 90, unit: "22m 30s" },
        { label: "Others", value: 90, color: "#3b82f6", maxValue: 90, unit: "1h 30m" }
      ]
    }
  ];

  const BarChart = ({ data, title, index }) => (
    <div className="mb-16">
      <h2 className="text-4xl md:text-5xl font-bold text-white mb-12">
        {title}
      </h2>
      
      <div className="space-y-8">
        {data.map((item, barIndex) => (
          <div
            key={item.label}
            className="flex items-center"
          >
            {/* Label - No Animation */}
            <div className="w-20 text-white text-xl font-medium mr-8">
              {item.label}
            </div>
            
            {/* Bar Container */}
            <div className="flex-1 relative h-12 bg-black/30 rounded-lg overflow-hidden border border-gray-700">
              {/* Animated Bar */}
              <motion.div
                key={`bar-${item.label}-${index}`}
                className="h-full rounded-lg relative overflow-hidden"
                style={{ backgroundColor: item.color }}
                initial={{ width: 0 }}
                animate={{ width: `${(item.value / item.maxValue) * 100}%` }}
                transition={{ 
                  duration: 1.5, 
                  delay: barIndex * 0.2 + 0.6,
                  ease: "easeOut"
                }}
                whileHover={{ 
                  scale: 1.02,
                  transition: { duration: 0.2 }
                }}
              >
                {/* Shimmer Effect - REMOVED */}
              </motion.div>
              
              {/* Value Label - No Animation */}
              <div
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white font-bold text-lg"
              >
                {item.unit || item.value}
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {/* Scale Labels - No Animation */}
      <div
        className="flex justify-between mt-4 text-gray-400 text-sm"
      >
        <span>0</span>
        <span>{data[0].maxValue === 30 ? "7.5" : "22m 30s"}</span>
        <span>{data[0].maxValue === 30 ? "15" : "45m"}</span>
        <span>{data[0].maxValue === 30 ? "22.5" : "1h 7m 30s"}</span>
        <span>{data[0].maxValue === 30 ? "30" : "1h 30m"}</span>
      </div>
    </div>
  );

  return (
    <section className="min-h-screen bg-black to-black text-white py-20 px-4 md:px-8 lg:px-16 relative overflow-hidden">
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Toggle Buttons */}
        <div className="flex justify-center mb-16">
          <div className="bg-black/30 p-2 rounded-xl border border-gray-600">
            {chartData.map((chart, index) => (
              <button
                key={index}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                  activeChart === index
                    ? 'bg-red-600 text-white shadow-lg'
                    : 'text-gray-300 hover:text-white hover:bg-gray-700/50'
                }`}
                onClick={() => setActiveChart(index)}
              >
                Chart {index + 1}
              </button>
            ))}
          </div>
        </div>

        {/* Charts */}
        <div>
          <BarChart 
            data={chartData[activeChart].data} 
            title={chartData[activeChart].title}
            index={activeChart}
          />
        </div>

        {/* Performance Stats */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-20"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.5 }}
        >
          <motion.div
            className="bg-black/20 p-8 rounded-xl border border-gray-600 backdrop-blur-sm"
            whileHover={{ 
              scale: 1.02,
              boxShadow: "0 20px 40px rgba(34, 197, 94, 0.1)"
            }}
            transition={{ duration: 0.3 }}
          >
            <h3 className="text-2xl font-bold text-green-400 mb-4">Ayrton Advantage</h3>
            <p className="text-gray-300 text-lg">
              Experience up to <span className="text-green-400 font-bold">8x faster</span> setup times 
              and <span className="text-green-400 font-bold">90% fewer</span> steps compared to traditional solutions.
            </p>
          </motion.div>
          
          <motion.div
            className="bg-black/20 p-8 rounded-xl border border-gray-600 backdrop-blur-sm"
            whileHover={{ 
              scale: 1.02,
              boxShadow: "0 20px 40px rgba(239, 68, 68, 0.1)"
            }}
            transition={{ duration: 0.3 }}
          >
            <h3 className="text-2xl font-bold text-red-400 mb-4">Why It Matters</h3>
            <p className="text-gray-300 text-lg">
              Reduced complexity means faster time-to-market, lower costs, 
              and more time for innovation in your engineering projects.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
