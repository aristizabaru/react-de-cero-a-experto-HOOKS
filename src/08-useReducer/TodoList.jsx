import PropTypes from 'prop-types';
import { TodoItem } from './TodoItem';

export const TodoList = ({ items = [] }) => {
    return (
        <ul className="list-group">
            {
                items.map(({ id, todo }) => <TodoItem key={id} value={todo} />)
            }
        </ul>
    );
};

TodoList.propTypes = {
    items: PropTypes.array,
};
