// components/ThreeStepsSection.tsx
import Image from 'next/image';

const steps = [
  {
    number: 1,
    title: 'Download & Install the App or use the web app',
    description:
      'Download the app from your app store and install to your device or visit our website to enjoy.',
  },
  {
    number: 2,
    title: 'Sign up on PayJiggy',
    description: 'Sign up for free following simple quick steps.',
  },
  {
    number: 3,
    title: 'Fund your account and Pay Bills',
    description:
      "It's that simple. Fund your account and start paying bills with amazing rates!",
  },
];

const ThreeStepsSection = () => {
  return (
    <section className=" py-16 px-6 md:px-20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
        {/* Left: Steps Text */}
        <div className="md:w-1/2">
          <h2 className="text-2xl md:text-3xl font-bold text-black mb-6">
            We follow three steps
            <br />
            to enjoy <span className="text-white">PayJiggy!</span>
          </h2>

          <div className="space-y-10">
            {steps.map((step) => (
              <div key={step.number} className="flex items-start space-x-4">
                <div className="bg-white text-primary font-bold text-lg w-8 h-8 flex items-center justify-center rounded">
                  {step.number}
                </div>
                <div>
                  <h3 className="font-semibold text-black text-base mb-1">
                    {step.title}
                  </h3>
                  <p className="text-sm text-black">{step.description}</p>
                </div>
              </div>
            ))}
          </div>

          <button className="mt-10 bg-white w-8/12 text-black font-semibold px-6 py-3 rounded-lg hover:scale-105 transition-transform">
            Download App
          </button>
        </div>

        {/* Right: Single Combined Image */}
        <div className="md:w-1/2">
          <Image
            src="/images/three-steps-image.png"
            alt="PayJiggy App Steps Visual"
            width={600}
            height={600}
            className="mx-auto object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default ThreeStepsSection;
