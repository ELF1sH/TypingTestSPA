import styles from './MainInput.module.css'

import React, { useState } from 'react';
import { turnNextWord } from '../../../global-state/reducers/boardReducer';
import { useDispatch, useSelector } from 'react-redux';

import Timer from '../timer/Timer';
import { toggleTimer } from '../../../global-state/reducers/timerReducer';
import { addToResult } from '../../../global-state/reducers/resultReducer';
import { updateState } from '../../../global-state/reducers/resultReducer';
import { resetState } from '../../../global-state/reducers/resultReducer';
import { resetListOfCorrectWords } from '../../../global-state/reducers/resultReducer';

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

        dispatch(updateState(event.target.value, boardState.firstLine[boardState.currentWord])) 

        if (event.target.value.length > 0 && event.target.value.slice(-1) === " ") {
            setCurValue("")
            dispatch(turnNextWord())
            dispatch(resetState())
            if (event.target.value.slice(0, -1) === boardState.firstLine[boardState.currentWord]) {
                dispatch(addToResult(boardState.currentWord))
            }
            if (boardState.firstLine.length === boardState.currentWord + 1) {
                dispatch(resetListOfCorrectWords())
            }
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
