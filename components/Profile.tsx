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
                 text-[#b3afaf]">Skills</h1>
                <div className=" grid grid-cols-3 gap-6">
                    <Skill imageSrc="/react.png" language="React Js" level="Expert" color="bg-[#348c4b]"
                    experience="5+ years of experience."/>
                    <Skill imageSrc="/node.png" language="Node Js" level="Expert" color="bg-[#348c4b]"
                     experience="5+ years of experience. "/>
                    <Skill imageSrc="/postgres.png" language="Postgres" level="Expert" color="bg-[#348c4b]"
                     experience="5+ years of experience. "/>
                    <Skill imageSrc="/spring.png" language="Spring" level="Intermediate" color="bg-[#3239c7]"
                     experience="3+ years of experience. "/>
                    <Skill imageSrc="ai.png" language="Machine Learning" level="Beginner" color="bg-[#ed7824]"
                     experience="New to this field. "/>
                    <Skill imageSrc="/python.png" language="Python" level="Intermediate" color="bg-[#3239c7]"
                     experience="3+ years of experience. "/>
                    <Skill imageSrc="/redis.png" language="Redis" level="Expert" color="bg-[#348c4b]"
                     experience="3+ years of experience. "/>
                    <Skill imageSrc="/cloud.png" language="Cloud" level="Intermediate" color="bg-[#3239c7]"
                     experience="1+ years of experience"/>
                    <Skill imageSrc="/c++.png" language="C++" level="Intermediate" color="bg-[#3239c7]"
                     experience="2+ years of experience. "/>
                </div>
            </div>
            <div className="flex flex-col space-y-[20px]">
                <h1 className="text-2xl font-bold underline underline-offset-8
                 text-[#b3afaf]">Experience</h1>
                <div className="grid grid-cols-3 gap-6">
                <Skill imageSrc="/sidehustle.png" language="Side Hustle" level="Internship" color="bg-[#76cee8]"
                    experience="Software Developer. "/>
                 <Skill imageSrc="/andela.png" language="Andela" level="Internship" color="bg-[#76cee8]"
                    experience="Full-stack Developer. "/>
                <Skill imageSrc="/cotis.jpeg" language="Cotis ltd" level="Paid job" color="bg-[#0fdb42]"
                    experience="Network Engineer. "/>
                </div>
            </div>
            <div className="flex flex-col space-y-[40px]">
                <h1 className="text-2xl font-bold underline underline-offset-8
                 text-[#b3afaf]">Works</h1>
                <div className="grid grid-cols-3 gap-6">
               <Works  imageSrc="/commerce.png" language="E-Commerce" 
                    experience="https://pro1commerce.netlify.app/"/>
                <Works  imageSrc="/ori.png" language="Three Js" 
                    experience="https://origame.netlify.app/"/>
                <Works  imageSrc="/rconnect.png" language="Connectivity"
                    experience="https://rconnect.netlify.app/"/>
                </div>
            </div>
        </div>
    )
}
export default Profile;