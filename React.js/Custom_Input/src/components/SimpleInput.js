import {useRef,useState,useEffect,useCallback,useMemo} from 'react';
import useInput from "../hooks/use-input";


const SimpleInput = (props) => {

  
  const validInputCheck = useCallback((value)=>
  {
  return value.trim() !== "";
  },[]);

  const {hasError:hasError, inputChangeHandler:inputChangeHandler, submitHandler:submitHandler} = useInput(validInputCheck);


  const entered_name_classes = !hasError  ? "form-control" : "form-control invalid";

  return (
    <form onSubmit={submitHandler}>
      <div className={entered_name_classes}>
        <label htmlFor='name'>Your Name</label>
        <input type='text' onChange={(event)=>inputChangeHandler(event)} onBlur={(event)=>inputChangeHandler(event)} id='name'  />
      </div>
      {hasError && <p1 className="error-text">Entered name is invalid...</p1>}
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
