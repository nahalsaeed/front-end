import React from "react";
import Group from "../../../assets/Group.png";
import '../../../App.css';
import Google from "../../../assets/image 3.png";
import Image1 from "../../../assets/image 4.png";
import Image2 from "../../../assets/image 5.png";
import Image3 from "../../../assets/image 6.png";
import Image4 from "../../../assets/image 7.png";
import Image5 from "../../../assets/image 8.png";

const HeroSection = () => {
    return (
        <div >
            <div className="herosectionimg"></div>
            <div className="flex justify-center  -mt-44 ">
                <div className="grid sm:grid-cols-1 lg:grid-cols-2 gap-8 mx-8 lg:mx-16">
                    <div className="text-left lg:max-w-[80%] h-auto lg:ml-20 lg:mt-10">
                        <h1 className="text-7xl font-bold font-serif">Learn With</h1>
                        <br />
                        <h1 className="text-6xl font-bold font-serif text-[#2B54FF]">SQL QUIZBOT</h1>
                        <br />
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris lacus leo, feugiat id faucibus in, rhoncus eu nisi. Nunc tincidunt dignissim urna eu iaculis. Suspendisse nulla tortor, volutpat nondictum vel, imperdiet at nulla. Pellentesque lobortis quam lorem, pretium ullamcorper lectus.</p>
                        <div className="text-sm flex flex-row gap-2 mt-10">
                            <button className="text-[#2B54FF] p-2 border border-[#2B54FF] rounded-3xl">Join Prep Community</button>
                            <button className="text-white p-2 bg-[#2B54FF] px-4 rounded-3xl">SQL Pads</button>
                        </div>
                    </div>
                    <div className="flex justify-center items-center lg:max-w-[100%] h-auto">
                        <img src={Group} alt="img" className="max-h-[420px] w-auto" />
                    </div>
                </div>
            </div>
            <div className="text-center mt-20 ">
                <p>Trusted by talents with <span className="text-[#2B54FF]">$240K+ compensation offers at</span></p>
            </div>

            <div className="mt-4 items-center  flex justify-center flex-row gap-2">
                <img src={Google} alt="img1" className="h-12 w-auto" />
                <img src={Image1} alt="img2" className="h-12 w-auto" />
                <img src={Image2} alt="img3" className="h-12 w-auto" />
                <img src={Image3} alt="img4" className="h-12 w-auto" />
                <img src={Image4} alt="img5" className="h-12 w-auto" />
                <img src={Image5} alt="img6" className="h-12 w-auto" />
            </div>


        </div>

    );
};
export default HeroSection;