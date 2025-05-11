import React from 'react';
import StoreButtons from '../store-buttons';
import Image from 'next/image';

const Platform = () => {
  return (
    <section className=" w-11/12 flex relative flex-col md:flex-row rounded-[64px] mx-auto px-10 py-20 mx-4   md:px-20 my-60 bg-white">
      <div className="lg:w-1/2">
        <h2 className="text-2xl md:text-4xl font-bold">
          Try <span className="text-primary">Payjiggy</span> for free <br />{' '}
          across all platforms{' '}
        </h2>
        <p className="text-xl font-bold mt-[56px]">
          Download & Install the App or use the web app
        </p>
        <p>
          Download the app from your app store and install to your device or
          visit our website to enjoy.
        </p>
        <div className="mt-20">
          <StoreButtons />
        </div>
      </div>

      <div className="lg:w-1/2 ">
        <div className="lg:absolute relative min-h-[20rem] lg:min-h-[32rem] xl:min-h-[40rem] lg:-right-[25%] xl:-right-[20%] lg:-top-20 xl:-top-40 w-full h-full">
          <Image
            src={'/images/phone-card.png'}
            alt="Phone Card"
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-contain w-full h-full"
          />
        </div>
      </div>
    </section>
  );
};

export default Platform;
