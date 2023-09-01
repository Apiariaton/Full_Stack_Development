import React from 'react';

// don't change the Component name "App"
export default function App() {
    
const [showWarning,setShowWarning] = React.useState(0); 

function clickHandler_remove()
{
setShowWarning(1);
}
    
function clickHandler_show()
{
setShowWarning(0);    
}

let alertWindow = (showWarning === 0) ? <div id="alert">
          <h2>Are you sure?</h2>
          <p>These changes can't be reverted!</p> 
           <button onClick={clickHandler_remove}
           >Proceed</button></div> : <div></div>;
          return (
      <div>
        {alertWindow}    
        <button onClick={clickHandler_show}>Delete</button>
      </div>    
    );
}
