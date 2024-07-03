import React from "react";
import Header from "../header/Header";
import HeroSection from "../herosection/HeroSection";
import Banner from "../banner/Banner";
import Help from "../help/Help";
import Banner2 from "../banner2/Banner2";
import Join from "../../join/Join";
import Section from "../section/Section";
import Footer from "../footer/Footer";
const Home = () => {
    return (
        <div className="overflow-hidden">
            <Header />
            <HeroSection />
            <Banner />
            <Help />
            <Banner2 />
            <Join />
            <Section />
            <Footer />F
        </div>
    );
};
export default Home;