// components/PayBillsSection.tsx
import Image from 'next/image';

const PayBillsSection = () => {
  return (
    <section className=" py-16 px-6 md:px-4">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
        {/* Text Section */}
        <div className="md:w-1/2 flex flex-col px-4 gap-8 text-center md:text-left">
          <h2 className="text-2xl md:text-5xl font-bold text-black mb-4">
            What bills are you
            <br />
            paying today?
          </h2>
          <p className="text-black text-base md:text-3xl mb-6">
            Experience convenience like never before with PayJiggy&apos;s suite
            of services, all accessible from the comfort of your home!
          </p>
          <button className="bg-white w-8/12 text-black font-semibold px-6 py-3 rounded-lg hover:scale-105 transition-transform">
            Pay Bill
          </button>
        </div>

        {/* Image Section */}
        <div className="relative  md:w-1/2 ">
          <div className=" p-4 w-full flex justify-center  md:p-8 rounded-lg border-image-frame">
            <Image
              src="/images/girl.png"
              alt="Happy customer"
              width={400}
              height={500}
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PayBillsSection;
