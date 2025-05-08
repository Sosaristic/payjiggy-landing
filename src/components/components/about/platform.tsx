import React from 'react';
import StoreButtons from '../store-buttons';

const Platform = () => {
  return (
    <section className=" w-11/12 rounded-[64px] mx-auto px-10 py-20 mx-4  md:px-20 my-20 bg-white">
      <div className="lg:w-1/2">
        <h2 className="text-4xl font-bold">
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
    </section>
  );
};

export default Platform;
