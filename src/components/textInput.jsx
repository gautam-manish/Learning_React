import { useEffect, useRef, useState } from "react";

function TextInput (){
    const inputref = useRef(null);
    const [inputValue, setInputValue] = useState('');
    useEffect(
        ()=>{
            if(inputref != null){
                inputref.current.focus();
            }
        }
    )
    const handleInputValueChange = (e)=>{
        setInputValue(
            e.target.value
        )
    }
    const handleClear = ()=>{
        setInputValue('');
        inputref.current.focus();
    }
    return(
        <div>
            
            <input type="text" name="text" ref={inputref} onChange={handleInputValueChange} value={inputValue}/>
            <button onClick={handleClear}>Clear</button>
        </div>
    );
}

export default TextInput;