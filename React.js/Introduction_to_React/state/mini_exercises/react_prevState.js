import React from 'react';

import './styles.css';

// don't change the Component name "App"
export default function App() {
    
const [counterValue,setCounterValue] = React.useState(0);    
    
function clickHandler(prevState){

let oldCounterValue = counterValue;   

    setCounterValue(oldCounterValue + 1);
    

}
    
    return (
      <div>
        <p id="counter">{counterValue}</p>
        <button onClick={clickHandler}>Increment</button>
      </div>
    );
}
