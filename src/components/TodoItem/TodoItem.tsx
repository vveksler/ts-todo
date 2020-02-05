import React from 'react'
import { useDispatch } from 'react-redux'
import { ITodo } from '../../interfaces';
import { toggleTodo, removeTodo } from '../../modules/todos/todosAC';

interface TodoFormProps {
    todo: ITodo
}

export const TodoItem: React.FC<TodoFormProps> = ({ todo }) => {
    const dispatch = useDispatch()
    const removeHandler = () => {
        const shouldRemove = window.confirm('Are you sure want to remove todo');

        if (shouldRemove) {
            const action = removeTodo(todo.id)
            dispatch(action)
        }
    }

    const classes = ['todo'];
    if (todo && todo.completed) classes.push('completed');

    console.log('render Todo');
    return (
        <li className={classes.join(' ')} key={todo.id}>
            <label>
                <input
                    type="checkbox"
                    checked={todo.completed}
                    onChange={() => dispatch(toggleTodo(todo.id))}
                />
                <span>{todo.title}</span>
                <i
                    className="material-icons red-text"
                    onClick={removeHandler}
                >delete</i>
            </label>
        </li>
    )
}