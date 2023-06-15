import React from 'react';

interface WorkProps {
  imageSrc: string;
  language: string;
  experience: string;

}

const Works: React.FC<WorkProps> = ({ imageSrc, language, experience }) => {
  return (
    <div className=" pb-[34px] rounded-[8px] shadow-custom card 
     shadow-[#232423] bg-[#e6ebe7] cursor-pointer
     w-[250px] flex flex-col space-y-[10px] ">
      <div className="bg-[#04001f] h-[60px] w-full ">
      <img src={imageSrc} alt="Card" className="w-full h-full  object-contain" />
      </div>
      <p className="mx-auto text-xl italic font-semibold">{language}</p>
      <p className="mx-auto text-xl text-[#e86717] underline underline-offset-8">
      <a href={experience}>Click on this Link</a>
      </p>
    </div>
  );
};

export default Works;
