import styles from './ResultCard.module.css'

import React from 'react';

function ResultCard() {
    return (
        <div className={styles.result_card}>
            <span>Result: 43 words</span>
        </div>
    )
}

export default ResultCard;
