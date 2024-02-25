import PropTypes from 'prop-types';
import { useLayoutEffect, useRef, useState } from 'react';


export const Quote = ({ author, quote }) => {

    const pRef = useRef();
    const [boxSize, setBoxSize] = useState({ width: 0, height: 0 });

    // useLayoutEffect es útil cuando se necesita renderizar una información
    // de forma reactiva y es necesario tener el DOM ya estructurado.
    useLayoutEffect(() => {
        const { width, height } = pRef.current.getBoundingClientRect();

        setBoxSize({ width, height });
    }, [quote]);

    return (
        <>
            <blockquote
                className="blockquote text-end"
                style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                <p className='mb-1' style={{ textAlign: 'left' }} ref={pRef}>{quote}</p>
                <footer className="blockquote-footer" style={{ textAlign: 'left' }}> {author} </footer>
            </blockquote>
            <hr />
            <p style={{ fontSize: '0.9em', fontWeight: 600 }} className='mt-4'>Tamaño del Quote</p>
            <code className='mb-3'>{JSON.stringify(boxSize)}</code>
        </>
    );
};

Quote.propTypes = {
    author: PropTypes.string,
    quote: PropTypes.string,
}

