import React, { useEffect, useReducer } from 'react';
import { TodoForm } from '../components/TodoForm';
import { TodoList } from '../components/TodoList';
import { getItems, setItems } from '../services/localSrorage';
import {
    addHandler,
    toggleHandler,
    removeHandler
} from '../modules/todos/todosAC';
import todosReducer from '../modules/todos/todosReducer';

export const TodosPage: React.FC = () => {
    const [todos, dispatch] = useReducer(todosReducer, []);

    useEffect(() => {
        const saved = getItems('todos');

        dispatch({
            type: 'fetchTodos',
            payload: saved
        });
    }, []);

    useEffect(() => {
        setItems('todos', todos);
    }, [todos]);

    return (
        <>
            <TodoForm addTodo={addHandler(dispatch)} />

            <TodoList
                onToggle={toggleHandler(dispatch)}
                onRemove={removeHandler(dispatch)}
                todos={todos}
            />
        </>
    );
};
