import React from "react";
import {FaDownload} from 'react-icons/fa'
import styles from './Description.module.scss'

const Hobbies = () => {
  return (
    <div className={styles.row}>
      <div className={styles.top}>
        <p>
        Hi, I'm Hong Anh, my interests are in Front End Engineering, and I love to create beautiful and performant products with delightful user experiences.
        </p>
        <p>
        I can work with ReactJS and Javascript at a basic level. I'm trying to learn more day by day to become more proficient. Good communication and always listen to people. I also help experience in HTML, SCSS, ES6,...
        </p>
      </div>
      <div className={styles.bottom}>
        <button className={styles.btnResume}>
          <span><FaDownload /></span>DOWNLOAD RESUME</button>
      </div>
    </div>
  );
};

export default Hobbies;
