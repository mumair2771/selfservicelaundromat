import React from 'react';
import { Star } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      image: "/testimonials/1.jpeg",
      rating: 5,
      text: "Today, I visited their new branch near johar town. It's really worth the time, especially for outsiders. Prices are reasonable and staff is really good. I wish I had known about this service before.",
      name: "Sanan Ali",
      location: "Lahore, Pakistan"
    },
    {
      id: 2,
      image: "/testimonials/2.webp",
      rating: 5,
      text: "Excellent laundromat with automatic, modern, clean washing machines. And above all, they have a real heat dryer! They also provide good liquid detergents and fabric softeners. Very reasonable prices too!",
      name: "Aun R",
      location: "Lahore, Pakistan"
    },
    {
      id: 3,
      image: "/testimonials/3.jpeg",
      rating: 5,
      text: "I've visited this laundry service twice now, and each time I was thoroughly impressed by the quality of service, the range of products, and the state-of-the-art machines they use. The end result of my washed clothes was nothing short of perfect, leaving them fresh and immaculate.",
      name: "Haider Ali",
      location: "Islamabad, Pakistan"
    }
  ];

  return (
    <div className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
            What our testimonials{' '}
            <span className="text-blue-400">say about us</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Hear what our customers have to say about their experience with our self-service laundromat.
            Real feedback from real people who've experienced our services firsthand.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              {/* Profile Image */}
              <div className="flex justify-center mb-6">
                <div className="w-20 h-20 rounded-full overflow-hidden bg-blue-100 p-1">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
              </div>

              {/* Star Rating */}
              <div className="flex justify-center gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, index) => (
                  <Star
                    key={index}
                    className="w-5 h-5 fill-blue-400 text-blue-400"
                  />
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-gray-600 text-center mb-6 leading-relaxed">
                {testimonial.text}
              </p>

              {/* Name and Location */}
              <div className="text-center">
                <h4 className="font-bold text-gray-800 mb-1">
                  {testimonial.name}
                </h4>
                <p className="text-blue-400 text-sm">
                  {testimonial.location}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}