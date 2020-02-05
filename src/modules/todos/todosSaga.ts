import { takeEvery, select } from 'redux-saga/effects'
import { getTodos, setTodos } from '../../services/localSrorage'
import { ITodo, IActionTodo } from '../../interfaces'

function* addTodosWorker(action: IActionTodo) {
    const todos = yield select(getTodos)
    setTodos([...todos, action.payload])
}

function* removeTodosWorker(action: IActionTodo) {
    const todos = yield select(getTodos)
    setTodos(todos.filter((todo: ITodo) => todo.id !== action.payload.id))
}

function* toggleTodosWorker(action: IActionTodo) {
    const todos = yield select(getTodos)
    const updatedTodos = todos.map((todo: ITodo) => {
        if (todo.id === action.payload) {
            todo.completed = !todo.completed
        }

        return todo
    })

    setTodos(updatedTodos)
}

export function* localStorageSaga() {
    yield takeEvery('add', addTodosWorker)
    yield takeEvery('remove', removeTodosWorker)
    yield takeEvery('toggle', toggleTodosWorker)
}