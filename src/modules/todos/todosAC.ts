import { ITodo } from '../../interfaces';

export const addHandler = (dispatch: any) => (title: string) => {
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

export const toggleHandler = (dispatch: any) => (id: number) => {
    dispatch({
        type: 'toggle',
        payload: {
            id
        }
    });
};

export const removeHandler = (dispatch: any) => (id: number) => {
    const shouldRemove = window.confirm('Are you sure want to remove todo');

    if (shouldRemove)
        dispatch({
            type: 'remove',
            payload: {
                id
            }
        });
};