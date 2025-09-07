import React from 'react';

export default function OurStory() {
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

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold leading-tight">
              <span className="text-[#0B1B32]">Solving Laundry </span>
              <span className="text-[#8AA8CF]">Problems</span>
              <span className="text-[#0B1B32]"> One Load at A Time</span>
            </h2>
          </div>

          {/* Story and Timeline */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left side - Story */}
            <div className="prose prose-lg max-w-none text-[#26415E]">
              <p className="mb-6">
                Who would've thought that frustration with dirty clothes and endless waiting could spark Pakistan's first self-service laundromat revolution?
              </p>
              <p className="mb-6">
                It all started with a simple observation in Lahore—people were stuck with traditional laundromats offering poor service, long waiting times, unhygienic conditions, and inconvenient hours that didn't work for busy professionals or students. There had to be a better way.
              </p>
              <p className="mb-6">
                In 2021, we opened our doors in Main Market Gulberg with Pakistan's first self-service laundromat. At first, nobody really noticed. The concept was new, unfamiliar. But slowly, our high-tech automated machines and hassle-free approach started getting validation.
              </p>
              <p className="mb-6">
                Each customer who gave us a chance helped us reach this point—you all became our family. As demand grew from customers traveling from Johar Town, we expanded to PIA Road, thanks to the trust and support of our extended family.
              </p>
              <p className="mb-6">
                Now in 2025, we're bringing our proven concept to Islamabad, starting with Quaid-e-Azam University. Our mission remains the same: maintaining high standards while reaching more places where busy people need convenient, quality laundry solutions.
              </p>
              <p className="font-medium">
                Warmly,<br />
                Self Service Laundromat Family
              </p>
            </div>

            {/* Right side - Timeline */}
            <div className="relative">
              {/* Vertical timeline line */}
              <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-[#4A7AFF]"></div>
              
              {/* Timeline events */}
              <div className="space-y-24">
                {timelineEvents.map((event, index) => (
                  <div key={index} className="relative">
                    {/* Number on vertical line */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-10 h-10 bg-[#4A7AFF] text-white font-bold text-lg rounded-full border-4 border-white shadow-md flex items-center justify-center z-10">
                      {index + 1}
                    </div>
                    
                    {/* Card - alternating sides */}
                    <div className={`w-5/12 ${index % 2 === 0 ? 'ml-auto pr-8' : 'mr-auto pl-8'}`}>
                      {/* Connector line */}
                      <div className={`absolute top-0 w-8 h-1 bg-[#4A7AFF] ${index % 2 === 0 ? 'left-1/2' : 'right-1/2'}`}></div>
                      
                      {/* Content card */}
                      <div className="bg-white rounded-lg shadow-md p-6 border border-blue-100">
                        <div className="uppercase tracking-wide text-sm text-[#4A7AFF] font-semibold">{event.year}</div>
                        <h3 className="text-xl font-bold text-[#0B1B32] mt-1">{event.location}</h3>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
