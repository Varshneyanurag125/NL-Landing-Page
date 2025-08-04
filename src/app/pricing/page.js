import React from 'react';
import Pricing from '@/components/Pricing';
import Footer from '@/components/Footer';

export default function PricingPage() {
  return (
    <div>
      <div 
                className="absolute inset-0 pointer-events-none z-10 opacity-60"
                style={{
                  backgroundImage: `
                    linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                    linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
                  `,
                  backgroundSize: '40px 40px',
                  backgroundPosition: '0 0, 0 0'
                }}
              />
              
      <Pricing />
      <Footer />
    </div>
  );
}