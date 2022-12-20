import React from "react";
import CardInfor from "../../components/CardInfor/CardInfor";
import {FaGraduationCap} from 'react-icons/fa';
import styles from './Experience.module.scss';
import 'animate.css';
import Title from "../../components/Title/Title";

const Experience = () => {
    const item = {
        texth2: 'EXPERIENCE'
    }
    const infor = [
        {
            icon: <FaGraduationCap />,
            title: 'FRONTEND STUDENT',
            year: '06/2022 - present',
            inst: 'CyberSoft Academy',
            desc: 'Learning Frontend skills: HTML, SCSS, Javascript, ES6, Restful API, ReactJS, Redux'
        },
        {
            icon: <FaGraduationCap />,
            title: "BACHELOR'S DEGREE",
            year: '2016-2021',
            inst: 'Hanoi University of Pharmacy',
            desc: 'GPA: 3.59'
        },
    ];
    return(
        <div className={styles.experience} id="experience">
            <div className="container">
            <Title item={item}/>
            {infor.map( (item) => (
                <div className={`${styles.col} wow animate__animated animate__fadeInRight`}>
                    <CardInfor item={item}/>
                </div>
                
            ))}
        </div>
        </div>
        
    )
}

export default Experience;