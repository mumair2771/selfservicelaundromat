import Image from 'next/image';

export default function Loading() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white z-50">
      <div className="relative">
        {/* Logo in center */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full bg-white flex items-center justify-center z-10">
          <Image 
            src="/logo.png" 
            alt="Self Service Laundromat" 
            width={50} 
            height={50}
            className="rounded-full"
          />
        </div>
        
        {/* Circular loader */}
        <svg 
          className="w-24 h-24 animate-spin" 
          viewBox="0 0 100 100"
        >
          <circle
            cx="50"
            cy="50"
            r="45"
            fill="none"
            stroke="#f3f4f6"
            strokeWidth="8"
          />
          <circle
            cx="50"
            cy="50"
            r="45"
            fill="none"
            stroke="#0D1E4C"
            strokeWidth="8"
            strokeLinecap="round"
            strokeDasharray="283"
            strokeDashoffset="100"
            transform="rotate(-90 50 50)"
          />
        </svg>
      </div>
    </div>
  );
}
