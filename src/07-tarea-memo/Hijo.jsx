import { memo } from 'react';
import PropTypes from 'prop-types';

export const Hijo = memo(function Hijo({ numero, incrementar }) {

    console.log('  Me volví a generar :(  ');

    return (
        <button
            className="btn btn-primary mr-3"
            onClick={() => incrementar(numero)}
        >
            {numero}
        </button>
    );
}
);
Hijo.propTypes = {
    numero: PropTypes.number,
    incrementar: PropTypes.func
};
