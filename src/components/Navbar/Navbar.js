import React, { useEffect, useState } from "react";
import styles from "./Navbar.module.scss";
import clsx from "clsx";
import useScrollspy from "../../hooks";
import { Dropdown, Space } from "antd";
import {SlMenu} from "react-icons/sl";

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

  // DROPDOWN
  const items = [
    {
      label: <a href="#home">HOME</a>,
      key: "0",
    },
    {
      label: <a href="#about">ABOUT</a>,
      key: "1",
    },
    {
      label: <a href="#skills">SKILLS</a>,
      key: "2",
    },
    {
      label: <a href="#projects">PROJECTS</a>,
      key: "3",
    },
    {
      label: <a href="#experience">EXPERIENCE</a>,
      key: "4",
    },
  ];

  return (
    <div className={style}>
      <div className="container">
        <div className={styles.row}>
          <div className={styles.col}>
            <a href="#home" className={clsx(styles.brand, styles.navbar)}>
              Do Hong Anh
            </a>
          </div>
          <div className={`${styles.col} ${styles.col2}`}>
            {menuList.map((item, index) => (
              <a
                key={index}
                href={item.link}
                className={`${styles.navbar} ${
                  activeId === item.label.toLowerCase() ? styles.active : ""
                }`}
              >
                {item.label}
              </a>
            ))}
          </div>
          <div className={styles.dropdown}>
            <Dropdown
              menu={{
                items,
              }}
              trigger={["click"]}
            >
              <a href="#home" onClick={(e) => e.preventDefault()}>
                <Space>
                  <SlMenu />
                </Space>
              </a>
            </Dropdown>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
