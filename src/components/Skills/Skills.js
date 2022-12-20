import React from "react";
import styles from "./Skills.module.scss";
import SkillItem from "./SkillItem";

const Skills = () => {
    const skills = [
        {
            skill: 'TEAM WORK',
            evaluate: '80%'
        },
        {
            skill: 'DEVELOPMENT',
            evaluate: '70%'
        },
        {
            skill: 'ENGLISH',
            evaluate: '60%'
        },
    ];
    return(
        <div className={styles.skill}>
            <h4 className={styles.title}>MY SKILLS</h4>
            <div>
                {skills.map ( (item) => (
                    <SkillItem item={item}/>
                ))}
            </div>
        </div>
    )
};

export default Skills;