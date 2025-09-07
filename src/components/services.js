"use client";
import Image from "next/image";

export default function Services() {
  return (
    <section className="pt-20 pb-32 bg-[#F6FAFF]">
      <div className="text-center mb-16">
        <h2 className="text-5xl font-bold leading-tight">
          <span className="text-[#0B1B32]">A wide range </span>
          <span className="text-[#8AA8CF]">of services</span>
        </h2>
        <p className="mt-6 max-w-3xl mx-auto text-[#26415E] text-xl leading-relaxed">
          Complete laundry solutions for every fabric and occasion. Professional care that handles all your cleaning needs with expertise you can trust.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {/* Wash Service */}
        <div className="bg-white border rounded-2xl p-10 flex flex-col items-center text-center hover:shadow-lg transition min-h-[340px]">
          <Image src="/services/1.png" width={112} height={112} alt="Wash service" />
          <h3 className="mt-6 text-2xl font-bold text-[#0B1B32]">Wash Service</h3>
          <p className="mt-3 text-[#26415E] text-lg">
            Clothes deserve more than just a rinse. Our wash service gives them a deep clean that feels fresh, gentle, and reliable every single time.
          </p>
        </div>

        {/* Spin dry */}
        <div className="bg-white border rounded-2xl p-10 flex flex-col items-center text-center hover:shadow-lg transition min-h-[340px]">
          <Image src="/services/2.png" width={112} height={112} alt="Spin dry" />
          <h3 className="mt-6 text-2xl font-bold text-[#0B1B32]">Spin Dry</h3>
          <p className="mt-3 text-[#26415E] text-lg">
            Say goodbye to heavy, dripping clothes. Our spin dry makes laundry lighter, faster, and easier to handle.
          </p>
        </div>

        {/* Fold Service */}
        <div className="bg-white border rounded-2xl p-10 flex flex-col items-center text-center hover:shadow-lg transition min-h-[340px]">
          <Image src="/services/3.png" width={112} height={112} alt="Fold service" />
          <h3 className="mt-6 text-2xl font-bold text-[#0B1B32]">Fold Service</h3>
          <p className="mt-3 text-[#26415E] text-lg">
            Nothing feels better than neatly folded clothes. We return your laundry crisp, organized, and ready to wear.
          </p>
        </div>

        {/* Heat Dry */}
        <div className="bg-white border rounded-2xl p-10 flex flex-col items-center text-center hover:shadow-lg transition min-h-[340px]">
          <Image src="/services/4.png" width={112} height={112} alt="Heat dry" />
          <h3 className="mt-6 text-2xl font-bold text-[#0B1B32]">Heat Dry</h3>
          <p className="mt-3 text-[#26415E] text-lg">
            Warm, soft, and perfectly dry. Our heat dry leaves your clothes fresh and comfortable straight from the machine.
          </p>
        </div>

        {/* Stain Removal */}
        <div className="bg-white border rounded-2xl p-10 flex flex-col items-center text-center hover:shadow-lg transition min-h-[340px]">
          <Image src="/services/5.png" width={112} height={112} alt="Stain removal" />
          <h3 className="mt-6 text-2xl font-bold text-[#0B1B32]">Stain Removal</h3>
          <p className="mt-3 text-[#26415E] text-lg">
            Spills and stains happen. We carefully treat each piece to bring back the best in your favorite clothes.
          </p>
        </div>

        {/* Self Laundry Service */}
        <div className="bg-white border rounded-2xl p-10 flex flex-col items-center text-center hover:shadow-lg transition min-h-[340px]">
          <Image src="/services/6.png" width={112} height={112} alt="Self laundry service" />
          <h3 className="mt-6 text-2xl font-bold text-[#0B1B32]">Self Laundry Service</h3>
          <p className="mt-3 text-[#26415E] text-lg">
            Your laundry, your way. Use our modern machines for a quick and easy wash and dry, all in under an hour.
          </p>
        </div>
      </div>
    </section>
  );
}
