import { useReducer } from "react";
import { todoReducer } from "./todoReducer";
import { TodoList } from "./TodoList";
import { TodoAdd } from "./TodoAdd";

const initialState = [
    {
        id: new Date().getTime(),
        todo: 'Recolectar la piedra del alma',
        done: false,
    },
    {
        id: new Date().getTime() * 3,
        todo: 'Recolectar la piedra del destino',
        done: false,
    }
];

export const TodoApp = () => {

    const [todos, dispatchTodo] = useReducer(todoReducer, initialState);

    const handleNewTodo = (description) => {

        const newTodo = {
            id: new Date().getTime(),
            todo: description,
            done: false,
        };

        const action = {
            type: '[TODO] add todo',
            payload: newTodo
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
                    <TodoList items={todos} />
                </div>
                <div className="col-5">
                    <h3 className="mb-3">Agregar TODO</h3>
                    <TodoAdd onNewEvent={handleNewTodo} />
                </div>
            </div>

        </>
    );
};
