'use client';

import React from 'react';
import Header from '../header';
import InputField from '../input';
import TextareaField from '../textarea';
import FileUpload from '../file-upload';
import Image from 'next/image';
import { PhoneCall, Mail, Inbox } from 'lucide-react';

const Hero = () => {
  return (
    <section className="bg-white w-11/12 mx-auto min-h-[30rem] mt-6 p-4 rounded-[2rem]">
      <Header />
      <div className="mt-10 flex flex-col-reverse lg:flex-row lg:px-10">
        <form className="lg:w-1/2">
          <InputField label="Name:" />
          <InputField label="Email:" type="email" />
          <TextareaField rows={8} label="Message:" />
          <FileUpload onFileSelect={() => {}} />
          <button
            type="submit"
            className="bg-primary w-full font-bold px-4 py-2 rounded-lg mt-4"
          >
            Submit
          </button>
        </form>

        <div className="lg:px-8 flex flex-col">
          <h2 className="text-[3rem] ">
            Get in <span className="text-primary font-bold">Touch!</span>
          </h2>
          <p>
            Have a question or need assistance? Reach out to us via email,
            phone, or the contact form below. We&apos;re eager to assist you.
          </p>

          <div className="flex-1 relative min-h-[20rem]">
            <Image
              src={'/images/people.png'}
              alt=""
              fill
              sizes="(max-width: 768px) 100vw"
              className="object-contain"
            />
          </div>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row items-start sm:items-center ml-10 gap-8 mt-8 text-sm">
        <div className="flex items-start sm:items-center gap-2">
          <PhoneCall size={20} />
          <div>
            <p className="font-semibold">Phone</p>
            <p className="text-orange-500">111 111 111</p>
          </div>
        </div>

        <div className="flex items-start sm:items-center gap-2">
          <Mail size={20} />
          <div>
            <p className="font-semibold">E-MAIL</p>
            <p className="text-orange-500">info@payjiggy.com</p>
          </div>
        </div>

        <div className="flex items-start sm:items-center gap-2">
          <Inbox size={20} />
          <div>
            <p className="font-semibold">HELPDESK</p>
            <a
              href="https://helpdesk.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-orange-500 underline"
            >
              https://helpdesk.com
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
