import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { countDownTimer } from '../../../global-state/reducers/timerReducer';

function Timer() {

    const timerState = useSelector(state => state.timer)

    const dispatch = useDispatch()

    useEffect(() => {
        console.log("effect")
        setInterval(() => {
            dispatch(countDownTimer())
        }, 1000)
    }, [])

    return <span>{timerState.time}</span>
}

export default Timer;
