/*
包含多个reducer函数的模块
 */
import {combineReducers} from 'redux'

import {ADDCOMMENT, DELETECOMMENT, RECEIVECOMMENT} from './action-types'

const initComments = [
    // {username:'Tom',content:'123'},
    // {username:'Jack',content:'345'}
]

function modifyComment(state = initComments, action) {
    switch (action.type) {
        case ADDCOMMENT:
            return [action.data, ...state]
        case DELETECOMMENT:
            return state.filter((comment, index) => index !== action.data)
        case RECEIVECOMMENT:
            return action.data
        default:
            return state
    }
}

function counter(state = 0, action) {
    switch (action.type) {
        case ADDCOMMENT:
            return state + action.data
        case DELETECOMMENT:
            return state - action.data
        default:
            return state
    }
}

export default combineReducers({
    modifyComment,
    counter
})
