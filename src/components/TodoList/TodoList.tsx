import React from 'react';
import { useSelector } from 'react-redux'
import { getTodos } from '../../modules/todos/todosSelectors'
import { ITodo, IStore } from '../../interfaces';
import { TodoItem } from '../TodoItem'

export const TodoList: React.FC = () => {
  const todos = useSelector((state: IStore) => getTodos(state));

  console.log('render Todo List');
  return (
    <ul data-testid="todo-list">
      {todos.length ? (
        todos.map((todo: ITodo) =>
          <TodoItem
            key={todo.id}
            todo={todo}
          ></TodoItem>)
      ) : (
          <p className="center">List of todos empty...</p>
        )}
    </ul>
  );
};
