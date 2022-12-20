import React from "react";
import CardService from "../../components/CardServices/CardService";
import Title from "../../components/Title/Title";
import styles from "./Skills.module.scss";
import {SlAnchor, SlEqualizer, SlMicrophone, SlLayers, SlSupport} from 'react-icons/sl';
import {FiUsers} from 'react-icons/fi';
import 'animate.css';


const Services = () => {
  const item = {
    texth2: "SKILLS",
  };
  const services = [
    {
      icon: <SlAnchor />,
      title: "PROGRAMING LANGUAGE",
      desc: ["HTML/CSS/SASS", "Javascript", "ES6"],
    },
    {
      icon: <SlEqualizer />,
      title: "FRAMEWORKS & LIBRARIES",
      desc: ["ReactJS/Redux", "Bootstrap/Ant Design", "Restful API/JSON"],
    },
    {
      icon: <SlMicrophone />,
      title: "VERSION CONTROL",
      desc: ["Git"],
    },
    {
      icon: <SlLayers />,
      title: "IDE",
      desc: ["Visual code"],
    },
    {
      icon: <SlSupport />,
      title: "FOREIGN LANGUAGE",
      desc: ["English: intermediate"],
    },
    {
      icon: <FiUsers />,
      title: "KNOWLEDGE",
      desc: ["Good understanding about the Agile and Scrum process", "Good time management, presentation and teamwork skills"],
    },
  ];
  return (
    <div className={styles.services}>
      <div className="container" id="skills">
        <Title item={item} />
        <div className={styles.row}>
            {services.map ( (item) => (
              <div className= {`${styles.col} wow animate__animated animate__fadeInUp`}>
                <CardService item={item}/>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
