import React from "react";
import image1 from "../../../assets/vector (1).png";
import image2 from "../../../assets/vector (2).png";
import image3 from "../../../assets/Vector (3).png";
import image4 from "../../../assets/Group 3589.png";
const Footer = () => {
    const images = [
        image1,
        image2,
        image3,
        image4
    ];
    return (
        <div>
            <div className="p-4">
                <div className="container mx-auto flex justify-center items-center">
                    <div className="text-[#2B54FF] text-2xl font-bold ml-24 ">SQL BOT</div>
                    <ul className="flex space-x-4 ml-[460px] text-sm ">
                        <li>
                            <a href="#team" >Team</a>
                        </li>
                        <li>
                            <a href="#case" className=" hover:text-gray-200">Case Studies</a>
                        </li>

                        <li>
                            <a href="#publications" className=" hover:text-gray-200">Publications</a>
                        </li>

                    </ul>                     
                    <div className="flex justify-center items-center gap-2 ">

                    {images.map((image, index) => (
                       <div className="p-4 rounded-full  border border-blue-700 ">
                            <img key={index} src={image} alt={`Image ${index + 1}`} className="max-w-full h-auto " /></div>
                        ))}
                    </div>

                </div>
            </div>
        </div>
    );
};
export default Footer;