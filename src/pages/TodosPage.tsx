import React from 'react';
import { TodoForm } from '../components/TodoForm';
import { TodoList } from '../components/TodoList';

export const TodosPage: React.FC = () => {
    return (
        <>
            <TodoForm />
            <TodoList />
        </>
    );
};
