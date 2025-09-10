"use client";
import Image from "next/image";

export default function Gallery() {
  const galleryItems = [
    { image: "/gallery/10.jpg", alt: "Laundry Facility" },
    { image: "/gallery/7.jpg", alt: "Laundry Equipment" },
    { image: "/gallery/9.jpg", alt: "Laundry Service" },
    { image: "/gallery/8.jpg", alt: "Laundry Process" },
    { image: "/gallery/5.jpeg", alt: "Laundry Interior" },
    { image: "/gallery/11.jpg", alt: "Laundry Results" },
  ];

  return (
    <section className="py-20 bg-white">
      {/* Header */}
      <div className="text-center mb-16">
        <h2 className="text-5xl font-bold leading-tight">
          <span className="text-[#0B1B32]">Our Laundry </span>
          <span className="text-[#8AA8CF]">Gallery</span>
        </h2>
        <p className="mt-6 max-w-3xl mx-auto text-[#26415E] text-xl leading-relaxed">
          Take a look at our modern facilities and premium laundry services
        </p>
      </div>

      {/* Gallery Grid */}
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-12 gap-4">
          {/* First row */}
          <div className="col-span-12 md:col-span-3 relative h-64 overflow-hidden rounded-lg">
            <Image 
              src={galleryItems[0].image} 
              alt={galleryItems[0].alt}
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#000]/50 to-transparent top-[75%] h-1/4"></div>
          </div>
          
          <div className="col-span-12 md:col-span-6 relative h-64 overflow-hidden rounded-lg">
            <Image 
              src={galleryItems[1].image} 
              alt={galleryItems[1].alt}
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#000]/50 to-transparent top-[75%] h-1/4"></div>
          </div>
          
          <div className="col-span-12 md:col-span-3 relative h-64 overflow-hidden rounded-lg">
            <Image 
              src={galleryItems[2].image} 
              alt={galleryItems[2].alt}
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#000]/50 to-transparent top-[75%] h-1/4"></div>
          </div>
          
          {/* Second row */}
          <div className="col-span-12 md:col-span-5 relative h-64 overflow-hidden rounded-lg">
            <Image 
              src={galleryItems[3].image} 
              alt={galleryItems[3].alt}
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#000]/50 to-transparent top-[75%] h-1/4"></div>
          </div>
          
          <div className="col-span-12 md:col-span-3 relative h-64 overflow-hidden rounded-lg">
            <Image 
              src={galleryItems[4].image} 
              alt={galleryItems[4].alt}
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#000]/50 to-transparent top-[75%] h-1/4"></div>
          </div>
          
          <div className="col-span-12 md:col-span-4 relative h-64 overflow-hidden rounded-lg">
            <Image 
              src={galleryItems[5].image} 
              alt={galleryItems[5].alt}
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#000]/50 to-transparent top-[75%] h-1/4"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
