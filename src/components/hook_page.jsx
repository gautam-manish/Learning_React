import React from "react";

function Hookpage() {
    let [count, setCount] = React.useState(0)
    let [check, setCheck] = React.useState("")
    let countRef = React.useRef(0);
    const handleClick = () => {
        setCount(count + 1);
        countRef.current = countRef.current + 1;
    }

    const incrementCounter = () => {
        setCount(count + 1);
    }

    const decrementCounter = () => {
        setCount(count - 1);
    }
    const resetBtn = () => {
        setCount(0);
    }
    const evenOdd = () => {
        if (count % 2 == 0) {
            setCheck("Even");
        }
        else {
            setCheck("Odd");
        }
    }

    return (
        <>
            <div>
                <h1>Hook Example</h1>
                <h3>Use State Hook</h3>
                <h6>Counter Value: {count}</h6>
                <h6>Counter Value: {check}</h6>
                <button onClick={incrementCounter}>Increment</button>
                <button onClick={resetBtn}>Reset</button>
                <button onClick={decrementCounter}>Decrement</button>
                <button onClick={evenOdd}>Check</button>
                <p>user ref Count: {countRef.current} </p>
                <h3>Use State Hook</h3>
                <button onClick={handleClick}>Increment</button>
                <h3>Use Ref Hook</h3>

            </div>
        </>
    );
}

export default Hookpage