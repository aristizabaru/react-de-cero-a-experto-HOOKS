import { useEffect, useReducer } from "react";
import { todoReducer } from "./todoReducer";
import { TodoList } from "./TodoList";
import { TodoAdd } from "./TodoAdd";

const initReducer = () => JSON.parse(localStorage.getItem('todos')) ?? [];

export const TodoApp = () => {

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

    return (
        <>
            <h2>Todo APP</h2>
            <hr className="mb-5" />
            <div className="row">
                <div className="col-7">
                    <h3 className="mb-3">TODOS (10) <small style={{ fontSize: '0.6em', marginLeft: 8 }}>pendientes (5)</small></h3>
                    <TodoList items={todos} onDeleteTodo={handleDeleteTodo} onToggleTodo={handleToggleTodo} />
                </div>
                <div className="col-5">
                    <h3 className="mb-3">Agregar TODO</h3>
                    <TodoAdd onCreateTodo={handleCreateTodo} />
                </div>
            </div>

        </>
    );
};
