'use client';
import React from 'react';
import { motion } from 'motion/react';

export default function AboutUs() {
  const teamMembers = [
    {
      name: 'Pranav Rajmane',
      role: 'Founder & CEO',
      description:
        'B.Tech in Pyhsics from NIT Hamirpur. Passionate about pushing the boundaries of computational physics.',
      image: 'PR',
    },
    {
      name: 'Er. Harshvardhan Singh Shekhawat',
      role: 'Co-Founder',
      description:
        'B.Tech in Chemical Engineering from NIT Hamirpur. Passionate about applying physics to real-world problems.',
      image: 'HS',
    },
  ];

  const features = [
    {
      title: 'Advanced Simulation',
      description:
        'State-of-the-art physics modeling with real-time computation',
      icon: '⚡',
    },
    {
      title: 'AI-Powered Analysis',
      description: 'Machine learning algorithms for predictive modeling',
      icon: '🤖',
    },
    {
      title: 'Cloud Computing',
      description: 'Scalable infrastructure for complex simulations',
      icon: '☁️',
    },
    {
      title: 'Real-time Visualization',
      description: 'Interactive 3D visualization of simulation results',
      icon: '📊',
    },
  ];

  return (
    <section className='min-h-screen bg-black text-white pt-32 pb-20 px-4 md:px-8 lg:px-16 relative overflow-hidden'>
      {/* Background Elements */}
      <div className='absolute inset-0 bg-black'></div>

      {/* Mesh Background */}
      <div
        className='absolute inset-0 pointer-events-none opacity-20'
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px',
          backgroundPosition: '0 0, 0 0',
        }}
      />

      <div className='max-w-7xl mx-auto relative z-10'>
        {/* Header */}
        <motion.div
          className='text-center mb-20'
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className='text-4xl md:text-6xl font-bold mb-6 text-white '>
            About Noether Labs
          </h1>
          <p className='text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed px-3 text-justify'>
            We're revolutionizing physics simulation with cutting-edge
            technology, making complex modeling accessible to researchers,
            engineers, and innovators worldwide.
          </p>
        </motion.div>

        {/* Mission Section */}
        <motion.div
          className='mb-20'
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
            <div>
              <h2 className='text-3xl md:text-4xl font-bold mb-6 text-white text-center'>
                Our Mission
              </h2>
              <p className='text-lg text-gray-300 leading-relaxed mb-6 text-justify px-2'>
                Named after Emmy Noether, the brilliant mathematician who
                revolutionized theoretical physics, we carry forward her legacy
                of groundbreaking discovery and innovation.
              </p>
              <p className='text-lg text-gray-300 leading-relaxed text-justify px-2'>
                Our mission is to democratize advanced physics simulation,
                providing powerful tools that accelerate scientific discovery
                and engineering innovation across industries.
              </p>
            </div>
            <div className='bg-zinc-900 rounded-2xl p-8 border border-zinc-700 mx-3'>
              <h3 className='text-2xl font-bold mb-4 text-white'>Our Values</h3>
              <ul className='space-y-3'>
                {[
                  'Scientific Excellence',
                  'Innovation & Discovery',
                  'Accessibility & Education',
                  'Collaborative Research',
                ].map((value, index) => (
                  <motion.li
                    key={value}
                    className='flex items-center text-gray-300'
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 + index * 0.05, duration: 0.4 }}
                  >
                    <div className='w-2 h-2 bg-blue-500 rounded-full mr-3'></div>
                    {value}
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>

        {/* Features Section */}
        <motion.div
          className='mb-20'
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h2 className='text-3xl md:text-4xl font-bold text-center mb-12 text-white'>
            What We Offer
          </h2>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-3 lg:mx-auto md:mx-auto xl:mx-auto'>
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                className='bg-zinc-900 rounded-xl p-6 border border-zinc-700 text-center'
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + index * 0.05, duration: 0.4 }}
                whileHover={{ y: -2, transition: { duration: 0.2 } }}
              >
                <div className='text-4xl mb-4'>{feature.icon}</div>
                <h3 className='text-xl font-bold mb-3 text-white'>
                  {feature.title}
                </h3>
                <p className='text-gray-400 text-sm'>{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Team Section */}
        <motion.div
          className='mb-20'
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <h2 className='text-3xl md:text-4xl font-bold text-center mb-12 text-white'>
            Meet Our Team
          </h2>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-3 lg:mx-auto md:mx-auto xl:mx-auto justify-center '>
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                className='bg-zinc-900 rounded-xl p-8 border border-zinc-700 text-center'
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + index * 0.05, duration: 0.4 }}
                whileHover={{ y: -2, transition: { duration: 0.2 } }}
              >
                <div className='w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4'>
                  {member.image}
                </div>
                <h3 className='text-xl font-bold mb-2 text-white'>
                  {member.name}
                </h3>
                <p className='text-blue-400 font-semibold mb-3'>
                  {member.role}
                </p>
                <p className='text-gray-400 text-sm'>{member.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          className='text-center px-3'
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h2 className='text-3xl md:text-4xl font-bold mb-6 text-white'>
            Ready to Start Simulating?
          </h2>
          <p className='text-lg text-gray-400 mb-8 max-w-2xl mx-auto'>
            Join thousands of researchers and engineers who trust Noether Labs
            for their simulation needs.
          </p>
          <div className='flex flex-col sm:flex-row gap-4 justify-center'>
            <motion.a
              href='/pricing'
              className='px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors cursor-pointer'
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.2 }}
            >
              View Pricing
            </motion.a>
            <motion.a
              href='/contact'
              className='px-8 py-4 bg-transparent border-2 border-gray-600 text-white font-semibold rounded-lg hover:bg-gray-800 transition-colors cursor-pointer'
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.2 }}
            >
              Contact Us
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
