import styles from './ResultCard.module.css'
import { NavLink } from "react-router-dom";

import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { resetResult } from '../../../global-state/reducers/resultReducer';

function ResultCard() {

    const resultStore = useSelector(state => state.result)
    const dispatch = useDispatch()

    const handleClick = () => {
        dispatch(resetResult())
    }

    return (
        <div className={styles.result_card}>
            <span className={styles.result_title}>
                <span className={styles.result_digit}>{resultStore.currentResult}</span> words
            </span>
            <span className={styles.message}>not bad, but could be better🐢</span>
            <button className={styles.btn_restart}>
                <NavLink to="/" onClick={handleClick} className={styles.link_restart}>ok, try again</NavLink>
            </button>
        </div>
    )
}

export default ResultCard;
