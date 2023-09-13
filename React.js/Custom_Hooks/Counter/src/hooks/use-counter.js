import React, {useEffect, useState} from 'react';

function useCounter(forwards = true){
  
    const [counter, setCounter] = useState(0);
 

    useEffect(() => {
        const interval = setInterval(
            
            () => {
    
            if (forwards)
            {
                setCounter(prevState => prevState + 1);
            }
            else{
                setCounter(prevState => prevState - 1);
            }
        }, 1000);
    
        return () => clearInterval(interval);
      }, [forwards,counter]);

    return counter;
};

export default useCounter;