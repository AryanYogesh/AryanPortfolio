import React from "react";
import '../styles/AboutMePage.css';
import school from '../assets/education/svcs.jpg';
import puc from '../assets/education/mes.jpg';
import college from '../assets/education/cit.jpg';


const AboutMePage = () =>{
    return(
        <div className="about-me">
            <section className="intro">
                <h1>Aryan Yogesh Here!</h1>
                <h2>Python Full-Stack Developer</h2>
                <p>passionate python Fullstack Developer with a love for creating innovative web applications. I specialize in building full-stack solutions using modern technologies, such as React, Node.js and Python

                I am constantly learning and improving my skills to create user-friendly, efficient, and dynamic web experiences. When I'm not coding, I enjoy exploring new tech trends, building personal projects, and solving real-world problems with code.</p>
            </section>

            <section className="education">
                
                <div className="college">
                    <img src={college} alt="college" className="college-img"/>
                    <div className="college-info">
                        <h3>B.E CSE</h3>
                        <p>Graduated in B.E from Cambridge Institute of technology in the year 2024, where I excelled in Data Structures and Computer Graphics and scored a GPA of 6.9. I developed a passion for technology and problem-solving during my studies.</p>
                    </div>
                </div>

                <div className="pu-college">
                    <div className="pu-college-info">
                        <h3>PU College</h3>
                        <p>Completed my Pre-University from MES BRS PU College in the year 2020, where I excelled in science and mathematics and scored GPA of 6.4, I developed a passion for technology and problem-solving during my studies.</p>
                    </div>
                    <img src={puc} alt="pu College" className="pu-college-img" />
                </div>

                <div className="school">
                    <img src={school} alt="school" className="school-img"/>
                    <div className="school-info">
                        <h3>Class 10</h3>
                        <p>Graduated from SV Central School in the year 2018, where I excelled in science and social studies and scored a GPA of 7.6 . I developed a passion for technology and problem-solving during my studies.</p>
                    </div>
                </div>
            
            </section>



            <section className="resume">
                <h2>My Resume</h2>
                <a href="resume.pdf" download>
                    <button className="resume-button">Download Resume</button>
                </a>
            </section>
        </div>
    );
};

export default AboutMePage;