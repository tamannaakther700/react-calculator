import React, { useState } from 'react';
import "./App.css";
import Digit from "./Components/Digit";
import Operator from "./Components/Operator";


function App() {

 const [total, setTotal] = useState('');

  const handleCal = (e) =>{
    setTotal(total.concat(e.target.name));
  }

  const clear = ()=>{
    setTotal("");
  }

  const handleDel = ()=>{
    setTotal(total.slice(0, -1));
  }

  const result = ()=>{
    setTotal(eval(total).toString());
    
  }

  return (
    <div className="calculator-grid">
      <div className="output">
        <div className="previous-operand">{total}</div>
      </div>

      <button className="span-two" onClick={clear}>AC</button>
      <button onClick={handleDel}>DEL</button>
      <Operator operator="/" dispatch={handleCal} />
      <Digit digit="1" dispatch={handleCal}/>
      <Digit digit="2" dispatch={handleCal}/>
      <Digit digit="3" dispatch={handleCal}/>
      <Operator operator="*" dispatch={handleCal}/>
      <Digit digit="4" dispatch={handleCal}/>
      <Digit digit="5" dispatch={handleCal}/>
      <Digit digit="6" dispatch={handleCal}/>
      <Operator operator="+" dispatch={handleCal}/>
      <Digit digit="7" dispatch={handleCal}/>
      <Digit digit="8" dispatch={handleCal}/>
      <Digit digit="9" dispatch={handleCal}/>
      <Operator operator="-" dispatch={handleCal}/>
      <Digit digit="." dispatch={handleCal}/>
      <Digit digit="0" dispatch={handleCal}/>
      <button onClick={result} className="span-two">=</button>

   
    </div>
  )
}

export default App;
