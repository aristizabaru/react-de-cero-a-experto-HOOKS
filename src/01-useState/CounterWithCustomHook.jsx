import { useCounter } from "../hooks/useCounter";

export const CounterWithCustomHook = () => {

    const { counter, increment, decrement, reset } = useCounter();

    // El custom hook permite extraer la lógica. Es importante cuando se recibe
    // un argumento en los métodos expuestos del hook en no enviar la función
    // por referencia ya que se enviaría como primer argumento el objeto del
    // evento del click

    return (
        <>
            <h1>Counter with Hook: {counter}</h1>
            <hr />
            <button onClick={() => increment(3)}>+3</button>
            <button onClick={() => reset(10)}>RESET</button>
            <button onClick={() => decrement(4)}>-4</button>
        </>
    );
};
