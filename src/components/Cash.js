import React from 'react'
import '../css/App.css';
import "../image/lottery.png";
 //import {useState} from "react";

var cashpad = [1,5,10,20];
var total = 0;
const Cash = ()=> {
    return (
        <>

        <div className="cash_pad">
         
          <button onClick={()=>{alert("I just want food")}} className="cashpads" > ${cashpad[0]} </button>
          <button className="cashpads"> ${cashpad[1]} </button>
          <button className="cashpads"> ${cashpad[2]} </button>
          <button className="cashpads"> ${cashpad[3]} </button>
    
          
        
        </div>
        <div></div>
        </>
    )
}

export default Cash;
