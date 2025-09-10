"use client"
import React, { useState, useRef, useEffect } from 'react';
import { Plus } from 'lucide-react';

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  const answerRef = useRef(null);
  const iconRef = useRef(null);
  const cardRef = useRef(null);

  const toggleFAQ = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div 
      ref={cardRef}
      className="bg-[#1E2939] rounded-3xl shadow-lg cursor-pointer mb-4 hover:shadow-xl transition-all duration-300 w-full text-white"
      onClick={toggleFAQ}
    >
      <div className="p-6 flex flex-col h-full">
        <div className="flex items-center justify-between">
          <div className="text-left text-white font-semibold text-lg pr-4">
            {question}
          </div>
          <div 
            ref={iconRef}
            className={`flex-shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-45' : 'rotate-0'}`}
          >
            <Plus className="w-6 h-6 text-white" strokeWidth={2} />
          </div>
        </div>
        <div 
          ref={answerRef}
          className={`overflow-hidden transition-all duration-300 ${
            isOpen ? 'max-h-96 opacity-100 mt-4' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="text-gray-300 text-base leading-relaxed">
            {answer}
          </div>
        </div>
      </div>
    </div>
  );
};

const FAQ = () => {
  const faqItems = [
    {
      question: "How does your pickup and delivery service work?",
      answer: "Simply schedule a pickup through our app or website. We'll collect your laundry at your specified time, clean it at our facility, and deliver it back to you within 24-48 hours, fresh and folded."
    },
    {
      question: "What areas do you serve for pickup and delivery?",
      answer: "We currently serve the greater metropolitan area including downtown, suburbs, and surrounding neighborhoods. Enter your zip code on our website to check if we deliver to your location."
    },
    {
      question: "What types of clothing and fabrics do you handle?",
      answer: "We handle all types of everyday clothing, bedding, towels, and most specialty fabrics. For delicate items like silk, cashmere, or items requiring special care, we offer premium cleaning services."
    },
    {
      question: "How do you ensure the safety and security of my clothes?",
      answer: "Each order is tagged with a unique identifier, tracked throughout our facility, and handled by trained professionals. We're fully insured and guarantee the safe return of your items."
    },
    {
      question: "What if I'm not satisfied with the cleaning results?",
      answer: "We stand behind our work with a 100% satisfaction guarantee. If you're not happy with any item, we'll re-clean it free of charge or provide a full refund for that item."
    }
  ];

  return (
    <section id="contact" className="py-20 bg-[#F6FAFF]">
      <div className="container mx-auto px-4 md:px-8 lg:px-16 xl:px-32">
        {/* Header section */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold leading-tight">
            <span className="text-[#0B1B32]">Got Questions? </span>
            <span className="text-[#8AA8CF]">We've Got Answers</span>
          </h2>
          <p className="mt-6 max-w-3xl mx-auto text-[#26415E] text-xl leading-relaxed">
            Explore common questions about our laundry pickup and delivery service
          </p>
        </div>
        
        {/* Content section */}
        <div className="flex flex-col lg:flex-row lg:justify-between gap-12">
          {/* FAQ items section */}
          <div className="w-full lg:w-1/2">
            <div className="flex flex-col space-y-4">
              {faqItems.map((item, index) => (
                <FAQItem key={index} question={item.question} answer={item.answer} />
              ))}
            </div>
          </div>
          
          {/* Image section */}
          <div className="w-full lg:w-1/2">
            <div className="relative w-full max-w-lg mx-auto lg:mx-0">
              <img 
                src="/faq/bg.jpg" 
                alt="Laundry FAQ" 
                className="rounded-3xl object-cover w-full h-[600px] shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;