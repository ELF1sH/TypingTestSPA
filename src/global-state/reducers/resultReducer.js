const ADD_TO_RESULT = 'ADD_TO_RESULT'
const RESET_RESULT = 'RESET_RESULT'

const initialState = {
    currentResult: 0
}

const reducer = (state = initialState, action) => {
    let newState = { ...state }

    switch (action.type) {
        case ADD_TO_RESULT:
            newState.currentResult++
            return newState

        case RESET_RESULT:
            newState.currentResult = 0
            return newState

        default:
            return newState
    }
}
export default reducer




export const addToResult = () => {
    return dispatch => {
        dispatch({
            type: ADD_TO_RESULT
        })
    }
}

export const resetResult = () => {
    return dispatch => {
        dispatch({
            type: RESET_RESULT
        })
    }
}