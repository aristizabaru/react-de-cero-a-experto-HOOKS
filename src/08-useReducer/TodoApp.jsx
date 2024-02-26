import { TodoList } from "./TodoList";
import { TodoAdd } from "./TodoAdd";
import { useTodos } from "../hooks";

export const TodoApp = () => {

    const {
        todos,
        todosCount,
        pendingTodosCount,
        handleCreateTodo,
        handleDeleteTodo,
        handleToggleTodo
    } = useTodos();

    return (
        <>
            <h2>Todo APP</h2>
            <hr className="mb-5" />
            <div className="row">
                <div className="col-7">
                    <h3 className="mb-3">
                        TODOS ({todosCount})
                        <small style={{ fontSize: '0.6em', marginLeft: 8 }}>
                            pendientes ({pendingTodosCount})
                        </small>
                    </h3>
                    <TodoList
                        items={todos}
                        onDeleteTodo={handleDeleteTodo}
                        onToggleTodo={handleToggleTodo}
                    />
                </div>
                <div className="col-5">
                    <h3 className="mb-3">Agregar TODO</h3>
                    <TodoAdd
                        onCreateTodo={handleCreateTodo}
                    />
                </div>
            </div>

        </>
    );
};
