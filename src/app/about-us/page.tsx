import Location from '@/components/components/about/location';
import MeetTheTeamSection from '@/components/components/about/meet-team';
import Platform from '@/components/components/about/platform';
import Hero from '@/components/components/home/hero';
import Map from '@/components/components/map';
import React from 'react';

const AboutUs = () => {
  return (
    <main>
      <Hero />
      <MeetTheTeamSection />
      <Location />
      <Platform />
    </main>
  );
};

export default AboutUs;
