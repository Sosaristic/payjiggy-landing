import Image from 'next/image';
import React from 'react';

const logos = [
  { name: 'showmax', logo: '/logos/showmax.png' },
  { name: 'startimes', logo: '/logos/startimes.png' },
  { name: 'glo', logo: '/logos/glo.png' },
  { name: '9mobile', logo: '/logos/9mobile.png' },
  { name: 'airtel', logo: '/logos/airtel.png' },
  { name: 'mtn', logo: '/logos/mtn.png' },
  { name: 'eedc', logo: '/logos/eedc.png' },
  { name: 'dstv', logo: '/logos/dstv.png' },
  { name: 'ekdc', logo: '/logos/ekdc.png' },
  { name: 'gotv', logo: '/logos/gotv.png' },
  { name: 'waec', logo: '/logos/waec.png' },
  { name: 'napteb', logo: '/logos/napteb.png' },
];

const Providers = () => {
  return (
    <section className="mt-10">
      <h2 className="font-bold md:w-1/2 text-3xl md:text-4xl ml-8">
        Access to over 20 premier service <br /> providers through PayJiggy!
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 bg-white p-6 place-items-center rounded-[3rem] mt-16">
        {logos.map((item) => {
          return (
            <Image
              key={item.name}
              src={item.logo}
              height={200}
              width={200}
              alt={item.name}
            />
          );
        })}
      </div>
    </section>
  );
};

export default Providers;
