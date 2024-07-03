import React from "react";
import img from "../../../assets/Group (1).png"
const Section = () => {
    return (
        <div>
            <div className="bg-[#2B54FF] h-[545px] mt-10 relative overflow-hidden">
                <img src={img} alt="img" className="absolute  -top-[270px] lg:top-0 right-0 transform rotate-180 " />
                <img src={img} alt="img " className="absolute left-0  -bottom-[270px] lg:bottom-0" />
                <div className="flex flex-col justify-center items-center h-[545px]">
                    <h1 className="text-center text-white text-5xl font-serif">Get Started Today</h1>
                    <p className="text-center text-white mt-2 text-sm">Don't leave success up to chance.</p>
                    <div className="flex justify-center mt-8">
                        <button className="text-white border border-white px-4 p-2 rounded-3xl hover:text-[#2B54FF] hover:bg-white">Get started</button>
                    </div>
                </div>
            </div>
            <div className="h-[500px] text-center flex flex-col justify-center items-center">
                <p className="text-gray-400">UPSKILL FOR A BETTER FUTURE</p>
                <h1 className="text-5xl mt-4 font-serif">Request More Information</h1>
                <p className="text-gray-400 text-sm mt-2 mb-5" >Lorem Ipsum is simply dummy text of the printing and typesetting <br /> industry.</p>
                <button className="px-4 p-2 bg-[#2B54FF] rounded-3xl text-white ">Contact Us</button>
                <p className="text-gray-400 my-16"> @ 2023 LLC</p>
            </div>
            <div className="flex justify-center">
                <hr className="h-[1.8px] bg-slate-500 w-[80%] flex justify-center" />
            </div></div>
    );
};
export default Section;