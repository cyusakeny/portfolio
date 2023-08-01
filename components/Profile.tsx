import React from "react";
import Skill from "./skills";
import Works from "./work";
interface MyComponentProps {
}
const Profile: React.FC<MyComponentProps> = ({ /* Destructure props here */ }) => {
    return(
        <div className=" flex flex-col space-y-[10px]">
            <div className="flex flex-col space-y-[20px]">
                <h1 className="text-2xl font-bold underline underline-offset-8
                 text-[#b3afaf]">Connect Rwanda</h1>
                <div className="">
                    <p className="text-[white]">An innovative project designed to empower Rwandan Engineers by providing them with 
                    a comprehensive platform to explore diverse opportunities 
                    across Africa. Through this initiative, 
                    engineers can access valuable information on job openings, networking events, and collaboration prospects in various regions. By
                     fostering cross-border connections, Connect Rwanda aims to enhance professional growth, promote knowledge exchange, and facilitate partnerships, ultimately contributing to the development of engineering expertise throughout Africa.</p>
                <div className="flex flex-wrap space-x-[63px] mt-[25px] justify-center">
                    <div className="w-64 h-64 border border-gray-400">
                    <img src="/grp1.jpg" alt="" className="w-full h-[300px] object-cover"/>
                    </div>
                    <div className="w-64 h-64 border border-gray-400">
                    <img src="/grp2.jpg" alt="" className="w-full h-[300px] object-cover"/>
                    </div>
                    <div className="w-64 h-64 border border-gray-400">
                    <img src="/group3.jpg" alt="" className="w-full h-[300px] object-cover"/>
                    </div>


                </div>
                </div>
            </div>
            
           
        </div>
    )
}
export default Profile;