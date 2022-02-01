import styles from './MainInput.module.css'

import React, { useState } from 'react';
import { turnNextWord } from '../../../global-state/reducers/boardReducer';
import { useDispatch, useSelector } from 'react-redux';

import Timer from '../timer/Timer';
import { toggleTimer } from '../../../global-state/reducers/timerReducer';
import { addToResult } from '../../../global-state/reducers/resultReducer';

function MainInput() {

    const [curValue, setCurValue] = useState("")

    const dispatch = useDispatch()
    const timerState = useSelector(state => state.timer)
    const boardState = useSelector(state => state.board)

    const handleChange = (event) => {
        if (!timerState.isActive) {
            dispatch(toggleTimer())
        }

        setCurValue(event.target.value)
        if (event.target.value.length > 0 && event.target.value.slice(-1) === " ") {
            setCurValue("")
            dispatch(turnNextWord())
            if (event.target.value.slice(0, -1) === boardState.firstLine[boardState.currentWord]) {
                dispatch(addToResult())
            }
            console.log(event.target.value.slice(0, -1))
            console.log(boardState.firstLine[boardState.currentWord])
        }
    }

    return (
        <div className={`d-flex ${styles.main_input_wrapper}`}>
            <input type={"text"} className={styles.main_input} value={curValue} onChange={handleChange} />
            <span className={styles.time_span}><Timer /></span>
            <button className={styles.btn_redo}><i className="fas fa-redo fa-1x"></i></button>
        </div>
    )
}

export default MainInput;
