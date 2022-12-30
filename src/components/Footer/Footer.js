import React from "react";
import styles from "./Footer.module.scss";

const Footer = () => {
  const menu = [
    { label: "home", link: "#home" },
    { label: "about", link: "#about" },
    { label: "skills", link: "#skills" },
    { label: "projects", link: "#projects" },
    { label: "experience", link: "#experience" },
  ];
  return (
    <div className={styles.footer}>
      <div className="container">
        <div className={styles.row}>
          <div className={styles.desc}>
            <h3>Do Hong Anh</h3>
          </div>
          <div className={styles.link}>
            <ul className={styles.menu}>
              {menu.map((item, index) => (
                <li key={index}>
                  <a href={item.link}>{item.label}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
