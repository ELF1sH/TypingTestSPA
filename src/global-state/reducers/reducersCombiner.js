import { combineReducers } from 'redux'
import timerReducer  from './timerReducer'
import boardReducer from './boardReducer'

const reducers = combineReducers({
    timer: timerReducer,
    board: boardReducer
})

export default reducers