import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleUp } from "@fortawesome/free-solid-svg-icons";
import styles from './topButton.module.css';

const TopScroll = () => {
    const clickToTop = () => {
        window.scroll({top:0, left:0, behavior: 'smooth'})
    }
    return (
        <span className={styles.btn} onClick={clickToTop} >
            <FontAwesomeIcon icon={faAngleUp}/>    
        </span>
        
    )
}

export default TopScroll;