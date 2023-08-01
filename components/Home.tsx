import React from 'react';

interface MyComponentProps {
}

const Home: React.FC<MyComponentProps> = ({ /* Destructure props here */ }) => {
  return (
    <div className="  w-[100%] flex flex-row">
        <div className='flex flex-col pl-[3px] w-[50%] text-[#b3afaf]  font-mono'>
        <p className="text-2xl">Hi! We&apos;re</p>
        <p className="text-5xl font-bold mb-[33px] mt-[13px]">The Vitals</p>
        <hr className="w-[70px] ml-[2px] border-t-[1px] border-[#b3afaf]" />
        <p className="mt-[45px]">
        Vitals is a cohesive and passionate group, driven by a shared vision to create positive change worldwide. Their unity strengthens their resolve to improve the world well-being and make a lasting impact on society. Through their collective efforts and determination, they aspire to build a better future for all, fostering a healthier, happier, and more sustainable planet. With a common dream, Vitals strives to address pressing global challenges and empower individuals to lead healthier lives while promoting social and environmental harmony.
        </p>

        </div>
        <div className=" h-full  w-[50%] ">
        <img src="/logo.png" alt="" className="w-full h-[500px] object-cover"/>
        </div>
     
    </div>
  );
};

export default Home;