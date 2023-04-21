const ADD_CASH = 'ADD_CASH'
const GET_CASH = 'GET_CASH'
export const ASYNC_ADD_CASH = 'ASYNC_ADD_CASH'
export const ASYNC_GET_CASH = 'ASYNC_GET_CASH'

const initialState = {
    cash: 10
}

export default function mainReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_CASH:
            return {...state, cash: state.cash + action.payload}

        case GET_CASH:
            return {...state, cash: state.cash - action.payload}

        default:
            return state
    }
}

export const addCash = (payload) => ({type: ADD_CASH, payload})
export const asyncAddCash = (payload) => ({type: ASYNC_ADD_CASH, payload})
export const getCash = (payload) => ({type: GET_CASH, payload})
export const asyncGetCash = (payload) => ({type: ASYNC_GET_CASH, payload})