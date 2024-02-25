import { useState } from "react";
import { useCounter } from "../hooks/useCounter";
import { Small } from "./Small";

export const Memorize = () => {

    const { counter, increment } = useCounter();
    const [show, setShow] = useState(false);

    return (
        <>
            <h1>Counter: <Small value={counter} /></h1>
            <hr />
            <button onClick={() => increment()}>+1</button>
            <button onClick={() => setShow(!show)}>Show / Hide {JSON.stringify(show)}</button>
        </>
    );
};
