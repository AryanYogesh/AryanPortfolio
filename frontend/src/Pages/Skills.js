import React from "react";
import '../styles/Skills.css';

const Skills = () =>{
    const skillss = {
        programming: [
            {name: "Python", icon: "🐍", description: "Experienced in Python for data analysis and web development.", level:90},
            {name: "JavaScript", icon: "📜", description: "Proficient in building dynamic web applications.", level:85}
        ],
        webDevelopment: [
            { name: "React", icon: "⚛️", description: "Built multiple projects using React for front-end development.", level: 80},
            { name: "Node.js", icon: "🟩", description: "Backend development with Express.js." , level:75},
        ],
        tools: [
            { name: "Git", icon: "🔧", description: "Version control and collaboration.", level:88 },
            { name: "Docker", icon: "🐳", description: "Containerized application deployment." , level: 70},
        ],
        databases: [
            { name: "SQL", icon: "💾", description: "Experience with relational databases and writing complex queries." , level:85},
            { name: "MongoDB", icon: "🍃", description: "Worked on NoSQL databases for scalable applications.", level:75 },
        ],
    };

    return(
        <div className="skills-page">
            <div
            className="background-animation"></div>
            <h1>My Skills</h1>

            <p className="skills-tagline">
                I am a passionate full-stack developer with expertise in crafting efficient, scalable, and user-friendly solutions.
                My skill set spans various programming languages, frameworks, and tools, ensuring high-quality project delivery.
            </p>

            {Object.keys(skillss).map((category)=>(
                <div key={category} className="skill-category">
                    <h2>{category.replace(/([a-z])([A-Z])/g, "$1 $2")}</h2>
                    <div className="skill-badges">
                        {skillss[category].map((skill, index)=>(
                            <div key={index} className="skill-card">

                                <div className="skill-card-front">
                                    <div className="skill-icon">
                                        {skill.icon}
                                    </div>
                                    <h3>{skill.name}</h3>

                                    <div className="progress-bar-container">
                                        <div className="progress-bar"
                                            style={{width: `${skill.level}%`}}
                                        >
                                            {skill.level}%
                                        </div>
                                    </div>
                                    
                                </div>
                                
                                <div className="skill-card-back">
                                     <p className="skill-description">{skill.description}</p>
                                     <p>Related Projects: Coming soon!</p>
                                </div>
                               
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Skills;