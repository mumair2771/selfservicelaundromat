"use client";
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

/**
 * FadeInElement - A reusable component that adds fade-in animation to any element
 * 
 * @param {Object} props
 * @param {React.ReactNode} props.children - The content to be animated
 * @param {string} props.direction - Direction of animation: 'up', 'down', 'left', 'right' (default: 'up')
 * @param {number} props.distance - Distance to animate from in pixels (default: 50)
 * @param {number} props.duration - Animation duration in seconds (default: 0.8)
 * @param {number} props.delay - Delay before animation starts in seconds (default: 0)
 * @param {string} props.ease - GSAP easing function (default: 'power2.out')
 * @param {string} props.threshold - Trigger position as percentage (default: '20%')
 * @param {string} props.className - Additional CSS classes
 */
export default function FadeInElement({
  children,
  direction = 'up',
  distance = 50,
  duration = 0.8,
  delay = 0,
  ease = 'power2.out',
  threshold = '20%',
  className = '',
}) {
  const elementRef = useRef(null);
  
  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;
    
    // Set initial state based on direction
    let initialProps = { opacity: 0 };
    
    switch (direction) {
      case 'up':
        initialProps.y = distance;
        break;
      case 'down':
        initialProps.y = -distance;
        break;
      case 'left':
        initialProps.x = distance;
        break;
      case 'right':
        initialProps.x = -distance;
        break;
      default:
        initialProps.y = distance;
    }
    
    // Set initial state
    gsap.set(element, initialProps);
    
    // Create animation
    const animation = gsap.timeline({
      scrollTrigger: {
        trigger: element,
        start: `top bottom-=${threshold}`,
        toggleActions: 'play none none none',
        once: true
      }
    });
    
    // Animate to final state
    animation.to(element, {
      opacity: 1,
      x: 0,
      y: 0,
      duration,
      delay,
      ease,
    });
    
    // Cleanup
    return () => {
      if (animation.scrollTrigger) {
        animation.scrollTrigger.kill();
      }
      animation.kill();
    };
  }, [direction, distance, duration, delay, ease, threshold]);
  
  return (
    <div ref={elementRef} className={className}>
      {children}
    </div>
  );
}
