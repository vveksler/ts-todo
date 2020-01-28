export interface ITodo {
    title: string,
    id: number,
    completed: boolean
}

export interface ITodoContext {
    dispatch: Object;
    todos?: ITodo[];
}