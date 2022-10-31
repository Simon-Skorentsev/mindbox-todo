import React from "react";
import styles from "./Filter.module.css";

function Filter(props: FilterProps) {

    return (
        <div className={styles.wrapper} onClick={props.onClick}>
            <div className={styles.image}>
                <img src={props.imgSrc} />
            </div>
        </div>
    );
}

interface FilterProps {
    onClick: () => void,
    imgSrc: string
}

export default React.memo(Filter);