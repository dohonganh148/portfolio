import React from 'react';
import styles from './Tag.module.scss';

const Tag = (props) => {
    return (
        <div className={styles.tag}>
            <div className={styles.icon}>{props.item.icon}</div>
            <h5>{props.item.title}</h5>
        </div>
    )
}

export default Tag;