import {put, takeEvery} from 'redux-saga/effects'
import {addCash, ASYNC_ADD_CASH, ASYNC_GET_CASH, getCash} from "../vanilaRedux/mainReducer";

const delay = (ms) => new Promise(res => setTimeout(res, ms))

function* incrementWorker() {
    yield delay(1000)
    yield put(addCash(10))
}

function* decrementWorker() {
    yield delay(1000)
    yield put(getCash(10))
}

export function* countWatcher() {
    yield takeEvery(ASYNC_ADD_CASH, incrementWorker)
    yield takeEvery(ASYNC_GET_CASH, decrementWorker)
}