import { useEffect, useState } from "react";

export const Message = () => {

    const [coords, setCords] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const onMouseMove = ({ x, y }) => {
            setCords({ x, y });
        };

        window.addEventListener('mousemove', onMouseMove);

        return () => {
            // ! Siempre se debe de enviar una función de limpieza en caso de ser
            // ! necesario para evitar fugas de memoria
            window.removeEventListener('mousemove', onMouseMove);
        };
    }, []);

    return (
        <>
            <h3>Usuario ya existe</h3>
            {JSON.stringify(coords)}
        </>
    );
};
