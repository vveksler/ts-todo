import { spawn } from 'redux-saga/effects'
import { combineReducers } from 'redux'

import { localStorageSaga } from './todos/todosSaga'
import todosReducer from './todos/todosReducer'

export * from './todos/todosAC'
export * from './todos/todosSelectors'

export default combineReducers({ todos: todosReducer })

export function* rootSaga() {
    yield spawn(localStorageSaga)
}