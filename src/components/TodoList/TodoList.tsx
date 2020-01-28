import React from 'react';
import { ITodo } from '../../interfaces';

type TodoListProps = {
    todos: ITodo[];
    onToggle(id: number): void;
    onRemove: (id: number) => void;
};

export const TodoList: React.FC<TodoListProps> = ({
    todos,
    onToggle,
    onRemove
}) => {
    const removeHandler = (id: number) => (event: React.MouseEvent) => {
        event.preventDefault();

        onRemove(id);
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
                                    onChange={onToggle.bind(null, todo.id)}
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
