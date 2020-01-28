import React, { useContext } from 'react';
import { toggleTodo, removeTodo } from '../../modules/todos/todosAC';
import { TodosDispatch } from '../../context/TodosContext';
import { ITodo } from '../../interfaces';

export const TodoList: React.FC = () => {
    const { dispatch, todos } = useContext(TodosDispatch);

    const removeHandler = (id: number) => (event: React.MouseEvent) => {
        event.preventDefault();
        const action = removeTodo(id);
        const shouldRemove = window.confirm('Are you sure want to remove todo');

        if (shouldRemove) dispatch(action);
    };

    const toggleHandler = (id: number) => (event: React.ChangeEvent) => {
        const action = toggleTodo(id);

        dispatch(action);
    };

    return (
        <ul>
            {todos.length ? (
                todos.map((todo: ITodo) => {
                    const classes = ['todo'];
                    if (todo.completed) classes.push('completed');

                    return (
                        <li className={classes.join(' ')} key={todo.id}>
                            <label>
                                <input
                                    type="checkbox"
                                    checked={todo.completed}
                                    onChange={toggleHandler(todo.id)}
                                />
                                <span>{todo.title}</span>
                                <i
                                    className="material-icons red-text"
                                    onClick={removeHandler(todo.id)}
                                >
                                    delete
                                </i>
                            </label>
                        </li>
                    );
                })
            ) : (
                <p className="center">List of todos empty...</p>
            )}
        </ul>
    );
};
