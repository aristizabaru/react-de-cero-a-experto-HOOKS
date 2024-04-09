import { useEffect, useReducer } from "react";
import { todoReducer } from '../08-useReducer/todoReducer';


const initReducer = () => JSON.parse(localStorage.getItem('todos')) || [];

export const useTodos = () => {

    const [todos, dispatchTodo] = useReducer(todoReducer, [], initReducer);

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos]);

    const handleCreateTodo = (description) => {

        const newTodo = {
            id: new Date().getTime(),
            todo: description,
            done: false,
        };

        const action = {
            type: '[TODO] create todo',
            payload: newTodo
        };

        dispatchTodo(action);
    };

    const handleDeleteTodo = (id) => {

        const action = {
            type: '[TODO] delete todo',
            payload: id
        };

        dispatchTodo(action);
    };

    const handleToggleTodo = (id) => {
        const action = {
            type: '[TODO] toggle todo',
            payload: id
        };

        dispatchTodo(action);
    };

    return {
        handleCreateTodo,
        handleDeleteTodo,
        handleToggleTodo,
        pendingTodosCount: todos.filter(todo => !todo.done).length,
        todos,
        todosCount: todos.length,
    };
};
