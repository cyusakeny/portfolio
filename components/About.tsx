import React from 'react';
interface MyComponentProps {
}
const About: React.FC<MyComponentProps> = ({ /* Destructure props here */ }) => {
  return (
    <div className="w-[90%] mx-auto mt-[3.8%] space-y-[12px] flex flex-col">
      <div className=" flex flex-col space-y-[16px] ">
        <h1 className="text-2xl font-normal underline underline-offset-8
                 text-[#b3afaf]">Team</h1>
        <div className='flex flex-col space-y-[20px] text-white'>
          <div className='flex flex-row space-x-[13px]'>
            <div className="rounded-full bg-blue-500 w-16 h-16 flex items-center justify-center text-white text-3xl font-bold">
              CK
            </div>
            <p className='mt-[23px]'>Chance Karambizi</p>
          </div>
          <div className='flex flex-row space-x-[13px]'>
            <div className="rounded-full bg-[#e30b21] w-16 h-16 flex items-center justify-center text-white text-3xl font-bold">
              CN
            </div>
            <p className='mt-[23px]'>Chanceline Niyodushima</p>
          </div>
          <div className='flex flex-row space-x-[13px]'>
            <div className="rounded-full bg-[#e3dc0b] w-16 h-16 flex items-center justify-center text-black text-3xl font-bold">
              CG
            </div>
            <p className='mt-[23px]'>Christophe Gakwaya</p>
          </div>
          <div className='flex flex-row space-x-[13px]'>
            <div className="rounded-full bg-[#f26316] w-16 h-16 flex items-center justify-center text-white text-3xl font-bold">
              GN
            </div>
            <p className='mt-[23px]'>Grace Ndayishima</p>
          </div>
          <div className='flex flex-row space-x-[13px]'>
            <div className="rounded-full bg-[#181c18] w-16 h-16 flex items-center justify-center text-white text-3xl font-bold">
              KC
            </div>
            <p className='mt-[23px]'>Keny Cyusa</p>
          </div>
        
        </div>
      </div>
    </div>
  );
};

export default About;