import PropTypes from 'prop-types';
import { TodoItem } from './TodoItem';

export const TodoList = ({ items = [], onDeleteTodo }) => {
    return (
        <ul className="list-group">
            {
                items.map(({ id, todo }) => (
                    <TodoItem
                        key={id}
                        value={todo}
                        id={id}
                        onDeleteTodo={onDeleteTodo} />
                ))
            }
        </ul>
    );
};

TodoList.propTypes = {
    items: PropTypes.array,
    onDeleteTodo: PropTypes.func
};
