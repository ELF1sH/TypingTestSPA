import styles from './ResultCard.module.css'
import { NavLink } from "react-router-dom";

import React from 'react';

function ResultCard() {
    return (
        <div className={styles.result_card}>
            <span>Result: 43 words</span>
            <NavLink to="/">Give me another try</NavLink>
        </div>
    )
}

export default ResultCard;
