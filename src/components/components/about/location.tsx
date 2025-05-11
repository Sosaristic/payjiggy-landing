import React from 'react';
import Map from '../map';

const Location = () => {
  return (
    <section className="flex w-11/12 mx-auto gap-8 flex-col lg:flex-row">
      <div className="lg:w-1/2 min-h-[20rem] bg-white flex items-center justify-center flex-col">
        <h2 className="text-2xl md:text-4xl font-bold">Our Office</h2>
        <p className="text-lg">Owerri East, Nigeria</p>
      </div>
      <div className="lg:w-1/2">
        <Map />
      </div>
    </section>
  );
};

export default Location;
