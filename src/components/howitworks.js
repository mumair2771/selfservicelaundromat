"use client"
import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Cloud, Truck, Shirt } from 'lucide-react';
import FadeInElement from './FadeInElement';

export default function HowItWorks() {
  // Register ScrollTrigger plugin
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
  }, []);
  
  // Refs for counter elements
  const counterSectionRef = useRef(null);
  const counterRefs = useRef([]);
  
  // State to store the displayed counter values
  const [counterValues, setCounterValues] = useState([
    "0", "0", "0", "0%"
  ]);
  // Original target values for counters
  const stats = [
    { number: "9000+", label: "Items Cleaned" },  
    { number: "2000+", label: "Happy Customers" },
    { number: "4+", label: "Years of Excellence" },
    { number: "99%", label: "Customer Satisfaction" },
  ];

  const features = [
    {
      icon: <Cloud className="w-8 h-8 text-blue-400" />,
      title: "1. Bring your clothes",
      desc: "Drop them off at our laundromat or send them through a rider, whatever's easiest for you.",
    },
    {
      icon: <Truck className="w-8 h-8 text-blue-400" />,
      title: "2. Let the machines do the magic",
      desc: "Our high-tech automated washers and dryers, combined with premium detergents, give your clothes a deep clean and gentle care.",
    },
    {
      icon: <Shirt className="w-8 h-8 text-blue-400" />,
      title: "3. Pick them up hassle-free",
      desc: "In just one hour, your laundry is fresh, dry, and ready to wear, no waiting for days.",
    },
    {
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-blue-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="5" width="20" height="14" rx="2" /><line x1="2" y1="10" x2="22" y2="10" /></svg>,
      title: "4. Pay your way",
      desc: "Cash or online transfer, whatever works for you. No worries, no complications.",
    },
  ];

  // Counter animation function
  const animateCounters = () => {
    // Parse the target values
    const targetValues = stats.map(stat => {
      const value = stat.number.replace(/[^0-9]/g, '');
      return parseInt(value, 10);
    });
    
    // Create animations for each counter
    counterRefs.current.forEach((counter, index) => {
      let startValue = 0;
      let endValue = targetValues[index];
      let duration = 2.5; // Animation duration in seconds
      let suffix = stats[index].number.includes('%') ? '%' : '+';
      
      // Create a proxy object for GSAP to animate
      let obj = { value: startValue };
      
      // Create the tween
      gsap.to(obj, {
        value: endValue,
        duration: duration,
        ease: "power2.out",
        onUpdate: () => {
          // Update the state with the current value
          setCounterValues(prev => {
            const newValues = [...prev];
            newValues[index] = Math.round(obj.value) + suffix;
            return newValues;
          });
        }
      });
    });
  };
  
  // Set up ScrollTrigger
  useEffect(() => {
    if (!counterSectionRef.current) return;
    
    // Create the scroll trigger
    const trigger = ScrollTrigger.create({
      trigger: counterSectionRef.current,
      start: "top 80%", // Trigger when the top of the section hits 80% from the top of the viewport
      onEnter: () => animateCounters(),
      once: true // Only trigger once
    });
    
    // Cleanup
    return () => {
      if (trigger) trigger.kill();
    };
  }, []);
  
  return (
    <div className="relative bg-white py-32">
      {/* Counter Section - Positioned Absolutely */}
      <div 
        ref={counterSectionRef}
        className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-5xl px-4"
      >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((item, i) => (
            <div key={i} className="bg-[#0D1E4C] rounded-2xl shadow-lg p-6 text-center text-white">
              <p 
                ref={el => counterRefs.current[i] = el}
                className="text-2xl md:text-3xl font-bold text-white"
              >
                {counterValues[i]}
              </p>
              <p className="text-white text-sm md:text-base mt-1">{item.label}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 pt-16">
        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-stretch">
          {/* Left Side - Image */}
          <div className="relative">
            <div className="rounded-3xl h-full flex items-center justify-center overflow-hidden">
              <img 
                src="/bg-1.jpeg" 
                alt="Laundry service" 
                className="w-full h-full object-cover rounded-2xl"
              />
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="lg:pl-8">
            {/* Header */}
            <div className="mb-12">
              <FadeInElement>
                <h1 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-4 leading-tight">
                  How our <span className="text-blue-500">self-service</span>{' '}
                  laundromat{' '}
                  <span className="text-blue-500">works</span>
                </h1>
              </FadeInElement>
            </div>

            {/* Features List */}
            <div className="space-y-8">
              {features.map((feature, index) => (
                <FadeInElement key={index} delay={index * 0.2} distance={30}>
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center border border-blue-100">
                      {feature.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-800 mb-2">
                        {feature.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {feature.desc}
                      </p>
                    </div>
                  </div>
                </FadeInElement>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}