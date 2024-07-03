import React from "react";
import image1 from "../../../assets/discord.png";
import image2 from "../../../assets/twitter.png";
import image3 from "../../../assets/fb.png";
import image4 from "../../../assets/insta.png";

const Footer = () => {
  const images = [
    image1,
    image2,
    image3,
    image4
  ];

  return (
    <div className=" p-4">
      <div className="container mx-auto flex flex-col lg:flex-row justify-between items-center">
        <div className="text-[#2B54FF] text-2xl font-bold mb-4 lg:mb-0">SQL BOT</div>
        
        <ul className="flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-4 text-sm mb-4 lg:mb-0">
          <li>
            <a href="#team" className="hover:text-gray-600">Team</a>
          </li>
          <li>
            <a href="#case" className="hover:text-gray-600">Case Studies</a>
          </li>
          <li>
            <a href="#publications" className="hover:text-gray-600">Publications</a>
          </li>
        </ul>
        
        <div className="flex justify-center items-center gap-2">
          {images.map((image, index) => (
            <div key={index} className="p-2 rounded-full border border-blue-700">
              <img src={image} alt={`Image ${index + 1}`} className="max-w-full h-auto" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Footer;
