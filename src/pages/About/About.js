import React from "react";
import Description from "../../components/Description/Description";
import Skills from "../../components/Skills/Skills";
import Title from "../../components/Title/Title";
import styles from './About.module.scss';

const About = () => {
    const item = {
        texth2: 'ABOUT ME'
    }
    return(
        <div className="container" id="about">
            <Title item={item}/>
            <div className={styles.row}>
                <div className={styles.col1}>
                    <Description />
                </div>
                <div className={styles.col2}>
                    <Skills />
                </div>
            </div>
        </div>
    )
}

export default About;