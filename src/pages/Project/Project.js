import React from "react";
import styles from "./Project.module.scss";
import Title from "../../components/Title/Title";
import CardProject from "../../components/CardProject/CardProject";
import management from "../../images/management.png";
import products from "../../images/products.png"
import movie from "../../images/movie.png"
import masterwork from "../../images/masterwork.png"
import samar from "../../images/samar.png"
import bake from "../../images/bake.png"
import 'animate.css';

const Project = () => {
  const item = {
    texth2: "MY SAMPLE PROJECTS",
  };

  const projectList = [
      {
          type: 'MANAGEMENT',
          img: management,
          link: "https://management-gold.vercel.app"
      },
      {
        type: 'PRODUCTS',
        img: products,
        link: "https://products-psi-nine.vercel.app"
    },
    {
        type: 'MOVIE BOOKING',
        img: movie,
        link: "https://movie-one-lime.vercel.app",
    },
    {
        type: 'MASTERWORK',
        img: masterwork,
        link: "https://masterwork-lime.vercel.app",
    },
    {
        type: 'SAMAR',
        img: samar,
        link: "https://samar-omega.vercel.app",
    },
    {
        type: 'BAKE',
        img: bake,
        link: "https://bake-roan.vercel.app",
    },
  ]
  return (
    <div className={styles.project} id="projects">
      <Title item={item} />
      <div className="container">
        <div className={styles.projectList}>
            {projectList.map( (item) => (
              <div className= {`${styles.col} wow animate__animated animate__zoomIn`}>
                <CardProject item={item}/>
              </div>
                
            ))}
            
        </div>
      </div>
    </div>
  );
};

export default Project;
