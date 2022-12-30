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
        <a href="https://www.topcv.vn/xem-cv/VVVTUAFUUFJQBFUEUQ0FCQhUVQUBBlIMV1UHBw7c9c" target="blank">
        <button className={styles.btnResume}>
          <span><FaDownload /></span>DOWNLOAD RESUME</button>
        </a>
      </div>
    </div>
  );
};

export default Hobbies;
