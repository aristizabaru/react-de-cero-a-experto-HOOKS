import { useState } from "react";

export const useCounter = (initialValue = 0) => {

    const [counter, setCounter] = useState(initialValue);

    const increment = (value = 1) => setCounter(counter + value);
    const decrement = (value = 1) => setCounter(counter - value);
    const reset = (value = initialValue) => setCounter(value);

    return {
        counter,
        decrement,
        increment,
        reset
    };
};