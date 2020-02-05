import { ITodo, IActionTodo } from '../../interfaces';

export default function todosReducer(state: ITodo[] = [], action: IActionTodo): ITodo[] {
    switch (action.type) {
        case 'add':
            return [action.payload, ...state]
        case 'remove':
            return state.filter(todo => todo.id !== action.payload.id);
        case 'toggle':
            return state.map(todo => {
                if (todo.id === action.payload.id) {
                    todo.completed = !todo.completed;
                }

                return todo;
            });
        case 'fetchTodos':
            return action.payload
        default:
            return state
    }
}