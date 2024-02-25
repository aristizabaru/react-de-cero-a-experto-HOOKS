import { useState } from "react";

export const CounterApp = () => {


    // * Se puede usar un objeto complejo para guardar el estado del componente

    const [state, setState] = useState({
        counter1: 10,
        counter2: 20,
        counter3: 30,
    });

    const { counter1, counter2, counter3 } = state;

    // *Para actualizar el componente se debe salvar el estado anterior más los cambios al estado

    return (
        <>
            <h1>Counter App</h1>
            <p>Counter: {counter1}</p>
            <p>Counter: {counter2}</p>
            <p>Counter: {counter3}</p>
            <hr />
            <button onClick={() => setState(state => (
                {
                    ...state,
                    counter1: state.counter1 + 1
                }
            ))}>+1</button>
        </>
    );
};
