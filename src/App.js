import logo from './logo.svg';
import './App.css';
import NavBar from './components/navbar';
import { useState } from 'react';
import Calculator from './components/calculator';

function App() {
  let [count, setCount] = useState(0)
  return (
    <div className="App">
      {/* top NavBar */}
      <NavBar/>
      <div style={{fontSize: '40px', color:'red'}}>
        {count}
      </div>
      <button onClick={()=>{setCount((prevState)=>prevState + 1)}}>Increment</button>
      <button onClick={()=>{setCount((prevState)=>  0)}}>Reset</button>
      <button onClick={()=>{setCount((prevState)=>prevState - 1)}}>Decrement</button>
      <Calculator/>
    </div>
  );
}

export default App;
