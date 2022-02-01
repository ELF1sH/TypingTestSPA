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
            <span>Result: {resultStore.currentResult} words</span>
            <NavLink to="/" onClick={handleClick}>Give me another try</NavLink>
        </div>
    )
}

export default ResultCard;
