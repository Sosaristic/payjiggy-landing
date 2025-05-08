'use client';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { DialogTitle } from '@radix-ui/react-dialog';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

const links = [
  { id: 1, title: 'Home', href: '/' },
  { id: 2, title: 'About', href: '/about-us' },
  { id: 3, title: 'Contact us', href: '/contact-us' },
  { id: 4, title: 'Pricing', href: '#' },
  { id: 5, title: 'Sign In', href: '#' },
];

const Header = () => {
  const pathname = usePathname();

  return (
    <header className="bg-primary rounded-full px-6 py-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <Image
            src="/payjiggy-logo.svg"
            alt="PayJiggy"
            className="h-20"
            width={200}
            height={200}
          />
        </div>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex space-x-8">
          {links.map((link) => {
            const isActive = pathname === link.href;
            return (
              <a
                key={link.id}
                href={link.href}
                className={` ${
                  isActive ? 'text-black' : 'text-white'
                } text-2xl relative hover:text-black`}
              >
                {link.title}
                {isActive && (
                  <div className="h-1 w-1/2 bg-black absolute -bottom-2" />
                )}
              </a>
            );
          })}
        </nav>

        <Sheet>
          <DialogTitle></DialogTitle>
          <SheetTrigger className="md:hidden text-white">
            <Menu size={24} />
          </SheetTrigger>
          <SheetContent className="bg-white text-primary">
            <div className="flex flex-col gap-6 mt-8 p-4">
              {links.map((link) => (
                <a
                  key={link.id}
                  href={link.href}
                  className="text-primary hover:text-black"
                >
                  {link.title}
                </a>
              ))}
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};

export default Header;
