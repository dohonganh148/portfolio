import React from "react";
import styles from './CardInfor.module.scss';

const CardInfor = (props) => {
    return(
        <div className={styles.cardInfor}>
            <div className={styles.icon}><p>{props.item.icon}</p></div>
            <div className={styles.aboutInfor}>
                <h5 className={styles.title}>{props.item.title}</h5>
                <p className={styles.year}>{props.item.year}</p>
                <p className={styles.inst}>{props.item.inst}</p>
                <p className={styles.desc}>{props.item.desc}</p>
            </div>
        </div>
    )
}

export default CardInfor;