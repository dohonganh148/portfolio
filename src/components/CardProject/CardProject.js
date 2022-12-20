import React from "react";
import styles from './CardProject.module.scss';

const CardProject = (props) => {
    return(
        <div className={styles.card}>
            <div className={styles.item}>
                <a href={props.item.link} target="blank">
                    <figure>
                        <img alt="" src={props.item.img}/>
                        <figcaption>
                            <p className={styles.title}>{props.item.type}</p>
                        </figcaption>
                    </figure>
                </a>
            </div>
        </div>
    )
}

export default CardProject;