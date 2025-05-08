// components/VirtualCardSection.tsx
import Image from 'next/image';

const VirtualCardSection = () => {
  return (
    <section className=" py-16">
      <div className="w-full mx-auto bg-white rounded-[40px] p-8 md:p-16 flex flex-col-reverse md:flex-row items-center justify-between gap-10">
        {/* Left: Card image */}
        <div className="md:w-1/2 w-full flex justify-center">
          <Image
            src="/images/virtual-cards.png"
            alt="PayJiggy Virtual Cards"
            width={500}
            height={400}
            className="object-contain"
          />
        </div>

        {/* Right: Text and CTA */}
        <div className="md:w-1/2 w-full">
          <h2 className="text-2xl md:text-4xl font-bold text-black mb-4">
            Get our virtual card for free and enjoy seamless online transactions
          </h2>
          <p className="text-gray-800 mb-8 leading-relaxed text-sm md:text-base">
            PayJiggy&apos;s virtual card service offers a modern and secure
            solution for managing payments in the digital age. Virtual cards are
            convenient for making online purchases, subscriptions, and recurring
            payments, offering flexibility and control over spending.
          </p>
          <button className="bg-primary w-full text-black font-bold px-8 py-4 rounded-xl hover:scale-105 transition-transform">
            Get Card
          </button>
        </div>
      </div>
    </section>
  );
};

export default VirtualCardSection;
