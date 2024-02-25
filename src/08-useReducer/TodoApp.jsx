import { useReducer } from "react";
import { todoReducer } from "./todoReducer";

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

    const handleNewTodo = (todo) => {
        console.log({ todo });
    };

    return (
        <>
            <h2>Todo APP</h2>
            <hr className="mb-5" />
            <div className="row">
                <div className="col-7">
                    <h3 className="mb-3">TODOS (10) <small style={{ fontSize: '0.6em', marginLeft: 8 }}>pendientes (5)</small></h3>
                    {/* TodoList */}
                    <ul className="list-group">
                        {
                            /* TodoItem */
                            todos.map(todo => (
                                <li key={todo.id} className="list-group-item d-flex justify-content-between align-items-center">
                                    <span>{todo.todo}</span>
                                    <button className="small">Borrar</button>
                                </li>
                            ))
                            /* TodoItem */
                        }

                    </ul>
                    {/* TodoList */}
                </div>
                <div className="col-5">
                    <h3 className="mb-3">Agregar TODO</h3>
                    {/* TodoAdd onNewTodo */}
                    {/* {id: new Date()...} */}
                    <form>
                        <input
                            type="text"
                            placeholder="¿Qué tarea hay para hacer?"
                            className="form-control"
                        />
                        <button type="submit" className="mt-3">Agregar</button>
                    </form>
                    {/* TodoAdd */}
                </div>
            </div>

        </>
    );
};
