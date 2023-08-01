import React from 'react';
interface MyComponentProps {
}
const About: React.FC<MyComponentProps> = ({ /* Destructure props here */ }) => {
    return (
      <div className="w-[90%] mx-auto mt-[6.8%] space-y-[12px] flex flex-col">
         <div className=" flex flex-col space-y-[6px] ">
         <h1 className="text-2xl font-normal underline underline-offset-8
                 text-[#b3afaf]">About Me</h1>
         <p className="place-self-end text-white">
         I am a dedicated and hardworking individual who consistently goes the 
         extra mile to deliver exceptional results. With a software engineering degree 
         as the foundation of my expertise, I possess a strong technical background and a 
         knack for solving complex problems. My innovative mindset allows me to approach 
         challenges from unique angles, constantly seeking creative solutions.
        Collaboration and teamwork are integral to my work style, and I thrive in environments 
        that foster open communication and cooperation. I believe that a cohesive team can achieve 
        remarkable outcomes by combining diverse skills and perspectives. As an avid learner, I 
        embrace new technologies and methodologies with enthusiasm, always striving to stay at the 
        forefront of industry advancements.Beyond my professional pursuits, I have a deep love for music,
        which serves as a source of inspiration and relaxation. Whether I&apos;m playing an instrument or exploring different genres, 
        music brings joy to my life. Additionally, my passion for quantum computing drives me to stay 
        informed about the latest developments and breakthroughs in this exciting field.
         </p>
         </div>
         <div className="flex flex-col space-y-[6px]">
         <h1 className="text-2xl font-normal underline underline-offset-8
                 text-[#b3afaf]"> Contact: </h1>
         <p><span className='text-[#f6f5fa] font-bold'> Email:</span> <span className='text-white'>gasananike@gmail.com</span> </p>
         <p><span className='text-[#f6f5fa] font-bold'>Phone: </span> <span className='text-white'>250790705784</span></p>
         <p><span className='text-[#f6f5fa] font-bold'>Location:</span>  <span className='text-white'>International</span> </p>
         </div>
      </div>
    );
  };
  
  export default About;