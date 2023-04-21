import {applyMiddleware, combineReducers, createStore} from 'redux'
import mainReducer from "./mainReducer";
import usersReducer from "./usersReducer"
import createSagaMiddleware from "redux-saga"
import {rootWatcher} from "../saga";

const sagaMiddleware = createSagaMiddleware()

const rootReducer = combineReducers({
    main: mainReducer,
    users: usersReducer
})

export const store = createStore(
    rootReducer,
    applyMiddleware(sagaMiddleware)
)

sagaMiddleware.run(rootWatcher)