'use client';
import React from 'react';
import Header from '../header';
import StoreButtons from '../store-buttons';
import { usePathname } from 'next/navigation';
import Image from 'next/image';

const Hero = () => {
  const pathname = usePathname();

  return (
    <section className="bg-white w-11/12 mx-auto min-h-[30rem] mt-6 p-4 rounded-[2rem]">
      <Header />
      <div className="mt-20 flex flex-col md:flex-row">
        <div className="md:w-1/2 px-8">
          {pathname !== '/about-us' && (
            <p className="text-[2.5rem] font-bold md:text-[5rem]">
              Pay easily <br /> with{' '}
              <span className="text-primary"> Payjiggy</span>
            </p>
          )}
          {pathname === '/about-us' && (
            <p className="text-[2.5rem] font-bold md:text-[5rem]">
              This is
              <span className="text-primary"> Payjiggy</span>
            </p>
          )}

          <p className="text-sm text-xl mt-8">
            {pathname === '/about-us'
              ? `At Payjiggy, we're redefining the way you 
manage your bills and payments. Our platform simplifies financial
 transactions, offering fast, secure, and seamless services. 
Driven by innovation, we empower individuals and businesses to
stay financially in control.`
              : `  At Payjiggy, we're redefining the way you manage your bills and
payments. Our platform simplifies financial transactions, offering
fast, secure, and seamless services. Driven by innovation, we
empower individuals and businesses to stay financially in control.`}
          </p>

          {pathname === '/about-us' && (
            <button className="bg-primary w-8/12 mt-10 text-black font-semibold px-6 py-3 rounded-lg hover:scale-105 transition-transform">
              Contact us
            </button>
          )}

          {pathname !== '/about-us' && <StoreButtons />}
        </div>
        <div className="md:w-1/2 min-h-[20rem] md:min-h-[40rem] relative">
          <Image
            src="/images/hero-image.png"
            alt="Phone Mockup"
            fill
            sizes="(max-width: 768px) 100vw"
            className="object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
