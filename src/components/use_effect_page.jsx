import { useEffect, useState } from "react";

export default function UseEffectPage() {
    const [count, setCount] = useState(0)
    const [remainder, setRemainder] = useState(0)
    useEffect(
        () => {
           setRemainder(()=> count % 3)
        },
        [count]
    )
    return (
        <>
            <h1>Use Effect Page Example</h1>
            <b>Count Value: {count}</b>
            <button onClick={()=>setCount((c)=>c+1)}>Increment</button>
            <b>Remainder: {remainder}</b>
        </>
    );
}