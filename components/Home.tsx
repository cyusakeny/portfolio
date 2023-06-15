import React from 'react';

interface MyComponentProps {
}

const Home: React.FC<MyComponentProps> = ({ /* Destructure props here */ }) => {
  return (
    <div className="  w-[100%] flex flex-row">
        <div className='flex flex-col pl-[3px] w-[50%] text-[#b3afaf]  font-mono'>
        <p className="text-2xl">Hi! I&apos;m</p>
        <p className="text-5xl font-bold mb-[33px] mt-[13px]">Cyusa Keny</p>
        <hr className="w-[70px] ml-[2px] border-t-[1px] border-[#b3afaf]" />
        <p className="mt-[45px]">
        Software developer with expertise in web development, game development, artificial intelligence, and mobile development. I am a very
hardworking, passionate, and enthusiastic individual who always wants to learn new things. I possess strong analytical skills, excellent
problem-solving abilities.
        </p>
        <span className="inline-block border-[1px] border-[#b3afaf] hover:bg-[#b3afaf] hover:text-[#04001f]
        p-[5px] text-center rounded-[25px] mt-[60px] w-[130px]">
          <a href="https://github.com/cyusakeny">Github Link</a>
        </span>
        </div>
        <div className=" h-full  w-[50%] ">
        <img src="/keny.png" alt="" className="w-full h-[500px] object-cover"/>
        </div>
     
    </div>
  );
};

export default Home;