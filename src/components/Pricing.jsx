"use client";
import React, { useState } from 'react';
import { motion } from 'framer-motion';

export default function Pricing() {
  const [isAnnual, setIsAnnual] = useState(false);
  const [hoveredPlan, setHoveredPlan] = useState(null);

  const plans = [
    {
      name: "Titan",
      description: "Entry level plan",
      monthlyPrice: 30000,
      annualPrice: 24000,
      originalPrice: 35000,
      simulations: 15,
      features: [
        "Upto 15 simulation runs",
        "Limited access to AI assistant"
      ],
      popular: false,
      buttonText: "Get Titan Plan"
    },
    {
      name: "Cosmos",
      description: "Professional plan", 
      monthlyPrice: 50000,
      annualPrice: 40000,
      originalPrice: 60000,
      simulations: 50,
      features: [
        "Upto 50 simulation runs",
        "Unlimited access to AI assistant"
      ],
      popular: true,
      buttonText: "Get Cosmos Plan"
    }
  ];

  const formatPrice = (price) => {
    return `₹ ${price.toLocaleString()}`;
  };

  return (
    <section className="min-h-screen bg-black text-white pt-32 pb-20 px-4 md:px-8 lg:px-16 relative overflow-hidden">
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Pricing
          </h1>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            Choose the perfect plan for your simulation needs
          </p>
        </motion.div>

        {/* Remove Billing Toggle - Not needed for this theme */}

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              className="relative group cursor-pointer h-full"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 + 0.4 }}
              onMouseEnter={() => setHoveredPlan(index)}
              onMouseLeave={() => setHoveredPlan(null)}
              whileHover={{ y: -5 }}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <motion.div
                  className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-20"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.8, type: "spring" }}
                >
                  <div className="bg-white text-black px-4 py-2 rounded-full text-sm font-semibold">
                    Most popular
                  </div>
                </motion.div>
              )}

              {/* Card */}
              <motion.div
                className="relative p-8 rounded-2xl bg-zinc-900 border border-zinc-700 overflow-hidden h-full"
                animate={{
                  borderColor: hoveredPlan === index ? '#52525b' : '#3f3f46',
                  boxShadow: hoveredPlan === index 
                    ? '0 25px 50px rgba(0, 0, 0, 0.3)' 
                    : '0 10px 30px rgba(0, 0, 0, 0.2)'
                }}
                transition={{ duration: 0.3 }}
              >
                {/* Plan Header */}
                <div className="relative z-10 flex flex-col h-full">
                  <div className="flex-grow">
                    <h3 className="text-2xl font-bold mb-2 text-white">{plan.name}</h3>
                    <p className="text-gray-400 text-sm mb-8">{plan.description}</p>

                    {/* Price Section */}
                    <div className="mb-8">
                      <div className="flex items-baseline gap-1 mb-2">
                        <span className="text-4xl font-normal text-white">₹</span>
                        <span className="text-7xl font-bold text-white leading-none">
                          {plan.monthlyPrice.toLocaleString()}
                        </span>
                        <span className="text-lg text-gray-400">monthly /</span>
                      </div>
                      <div className="flex items-baseline gap-1">
                        <span className="text-2xl font-normal text-white">₹</span>
                        <span className="text-3xl font-bold text-white">
                          {plan.annualPrice.toLocaleString()}
                        </span>
                        <span className="text-lg text-gray-400">annually</span>
                      </div>
                    </div>

                    {/* CTA Button */}
                    <motion.button
                      className="w-full py-3 px-6 rounded-xl font-semibold bg-white text-black hover:bg-gray-100 transition-all duration-300 mb-8 cursor-pointer"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      {plan.buttonText}
                    </motion.button>

                    {/* Features List */}
                    <ul className="space-y-3">
                      {plan.features.map((feature, featureIndex) => (
                        <motion.li
                          key={featureIndex}
                          className="flex items-start text-gray-300 text-sm leading-relaxed"
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.2 + featureIndex * 0.1 + 0.8 }}
                        >
                          <div className="w-4 h-4 mr-3 mt-0.5 flex-shrink-0">
                            <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                            </svg>
                          </div>
                          {feature}
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          <p className="text-gray-400 mb-6">
            Need a custom solution for your enterprise? We've got you covered.
          </p>
          <motion.button
            className="px-8 py-4 bg-transparent border-2 border-gray-600 text-white rounded-xl font-semibold hover:bg-gray-800 transition-all duration-300 cursor-pointer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Contact Sales
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
