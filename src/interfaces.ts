export interface ITodo {
    title: string,
    id: number,
    completed: boolean
}

export interface ITodoContext {
    dispatch: Object;
    todos?: ITodo[];
}

export interface IActionTodo {
    type: string,
    payload: any
}

export interface IStore {
    todos: ITodo[]
}