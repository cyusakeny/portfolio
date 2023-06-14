/* eslint-disable react/jsx-key */
import Home from '@/components/Home';
import React,  { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowCircleLeft, faArrowCircleRight, faContactCard, faHomeLgAlt, faHouseUser} from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faCircle, faUser } from '@fortawesome/free-regular-svg-icons';
import Profile from '@/components/Profile';

interface MyComponentProps {
}

const MyComponent: React.FC<MyComponentProps> = ({ /* Destructure props here */ }) => {

  return (
    <div className=" flex flex-col bg-[#080103] h-screen overflow-y-hidden">
      <div className="mt-[10px] text-white bg-black flex flex-row justify-end 
       pr-[23%] space-x-[11%]">
        <p className="flex flex-row cursor-pointer hover:border-b-[1px]
         border-white">
          <FontAwesomeIcon icon={faHouseUser} className=" w-[20px] h-[20px] "/>
          Home</p>
        <p className="flex flex-row cursor-pointer hover:border-b-[1px]
         border-white">
          <FontAwesomeIcon icon={faUser} className=" w-[16px] h-[20px]" />
          Profile</p>
        <p className="flex flex-row cursor-pointer hover:border-b-[1px]
         border-white">
          <FontAwesomeIcon icon={faContactCard} className=" w-[20px] h-[20px]"/>
          Contact</p>
      </div>
      <div className="overflow-y-auto h-[82%] w-[80%] mt-[30px] ml-[8%] scrollbar-track-bg-gray-200 
      scrollbar-thumb-[var(--scrollbar-color)]">
      <Profile/>
      </div>
      <div className="flex absolute w-[98%]  bottom-[2%] flex-row justify-end ">
      <FontAwesomeIcon icon={faCircle} className="text-[#b3afaf] w-[20px] h-[30px] "/>
      <FontAwesomeIcon icon={faCircle} className=" text-[#4dacbf] ml-[23px] w-[20px] h-[30px]"/>
      <FontAwesomeIcon icon={faCircle} className="text-[#b3afaf] ml-[23px] w-[20px] h-[30px]"/>
      <div className="flex flex-row space-x-[42px] ml-[520px]">
      <FontAwesomeIcon icon={faArrowCircleLeft} className=" text-[#b3afaf] w-[50px] h-[30px]"/>
      <FontAwesomeIcon icon={faArrowCircleRight} className=" text-[#b3afaf] w-[50px] h-[30px]"/>
      </div>
      </div>
      <div className=" absolute bottom-[14%] text-[1px] left-[1%] w-[3%]">
      <FontAwesomeIcon icon={faLinkedin} className=" text-[#b3afaf] w-[20px] h-[30px]"/>
      <FontAwesomeIcon icon={faTwitter} className=" text-[#b3afaf] w-[20px] h-[30px]"/>
      <FontAwesomeIcon icon={faFacebook} className="text-[#b3afaf] w-[20px] h-[30px]" />
      </div>
      <div className=" text-[#b3afaf] text-center flex flex-col space-y-[20px] absolute bottom-[54%] w-[3%] left-[90%]">
      <p>01</p>
      <p className="font-bold text-xl">02</p>
      <p>03</p>
      </div>
    </div>
  );
};

export default MyComponent;