import React, { useState } from "react";
import HeroSection from "../herosection/HeroSection";
import Banner from "../banner/Banner";
import Help from "../help/Help";
import Banner2 from "../banner2/Banner2";
import Join from "../../join/Join";
import Section from "../section/Section";
import Footer from "../footer/Footer";
import { Link } from "react-router-dom";

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div className="overflow-hidden">
            <nav className="bg-[#2B54FF] p-4">
                <div className="container mx-auto flex justify-between items-center">
                    <div className="text-white text-2xl font-bold ml-24 fon">SQL BOT</div>
                    
                    <button
                        onClick={toggleMenu}
                        className="lg:hidden inline-flex items-center justify-center p-2 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                        aria-controls="mobile-menu"
                        aria-expanded={isMenuOpen}
                    >
                        <span className="sr-only">Open main menu</span>
                        {isMenuOpen ? (
                            <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        ) : (
                            <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                            </svg>
                        )}
                    </button>

                    <ul className="hidden lg:flex space-x-4 ml-[460px] text-sm">
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

                    <div className="hidden lg:flex space-x-4">
                        <button className="text-white text-sm border p-2 rounded-3xl hover:text-[#2B54FF] hover:bg-white">
                            <Link to="/SignUp">Create Account</Link>
                        </button>
                        <button className="bg-white text-sm border text-[#2B54FF] rounded-3xl px-8 hover:bg-[#2B54FF] hover:text-white hover:border-white">
                            <Link to="/Login">Login</Link>
                        </button>
                    </div>
                </div>

                {isMenuOpen && (
                    <div className="lg:hidden">
                        <ul className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                            <li>
                                <a href="#home" className="text-white hover:text-gray-200 block px-3 py-2 rounded-md text-base font-medium">Home</a>
                            </li>
                            <li>
                                <a href="#about" className="text-white hover:text-gray-200 block px-3 py-2 rounded-md text-base font-medium">SQL pad</a>
                            </li>
                            <li>
                                <a href="#contact" className="text-white hover:text-gray-200 block px-3 py-2 rounded-md text-base font-medium">Contact Us</a>
                            </li>
                        </ul>
                        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                            <button className="w-full text-white text-sm border p-2 rounded-3xl hover:text-[#2B54FF] hover:bg-white">
                                <Link to="/SignUp">Create Account</Link>
                            </button>
                            <button className="w-full bg-white text-sm border text-[#2B54FF] rounded-3xl px-8 hover:bg-[#2B54FF] hover:text-white hover:border-white mt-2">
                                <Link to="/Login">Login</Link>
                            </button>
                        </div>
                    </div>
                )}
            </nav>

           
        </div>
    );
};

export default Header;
