import '../css/App.css';
import React from "react";
import "../image/lottery.png";
import Cash from "../components/Cash";




const addtoo = (id)=>{

    alert("it works yaya")
}

const a =10;
const Console =()=>{

return(
<>

    <div className="console">
    <div className="Num_Sel"><p> Numbers Selected</p></div>
    <div className="Num_Sel"><p> Bet:</p></div>
    <div className="Num_Sel"><p> Bet:</p></div>
    <div className="Num_Sel"><p> Bet:</p></div>
    <div className="Num_Sel"><p> Bet:</p></div>
    <div className="Num_Sel"><p> Bet:</p></div>

    <div className="Total"><p> {addtoo} Total: $ {a} </p></div>
    </div>

</>
)
};

export default Console;