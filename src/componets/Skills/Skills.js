import React from 'react';
import './Skills.css';

const Skills = ({ title, subText }) => {
    const skills = subText.split(',');

    return (
        <div className="section">
            <h3 className="section-heading">{title}</h3>
            <div className="skills-list">
                {skills.map((skill, index) => (
                    <div className="skills-list-item" key={index}>
                        <div className="bubble">
                            <span>{skill.trim()}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Skills;
