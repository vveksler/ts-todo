import React, { useRef } from 'react';

interface TodoFormProps {
    addTodo(title: string): void
}

export const TodoForm: React.FC<TodoFormProps> = props => {
    const ref = useRef<HTMLInputElement>(null)

    const keyPressHandler = (event: React.KeyboardEvent) => {
        if (event.key === 'Enter') {
            props.addTodo(ref.current!.value)
            ref.current!.value = ''
        }
    };

    return (
        <div className="input-field">
            <input
                ref={ref}
                onKeyPress={keyPressHandler}
                type="text"
                id="title"
            />
            <label htmlFor="title" className="active">
                Type todo
            </label>
        </div>
    );
};
