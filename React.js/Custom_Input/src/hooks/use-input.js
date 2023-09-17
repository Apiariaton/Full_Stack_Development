import {useState,useCallback,useMemo} from 'react';

function useInput(validation_function){
    const [enteredName,setEnteredName] = useState("");
    const [inputTouched, setInputTouched] = useState(false);
    const [inputValid,setInputValid] = useState(false);

    // useCallback(()=>{setInputTouched(true); setInputValid(validation_function(entered_input));},[entered_input]);
    
    const inputChangeHandler =  useCallback((event) => {
        const enteredInput = event.target.value;
        setEnteredName(enteredInput);
        setInputTouched(true);

        const isValid = validation_function(enteredInput);
        setInputValid(isValid);

    },[setEnteredName,setInputTouched,validation_function]);

    const submitHandler = useCallback((event) => {
        event.preventDefault();
        const enteredInput = event.target.value;
        setEnteredName(enteredInput);
        setInputTouched(true)},[setEnteredName]);
    
    const hasError = !inputValid && inputTouched;

    return {
        enteredName:enteredName,
        hasError:hasError,
        inputChangeHandler: inputChangeHandler,
        submitHandler:submitHandler
    };
};


export default useInput;