import { memo } from 'react';
import PropTypes from 'prop-types';

export const ShowIncrement = memo(function ShowIncrement({ increment }) {

    console.log('Botón regenerado');

    return (
        <button onClick={() => increment()}>+1</button>
    );
});

ShowIncrement.propTypes = {
    increment: PropTypes.func
};