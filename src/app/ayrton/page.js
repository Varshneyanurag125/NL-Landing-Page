"use client";
import React, { useState, useEffect } from "react";
import SplineWithSpotlight from "@/components/SplineWithSpotlight";
import AyrtonInfoSection from "@/components/AyrtonInfoSection";
import AyrtonDetail from "@/components/AyrtonDetail";
import AnimatedChart from "@/components/AnimatedChart";
import Footer from "@/components/Footer";

export default function AyrtonPage() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

    if (!isClient) {
        return <div className="w-full h-screen bg-black flex items-center justify-center text-white">Loading...</div>;   
    }

  return (
    <div className="relative w-full bg-black text-white overflow-x-hidden">
        <div className="h-screen w-full">
          <SplineWithSpotlight />
        </div>
        <div className="w-full">
          <AyrtonInfoSection />
        </div>
        <div className="w-full">
          <AyrtonDetail />
        </div>
        <div className="w-full">
          <AnimatedChart />
        </div>
        <Footer />

    </div>
    );
}
