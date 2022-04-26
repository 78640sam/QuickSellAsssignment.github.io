

 import "./counter.css";
import {useState} from "react";
 function Counter(){
     const[number,setNumber]=useState(10);
    
     if(number>1000){
    
      return  <>

        <div className="main-counter">
            <button className="counter-button-1" >-</button>
            <input className="counter-input" type="text" value="1000"  />
            <button className="counter-button-2">+</button>
        </div>
        </>   
    }
     const increment = ()=> {
         setNumber(number+1)
         console.log(number)
         
     }
 
     const decrement = ()=> {
        setNumber(number-1)
        console.log(number)
    } 
 const showinput=(el)=>{
   
    setNumber((number)=> Number(number)+Number(el.target.value));
    
 }
   

    return <>

    <div className="main-counter">
        <button className="counter-button-1" onClick={decrement}>-</button>
        <input className="counter-input" type="text" value={number} onChange={showinput} />
        <button className="counter-button-2" onClick={increment}>+</button>
    </div>
    </>
 }
 export default Counter