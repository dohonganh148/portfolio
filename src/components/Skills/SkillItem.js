import React from "react";
import styles from "./SkillItem.module.scss"

const SkillItem = (props) => {
    return (
        <div className={styles.skillbar}>
            <p className={styles.skillbarTitle}>{props.item.skill}</p>
            <div style={{width: props.item.evaluate}} className={styles.skillbarBar}></div>
        </div>
    )
}

export default SkillItem;