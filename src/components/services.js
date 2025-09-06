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
          Lorem ipsum dolor sit amet consectetur adipiscing eli mattis sit
          phasellusolm mollis sit aliquam sit nullam neque ultrices dolor sit
          amet conse.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {/* Wash Service */}
        <div className="bg-white border rounded-2xl p-10 flex flex-col items-center text-center hover:shadow-lg transition min-h-[340px]">
          <Image src="/services/1.png" width={112} height={112} alt="Wash service" />
          <h3 className="mt-6 text-2xl font-bold text-[#0B1B32]">Wash Service</h3>
          <p className="mt-3 text-[#26415E] text-lg">
            Ultricies posuere quisque sollicitudin ut senectus nascetur semper
            turpism sem turpis dictumst habitant enim.
          </p>
        </div>

        {/* Spin dry */}
        <div className="bg-white border rounded-2xl p-10 flex flex-col items-center text-center hover:shadow-lg transition min-h-[340px]">
          <Image src="/services/2.png" width={112} height={112} alt="Spin dry" />
          <h3 className="mt-6 text-2xl font-bold text-[#0B1B32]">Spin Dry</h3>
          <p className="mt-3 text-[#26415E] text-lg">
            Tincidunt magna luctus porta egestas morbi commodo nullam mauris enim
            pretium ante lacus morbi id viverra.
          </p>
        </div>

        {/* Fold Service */}
        <div className="bg-white border rounded-2xl p-10 flex flex-col items-center text-center hover:shadow-lg transition min-h-[340px]">
          <Image src="/services/3.png" width={112} height={112} alt="Fold service" />
          <h3 className="mt-6 text-2xl font-bold text-[#0B1B32]">Fold Service</h3>
          <p className="mt-3 text-[#26415E] text-lg">
            Quam quis aliquet facilisis amet feugiat a sit adipiscing morbi sociis
            dapibus amet pellentesque.
          </p>
        </div>

        {/* Heat Dry */}
        <div className="bg-white border rounded-2xl p-10 flex flex-col items-center text-center hover:shadow-lg transition min-h-[340px]">
          <Image src="/services/4.png" width={112} height={112} alt="Heat dry" />
          <h3 className="mt-6 text-2xl font-bold text-[#0B1B32]">Heat Dry</h3>
          <p className="mt-3 text-[#26415E] text-lg">
            Vitae nulla lectus ac nisi aliquet semper pulvinar quam arcu tortor
            tristique tortor congue ut fringilla.
          </p>
        </div>

        {/* Stain Removal */}
        <div className="bg-white border rounded-2xl p-10 flex flex-col items-center text-center hover:shadow-lg transition min-h-[340px]">
          <Image src="/services/5.png" width={112} height={112} alt="Stain removal" />
          <h3 className="mt-6 text-2xl font-bold text-[#0B1B32]">Stain Removal</h3>
          <p className="mt-3 text-[#26415E] text-lg">
            Leo eu habitant luctus nisl ornareolme dictum mauris nibh ornare
            ultrices quis cras odio viverra tortor risus dia.
          </p>
        </div>

        {/* Self Laundry Service */}
        <div className="bg-white border rounded-2xl p-10 flex flex-col items-center text-center hover:shadow-lg transition min-h-[340px]">
          <Image src="/services/6.png" width={112} height={112} alt="Self laundry service" />
          <h3 className="mt-6 text-2xl font-bold text-[#0B1B32]">Self Laundry Service</h3>
          <p className="mt-3 text-[#26415E] text-lg">
            Sem pharetra vel non tellus arcu aliquet leo in bibendum ac velit
            tristique fermentum lacus est purus.s
          </p>
        </div>
      </div>
    </section>
  );
}
