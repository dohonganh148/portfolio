import React, { useEffect, useState } from "react";
import styles from "./Navbar.module.scss";
import clsx from "clsx";
import useScrollspy from "../../hooks";
const Navbar = () => {
  const [style, setStyle] = useState(styles.nav);
  const menuList = [
    { label: "HOME", link: "#home" },
    { label: "ABOUT", link: "#about" },
    { label: "SKILLS", link: "#skills" },
    { label: "PROJECTS", link: "#projects" },
    { label: "EXPERIENCE", link: "#experience" },
  ];
  const activeId = useScrollspy(
    menuList.map((item) => item.label.toLowerCase()),
    90
  );

  useEffect(() => {
    window.addEventListener("scroll", changeStyle);
    return () => {
      window.removeEventListener("scroll", changeStyle);
    };
  });
  const changeStyle = () => {
    if (window.scrollY >= 90) {
      setStyle(`${styles.navActive} ${styles.nav}`);
    } else {
      setStyle(styles.nav);
    }
  };
  return (
    <div className={style}>
      <div className="container">
        <div className={styles.row}>
          <div className={styles.col}>
            <a href="#home" className={clsx(styles.brand, styles.navbar)}>
              Do Hong Anh
            </a>
          </div>
          <div className={styles.col}>
            {menuList.map((item) => (
              <a
                href={item.link}
                className={`${styles.navbar} ${
                  activeId === item.label.toLowerCase() ? styles.active : ""
                }`}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
