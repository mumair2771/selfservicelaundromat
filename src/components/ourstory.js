"use client";
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import FadeInElement from './FadeInElement';

export default function OurStory() {
  // Register ScrollTrigger plugin
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
  }, []);
  
  // Create refs for timeline elements
  const timelineRef = useRef(null);
  const progressRef = useRef(null);
  const sectionRef = useRef(null);
  const cardRefs = useRef([]);
  const circleRefs = useRef([]);
  // Timeline data
  const timelineEvents = [
    {
      year: "2021",
      location: "Gulberg Lahore"
    },
    {
      year: "2024",
      location: "Johar Town Lahore"
    },
    {
      year: "2025",
      location: "Quaid e Azam University Islamabad"
    }
  ];

  // Initialize animations when component mounts
  useEffect(() => {
    const timeline = timelineRef.current;
    const progress = progressRef.current;
    const cards = cardRefs.current;
    const circles = circleRefs.current;
    
    if (!timeline || !progress || cards.length === 0 || circles.length === 0) return;
    
    // Set initial states
    gsap.set(cards, { opacity: 0, y: 50 });
    gsap.set(circles, { scale: 0.5, opacity: 0 });
    gsap.set(progress, { height: 0 });
    
    // Create main timeline
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 70%",
        end: "bottom 20%",
        scrub: true,
        toggleActions: "play none none reverse"
      }
    });
    
    // Animate the progress line
    tl.to(progress, {
      height: "100%",
      duration: 1,
      ease: "none"
    }, 0);
    
    // Animate each timeline item
    cards.forEach((card, index) => {
      // Stagger the animations
      tl.to(circles[index], {
        scale: 1,
        opacity: 1,
        duration: 0.3,
        ease: "back.out(1.7)"
      }, index * 0.2);
      
      tl.to(card, {
        opacity: 1,
        y: 0,
        duration: 0.5,
        ease: "power2.out"
      }, index * 0.2 + 0.1);
    });
    
    // Cleanup function
    return () => {
      if (tl.scrollTrigger) {
        tl.scrollTrigger.kill();
      }
      tl.kill();
    };
  }, []);
  
  return (
    <section id="about" ref={sectionRef} className="py-20 bg-white relative">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <FadeInElement>
              <h2 className="text-5xl font-bold leading-tight">
                <span className="text-[#0B1B32]">Solving Laundry </span>
                <span className="text-[#8AA8CF]">Problems</span>
                <span className="text-[#0B1B32]"> One Load at A Time</span>
              </h2>
            </FadeInElement>
          </div>

          {/* Story and Timeline */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left side - Story */}
            <div className="prose prose-lg max-w-none text-[#26415E]">
              <FadeInElement direction="left" distance={40}>
                <p className="mb-6">
                  Who would've thought that frustration with dirty clothes and endless waiting could spark Pakistan's first self-service laundromat revolution?
                </p>
              </FadeInElement>
              <FadeInElement direction="left" distance={40} delay={0.2}>
                <p className="mb-6">
                  It all started with a simple observation in Lahore—people were stuck with traditional laundromats offering poor service, long waiting times, unhygienic conditions, and inconvenient hours that didn't work for busy professionals or students. There had to be a better way.
                </p>
              </FadeInElement>
              <FadeInElement direction="left" distance={40} delay={0.4}>
                <p className="mb-6">
                  In 2021, we opened our doors in Main Market Gulberg with Pakistan's first self-service laundromat. At first, nobody really noticed. The concept was new, unfamiliar. But slowly, our high-tech automated machines and hassle-free approach started getting validation.
                </p>
              </FadeInElement>
              <FadeInElement direction="left" distance={40} delay={0.6}>
                <p className="mb-6">
                  Each customer who gave us a chance helped us reach this point—you all became our family. As demand grew from customers traveling from Johar Town, we expanded to PIA Road, thanks to the trust and support of our extended family.
                </p>
              </FadeInElement>
              <FadeInElement direction="left" distance={40} delay={0.8}>
                <p className="mb-6">
                  Now in 2025, we're bringing our proven concept to Islamabad, starting with Quaid-e-Azam University. Our mission remains the same: maintaining high standards while reaching more places where busy people need convenient, quality laundry solutions.
                </p>
              </FadeInElement>
              <FadeInElement direction="left" distance={40} delay={1}>
                <p className="font-medium">
                  Warmly,<br />
                  Self Service Laundromat Family
                </p>
              </FadeInElement>
            </div>

            {/* Right side - Timeline */}
            <div className="relative min-h-[600px] flex items-center">
              {/* Timeline container */}
              <div ref={timelineRef} className="relative w-full h-full py-12">
                {/* Vertical timeline line background */}
                <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-2 bg-gray-100 rounded-full"></div>
                
                {/* Animated progress line */}
                <div 
                  ref={progressRef} 
                  className="absolute left-1/2 transform -translate-x-1/2 top-0 w-2 bg-[#4A7AFF] rounded-full"
                  style={{ height: 0 }}
                ></div>
                
                {/* Timeline events */}
                <div className="relative">
                  {timelineEvents.map((event, index) => (
                    <div 
                      key={index} 
                      className={`flex items-center ${index !== 0 ? 'mt-32' : ''} relative`}
                    >
                      {/* Circle marker on timeline */}
                      <div 
                        ref={el => circleRefs.current[index] = el}
                        className="absolute left-1/2 transform -translate-x-1/2 w-12 h-12 bg-[#4A7AFF] text-white font-bold text-lg rounded-full border-4 border-white shadow-lg flex items-center justify-center z-10"
                      >
                        {index + 1}
                      </div>
                      
                      {/* Card - alternating sides */}
                      <div 
                        ref={el => cardRefs.current[index] = el}
                        className={`w-5/12 ${index % 2 === 0 ? 'ml-auto pl-12' : 'mr-auto pr-12 text-right'}`}
                      >
                        {/* Content card with enhanced styling */}
                        <div className="bg-white rounded-xl shadow-lg p-6 border border-blue-100 hover:shadow-xl transition-shadow duration-300">
                          <div className="uppercase tracking-wide text-sm text-[#4A7AFF] font-bold">{event.year}</div>
                          <h3 className="text-2xl font-bold text-[#0B1B32] mt-2">{event.location}</h3>
                          
                          {/* Decorative element */}
                          <div className="mt-4 w-12 h-1 bg-[#4A7AFF] rounded-full"></div>
                        </div>
                        
                        {/* Connector line */}
                        <div 
                          className={`absolute top-1/2 transform -translate-y-1/2 ${index % 2 === 0 ? 'right-full' : 'left-full'} w-12 h-2 bg-[#4A7AFF]`}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
