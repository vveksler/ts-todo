import { ITodo } from '../interfaces';

export const getItems = (items: string) => JSON.parse(
    localStorage.getItem(items) || '[]'
) as ITodo[];

export const setItems = (title: string, items: Array<ITodo>) => localStorage.setItem(title, JSON.stringify(items));
