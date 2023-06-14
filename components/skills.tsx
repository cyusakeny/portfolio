import React from 'react';

interface CardProps {
  imageSrc: string;
  text: string;
}

const Skill: React.FC<CardProps> = ({ imageSrc, text }) => {
  return (
    <div className="pl-[7px] pb-[34px] rounded-[3px] shadow-custom card bg-white shadow-[#232423]
     w-[250px] flex flex-col space-y-[10px] pt-[4px]">
      <div className="mr-auto bg-[#0cc73e] w-auto p-[5px] text-[white] rounded-[32px]">
        Completed
      </div>
      <div className=" rounded-full h-[60px] w-[60px] mx-auto">
      <img src={imageSrc} alt="Card" className="w-full h-full object-contain" />
      </div>
      <p className="mx-auto text-xl italic font-semibold">Reactrededee</p>
      <p className="mr-auto">{text}</p>
    </div>
  );
};

export default Skill;
