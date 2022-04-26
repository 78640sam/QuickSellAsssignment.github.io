 
 import "./counter.css";
import {useState} from "react";
 function Counter(){
     const[number,setnumber]=useState(10);

    return <>

    <div className="main-counter">
        <button className="counter-button">-</button>
        <input className="counter-input" type="number" />
        <button className="counter-button">+</button>
    </div>
    </>
 }
 export default Counter