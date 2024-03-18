import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Hookpage from './components/hook_page';
import UseEffectPage from './components/use_effect_page';
import Counter from './components/counter';
import ToogleSwitch from './components/toogleSwitch';
import TextInput from './components/textInput';


const root = ReactDOM.createRoot(document.getElementById('root'));



root.render(
  <React.StrictMode>
    <App />
    <Hookpage/>
    <UseEffectPage/>
    <Counter/>
    <ToogleSwitch/>
    <TextInput/>
  </React.StrictMode>
);



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
