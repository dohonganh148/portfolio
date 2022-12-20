import React from "react";
import styles from './InforBox.module.scss';

const InforBox = (props) => {
    return(
        <div className={styles.row}>
            <div className={styles.icon}>
                <p>{props.item.icon}</p>
            </div>
            <div className={styles.desc}>
                <p>{props.item.title}</p>
                <h6>{props.item.detail}</h6>
            </div>
        </div>
    )
}

export default InforBox;