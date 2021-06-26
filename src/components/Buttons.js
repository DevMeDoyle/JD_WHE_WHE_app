import React from 'react'
import '../css/App.css';
import "../image/lottery.png";
import {useState} from "react";



var numberpad = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,"CASH","Clear"];
const Buttons = ()=> {

  //const [myBets, fucBet] = useState(numberpad);

    return (

     
        <>

        <div className="number_pad">
         
          <button  className="numpad"> {numberpad[0]} </button>
          <button className="numpad"> {numberpad[1]} </button>
          <button className="numpad"> {numberpad[2]} </button>
          <button className="numpad"> {numberpad[3]} </button>
          <button className="numpad"> {numberpad[4]} </button>
          <button className="numpad"> {numberpad[5]} </button>
          <button className="numpad"> {numberpad[6]} </button>
          <button className="numpad"> {numberpad[7]} </button>
          <button className="numpad"> {numberpad[8]} </button>
          <button className="numpad"> {numberpad[9]} </button>
          <button className="numpad">{numberpad[10]} </button>
          <button className="numpad">{numberpad[11]} </button>
          <button className="numpad">{numberpad[12]} </button>
          <button className="numpad">{numberpad[13]} </button>
          <button className="numpad">{numberpad[14]} </button>
          <button className="numpad">{numberpad[15]} </button>
          <button className="numpad">{numberpad[16]} </button>
          <button className="numpad">{numberpad[17]} </button>
          <button className="numpad">{numberpad[18]} </button>
          <button className="numpad">{numberpad[19]} </button>

          <div className= "c_c">
              <button className="cash-btn">{numberpad[20]} </button>
              <button className="clear-btn">{numberpad[21]} </button>
          </div>
        
        </div>
        <div></div>
        </>
    )
}

export default Buttons;
