import PropTypes from 'prop-types';

export const TodoItem = ({ value, id, onDeleteTodo }) => {
    return (
        <li className="list-group-item d-flex justify-content-between align-items-center">
            <span>{value}</span>
            <button
                className="small"
                onClick={() => onDeleteTodo(id)}
            >Borrar</button>
        </li>
    );
};

TodoItem.propTypes = {
    value: PropTypes.string,
    id: PropTypes.number,
    onDeleteTodo: PropTypes.func
};

