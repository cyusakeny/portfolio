import React from "react";
import Skill from "./skills";
interface MyComponentProps {
}
const Profile: React.FC<MyComponentProps> = ({ /* Destructure props here */ }) => {
    return(
        <div className=" flex flex-col">
            <div className="flex flex-col space-y-[20px]">
                <h1 className="text-2xl font-bold underline underline-offset-8
                 text-[#b3afaf]">Skills</h1>
                <div className=" grid grid-cols-3 gap-4">
                    <Skill imageSrc="/react.png" text="Lorem ipsum dolor sit amet"/>
                    <Skill imageSrc="/react.png" text="Lorem ipsum dolor sit amet"/>
                    <Skill imageSrc="/react.png" text="Lorem ipsum dolor sit amet"/>
                    <Skill imageSrc="/react.png" text="Lorem ipsum dolor sit amet"/>
                    <Skill imageSrc="/react.png" text="Lorem ipsum dolor sit amet"/>
                </div>
            </div>
            <div className="flex flex-col ">
                <h1>Experience</h1>
                <div className="">
                    Svelte
                </div>
            </div>
            <div className="flex flex-col ">
                <h1>Works</h1>
                <div className="">
                    Svelte
                </div>
            </div>
        </div>
    )
}
export default Profile;