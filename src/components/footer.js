"use client";

import React from 'react';
import { Facebook, Instagram, MessageCircle } from 'lucide-react';
import Image from 'next/image';

const footer = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-white relative overflow-hidden py-8 flex justify-center">
      {/* Blue capsule containing all content */}
      <div className="bg-[#38A5F4] w-[90%] rounded-[40px] py-12 px-6 relative z-10 text-white shadow-xl">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            {/* Left side with logo */}
            <div className="flex flex-col items-center md:items-start">
              <div className="relative w-24 h-24 rounded-full overflow-hidden border-4 border-white mb-4">
                <Image 
                  src="/logo.png" 
                  alt="Company Logo" 
                  fill
                  className="object-contain"
                  style={{ objectPosition: 'center' }}
                />
              </div>
              <h3 className="text-xl font-bold mb-2 text-white">Self Service Laundromat</h3>
              <p className="text-white/80 max-w-xs text-center md:text-left">Your trusted partner for self-service laundry solutions.</p>
            </div>
            
            {/* Center with navigation links */}
            <div className="flex flex-col items-center">
              <h4 className="font-bold text-lg mb-4 text-white">Quick Links</h4>
              <nav className="flex flex-col space-y-2">
                <button onClick={() => scrollToSection('hero')} className="text-white hover:text-white/70 transition-colors">Home</button>
                <button onClick={() => scrollToSection('services')} className="text-white hover:text-white/70 transition-colors">Services</button>
                <button onClick={() => scrollToSection('howitworks')} className="text-white hover:text-white/70 transition-colors">How It Works</button>
                <button onClick={() => scrollToSection('testimonials')} className="text-white hover:text-white/70 transition-colors">Testimonials</button>
                <button onClick={() => scrollToSection('faq')} className="text-white hover:text-white/70 transition-colors">FAQ</button>
              </nav>
            </div>
            
            {/* Right side with image */}
            <div className="relative w-full md:w-80 h-64 overflow-hidden">
              <Image 
                src="/footer.png" 
                alt="Footer Image" 
                fill
                className="object-contain rounded-lg"
                style={{ objectPosition: 'center bottom' }}
              />
            </div>
          </div>
          
          {/* Social icons and copyright */}
          <div className="mt-12 pt-8 border-t border-white/20 flex flex-col md:flex-row justify-between items-center">
            <p className="text-white/90 mb-4 md:mb-0">Copyright © 2025 Self Service Laundromat. All Rights Reserved</p>
            
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-[#38A5F4] hover:bg-white/80 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-[#38A5F4] hover:bg-white/80 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-[#38A5F4] hover:bg-white/80 transition-colors">
                <MessageCircle size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default footer;