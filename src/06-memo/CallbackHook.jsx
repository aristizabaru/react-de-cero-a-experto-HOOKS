import { useCallback, useState } from "react";
import { ShowIncrement } from "./ShowIncrement";

export const CallbackHook = () => {

    const [counter, setCounter] = useState(0);

    // useCallback permite memorizar un objeto o una función en memoria
    // usado junto a React.memo() permite que un componente no se
    // renderize de nuevo si la función no ha cambiado

    const incrementHandler = useCallback(
        () => {
            setCounter(value => value + 1);
        },
        [],
    );

    return (
        <>
            <h1>CallBack Hook: {counter}</h1>
            <hr />
            <ShowIncrement increment={incrementHandler} />
        </>
    );
};
