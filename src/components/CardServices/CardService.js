import React from "react";
import styles from "./CardService.module.scss";

const CardService = (props) => {
    return (
        <div className={styles.col}>
            <div className={styles.card}>
                <div className={styles.icon}>{props.item.icon}</div>
                <h6 className={styles.title}>{props.item.title}</h6>
                <ul>
                    {props.item.desc.map((item,index)=> (
                        <li className={styles.desc} key={index}>{item}</li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default CardService;