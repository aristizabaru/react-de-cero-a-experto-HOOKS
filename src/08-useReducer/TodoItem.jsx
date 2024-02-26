import PropTypes from 'prop-types';

export const TodoItem = ({ item, onDeleteTodo, onToggleTodo }) => {

    const { todo, id, done } = item;

    return (
        <li className="list-group-item d-flex justify-content-between align-items-center">
            <span
                onClick={() => onToggleTodo(id)}
                style={{ cursor: 'pointer' }}
                className={`${done && 'text-decoration-line-through'}`}
            >
                {todo}
            </span>
            <button
                className="small"
                onClick={() => onDeleteTodo(id)}
            >Borrar</button>
        </li>
    );
};

TodoItem.propTypes = {
    item: PropTypes.object,
    onDeleteTodo: PropTypes.func,
    onToggleTodo: PropTypes.func
};

