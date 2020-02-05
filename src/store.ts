import { createStore, applyMiddleware, compose } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { getTodos as getTodosFromStorage } from './services/localSrorage'
import rootReducer, { rootSaga } from './modules'

const getInitialState = () => {
    const todos = getTodosFromStorage()
    return {
        todos
    }
}

const createAppStore = () => {
    const sagaMiddleware = createSagaMiddleware();

    const store = createStore(rootReducer, getInitialState(),
        compose(applyMiddleware(sagaMiddleware),
            (window as any).__REDUX_DEVTOOLS_EXTENSION__ &&
            (window as any).__REDUX_DEVTOOLS_EXTENSION__()))

    sagaMiddleware.run(rootSaga)

    return store
}

export default createAppStore