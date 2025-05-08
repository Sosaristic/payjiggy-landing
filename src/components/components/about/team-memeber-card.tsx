import React from 'react';

type Props = {
  imageUrl: string;
  name: string;
  role: string;
};

const TeamMemberCard = ({ imageUrl, name, role }: Props) => {
  return (
    <div className="flex relative flex-col items-center text-center w-[20rem] min-h-[20rem]">
      <div className=" w-60 h-60  rounded-full">
        <div className="absolute h-[12rem] w-[12rem] left-1/2 -translate-x-1/2 top-12  inset-0 rounded-full bg-orange-400 z-0" />
        <img
          src={imageUrl}
          alt={name}
          className="relative z-10 w-full h-full object-cover rounded-full"
        />
      </div>
      <h2 className="mt-4 text-xl font-bold">{name}</h2>
      <p className="text-gray-600">{role}</p>
    </div>
  );
};

export default TeamMemberCard;
