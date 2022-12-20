import React from "react";
import styles from './Title.module.scss';

const Title = (props) => {
    return(
        <div className={styles.heading}>
            <h2 className={styles.texth2}>{props.item.texth2}</h2>
            <hr />
        </div>
    )
}

export default Title;