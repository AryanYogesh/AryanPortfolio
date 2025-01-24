import React from "react";
import { useNavigate } from "react-router-dom";
import '../styles/Projectscomp.css';
import brianbuster from '../assets/brainbuster/brainbusterhome.png';
import {motion} from "framer-motion";

const Projectscomp = () =>{
    const navigate = useNavigate();

    return(
        <div className="projects-container">
            <h1 className="projects-heading">
                My Projects
            </h1>
            <p className="projects-description">
            I am passionate about building full-stack web applications and solving real-world problems 
            through innovative solutions. My projects range from interactive platforms to robust backend systems, 
            and here’s a glimpse of one of my favorites:
            </p>
            <motion.div className="project-card"
                whileHover={{scale:1.05}}
                initial={{opacity:0, y: 50}}
                animate={{opacity:1, y:0}}
                transition={{duration:0.5}}
            >
                <div className="project-image">
                    <img src={brianbuster} alt="project thumbnail"/>
                </div>
                <div className="project-info">
                    <h2>Brain Buster</h2>
                    <p>
                    BrainBusters is a comprehensive MERN stack-based aptitude testing platform featuring over 500 questions 
                    across various levels, including Easy, Medium, Hard, and HOTS (Higher Order Thinking Skills). 
                    It offers mock tests, flexible accessibility, and expert-curated content to help users prepare effectively 
                    for competitive exams. With a focus on user-friendly design and performance, BrainBusters is ideal for learners of all levels.
                    </p>
                </div>
            </motion.div>
            <div className="view-all-projects">
                    <button             className="view-project-button"             onClick={()=> navigate("/         projects")}>
                        View All Projects
                    </button>
            </div>
        </div>
    );
};

export default Projectscomp;