"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Phone,
  Mail,
  Clock,
  MapPin,
  Instagram,
  Facebook,
  MessageCircle,
  Menu,
  X,
} from "lucide-react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full">
      {/* Top Banner */}
      <div className="bg-[#0D1E4C] text-white text-sm py-2 px-8 flex flex-wrap justify-between items-center gap-4">
        {/* Left side: Phone + Email */}
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2">
            <Phone className="w-4 h-4" />
            <span>(323) 238-0682</span>
          </div>
          <div className="flex items-center gap-2">
            <Mail className="w-4 h-4" />
            <span>contact@laundry.com</span>
          </div>
        </div>

        {/* Right side: Time */}
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4" />
            <span>Mon - Fri: 5:00AM - 8:00PM</span>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className="bg-white shadow-md py-4 px-10 flex justify-between items-center relative">
        {/* Logo & Text */}
        <div className="flex items-center gap-4">
          <Image src="/logo.png" alt="Logo" width={60} height={60} />
          <h1 className="font-bold text-xl leading-tight text-[#38A5F4]">
            Self Service <br /> Laundrymat
          </h1>
        </div>

        {/* Desktop Links */}
        <ul className="hidden md:flex gap-10 font-medium px-6">
          <li>
            <Link href="#" className="text-[#0B1B32] hover:text-[#38A5F4]">Home</Link>
          </li>
          <li>
            <Link href="#" className="text-[#0B1B32] hover:text-[#38A5F4]">About</Link>
          </li>
          <li>
            <Link href="#" className="text-[#0B1B32] hover:text-[#38A5F4]">Services</Link>
          </li>
          <li>
            <Link href="#" className="text-[#0B1B32] hover:text-[#38A5F4]">Contact</Link>
          </li>
        </ul>

        {/* Social Icons (Desktop) */}
        <div className="hidden md:flex gap-5 text-xl text-[#38A5F4]">
          <MessageCircle className="w-6 h-6 cursor-pointer hover:scale-110 transition" />
          <Instagram className="w-6 h-6 cursor-pointer hover:scale-110 transition" />
          <Facebook className="w-6 h-6 cursor-pointer hover:scale-110 transition" />
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-2xl text-[#38A5F4]"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="absolute top-full left-0 w-full bg-white shadow-md py-6 flex flex-col items-center gap-6 z-50 md:hidden">
            <ul className="flex flex-col gap-4 font-medium text-lg">
              <li>
                <Link href="#" className="text-[#0B1B32] hover:text-[#38A5F4]">Home</Link>
              </li>
              <li>
                <Link href="#" className="text-[#0B1B32] hover:text-[#38A5F4]">About</Link>
              </li>
              <li>
                <Link href="#" className="text-[#0B1B32] hover:text-[#38A5F4]">Services</Link>
              </li>
              <li>
                <Link href="#" className="text-[#0B1B32] hover:text-[#38A5F4]">Contact</Link>
              </li>
            </ul>
            <div className="flex gap-6 text-2xl text-[#38A5F4]">
              <MessageCircle className="w-6 h-6 cursor-pointer hover:scale-110 transition" />
              <Instagram className="w-6 h-6 cursor-pointer hover:scale-110 transition" />
              <Facebook className="w-6 h-6 cursor-pointer hover:scale-110 transition" />
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}