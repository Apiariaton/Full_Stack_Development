import React, {useState} from "react";
import HeroHeader from "./UI/HeroHeader";
import InvestmentForm from "./InvestmentForm/InvestmentForm";
import ReturnItemTable from "./ReturnItemTable/ReturnItemTable";

//This is going to be the component which incorporates the HeroHeader, Investment Form and
//ReturnItemTable
/* <HeroHeader/>
<InvestmentForm/>
<ReturnItemTable/> */

//Filter version: State descension via selectedYear prop from Investments | Investments selectYearHandler(updateYearSelected(chosenYear)) where chosenYear = event.target.value Capture User's Year preference
// const filteredData = props.yearReturnData.filter(yearReturnData.year === selectedYear)

//States 
//selectedYear within ReturnItemTable sub-component conditionally shown

//To Do:

//Write state to save UserInvestment object within Investments.

//Write obtainUserInvestmentObject functon for Investments, saving output to state in form of object.

//Create a choose year selection interface component.

//Write selected year state in Return Item Table


//Write selected year function in ReturnItemTable


function Investments(props) {
   
  const [userInvestmentState,setUserInvestmentState] = useState(
    {currentSavings: 0,
     yearlySavings: 0,
     expectedInterest: 0,
     investmentDuration: 0
    }
  );


  function obtainUserInvestmentInputs(value_object)
  {
    setUserInvestmentState(
        {
            currentSavings: value_object.currentSavings,
            yearlySavings: value_object.yearlySavings,
            expectedInterest: value_object.expectedInterest,
            investmentDuration: value_object.investmentDuration
        }
    );
    
  }

 

  function resetUserInvestmentInputs()
  {
    setUserInvestmentState(
        {
            currentSavings: 0,
            yearlySavings: 0,
            expectedInterest: 0,
            investmentDuration: 0,
        }
    );
  }

  const calculateHandler = (userInput) => {
    // Should be triggered when form is submitted
    // You might not directly want to bind it to the submit event on the form though...

    const yearlyData = []; // per-year results
    
    //Check whether userInvestmentState is an object or empty string.
    if (typeof userInput === "object" && userInput !== null)
    {
    let currentSavings = +userInput["currentSavings"]; // feel free to change the shape of this input object!
    console.log("Current savings: " + currentSavings);
    const yearlyContribution = +userInput["yearlySavings"]; // as mentioned: feel free to change the shape...
    const expectedReturn = +userInput["expectedInterest"] / 100;
    const duration = +userInput["investmentDuration"];

    // The below code calculates yearly results (total savings, interest etc)
    let cumulativeSavings = currentSavings + yearlyContribution;
    for (let i = 0; i < duration; i++) {
      const yearlyInterest = currentSavings * expectedReturn;
      currentSavings += yearlyInterest + yearlyContribution;
      yearlyData.push({
        // feel free to change the shape of the data pushed to the array!
        year: i + 1,
        yearlyInterest: yearlyInterest,
        savingsEndOfYear: currentSavings,
        yearlyContribution: cumulativeSavings,
        startingInterestRate: +userInput["expectedInterest"]
      });
      cumulativeSavings += yearlyContribution;
      console.log(yearlyData);
    }
    }
    // do something with yearlyData ...
    //setYearlyReturns([...yearlyData]);
    //return yearlyReturns;
    return yearlyData;
  };

  return (
    <div>
      <HeroHeader />
      <InvestmentForm resetuserinvestmentinputs={resetUserInvestmentInputs} obtainuserinvestmentinputs={obtainUserInvestmentInputs}/>
      <ReturnItemTable yearlyreturns={calculateHandler(userInvestmentState)} />
    </div>
  );

}

export default Investments;
