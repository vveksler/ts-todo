import { ITodo } from '../interfaces';

export const getTodos = () => JSON.parse(
    localStorage.getItem('todos') || '[]'
) as ITodo[];

export const setTodos = (todos: ITodo[]) =>
    localStorage.setItem('todos', JSON.stringify(todos))
