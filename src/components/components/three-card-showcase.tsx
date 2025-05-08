// components/ThreeCardShowcase.tsx
import Image from 'next/image';

const ThreeCardShowcase = () => {
  return (
    <div className="relative w-full h-[500px] flex items-center justify-center overflow-hidden">
      {/* Left Card */}
      <div className="absolute left-8 md:left-30 top-1/2 w-40  md:w-60 -translate-y-1/2 -rotate-[15deg] z-10">
        <Image
          src="/images/visa-card.svg"
          alt="Card Left"
          width={240}
          height={150}
          priority
        />
      </div>

      {/* Right Card */}
      <div className="absolute right-8 md:right-30 top-1/2 w-40 md:w-60 -translate-y-1/2 rotate-[10deg] z-10">
        <Image
          src="/images/master-card.svg"
          alt="Card Right"
          width={240}
          height={150}
          priority
        />
      </div>

      {/* Center Phone */}
      <div className="relative z-20 w-60 md:w-72 md:w-80">
        <Image
          src="/images/phone.svg"
          alt="Phone Mockup"
          width={320}
          height={650}
          priority
        />
      </div>
    </div>
  );
};

export default ThreeCardShowcase;
