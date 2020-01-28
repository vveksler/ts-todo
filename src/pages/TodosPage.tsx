import React from 'react';
import { TodoForm } from '../components/TodoForm';
import { TodoList } from '../components/TodoList';
import { TodosProvider } from '../context/TodosContext';

export const TodosPage: React.FC = () => {
    return (
        <TodosProvider>
            <TodoForm />
            <TodoList />
        </TodosProvider>
    );
};
