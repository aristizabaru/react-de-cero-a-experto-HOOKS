import PropTypes from 'prop-types';
import { TodoItem } from './TodoItem';

export const TodoList = ({ items = [], onDeleteTodo, onToggleTodo }) => {
    return (
        <ul className="list-group">
            {
                items.map((item) => (
                    <TodoItem
                        key={item.id}
                        item={item}
                        onDeleteTodo={onDeleteTodo}
                        onToggleTodo={onToggleTodo}
                    />
                ))
            }
        </ul>
    );
};

TodoList.propTypes = {
    items: PropTypes.array,
    onDeleteTodo: PropTypes.func,
    onToggleTodo: PropTypes.func
};
