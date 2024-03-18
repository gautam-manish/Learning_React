import React from "react";

function Counter (){
    let [count, setCount] = React.useState(0);
    const incrementCounter = () => {
        setCount(count + 1);
    }
    const decrementCounter = () => {
        setCount(count - 1);
    }
    return(
        <>
            <h1>{count}</h1>
            <button onClick={incrementCounter}>Increment</button>
            <button onClick={decrementCounter}>Decrement</button>
        </>
    );
}
export default Counter;