import { memo } from 'react';
import PropTypes from 'prop-types';

export const Small = memo(function Small({ value }) {

    console.log('Generando Small Component :(');

    return (
        <small>{value}</small>
    );
});

Small.propTypes = {
    value: PropTypes.number,
}

