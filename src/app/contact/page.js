'use client';
import React, { useState, useCallback, useMemo } from 'react';
import Footer from '@/components/Footer';
import { WorldMap } from '@/components/ui/world-map';

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    message: '',
  });

  const handleInputChange = useCallback((e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }, []);

  const handleSubmit = useCallback(async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000));

    setIsSubmitting(false);
    setIsSubmitted(true);

    // Clear form data
    setFormData({
      fullName: '',
      email: '',
      message: '',
    });

    // Reset success state after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
    }, 3000);
  }, []);

  // Memoize the dots array to prevent WorldMap re-rendering
  const worldMapDots = useMemo(
    () => [
      {
        start: {
          lat: 64.2008,
          lng: -149.4937,
        }, // Alaska (Fairbanks)
        end: {
          lat: 34.0522,
          lng: -118.2437,
        }, // Los Angeles
      },
      {
        start: { lat: 64.2008, lng: -149.4937 }, // Alaska (Fairbanks)
        end: { lat: -15.7975, lng: -47.8919 }, // Brazil (Brasília)
      },
      {
        start: { lat: -15.7975, lng: -47.8919 }, // Brazil (Brasília)
        end: { lat: 38.7223, lng: -9.1393 }, // Lisbon
      },
      {
        start: { lat: 51.5074, lng: -0.1278 }, // London
        end: { lat: 28.6139, lng: 77.209 }, // New Delhi
      },
      {
        start: { lat: 28.6139, lng: 77.209 }, // New Delhi
        end: { lat: 43.1332, lng: 131.9113 }, // Vladivostok
      },
      {
        start: { lat: 28.6139, lng: 77.209 }, // New Delhi
        end: { lat: -1.2921, lng: 36.8219 }, // Nairobi
      },
    ],
    []
  );

  return (
    <div className='min-h-screen bg-black relative'>
      {/* World Map as Background */}
      <div className='absolute inset-0 pt-20'>
        <WorldMap dots={worldMapDots} />
      </div>

      {/* Glassmorphism Contact Form Overlay */}
      <div className='relative z-10 pt-28 pb-16 px-4 mt-12'>
        <div className='max-w-sm mx-auto'>
          <div className='bg-white/8 backdrop-blur-md border border-white/20 rounded-2xl p-6 shadow-xl ring-1 ring-white/10'>
            {/* Header */}
            <div className='text-center mb-6'>
              <h1 className='text-2xl font-bold text-white mb-1'>Contact Us</h1>
              <p className='text-gray-300 text-xs'>
                Lets create something amazing together
              </p>
            </div>

            {/* Contact Form */}
            <form className='space-y-4' onSubmit={handleSubmit}>
              <div>
                <input
                  type='text'
                  name='fullName'
                  placeholder='Full Name'
                  value={formData.fullName}
                  onChange={handleInputChange}
                  required
                  disabled={isSubmitting}
                  className='w-full px-3 py-2.5 bg-white/15 border border-white/20 rounded-lg text-white text-sm placeholder-gray-300 focus:outline-none focus:border-blue-400/60 focus:bg-white/20 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed will-change-contents'
                />
              </div>

              <div>
                <input
                  type='email'
                  name='email'
                  placeholder='Email Address'
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  disabled={isSubmitting}
                  className='w-full px-3 py-2.5 bg-white/15 border border-white/20 rounded-lg text-white text-sm placeholder-gray-300 focus:outline-none focus:border-blue-400/60 focus:bg-white/20 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed will-change-contents'
                />
              </div>

              <div>
                <textarea
                  name='message'
                  placeholder='Your Message'
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={3}
                  required
                  disabled={isSubmitting}
                  className='w-full px-3 py-2.5 bg-white/15 border border-white/20 rounded-lg text-white text-sm placeholder-gray-300 focus:outline-none focus:border-blue-400/60 focus:bg-white/20 transition-colors duration-200 resize-none disabled:opacity-50 disabled:cursor-not-allowed will-change-contents'
                ></textarea>
              </div>

              <button
                type='submit'
                disabled={isSubmitting}
                className={`w-full py-2.5 font-medium rounded-lg transition-colors duration-200 border shadow-lg flex items-center justify-center space-x-2 ${
                  isSubmitted
                    ? 'bg-green-600 border-green-400/30 text-white'
                    : isSubmitting
                    ? 'bg-gray-600 border-gray-400/30 text-gray-300 cursor-not-allowed'
                    : 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white border-blue-400/30'
                }`}
              >
                {isSubmitted ? (
                  <>
                    <svg
                      className='w-4 h-4'
                      fill='none'
                      stroke='currentColor'
                      viewBox='0 0 24 24'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth={2}
                        d='M5 13l4 4L19 7'
                      />
                    </svg>
                    <span>Message Sent!</span>
                  </>
                ) : isSubmitting ? (
                  <>
                    <svg
                      className='animate-spin w-4 h-4'
                      fill='none'
                      stroke='currentColor'
                      viewBox='0 0 24 24'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth={2}
                        d='M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15'
                      />
                    </svg>
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <svg
                      className='w-4 h-4'
                      fill='none'
                      stroke='currentColor'
                      viewBox='0 0 24 24'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth={2}
                        d='M12 19l9 2-9-18-9 18 9-2zm0 0v-8'
                      />
                    </svg>
                    <span>Send Message</span>
                  </>
                )}
              </button>
            </form>

            {/* Quick Contact Links */}
            <div className='mt-6 pt-4 border-t border-white/20'>
              <div className='flex justify-center space-x-4'>
                <a
                  href='mailto:hello@noetherlabs.com'
                  className='flex items-center space-x-1.5 text-gray-300 hover:text-white transition-colors text-xs'
                >
                  <svg
                    className='w-4 h-4'
                    fill='none'
                    stroke='currentColor'
                    viewBox='0 0 24 24'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z'
                    />
                  </svg>
                  <span>Email</span>
                </a>
                <a
                  href='tel:+1234567890'
                  className='flex items-center space-x-1.5 text-gray-300 hover:text-white transition-colors text-xs'
                >
                  <svg
                    className='w-4 h-4'
                    fill='none'
                    stroke='currentColor'
                    viewBox='0 0 24 24'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z'
                    />
                  </svg>
                  <span>Call</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer with proper z-index */}
      <div className='relative z-20'>
        <Footer />
      </div>
    </div>
  );
}
