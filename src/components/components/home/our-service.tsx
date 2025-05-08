import { Bolt, EllipsisVertical, Phone, Wifi } from 'lucide-react';
import React from 'react';

const data = [
  {
    title: 'Data Bundle',
    desc: 'Never run out of data with Payjiggy data services',
    icon: Wifi,
  },
  {
    title: 'Airtime Top up',
    desc: 'With just a few taps, refill your phone credit instantly and stay in touch with family, friends & clients.',
    icon: Phone,
  },
  {
    title: 'Electricity Bills',
    desc: "Keep the lights on effortlessly with PayJiggy's electricity top-up service! ",
    icon: Bolt,
  },
  {
    title: 'More Services',
    desc: 'More Services',
    icon: EllipsisVertical,
  },
];

const OurService = () => {
  return (
    <section className="my-10">
      <h2 className="text-center  font-bold  text-4xl mb-10">Our Services</h2>
      <div className="grid grid-cols-1 md:grid-cols-4 bg-black p-12 rounded-4xl gap-8">
        {data.map((item, i) => {
          const Icon = item.icon;
          return (
            <div className="bg-white p-6 rounded-2xl" key={i}>
              <div className="h-10 w-10 rounded-full items-center justify-center flex bg-primary text-white">
                <Icon />
              </div>
              <h2 className="text-lg font-semibold mt-4">{item.title}</h2>
              <p className="text-sm mt-6">{item.desc}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default OurService;
