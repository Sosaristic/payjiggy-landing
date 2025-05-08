import Image from 'next/image';
import Header from '../components/components/header';
import Hero from '../components/components/home/hero';
import OurService from '../components/components/home/our-service';
import PayBillsSection from '@/components/components/home/pay-bills';
import Providers from '@/components/components/home/providers';
import ThreeStepsSection from '@/components/components/home/three-steps';
import VirtualCardSection from '@/components/components/home/virtual-cards';

export default function Home() {
  return (
    <main className=" mx-auto">
      <Hero />
      <div className="w-11/12 mx-auto">
        <OurService />
        <PayBillsSection />
        <Providers />
        <ThreeStepsSection />
        <VirtualCardSection />
      </div>
    </main>
  );
}
