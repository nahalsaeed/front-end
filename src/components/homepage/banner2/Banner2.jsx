import React from "react";
import Group1 from "../../../assets/Subtract (1).png";
import Group2 from "../../../assets/Group (1).png";
import group from "../../../assets/Group (4).png";
import group4 from "../../../assets/Group (5).png";

const Banner2=()=>{
    return(
        <div className="bg-[#2B54FF] mt-[72rem] w-screen h-[80vh] relative">
        <img src={Group1} alt="stripes" className="absolute -top-72 right-0 h-[800px]" />
        <img src={Group2} alt="img" className="absolute -bottom-[264px]" />
        <div className="flex items-center justify-center">
            <div className="w-[60%] flex flex-col mt-44 ">
                <h1 className="text-3xl font-serif text-white text-center">
                    Practice SQL and Python coding for Interviews
                </h1>
                <p className="text-center text-white">
                    The web leverages AI-powered natural language processing to generate a wide range of SQL questions that cover different aspects of SQL, including basic queries, filtering, sorting, joins, subqueries, aggregate functions, and more.
                </p>
            </div>
        </div>
        <div className="p-4 flex flex-col justify-center items-center mt-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                <div className="border-2 border-white shadow-md rounded-lg overflow-hidden p-10">
                    <img src={group} alt="Item 1" className="w-full h-auto object-cover" />
                </div>
                <div className="border-2 border-white shadow-md rounded-lg overflow-hidden p-10">
                    <img src={group4} alt="Item 2" className="w-full h-auto object-cover" />
                </div>
            </div>
            <div className="flex justify-center items-center mt-12">
                <button className="text-white text-base border p-2 px-5 rounded-3xl">Get Started</button>
            </div>
        </div>
    </div>
    
    );
};
export default Banner2;