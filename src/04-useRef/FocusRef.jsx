import { useRef } from "react";

export const FocusRef = () => {

    const inputRef = useRef();

    const onClick = () => {
        inputRef.current.select();
    };

    return (
        <>
            <h1>Focus Screen</h1>
            <hr />
            <input
                ref={inputRef}
                type="text"
                placeholder="Ingrese su nombre"
                className="form-control"
            />

            <button className="mt-4" onClick={onClick}>Set Focus</button>
        </>
    );
};
