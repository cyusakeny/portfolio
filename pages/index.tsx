/* eslint-disable react/jsx-key */
import Home from '@/components/Home';
import React, { useState } from 'react';
import Head from 'next/head';
import classNames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowCircleLeft, faArrowCircleRight, faHouseUser, faUserCircle} from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faCircle, faUser } from '@fortawesome/free-regular-svg-icons';
import Profile from '@/components/Profile';
import About from '@/components/About';


const MyComponent: React.FC = () => {
const [activeIndex, setIndex] = useState<number>(1);
const Icon1 = classNames("w-[20px] h-[30px] ",{
    'text-[#f57316]': activeIndex === 1,
    'text-[#b3afaf]': activeIndex!==1
  });
  const Icon2 = classNames("w-[20px] ml-[23px] h-[30px]",{
    'text-[#f57316]': activeIndex === 2,
    'text-[#b3afaf]': activeIndex!==2
  });
  const Icon3 = classNames("w-[20px] ml-[23px] h-[30px]",{
    'text-[#f57316]': activeIndex === 3,
    'text-[#b3afaf]': activeIndex!==3
  });
  const Page1 = classNames({
    'font-bold text-2xl ': activeIndex === 1,
  });
  const Page2 = classNames({
    'font-bold text-2xl': activeIndex === 2,
  });
  const Page3 = classNames({
    'font-bold text-2xl': activeIndex === 3,
  });
  const HandLeftIcon = ()=>{
    if(activeIndex===1){
      setIndex(3)
    }
    else{
      setIndex(activeIndex-1)
    }
  }
  const HandRightIcon = ()=>{
    if(activeIndex===3){
      setIndex(1)
    }
    else{
      setIndex(activeIndex+1)
    }
  }
const Display =()=>{
  if(activeIndex===1){
    return <Home/>
  }
  else if(activeIndex===2){
    return <Profile/>
  }
  else{
    return <About/>
  }
}
  return (
    <>
        <Head>
        <title>Cyusa Keny</title>
      </Head>
    <div className=" flex flex-col bg-[#04001f] h-screen overflow-y-hidden">
      <div className="mt-[10px] text-white  flex flex-row justify-end 
       pr-[23%] space-x-[11%]">
        <p className="flex flex-row cursor-pointer hover:border-b-[1px]
         border-white" onClick={()=>{setIndex(1)}}>
          <FontAwesomeIcon icon={faHouseUser} className=" w-[20px] h-[20px] "/>
          Home</p>
        <p className="flex flex-row cursor-pointer hover:border-b-[1px]
         border-white" onClick={()=>{setIndex(2)}}>
          <FontAwesomeIcon icon={faUser} className=" w-[16px] h-[20px]" />
          Profile</p>
        <p className="flex flex-row cursor-pointer hover:border-b-[1px]
         border-white" onClick={()=>{setIndex(3)}}>
          <FontAwesomeIcon icon={faUserCircle} className=" w-[20px] h-[20px]"/>
          About Me</p>
      </div>
      <div className="overflow-y-auto h-[82%] w-[80%] mt-[30px] ml-[8%] scrollbar scrollbar-thumb-[#f5f5f5]
      scrollbar-w-[3px]  
      ">
      {Display()}
      </div>
      <div className="flex absolute w-[98%]  bottom-[2%] flex-row justify-end ">
      <FontAwesomeIcon icon={faCircle} className={Icon1}/>
      <FontAwesomeIcon icon={faCircle} className={Icon2}/>
      <FontAwesomeIcon icon={faCircle} className={Icon3}/>
      <div className="flex flex-row space-x-[42px] ml-[520px]">
      <FontAwesomeIcon icon={faArrowCircleLeft} className="cursor-pointer text-[#b3afaf] w-[50px] h-[30px]" onClick={HandLeftIcon}/>
      <FontAwesomeIcon icon={faArrowCircleRight} className="cursor-pointer text-[#b3afaf] w-[50px] h-[30px]"onClick={HandRightIcon}/>
      </div>
      </div>
      <div className=" absolute bottom-[14%] text-[1px] left-[1%] w-[3%]">
       <a href="https://www.linkedin.com/in/cyusa-munezero-keny-172b621bb/"><FontAwesomeIcon icon={faLinkedin} className=" text-[#b3afaf] w-[23px] h-[30px]"/></a> 
       <a href=""><FontAwesomeIcon icon={faTwitter} className=" text-[#b3afaf] w-[23px] h-[30px]"/></a>
      <a href=""><FontAwesomeIcon icon={faFacebook} className="text-[#b3afaf] w-[23px] h-[30px]" /></a>
      </div>
      <div className=" text-[#b3afaf] text-center flex flex-col space-y-[20px] absolute bottom-[54%] w-[3%] left-[90%]">
      <p className={Page1}>01</p>
      <p className={Page2}>02</p>
      <p className={Page3}>03</p>
      </div>
    </div>
    </>
  );
};

export default MyComponent;