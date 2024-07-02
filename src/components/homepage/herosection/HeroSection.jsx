import React from "react";
import Hero from "../../../assets/3260 1.png"
import Group from "../../../assets/Group.png"
const HeroSection=()=>{
    return (
        <div >
            <img src={Hero} alt="hersectionimg" className="relative" />
            <div className="flex flex-row justify-center gap-16 mt-0 absolute top-80">
                <div className="text-left max-w-[30%] h-[400px]">
                    <div>
                    <h1 className="text-7xl text-bold font-serif">Learn With</h1>
                    <br/>
                    <h1 className="text-6xl text-bold font-serif text-[#2B54FF]">SQL QUIZBOT</h1>
                    </div>
                    <br/>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris lacus leo, feugiat id faucibus in, rhoncus eu nisi. Nunc tincidunt dignissim urna eu iaculis. Suspendisse nulla tortor, volutpat nondictum vel, imperdiet at nulla. Pellentesque lobortis quam lorem, pretiumull amcorper lectus </p>
                    <div className="text-sm flex flex-row gap-2 mt-10">
                    <button className=" text-[#2B54FF] p-2 border border-[#2B54FF] rounded-3xl  ">Join Prep Community</button>
                    <button className=" text-white p-2 bg-[#2B54FF] px-4 rounded-3xl  ">Pads</button>

                    </div>
                </div>
                <div className="max-w-[50%] flex ml-7 h-[420px] w-auto">
                    <img src={Group} alt="img" />
                </div>
                <div className="text-center absolute top-[450px] ">
                <p>Trusted by talents with <span className="text-[#2B54FF]">$240K+ compensation offers at</span></p>
            </div>
                
            </div>
            
            
        </div>

    );
};
export default HeroSection;