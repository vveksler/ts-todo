import { ITodo } from '../../interfaces';

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
