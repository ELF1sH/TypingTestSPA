const COUNT_DOWN = "COUNT_DOWN"
const TOGGLE_TIMER = "TOGGLE_TIMER"

const initialState = {
    time: 60,
    isActive: false
}

const reducer = (state = initialState, action) => {
    let newState = { ...state }

    switch (action.type) {
        case COUNT_DOWN:
            if (newState.isActive && newState.time > 0) {
                newState.time = newState.time - 1
            }
            else if (newState.isActive && newState.time === 0) {
                newState.time = 60
                newState.isActive = false
            }
            return newState

        case TOGGLE_TIMER:
            newState.isActive ? newState.isActive = false : newState.isActive = true
            if (!newState.isActive) newState.time = 60
            return newState

        default: 
            return state
    }
}
export default reducer




export const countDownTimer = () => {
    return dispatch => {
        dispatch({
            type: COUNT_DOWN
        })
    }
}

export const toggleTimer = () => {
    return dispatch => {
        dispatch({
            type: TOGGLE_TIMER
        })
    }
}