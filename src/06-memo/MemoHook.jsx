import { useMemo, useState } from "react";
import { useCounter } from "../hooks/useCounter";

const heavyStuff = (iterationNumber = 100) => {
    for (let i = 0; i < iterationNumber; i++) {
        console.log('Ahí vamos');
    }

    return `${iterationNumber} iteraciones realizadas`;
};

export const MemoHook = () => {

    const { counter, increment } = useCounter(4000);
    const [show, setShow] = useState(false);

    // Se usa cuando se tienen operaciones pesadas que se necesiten memorizar.
    // De esta forma se evita que el componente ejecute nuevamente toda la operación
    // si el componente se reconstruye
    const memorizedValue = useMemo(() => heavyStuff(counter), [counter]);

    return (
        <>
            <h1>Counter: <small>{counter}</small></h1>
            <h2>{memorizedValue}</h2>
            <hr />
            <button onClick={() => increment()}>+1</button>
            <button onClick={() => setShow(!show)}>Show / Hide {JSON.stringify(show)}</button>
        </>
    );
};
