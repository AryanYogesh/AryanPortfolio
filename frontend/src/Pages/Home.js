import React from "react";
import HeroSection from '../Components/HeroSection'
import AboutMe from "../Components/AboutMe";
import Contact from "../Components/Contact";
import Projectscomp from "../Components/Projectscomp";

const Home = () => {
    return(
        <div>
            <HeroSection/>
            <AboutMe/>
            <Projectscomp/>
            <Contact/>
        </div>
    )
}

export default Home;