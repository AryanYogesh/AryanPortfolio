import React from "react";
import '../styles/HeroSection.css';
import HeroImage from '../assets/HeroSec.jpg';
import { motion } from 'framer-motion';
import { Link } from "react-router-dom";
// import Particles from 'react-tsparticles';


const HeroSection = () =>{
    return(
        <div className="hero-section">
            
            <motion.div className="hero-content"
                initial={{opacity:0, x:-100}}
                animate={{opacity:1, x:0}}
                transition={{duration:1}}
            >
                <h1 className="headline">
                    Hi, I'm <span className="highlight">Aryan</span>
                </h1>
                <h2 className="typewriter-text">
                    Crafting Modern Web Experiences & Tech Solutions
                </h2>
                <div className="hero-buttons">
                    <Link to="/projects">
                        <motion.button className="btn primary-btn"
                            whileHover={{scale:1.1}}
                            whileTap={{ scale: 0.9 }}
                        >View My Work</motion.button>
                    </Link>
                    <Link to="/contact">
                        <motion.button className="btn secondary-btn"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                        >Contact Me</motion.button>
                    </Link>
                    
                </div>
            </motion.div>
            <motion.div className="hero-image"
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
            >
                <img src={HeroImage} alt="Aryan Yogesh"/>
            </motion.div>
        </div>
    );
};

export default HeroSection;