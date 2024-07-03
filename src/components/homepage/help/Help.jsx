import React from "react";
import Img1 from "../../../assets/network2.png";
import Img2 from "../../../assets/network3.png";
import Img3 from "../../../assets/img1.png";
import Img4 from "../../../assets/img2.png";
import Img5 from "../../../assets/img3.png";
import Img6 from "../../../assets/img4.png";
import Img7 from "../../../assets/img5.png";
import Img8 from "../../../assets/img6.png";




const Help = () => {
    const items = [
        {
            title: "Access Premium Courses",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris lacus leo, feugiat id faucibus in, rhoncus eu nisi. Nunc tincidunt dignissim urna eu iaculis. Suspendisse nulla tortor, volutpat nondictum vel, imperdiet at nulla. Pellentesque lobortis quam lorem, pretiumull amorper lectus",
            img: Img8
        },
        {
            title: "Prep with a Coach!",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris lacus leo, feugiat id faucibus in, rhoncus eu nisi. Nunc tincidunt dignissim urna eu iaculis. Suspendisse nulla tortor, volutpat nondictum vel, imperdiet at nulla. Pellentesque lobortis quam lorem, pretiumull amorper lectus",
            img: Img3
        },
        {
            title: "Practice SQL!",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris lacus leo, feugiat id faucibus in, rhoncus eu nisi. Nunc tincidunt dignissim urna eu iaculis. Suspendisse nulla tortor, volutpat nondictum vel, imperdiet at nulla. Pellentesque lobortis quam lorem, pretiumull amorper lectus",
            img: Img4
        },
        {
            title: "Aggregate Functions!",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris lacus leo, feugiat id faucibus in, rhoncus eu nisi. Nunc tincidunt dignissim urna eu iaculis. Suspendisse nulla tortor, volutpat nondictum vel, imperdiet at nulla. Pellentesque lobortis quam lorem, pretiumull amorper lectus",
            img: Img5
        },
        {
            title: "Queries and Subqueries!",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris lacus leo, feugiat id faucibus in, rhoncus eu nisi. Nunc tincidunt dignissim urna eu iaculis. Suspendisse nulla tortor, volutpat nondictum vel, imperdiet at nulla. Pellentesque lobortis quam lorem, pretiumull amorper lectus",
            img: Img6
        },
        {
            title: "Python Coding",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris lacus leo, feugiat id faucibus in, rhoncus eu nisi. Nunc tincidunt dignissim urna eu iaculis. Suspendisse nulla tortor, volutpat nondictum vel, imperdiet at nulla. Pellentesque lobortis quam lorem, pretiumull amorper lectus",
            img: Img7
        },
    ];
    return (
        <div>
            <img src={Img1} alt="img1" className="absolute left-0 h-screen" />
            <img src={Img2} alt="img2" className="absolute right-0 h-screen" />
            <div className="flex items-center justify-center">
                <div className=" relative mt-0 w-[75%] lg:w-[55%] flex flex-col h-auto   ">
                    <h1 className="text-3xl font-serif text-center mt-12">How we can <span className="text-bold text-[#2B54FF]">HELP YOU!</span> </h1>
                    <p className="text-center mt-2 ">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris lacus leo, feugiat id faucibus in, rhoncus eu nisi. Nunc tincidunt dignissim urna eu iaculis. Suspendisse nulla tortor, volutpat nondictum vel, imperdiet at nulla. Pellentesque lobortis quam lorem, pretiumull amcorper lectus </p>
                    <div className="p-4 ">
                        {items.map((item, index) => (
                            <div key={index} className={`flex flex-col lg:flex-row ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''} items-center rounded-lg overflow-hidden mb-8`}>
                                <div className="p-4 lg:p-8">
                                    <h2 className="text-2xl font-serif mb-4">{item.title}</h2>
                                    <p className="text-gray-700  bg-white">{item.text}</p>
                                </div>
                                <img src={item.img} alt={item.title} className="w-auto lg:w-1/2 h-auto lg:h-auto object-cover" />
                            </div>
                        ))}

                    </div>
                </div>

            </div>

        </div>
    );
}
export default Help;