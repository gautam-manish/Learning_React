import React from 'react'

import "./calculator.css";
function Calculator (){
    let [firstNumber, setFirstNumber] = React.useState(0);
    let [secondNumber, setSecondNumber] = React.useState(0);
    let [operation, setOperation] = React.useState("");
    let [answer, setAnswer] = React.useState(0);
    const handleKeyClick = () =>{

    }
    const handleOperationClick = () =>{
        
    }
    return(
        <>
            <div id="calculator">
                <div id="display">
                    {firstNumber} + {secondNumber} = <div id="answer">{answer}</div>
                </div>
                <div className="keys">
                    <div onClick={handleKeyClick}>7</div>
                    <div onClick={handleKeyClick}>8</div>
                    <div onClick={handleKeyClick}>9</div>
                    <div onClick={handleKeyClick}>/</div>
                </div>
            </div>
        </>
    );
}

export default Calculator;