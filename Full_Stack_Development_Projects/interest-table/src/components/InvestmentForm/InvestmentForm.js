import React, {useState} from "react";
import styles from "./InvestmentForm.module.css";

function InvestmentForm(props) {
  
    const [getCurrentSavings,setCurrentSavings] = useState(0);
    const [getYearlyContribution,setYearlyContribution] = useState(0);
    const [getExpectedReturn,setExpectedReturn] = useState(0);
    const [getYearlyDuration,setYearlyDuration] = useState(0);
    const [errorWarning,setErrorWarning] = useState("");
    const [YCErrorWarning,setYCErrorWarning] = useState("");
    const [CSErrorWarning,setCSErrorWarning] = useState("");
    const [ERErrorWarning,setERErrorWarning] = useState("");
    const [YDErrorWarning,setYDErrorWarning] = useState("");

    function updateCurrentSavings(event)
    {
        let value = event.target.value;
        value = parseFloat(value);
        if (typeof(value) === "number" && ((value.toString().length < 8)) && (value !== 0)) {setCurrentSavings(value); setCSErrorWarning(" ");}
        
        else if (value == 0){setCSErrorWarning("Please set current savings to a seven-digit or less number  greater than 0.\n")}

        else {setCSErrorWarning("Please set current savings to a seven-digit or less number  greater than 0.\n")}; 
    }

    function updateYearlyContribution(event)
    {
        let value = event.target.value;
        value = parseFloat(value);
        if (typeof(value) === "number" && ((value.toString().length < 7))){setYearlyContribution(value);setYCErrorWarning(" ");}

        else {setYCErrorWarning("Please set yearly contribution to a seven-digit or less number greater than 0.\n")}; 
    }

    function updateExpectedReturn(event)
    {
        let value = event.target.value;
        value = parseFloat(value);
        if (typeof(value) === "number" && ((value.toString().length < 8)) && (value !== 0) ){setExpectedReturn(value); setERErrorWarning(" ");}
        
        else {setERErrorWarning("Please set expected return to an eight-digit or less number greater than 0.\n")};  
    }

    function updateYearlyDuration(event)
    {
        let value = event.target.value;
        value = parseFloat(value);
        if (typeof(value) === "number" && ((value.toString().length < 4)) && (value !== 0)){setYearlyDuration(value); setYDErrorWarning(" ");}
        
        else {setYDErrorWarning("Please set yearly return to a two-digit or less number greater than 0.\n")};   
    }


    function submitHandler(event)
    {
        event.preventDefault();
        setErrorWarning("");

        const userInvestmentObject =
        {
            currentSavings:getCurrentSavings,
            yearlySavings:getYearlyContribution,
            expectedInterest:getExpectedReturn,
            investmentDuration:getYearlyDuration
        };

        props.obtainuserinvestmentinputs(userInvestmentObject);
    };
        //props.calculateUserReturns();
    

    function resetHandler()
    {
        setCurrentSavings(0);
        setExpectedReturn(0);
        setYearlyContribution(0)
        setYearlyDuration(0);
        props.resetuserinvestmentinputs();
    }
  
  
  
  return (<div> <form className={styles["form"]} onSubmit={(event)=>{submitHandler(event);}}>
        <div className={styles["input-group"]}>
          <p>
            <label htmlFor="current-savings">Current Savings ($)</label>
            <input type="number" id="current-savings" value={getCurrentSavings} onChange={(event)=>{updateCurrentSavings(event)}} />
          </p>
          <p>
            <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
            <input type="number" id="yearly-contribution" value={getYearlyContribution} onChange={(event)=>{updateYearlyContribution(event)}}/>
          </p>
        </div>
        <div className={styles["input-group"]}>
          <p>
            <label htmlFor="expected-return" >
              Expected Interest (%, per year)
            </label>
            <input type="number" id="expected-return" value={getExpectedReturn} onChange={(event)=>{updateExpectedReturn(event)}} />
          </p>
          <p>
            <label htmlFor="duration">Investment Duration (years)</label>
            <input type="number" id="duration" value={getYearlyDuration} onChange={(event)=>{updateYearlyDuration(event)}}/>
          </p>
        </div>
        <div className={styles["warning"]}>{errorWarning}
   {YCErrorWarning}
    {CSErrorWarning}
{ERErrorWarning}{YDErrorWarning}</div>
        <p className="actions">
          <button type="reset" className="buttonAlt" onClick={(event)=>{resetHandler(event)}}>
            Reset
          </button>
          <button type="submit" className="button">
            Calculate
          </button>
        </p>
      </form>
    </div>
  );
}

export default InvestmentForm;