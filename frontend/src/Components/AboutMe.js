import React from "react";
import '../styles/AboutMe.css';
import {useNavigate} from 'react-router-dom';
import AboutImg from '../assets/AboutMe.png';

const AboutMe = () =>{
    const navigate = useNavigate();

    return(
        <div className="about-me-section">
            <div className="about-me-image">
                <img src={AboutImg} alt="about illustration"/>
            </div>
            <div className="about-me-content">
                <h2 className="about-me-heading">
                    About Me
                </h2>
                <p className="About-me-description">
                    Hi, Im Aryan Yogesh, a passionate python Fullstack Developer with a love for creating innovative web applications. I specialize in building full-stack solutions using modern technologies, such as React, Node.js and Python
                </p>
                <p className="about-me-description">
                    I am constantly learning and improving my skills to create user-friendly, efficient, and dynamic web experiences. When I'm not coding, I enjoy exploring new tech trends, building personal projects, and solving real-world problems with code.
                </p>
                <p className="quote">
                    "Code is not just a tool, but a canvas for innovation."
                </p>
                <button className="btn know-more-btn" onClick={() => navigate('/aboutme')}>
                    Know More
                </button>
            </div>
        </div>
    );
};

export default AboutMe;