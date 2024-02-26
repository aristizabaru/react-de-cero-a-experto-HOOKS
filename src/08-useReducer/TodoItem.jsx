import PropTypes from 'prop-types';

export const TodoItem = ({ value }) => {
    return (
        <li className="list-group-item d-flex justify-content-between align-items-center">
            <span>{value}</span>
            <button className="small">Borrar</button>
        </li>
    );
};

TodoItem.propTypes = {
    value: PropTypes.string,
};

