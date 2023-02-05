import { useState } from 'react';
import './App.css';
import './button.css';


function App(id) {
    
    const[num, setNum] = useState("");

    const fuClick = (e)=>{
      setNum(num.concat(e.target.id));
     };
     
    
     //()=>{setNum(eval(num).toString())}

    return (
    <div className="App" >

      

      <form >
        <input type = "text" value={num} className= "Input"/>
      </form>

     <div>
     <button onClick={(e)=>{setNum("")}}>C</button>
     <button id="/" onClick={fuClick}>/</button>
     <button id="*" onClick={fuClick}>*</button>
     <button id="-" onClick={fuClick}>-</button>
     </div>
     <div>
     <button id={6} onClick={fuClick}>6</button>
     <button id={7} onClick={fuClick}>7</button>
     <button id={8}  onClick={fuClick}>8</button>
     <button id={9}  onClick={fuClick}>9</button>
    
     </div>
     <div>
     <button id={2}  onClick={fuClick}>2</button>
     <button id={3}  onClick={fuClick}>3</button>
     <button id={4}  onClick={fuClick}>4</button>
     <button id={5}  onClick={fuClick}>5</button>
    
     </div>
     <div>
     <button id={1}  onClick={fuClick}>1</button>
     <button id={0}  onClick={fuClick}>0</button>
     <button id="."  onClick={fuClick}>.</button>
     <button id="+" onClick={fuClick}>+</button>
     </div>

     <div>
    <button className='Val'style = {{borderEndStartRadius: "10px"}} onClick={()=>{setNum(eval(num).toString())}}>=</button>
     <button className='Val' style={{borderEndEndRadius: "10px"}} onClick={()=>{setNum(num.slice(0,-1))}}> Clear</button>
     </div>
    
    </div>
  );
  
}


export default App;
