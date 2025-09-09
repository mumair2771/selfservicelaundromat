'use client';
import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect, useRef } from 'react';

export default function Navbar() {
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
            <Link 
              href="/" 
              className="w-[86px] h-10 flex items-center justify-center text-base tracking-tighter text-[#F4F3F0] font-normal leading-6 rounded-[24px] hover:bg-[#ffffff09] transition-colors"
            >
              Home
            </Link>
            <Link 
              href="/about" 
              className="w-[86px] h-10 flex items-center justify-center text-base tracking-tighter text-[#F4F3F0] font-normal leading-6 rounded-[24px] hover:bg-[#ffffff09] transition-colors"
            >
              About
            </Link>
            <Link 
              href="/services" 
              className="w-[86px] h-10 flex items-center justify-center text-base tracking-tighter text-[#F4F3F0] font-normal leading-6 rounded-[24px] hover:bg-[#ffffff09] transition-colors"
            >
              Services
            </Link>
            <Link 
              href="/contact" 
              className="w-[86px] h-10 flex items-center justify-center text-base tracking-tighter text-[#F4F3F0] font-normal leading-6 rounded-[24px] hover:bg-[#ffffff09] transition-colors"
            >
              Contact
            </Link>
          </div>
          
          {/* Desktop Book Now Button */}
          <div className="hidden md:block">
            <Link 
              href="/contact" 
              className="inline-flex items-center justify-center h-10 px-6 text-base tracking-tighter font-normal leading-6 text-[#171824] bg-[#FAF6E9] rounded-[24px] hover:bg-[#fefefe] transition-colors"
            >
              Contact Us
            </Link>
          </div>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden flex items-center justify-center h-10 px-4 bg-[#FAF6E9] rounded-[24px] hover:bg-[#fefefe] transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? "Close" : "Menu"}
          </button>
        </div>
      
        {/* Mobile Menu Dropdown */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-[80px] left-4 right-4 bg-[#0D1E4C] rounded-[24px] p-4 z-40 shadow-lg">
            <div className="flex flex-col space-y-4">
              <Link 
                href="/" 
                className="w-full h-10 flex items-center justify-center text-base tracking-tighter text-[#F4F3F0] font-normal leading-6 rounded-[24px] hover:bg-[#ffffff09] transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                href="/about" 
                className="w-full h-10 flex items-center justify-center text-base tracking-tighter text-[#F4F3F0] font-normal leading-6 rounded-[24px] hover:bg-[#ffffff09] transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link 
                href="/services" 
                className="w-full h-10 flex items-center justify-center text-base tracking-tighter text-[#F4F3F0] font-normal leading-6 rounded-[24px] hover:bg-[#ffffff09] transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </Link>
              <Link 
                href="/contact" 
                className="w-full h-10 flex items-center justify-center text-base tracking-tighter text-[#F4F3F0] font-normal leading-6 rounded-[24px] hover:bg-[#ffffff09] transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
              <Link 
                href="/contact" 
                className="w-full h-10 flex items-center justify-center text-base tracking-tighter font-normal leading-6 text-[#171824] bg-[#FAF6E9] rounded-[24px] hover:bg-[#fefefe] transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact Us
              </Link>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
}