'use client';
import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect, useRef } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  // Function to scroll to section
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    // Close mobile menu if open
    setIsMenuOpen(false);
  };
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const menuRef = useRef(null);

  // Close menu when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    }
    
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Control navbar visibility based on scroll direction
  useEffect(() => {
    const controlNavbar = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY > lastScrollY) {
        // Scrolling down
        setVisible(false);
      } else {
        // Scrolling up
        setVisible(true);
      }
      
      // Update scroll position
      setLastScrollY(currentScrollY);
    };
    
    window.addEventListener('scroll', controlNavbar);
    
    // Cleanup
    return () => {
      window.removeEventListener('scroll', controlNavbar);
    };
  }, [lastScrollY]);

  return (
    <div className="relative" ref={menuRef}>
      <nav className={`fixed w-full z-50 flex justify-center items-center px-4 py-3 transition-transform duration-300 ${visible ? 'translate-y-0' : '-translate-y-full'}`}>
        <div className="flex justify-between items-center w-full max-w-[1200px] h-[64px] bg-[#0D1E4C] rounded-[64px] px-4">
          {/* Logo - always visible */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center text-[20px] tracking-tighter text-[#F4F3F0] leading-6">
              <Image 
                src="/logo.png" 
                alt="Self Service Laundrymat Logo" 
                width={42} 
                height={42} 
                className="mr-1 rounded-full" 
              />
              Self Service Laundromat
            </Link>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center space-x-2">
            <button 
              onClick={() => scrollToSection('hero')} 
              className="w-[86px] h-10 flex items-center justify-center text-base tracking-tighter text-[#F4F3F0] font-normal leading-6 rounded-[24px] hover:bg-[#ffffff09] transition-colors"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('about')} 
              className="w-[86px] h-10 flex items-center justify-center text-base tracking-tighter text-[#F4F3F0] font-normal leading-6 rounded-[24px] hover:bg-[#ffffff09] transition-colors"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('services')} 
              className="w-[86px] h-10 flex items-center justify-center text-base tracking-tighter text-[#F4F3F0] font-normal leading-6 rounded-[24px] hover:bg-[#ffffff09] transition-colors"
            >
              Services
            </button>
            <button 
              onClick={() => scrollToSection('contact')} 
              className="w-[86px] h-10 flex items-center justify-center text-base tracking-tighter text-[#F4F3F0] font-normal leading-6 rounded-[24px] hover:bg-[#ffffff09] transition-colors"
            >
              Contact
            </button>
          </div>
          
          {/* Desktop Book Now Button */}
          <div className="hidden md:block">
            <a 
              href="https://wa.me/923124205243" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center h-10 px-6 text-base tracking-tighter font-normal leading-6 text-[#171824] bg-[#FAF6E9] rounded-[24px] hover:bg-[#fefefe] transition-colors"
            >
              Contact Us
            </a>
          </div>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden flex items-center justify-center h-10 w-10 bg-[#FAF6E9] rounded-full hover:bg-[#fefefe] transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} className="text-[#0D1E4C]" /> : <Menu size={24} className="text-[#0D1E4C]" />}
          </button>
        </div>
      
        {/* Mobile Menu Dropdown */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-[80px] left-4 right-4 bg-[#0D1E4C] rounded-[24px] p-4 z-40 shadow-lg">
            <div className="flex flex-col space-y-4">
              <button 
                onClick={() => scrollToSection('hero')} 
                className="w-full h-10 flex items-center justify-center text-base tracking-tighter text-[#F4F3F0] font-normal leading-6 rounded-[24px] hover:bg-[#ffffff09] transition-colors"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('about')} 
                className="w-full h-10 flex items-center justify-center text-base tracking-tighter text-[#F4F3F0] font-normal leading-6 rounded-[24px] hover:bg-[#ffffff09] transition-colors"
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection('services')} 
                className="w-full h-10 flex items-center justify-center text-base tracking-tighter text-[#F4F3F0] font-normal leading-6 rounded-[24px] hover:bg-[#ffffff09] transition-colors"
              >
                Services
              </button>
              <button 
                onClick={() => scrollToSection('contact')} 
                className="w-full h-10 flex items-center justify-center text-base tracking-tighter text-[#F4F3F0] font-normal leading-6 rounded-[24px] hover:bg-[#ffffff09] transition-colors"
              >
                Contact
              </button>
              <a 
                href="https://wa.me/923124205243" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full h-10 flex items-center justify-center text-base tracking-tighter font-normal leading-6 text-[#171824] bg-[#FAF6E9] rounded-[24px] hover:bg-[#fefefe] transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact Us
              </a>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
}