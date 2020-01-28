import React, { useEffect, useReducer } from 'react';
import { TodoForm } from '../components/TodoForm';
import { TodoList } from '../components/TodoList';
import { ITodo } from '../interfaces';
import { getItems, setItems } from '../services/localSrorage';
import todosReducer from '../store/todosReducer';

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

    const addHandler = (title: string) => {
        if (title !== '') {
            const newTodo: ITodo = {
                title: title,
                id: Date.now(),
                completed: false
            };

            dispatch({
                type: 'add',
                payload: newTodo
            });
        }
    };

    const toggleHandler = (id: number) => {
        dispatch({
            type: 'toggle',
            payload: {
                id
            }
        });
    };

    const removeHandler = (id: number) => {
        const shouldRemove = window.confirm('Are you sure want to remove todo');

        if (shouldRemove)
            dispatch({
                type: 'remove',
                payload: {
                    id
                }
            });
    };

    return (
        <>
            <TodoForm addTodo={addHandler} />

            <TodoList
                onToggle={toggleHandler}
                onRemove={removeHandler}
                todos={todos}
            />
        </>
    );
};
