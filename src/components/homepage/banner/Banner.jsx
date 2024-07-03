import React from "react";
import Group1 from "../../../assets/Subtract (1).png";
import Group2 from "../../../assets/Group (1).png";
import group3 from "../../../assets/Group (2).png";
import group4 from "../../../assets/Group (3).png";
import group5 from "../../../assets/Vector.png";



const Banner = () => {
    return (
        <div className="bg-[#2B54FF] mt-10 w-screen h-auto  relative overflow-hidden ">
            <img src={Group1} alt="stripes" className="absolute -top-72 right-0 h-[500px]  lg:h-[800px] " />
            <img src={Group2} alt="img" className="absolute -bottom-[264px] h-[400px] lg:h-auto" />
            <div className="flex items-center justify-center">
                <div className="w-[60%] flex flex-col mt-44 ">
                    <h1 className="text-3xl font-serif text-white text-left">
                        Benefits of Using SQL Quiz Bot!
                    </h1>
                    <p className="text-left text-white">
                        Discover the advantages of integrating AI into your SQL and NoSQL operations.
                    </p>
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 text-white max-w-6xl mt-24">
                        <div className="flex flex-col items-center text-left ">
                            <img src={group3} alt="Icon 1" className="w-16 mb-8" />
                            <h2 className="text-xl font-semibold mb-2 ">Save Hours Googling Around</h2>
                            <p>
                                With this service, you can generate SQL queries in seconds. This is a
                                game-changer for those who are constantly working with large databases
                                and need quick results.
                            </p>
                        </div>
                        <div className="flex flex-col items-center text-left ">
                            <img src={group4} alt="Icon 2" className="w-16 mb-8" />
                            <h2 className="text-xl font-semibold mb-2">Cost-Effective and Highly Productive</h2>
                            <p>
                                The service is incredibly affordable. It’s a small investment that can save
                                you countless hours of work, making it a cost-effective solution for any
                                data analyst.
                            </p>
                        </div>
                        <div className="flex flex-col items-center text-left  mb-10 ">
                            <img src={group5} alt="Icon 3" className="w-16 mb-8" />
                            <h2 className="text-xl font-semibold mb-2">Suitable for All Levels</h2>
                            <p>
                                Whether you’re a beginner or an experienced data analyst, this service can
                                boost your SQL productivity and proficiency. It’s designed to be
                                user-friendly and accessible to all levels of experience.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Banner;