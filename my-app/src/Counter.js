import React, { useState } from 'react';

const Counter = () => {


    console.log("top-level");

    let count = 40;

    let initial_value = 100

    const [number, setNumber] = useState(initial_value)  //  [ inital_value:10 , function   ]

    const [todos, setTodos] = useState([1, 2, 34])

    const increament = () => {
        count = count + 1
        console.log({ count });
        setNumber(number + 1)
    }

    function decrement() {
        count = count - 1
        console.log({ count });
        setNumber(number - 1)
    }

    console.log("render ");

    console.log({ todos });
    return (
        <div>
            <h1>number: {number}</h1>
            <h1>count: {count}</h1>
            <button onClick={increament}>increament</button>
            <button onClick={decrement}>decrement </button>
        </div>
    );
}

export default Counter;
