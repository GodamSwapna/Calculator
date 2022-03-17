import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [inputItem,setInput]=useState("")
  const [result,setResult]=useState(0)

  const eventHandler= e =>{
    setInput(e.target.value)
  }
  const calculate=()=>{
    setInput(eval(inputItem).toString())
  }
  return (
    <div className="App">
      
      <center>
        <div className='main'>
        <div className='inputField'>
        <input type="text" value={inputItem} name={result} onChange={eventHandler}/>
        
        {/* <button onClick={()=>setResult(eval(inputItem))}></button> */}
        {/* <h4>{result}</h4> */}
        </div>
        
        <br/>
       
        <div>
        <button onClick={()=>setInput(inputItem+"1")}>1</button>
        <button onClick={()=>setInput(inputItem+"2")}>2</button>
        <button onClick={()=>setInput(inputItem+"3")}>3</button>
        <button onClick={()=>setInput('')} className="symbol">clr</button><br/>
        </div>
        <div>
        <button onClick={()=>setInput(inputItem+"4")}>4</button>
        <button onClick={()=>setInput(inputItem+"5")}>5</button>
        <button onClick={()=>setInput(inputItem+"6")}>6</button>
        <button onClick={()=>setInput(inputItem+"+")}  className="symbol">+</button>
        </div>
        <div>
        <button onClick={()=>setInput(inputItem+"7")}>7</button>
        <button onClick={()=>setInput(inputItem+"8")}>8</button>
        <button onClick={()=>setInput(inputItem+"9")}>9</button>
        <button onClick={()=>setInput(inputItem+"*")}  className="symbol">*</button>
        </div>
        
        <div>
        <button onClick={calculate}>=</button>
        <button onClick={()=>setInput(inputItem+"0")}>0</button>
        <button onClick={()=>setInput(inputItem+"-")}>-</button>
        <button onClick={()=>setInput(inputItem+"%")} className="symbol">%</button>
        </div>
        </div>
        
      </center>
    </div>
  );
}

export default App;
