// components/Hero.js
import Image from "next/image";
import { Clock, Star, Award, Sparkles, ThumbsUp, Shirt } from "lucide-react";

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
            Professional laundry services that fit your schedule. Drop off dirty, pick up perfect every single time. 
            We know life gets messy, but your clothes don't have to stay that way. Our passionate team treats every 
            garment with premium care, giving you back precious hours to spend on what truly matters.
          </p>
          <button className="mt-8 px-8 py-3 bg-[#0D1E4C] text-white rounded-[50px] hover:bg-[#26415E] transition text-lg font-semibold">
            Contact Us
          </button>
        </div>

        {/* Main content with image and cards */}
        <div className="flex flex-col lg:flex-row items-center justify-center gap-8 relative">
          {/* Left side cards */}
          <div className="flex flex-col gap-6 z-10 lg:mr-[-30px]">
            {/* Card 1: Pakistan's First Self Service Laundromat - positioned more to the right */}
            <div className="bg-[#4A7AFF] text-white p-5 rounded-2xl shadow-lg max-w-xs ml-8 lg:ml-12">
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
            <div className="bg-[#4A7AFF] text-white p-5 rounded-2xl shadow-lg max-w-xs">
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
            {/* Card 3: Hassle Free Experience - positioned more to the left */}
            <div className="bg-[#4A7AFF] text-white p-5 rounded-2xl shadow-lg max-w-xs mr-8 lg:mr-12">
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
            <div className="bg-[#4A7AFF] text-white p-5 rounded-2xl shadow-lg max-w-xs">
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
            <div className="bg-[#4A7AFF] text-white p-5 rounded-2xl shadow-lg max-w-xs mr-12 lg:mr-20">
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
