// components/Hero.js
"use client"
import Image from "next/image";
import { Clock, Star, Award, Sparkles, ThumbsUp, Shirt } from "lucide-react";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import FadeInElement from "./FadeInElement";

export default function Hero() {
  // Create refs for the card elements
  const card1Ref = useRef(null);
  const card2Ref = useRef(null);
  const card3Ref = useRef(null);
  const card4Ref = useRef(null);
  const card5Ref = useRef(null);
  
  // Refs for headings and image
  const headingRef = useRef(null);
  const subheadingRef = useRef(null);
  const buttonRef = useRef(null);
  const imageRef = useRef(null);
  
  // Initialize GSAP animations
  useEffect(() => {
    // Create a timeline for smoother animations
    const tl = gsap.timeline();
    
    // Initial setup for cards - slightly scaled down
    gsap.set([card1Ref.current, card2Ref.current, card3Ref.current, card4Ref.current, card5Ref.current], {
      scale: 0.95,
      opacity: 0,
      y: 20
    });
    
    // Initial setup for headings and image
    gsap.set(headingRef.current, { opacity: 0, y: 30 });
    gsap.set(subheadingRef.current, { opacity: 0, y: 20 });
    gsap.set(buttonRef.current, { opacity: 0, y: 15, scale: 0.9 });
    gsap.set(imageRef.current, { opacity: 0, scale: 0.9 });
    
    // Animate headings and button
    tl.to(headingRef.current, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: "power2.out"
    })
    .to(subheadingRef.current, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: "power2.out"
    }, "-=0.6")
    .to(buttonRef.current, {
      opacity: 1,
      y: 0,
      scale: 1,
      duration: 0.6,
      ease: "back.out(1.7)"
    }, "-=0.4")
    .to(imageRef.current, {
      opacity: 1,
      scale: 1,
      duration: 1,
      ease: "power2.out"
    }, "-=0.4")
    // Animate cards in with slight delay between each
    .to([card1Ref.current, card2Ref.current, card3Ref.current, card4Ref.current, card5Ref.current], {
      scale: 1,
      opacity: 1,
      y: 0,
      duration: 0.8,
      stagger: 0.15,
      ease: "power3.out"
    }, "-=0.6");
    
    // Create continuous animations for each card
    const cards = [card1Ref.current, card2Ref.current, card3Ref.current, card4Ref.current, card5Ref.current];
    
    // Apply continuous floating animation to each card
    cards.forEach((card, index) => {
      // Create a continuous floating animation with different timing for each card
      gsap.to(card, {
        y: "-=8",
        duration: 1.5 + (index * 0.2), // Slightly different duration for each card
        ease: "sine.inOut",
        repeat: -1, // Infinite repeats
        yoyo: true, // Go back and forth
        delay: index * 0.3 // Staggered start times
      });
      
      // Add subtle rotation for more dynamic movement
      gsap.to(card, {
        rotation: index % 2 === 0 ? 1 : -1, // Alternate rotation direction
        duration: 2 + (index * 0.3),
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
        delay: index * 0.2
      });
      
      // No hover effects as requested
    });
    
    // Cleanup function
    return () => {
      cards.forEach(card => {
        if (card) {
          gsap.killTweensOf(card); // Kill all animations on cleanup
        }
      });
    };
  }, []);
  return (
    <section id="hero" className="bg-[#F6FAFF]">
      <div className="container mx-auto px-6 py-20">
        {/* Heading & Description */}
        <div className="text-center mb-12">
          <h1 ref={headingRef} className="text-6xl md:text-7xl font-extrabold leading-tight text-[#0B1B32]">
            Your
            <span className="text-[#8AA8CF]"> Laundry, </span>
            Our
            <br />
            Spin Perfection
          </h1>
          <p ref={subheadingRef} className="mt-6 text-[#26415E] max-w-2xl mx-auto text-lg">
            Professional laundry services that fit your schedule. Drop off dirty, pick up perfect every single time. 
            We know life gets messy, but your clothes don't have to stay that way. Our passionate team treats every 
            garment with premium care, giving you back precious hours to spend on what truly matters.
          </p>
          <a 
            href="https://wa.me/923124205243" 
            target="_blank" 
            rel="noopener noreferrer"
            ref={buttonRef} 
            className="mt-8 px-8 py-3 bg-[#0D1E4C] text-white rounded-[50px] hover:bg-[#26415E] transition text-lg font-semibold inline-block"
          >
            Contact Us
          </a>
        </div>

        {/* Main content with image and cards */}
        <div className="flex flex-col lg:flex-row items-center justify-center gap-8 relative">
          {/* Left side cards */}
          <div className="flex flex-col gap-6 z-10 lg:mr-[-30px]">
            {/* Card 1: Pakistan's First Self Service Laundromat - positioned more to the right */}
            <div ref={card1Ref} className="bg-[#4A7AFF] text-white p-5 rounded-2xl shadow-lg max-w-xs ml-8 lg:ml-12">
              <div className="flex items-center">
                <div className="bg-white/20 w-12 h-12 rounded-full flex items-center justify-center">
                  <Award className="w-6 h-6" />
                </div>
                <div className="ml-4 flex-1 mr-6">
                  <h3 className="text-lg font-bold">Pakistan's First</h3>
                  <p className="text-sm">Self Service Laundromat</p>
                </div>
                <div className="w-10 h-10 rounded-full border-2 border-white flex items-center justify-center">
                  <span className="text-xs font-bold">1</span>
                </div>
              </div>
            </div>
            
            {/* Card 2: Dry to Dry in 1 Hour */}
            <div ref={card2Ref} className="bg-[#4A7AFF] text-white p-5 rounded-2xl shadow-lg max-w-xs">
              <div className="flex items-center">
                <div className="bg-white/20 w-12 h-12 rounded-full flex items-center justify-center">
                  <Clock className="w-6 h-6" />
                </div>
                <div className="ml-4 flex-1 mr-6">
                  <h3 className="text-lg font-bold">Dry to Dry</h3>
                  <p className="text-sm">in 1 Hour</p>
                </div>
                <div className="w-10 h-10 rounded-full border-2 border-white flex items-center justify-center">
                  <span className="text-xs font-bold">2</span>
                </div>
              </div>
            </div>
          </div>

          {/* Center image */}
          <div className="relative">
            <div ref={imageRef}>
              <Image
                src="/hero/laundry.webp"
                alt="Laundry Hero"
                width={600}
                height={600}
                className="rounded-2xl"
              />
            </div>
          </div>

          {/* Right side cards */}
          <div className="flex flex-col gap-6 z-10 lg:ml-[-30px]">
            {/* Card 3: Hassle Free Experience - positioned more to the left */}
            <div ref={card3Ref} className="bg-[#4A7AFF] text-white p-5 rounded-2xl shadow-lg max-w-xs mr-8 lg:mr-12">
              <div className="flex items-center">
                <div className="bg-white/20 w-12 h-12 rounded-full flex items-center justify-center">
                  <ThumbsUp className="w-6 h-6" />
                </div>
                <div className="ml-4 flex-1 mr-6">
                  <h3 className="text-lg font-bold">Hassle Free</h3>
                  <p className="text-sm">Experience</p>
                </div>
                <div className="w-10 h-10 rounded-full border-2 border-white flex items-center justify-center">
                  <span className="text-xs font-bold">3</span>
                </div>
              </div>
            </div>
            
            {/* Card 4: Premium Care for Every Fabric */}
            <div ref={card4Ref} className="bg-[#4A7AFF] text-white p-5 rounded-2xl shadow-lg max-w-xs">
              <div className="flex items-center">
                <div className="bg-white/20 w-12 h-12 rounded-full flex items-center justify-center">
                  <Shirt className="w-6 h-6" />
                </div>
                <div className="ml-4 flex-1 mr-6">
                  <h3 className="text-lg font-bold">Premium Care</h3>
                  <p className="text-sm">for Every Fabric</p>
                </div>
                <div className="w-10 h-10 rounded-full border-2 border-white flex items-center justify-center">
                  <span className="text-xs font-bold">4</span>
                </div>
              </div>
            </div>
            
            {/* Card 5: 4.9★ Rated on Google - positioned even more to the left */}
            <div ref={card5Ref} className="bg-[#4A7AFF] text-white p-5 rounded-2xl shadow-lg max-w-xs mr-12 lg:mr-20">
              <div className="flex items-center">
                <div className="bg-white/20 w-12 h-12 rounded-full flex items-center justify-center">
                  <Star className="w-6 h-6" />
                </div>
                <div className="ml-4 flex-1 mr-6">
                  <h3 className="text-lg font-bold">4.9★ Rated</h3>
                  <p className="text-sm">on Google</p>
                </div>
                <div className="w-10 h-10 rounded-full border-2 border-white flex items-center justify-center">
                  <span className="text-xs font-bold">5</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
