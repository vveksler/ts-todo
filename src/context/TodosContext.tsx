import React, { useEffect, useReducer } from 'react';
import { getItems, setItems } from '../services/localSrorage';
import { fetchTodos } from '../modules/todos/todosAC'
import todosReducer from '../modules/todos/todosReducer';

const TodosDispatch = React.createContext<any>(null);

const TodosProvider: React.FC = ({ children }) => {
  const [todos, dispatch] = useReducer(todosReducer, []);

  useEffect(() => {
    const saved = getItems('todos');

    dispatch(fetchTodos(saved))
  }, []);

  useEffect(() => {
    setItems('todos', todos);
  }, [todos]);

  return (
    <TodosDispatch.Provider value={{ dispatch, todos }}>
      {children}
    </TodosDispatch.Provider>
  );
};

export { TodosDispatch, TodosProvider };
