import { IStore, ITodo } from '../../interfaces'

export const getTodos = (state: IStore): ITodo[] => state.todos
export const getTodoById = (state: IStore, id: number): any  => getTodos(state).find(todo => todo.id === id)