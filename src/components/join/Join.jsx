import React from "react";
import join from "../../assets/arrow.png";
import image1 from "../../assets/x1.png";
import image2 from "../../assets/x2.png";
import image3 from "../../assets/x3.png";
import image4 from "../../assets/x4.png";

const Join = () => {
    const images = [
        image1,
        image2,
        image3,
        image4
    ];

    return (
        <div className="flex flex-col justify-center mt-16">
            <div className="flex justify-center">
                <div className="w-[70%] grid grid-cols-1 lg:grid-cols-2 gap-16 mt-6">
                    <div>
                        <img src={join} alt="join" className="h-auto w-auto" />
                    </div>
                    <div>
                        <h1 className="text-5xl text-end font-serif mt-24">Join Our <br /><span className="text-blue-700">Community</span></h1>
                        <p className="text-end my-3 text-sm">At SQL Quizbot, we believe in the power of collaboration and open communication, and we have a number of communities that you can join to connect with other like-minded.</p>
                        <div className="flex justify-end">
                            <button className="text-white bg-blue-700 py-2 px-4 rounded-3xl">Join Us</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex justify-center mt-10">
                <div className=" w-[60%] grid grid-cols-2 gap-4 mt-6">
                    {images.map((image, index) => (
                        <img key={index} src={image} alt={`Image ${index + 1}`} className="max-w-full h-auto" />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Join;
