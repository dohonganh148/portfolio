import React from "react";
import styles from "./Banner.module.scss";
import avatar from "../../images/avatar.png";
import {
  FaMapMarkerAlt,
  FaPhoneSquareAlt,
  FaEnvelope,
  FaGithub,
} from "react-icons/fa";

const Banner = () => {
  const contacts = [
    {
      icon: <FaGithub />,
      data: "https://github.com/dohonganh148",
      link: "https://github.com/dohonganh148",
    },
    {
      icon: <FaPhoneSquareAlt />,
      data: "0374033946",
    },
    {
      icon: <FaEnvelope />,
      data: "dohonganh148hup@gmail.com",
    },
    {
      icon: <FaMapMarkerAlt />,
      data: "Ho Tung Mau, Ha Noi",
    },
  ];
  return (
    <div className={styles.banner} id="home">
      <div className={styles.overlay}></div>
      <div className="container">
        <div className={styles.content}>
          <img className={styles.avatar} src={avatar} alt="avatar" />
          <div className={styles.subtitle}>Hello, my name is Do Hong Anh</div>
          <h1>I AM FRONT-END DEVELOPER</h1>
          <a href="https://www.topcv.vn/xem-cv/VVVTUAFUUFJQBFUEUQ0FCQhUVQUBBlIMV1UHBw7c9c" target="blank">
          <button className={styles.btnDiscover}>My CV</button>
          </a>
          <div className={styles.contact}>
            {contacts.map((item, index) => (
              <a href={item.link} target={"blank"} key={index}>
                {item.icon}
                <span>{item.data}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
