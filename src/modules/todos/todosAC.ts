import { ITodo } from '../../interfaces';
import { getTodos as getTodosFromStorage } from '../../services/localSrorage'

export const addTodo = (title: string) => {
  const newTodo: ITodo = {
    title: title,
    id: Date.now(),
    completed: false
  };

  return {
    type: 'add',
    payload: newTodo
  };
};

export const toggleTodo = (id: number) => ({
  type: 'toggle',
  payload: {
    id
  }
})

export const removeTodo = (id: number) =>
  ({
    type: 'remove',
    payload: {
      id
    }
  });

export const fetchTodos = () => {
  const todos = getTodosFromStorage()

  return {
    type: 'fetchTodos',
    payload: todos
  }
}