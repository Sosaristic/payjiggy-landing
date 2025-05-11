// components/Footer.tsx
import Image from 'next/image';

import { Phone, Mail, MapPin } from 'lucide-react';

const socials = [
  { link: '#', icon: '/icons/facebook-icon.svg' },
  { link: '#', icon: '/icons/insta-icon.svg' },
  { link: '#', icon: '/icons/x-icon.svg' },
  { link: '#', icon: '/icons/linkedin-icon.svg' },
];

const Footer = () => {
  return (
    <footer className="bg-black text-white pt-12 mt-auto">
      <div className=" mx-auto px-6 md:px-10 grid grid-cols-1 md:grid-cols-3 gap-10 mb-8">
        {/* Logo & Description */}
        <div>
          <h2 className=" font-bold mb-2">
            <Image
              src={'/payjiggy-logo.svg'}
              height={100}
              width={100}
              alt="logo"
            />
          </h2>
          <p className="text-sm">
            With PayJiggy app, you can effortlessly pay bills on the go without
            hassles or delay.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-bold mb-4">Contact</h3>
          <ul className="space-y-2 text-sm">
            <li className="flex items-center gap-2">
              <Phone /> +234 803312345
            </li>
            <li className="flex items-center gap-2">
              <Mail /> info@payjiggy.com
            </li>
            <li className="flex items-center gap-2">
              <MapPin /> 123 Okigwe Road Owerri Imo State
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-bold mb-4">Navigation</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#" className="hover:underline">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                About
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Services
              </a>
            </li>
          </ul>
        </div>
      </div>

      <hr className="border-gray-800" />

      <div className="flex flex-col md:flex-row items-center justify-between px-6 md:px-10 py-4 gap-4">
        {/* Links */}
        <div className="flex gap-6 text-sm text-white">
          <a href="#" className="hover:underline">
            Policy
          </a>
          <a href="#" className="hover:underline">
            Terms
          </a>
          <a href="#" className="hover:underline">
            Security
          </a>
        </div>

        <p className="text-sm text-white text-center">All Rights Reserved</p>

        <div className="flex gap-2 bg-[#F7931E] px-3 py-2 rounded">
          {socials.map((social, i) => {
            return (
              <a href={social.link} key={i}>
                <Image src={social.icon} width={30} height={30} alt="icon" />
              </a>
            );
          })}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
