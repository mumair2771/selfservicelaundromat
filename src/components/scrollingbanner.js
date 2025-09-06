// components/ScrollingBanner.js
"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { WashingMachine, Sparkles, Shirt, Waves } from "lucide-react";

export default function ScrollingBanner() {
  const bannerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(".scroll-content", {
        xPercent: -50,
        repeat: -1,
        duration: 15,
        ease: "linear",
      });
    }, bannerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={bannerRef}
      className="bg-[#0D1E4C] overflow-hidden py-6"
    >
      <div className="flex whitespace-nowrap scroll-content text-white font-bold text-xl md:text-2xl">
        <div className="flex items-center gap-4 mx-8">
          <WashingMachine /> Fresh & Clean Laundry
        </div>
        <div className="flex items-center gap-4 mx-8">
          <Sparkles /> Premium Quality Service
        </div>
        <div className="flex items-center gap-4 mx-8">
          <Shirt /> Gentle Care for Your Clothes
        </div>
        <div className="flex items-center gap-4 mx-8">
          <Waves /> Wash · Dry · Fold · Repeat
        </div>
        {/* duplicate for infinite loop */}
        <div className="flex items-center gap-4 mx-8">
          <WashingMachine /> Fresh & Clean Laundry
        </div>
        <div className="flex items-center gap-4 mx-8">
          <Sparkles /> Premium Quality Service
        </div>
        <div className="flex items-center gap-4 mx-8">
          <Shirt /> Gentle Care for Your Clothes
        </div>
        <div className="flex items-center gap-4 mx-8">
          <Waves /> Wash · Dry · Fold · Repeat
        </div>
      </div>
    </section>
  );
}
