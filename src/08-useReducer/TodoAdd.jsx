import PropTypes from 'prop-types';
import { useForm } from '../hooks/useForm';

export const TodoAdd = ({ onNewEvent }) => {

    const { formState, onInputChange, onResetForm } = useForm({
        description: '',
    });

    const { description } = formState;

    const onFormSubmit = (event) => {
        event.preventDefault();

        if (description.length <= 1) return;

        onNewEvent(description);
        onResetForm();
    };

    return (
        <form onSubmit={onFormSubmit}>
            <input
                type="text"
                name='description'
                placeholder="¿Qué tarea hay para hacer?"
                value={description}
                onChange={onInputChange}
                className="form-control"
            />
            <button
                type="submit"
                className="mt-3"
            >Agregar</button>
        </form>
    );
};

TodoAdd.propTypes = {
    onNewEvent: PropTypes.func,
};
