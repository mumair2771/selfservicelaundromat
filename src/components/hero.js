// components/Hero.js
import Image from "next/image";
import { Clock, Star } from "lucide-react";

export default function Hero() {
  return (
    <section className="bg-[#F6FAFF]">
      <div className="container mx-auto px-6 py-20">
        {/* Heading & Description */}
        <div className="text-center mb-12">
          <h1 className="text-6xl md:text-7xl font-extrabold leading-tight text-[#0B1B32]">
            Your
            <span className="text-[#8AA8CF]"> Laundry, </span>
            Our
            <br />
            Spin Perfection
          </h1>
          <p className="mt-6 text-[#26415E] max-w-2xl mx-auto text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
            exercitation ullamco.
          </p>
          <button className="mt-8 px-8 py-3 bg-[#0D1E4C] text-white rounded-[50px] hover:bg-[#26415E] transition text-lg font-semibold">
            Contact Us
          </button>
        </div>

        {/* Main content with image and cards */}
        <div className="flex flex-col lg:flex-row items-center justify-center gap-4 relative">
          {/* Left side cards */}
          <div className="flex flex-col gap-6 z-10 lg:mr-[-30px]">
            {/* Blue card with clock */}
            <div className="bg-[#4A7AFF] text-white p-6 rounded-2xl shadow-lg max-w-xs">
              <div className="bg-white/20 w-12 h-12 rounded-full flex items-center justify-center mb-3">
                <Clock className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold">Only One Hours</h3>
              <p className="text-sm">Express Laundry Service</p>
            </div>
          </div>

          {/* Center image */}
          <div className="relative">
            <Image
              src="/hero/laundry.webp"
              alt="Laundry Hero"
              width={600}
              height={600}
              className="rounded-2xl"
            />
          </div>

          {/* Right side cards */}
          <div className="flex flex-col gap-6 z-10 lg:ml-[-30px]">
            {/* Rating card */}
            <div className="bg-white p-4 rounded-2xl shadow-lg" style={{ width: '280px' }}>
              <div className="rounded-lg overflow-hidden mb-3">
                <Image
                  src="/hero/rating.jpg" 
                  alt="Laundry Service"
                  width={280}
                  height={140}
                  className="object-cover"
                />
              </div>
              <div className="flex items-center">
                <div className="flex text-[#FFC107]">
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current stroke-current" />
                </div>
                <span className="ml-2 text-sm font-medium">(4.9/5)</span>
              </div>
            </div>
            
            {/* Blue counter card */}
            <div className="bg-[#4A7AFF] text-white p-6 rounded-2xl shadow-lg max-w-xs">
              <div className="bg-white/20 w-12 h-12 rounded-full flex items-center justify-center mb-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20.38 3.46 16 2a4 4 0 0 1-8 0L3.62 3.46a2 2 0 0 0-1.34 2.23l.58 3.47a1 1 0 0 0 .99.84H6v10c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V10h2.15a1 1 0 0 0 .99-.84l.58-3.47a2 2 0 0 0-1.34-2.23z"/></svg>
              </div>
              <h3 className="text-2xl font-bold">100K+</h3>
              <p className="text-sm">Cloths Spinned to Perfection</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
