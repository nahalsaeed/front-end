import React from "react";
import HeroSection from "../herosection/HeroSection";
import Banner from "../banner/Banner";
import Help from "../help/Help";
import Banner2 from "../banner2/Banner2";
import Join from "../../join/Join";
import Section from "../section/Section";
import Footer from "../footer/Footer";
const Header = () => {
    return (
        <div>
            <nav className="bg-[#2B54FF] p-4">
                <div className="container mx-auto flex justify-between items-center">
                    <div className="text-white text-2xl font-bold ml-24 fon">SQL BOT</div>
                    <ul className="flex space-x-4 ml-[460px] text-sm">
                        <li>
                            <a href="#home" className="text-white hover:text-gray-200">Home</a>
                        </li>
                        <li>
                            <a href="#about" className="text-white hover:text-gray-200">SQL pad</a>
                        </li>

                        <li>
                            <a href="#contact" className="text-white hover:text-gray-200">Contact Us</a>
                        </li>

                    </ul>
                    <div className="flex space-x-4">
                        <button className="text-white text-sm border p-2 rounded-3xl">Create Account</button>
                        <button className="bg-white text-sm text-[#2B54FF] rounded-3xl  px-8"> Login</button>
                    </div>
                </div>

            </nav>
            <HeroSection />
            <Banner />
            <Help />
            <Banner2 />
            <Join/>
            <Section/>
            <Footer/>
        </div>

    );
};
export default Header;