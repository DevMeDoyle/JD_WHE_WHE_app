import '../css/App.css';
import React from "react";
import "../image/lottery.png";
import Buttons from './Buttons';
import Console from './Console';


const App =()=>{

return (
  
  <>
  <div className="number_pad">
    DevMeDoyle productions
    <h1>Whe Whe On De Avenue </h1>
   
    
    
  </div>

  <div> <h1>Lets Play</h1> </div>

  <div className="format">
  <div><Buttons/></div>
  <div><Console/></div>
  </div>
  </>
)


}

export default App;
