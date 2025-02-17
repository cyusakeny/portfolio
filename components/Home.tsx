import React from 'react';
import ComputersCanvas from './computercanvas';

interface MyComponentProps {
}

const Home: React.FC<MyComponentProps> = ({ /* Destructure props here */ }) => {
  return (
    <div className=" w-[100%] h-full flex md:flex-row flex-col">
        <div className='flex flex-col justify-center pl-[3px] sm:w-[50%] w-full text-[#b3afaf]  font-mono'>
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
        <section className="sm:block hidden rounded-md bg-white bg-opacity-10  backdrop-blur-sm h-[100%] border-none w-[50%] flex items-center justify-end">
        <ComputersCanvas/>
        </section>
     
    </div>
  );
};

export default Home;