import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';
import './globals.css';
import Footer from '@/components/components/footer';

const montserrat = Montserrat({
  variable: '--font-montserrat',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Payjiggy',
  description: `PayJiggy is a convenient online platform that enables users to pay utility bills and access a wide range of services. From settling electricity, water, and cable bills to purchasing airtime, data, and WAEC pins, PayJiggy offers a seamless and secure way to manage everyday payments. With an intuitive interface and quick transaction processing, PayJiggy ensures that users can handle their financial commitments with ease, saving time and effort. Whether you're paying for essential services or topping up your phone, PayJiggy is your go-to platform for all your payment needs.`,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={` ${montserrat.variable} antialiased min-h-screen flex flex-col`}
      >
        {children}
        <Footer />
      </body>
    </html>
  );
}
