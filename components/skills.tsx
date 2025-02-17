import React from 'react';

interface CardProps {
  imageSrc: string;
  language: string;
  experience: string;
  color: string;
  level: string;

}

const Skill: React.FC<CardProps> = ({ imageSrc, language, experience, color, level }) => {
  return (
    <div className="pl-[7px] pb-[34px] rounded-[8px] shadow-custom card 
     shadow-grey  bg-[rgba(0,0,0,0.8)] cursor-pointer
     w-[250px] flex flex-col space-y-[10px] pt-[4px]">
      <div className={`mr-auto w-auto p-[5px] text-[#E5E5CB]
      font-sans rounded-[32px]`}>
        {level}
      </div>
      <div className=" rounded-full h-[60px] w-[60px] mx-auto">
      <img src={imageSrc} alt="Card" className="w-full h-full object-contain" />
      </div>
      <p className="mx-auto text-xl italic text-[#FFB200] font-semibold">{language}</p>
      <p className="mr-auto text-xl text-[#E5E5CB]">{experience}</p>
    </div>
  );
};

export default Skill;
