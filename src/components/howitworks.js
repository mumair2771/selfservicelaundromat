import React from 'react';
import { Cloud, Truck, Shirt } from 'lucide-react';

export default function HowItWorks() {
  const stats = [
    { number: "547+", label: "Laundry Done" },
    { number: "324+", label: "Clothes Cleaned" },
    { number: "145+", label: "Daily Washes" },
    { number: "4.9+", label: "Years Experience" },
  ];

  const features = [
    {
      icon: <Cloud className="w-8 h-8 text-blue-400" />,
      title: "1. Prepare all your clothes",
      desc: "Tellus dui dictumst laoreet netus consectetur blandit volutpat nunc. Gravida volutpat pharetra sem neque.",
    },
    {
      icon: <Truck className="w-8 h-8 text-blue-400" />,
      title: "2. We'll pick up your clothes",
      desc: "Volutpat convallis vestibulum odio arcu tempor, elit ultrices. Non lorem aenean posuere sed netus purus.",
    },
    {
      icon: <Shirt className="w-8 h-8 text-blue-400" />,
      title: "3. Have them back the next day",
      desc: "Aenean dolor blandit morbi nec felis felis lacus. Dapibus neque, aliquet amet, tortor imperdiet. Nulla eu mauris.",
    },
  ];

  return (
    <div className="relative bg-white py-32">
      {/* Counter Section - Positioned Absolutely */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-5xl px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((item, i) => (
            <div key={i} className="bg-[#0D1E4C] rounded-2xl shadow-lg p-6 text-center text-white">
              <p className="text-2xl md:text-3xl font-bold text-white">{item.number}</p>
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
                src="/bg-1.webp" 
                alt="Laundry service" 
                className="w-full h-full object-cover rounded-2xl"
              />
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="lg:pl-8">
            {/* Header */}
            <div className="mb-12">
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-4 leading-tight">
                We offer you high-quality{' '}
                <span className="text-blue-500">laundry pickup</span>
                {' '}&{' '}
                <span className="text-blue-500">delivery</span> services
              </h1>
            </div>

            {/* Features List */}
            <div className="space-y-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-4">
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
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}