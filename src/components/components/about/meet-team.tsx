// components/MeetTheTeamSection.tsx
import Image from 'next/image';
import TeamMemberCard from './team-memeber-card';

const teams = [
  {
    name: 'KingDavid Ezenwa',
    pos: 'Developer/Technical',
    img: '/images/kingdavid.png',
  },
  {
    name: 'Emmanuel Okereafor',
    pos: 'Product Designer/Marketing',
    img: '/images/emmanuel.png',
  },
  { name: 'OGUH EVAN C.', pos: 'Creative Director', img: '/images/evan.png' },
  {
    name: 'Emeghebo Chukwuebuka V.',
    pos: 'Media/Manager',
    img: '/images/chukwuebuka.png',
  },
];

const MeetTheTeamSection = () => {
  return (
    <section className="max-w-6xl mx-auto px-6 md:px-20 my-20">
      <div className=" mx-auto relative">
        <h2 className="text-xl md:text-2xl font-bold text-black text-center mb-20">
          Meet the Team
        </h2>

        <div className="bg-white rounded-[64px] px-6 md:px-12 min-h-[24rem] pt-10 flex flex-col lg:flex-row items-center md:items-start gap-8 overflow-hidden">
          {/* Left: Text Content */}
          <div className="lg:w-1/2  z-10">
            <h3 className="text-2xl font-bold text-black mb-2">Eni Samson</h3>
            <p className="text-black text-sm md:text-base mb-4">
              <strong>
                CEO of <span className="text-[#F7931E]">Payjiggy</span>
              </strong>
              , is a visionary leader with a passion for innovation, technology,
              and financial inclusion.
            </p>
            <p className="text-black text-sm md:text-base mb-4">
              With over 3 years of experience in the fintech industry, and with
              the aid of his team, he brings deep expertise in strategic growth,
              digital transformation, and customer-focused solutions.
            </p>
            <p className="text-black text-sm md:text-base">
              Under his leadership, the company has grown into a trusted
              platform dedicated to making financial services smarter, faster,
              and more accessible for everyone.
            </p>
          </div>

          {/* Right: Image & Card Background */}
          <div className="lg:w-1/2 min-h-[35rem] lg:min-h-auto flex lg:justify-center lg:justify-end mt-4 lg:ml-10 md:mt-0">
            <div className=" z-10 h-10 hidden lg:block  md:h-[20rem] w-full">
              <div className="min-h-[10rem] hidden lg:block md:min-h-[30rem] top-4 z-10 md:absolute md:w-[260px]">
                <div className="absolute w-[20rem] left-1/2 -translate-x-1/2 top-30  h-8/12 bg-[#F7931E] rounded-[24px] z-0"></div>
                <Image
                  src="/images/sammy.png"
                  alt="Eni Samson"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover"
                />
              </div>
            </div>

            <div className="min-h-[6rem] md:min-h-[7rem] w-[23rem] md:w-[23rem] relative lg:hidden z-10">
              <div className="absolute w-[18rem] md:w-[20rem] left-1/2 -translate-x-1/2 top-30  h-8/12 bg-[#F7931E] rounded-[24px] z-0"></div>

              <Image
                src="/images/sammy.png"
                alt="Eni Samson"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover z-100"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white mt-20 rounded-[64px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 place-items-center">
        {teams.map((item) => {
          return (
            <TeamMemberCard
              key={item.name}
              imageUrl={item.img}
              name={item.name}
              role={item.pos}
            />
          );
        })}
      </div>
    </section>
  );
};

export default MeetTheTeamSection;
