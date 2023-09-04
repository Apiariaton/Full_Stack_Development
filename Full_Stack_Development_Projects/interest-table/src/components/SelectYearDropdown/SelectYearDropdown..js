import React, { useState } from "react";

function SelectYearDropdown(props) {

function clickHandler(event)
{
    // alert("Hi");
    // console.log(event);
    //props.saveyeartofilter(event.target.value);
    const selectedYear = event.target.value;
    alert("Hi");
    console.log(event);
    props.saveyeartofilter(selectedYear);
}


   

//Test the effect of state on the filter function
//Then examine the SelectYearDropDown
  
return (
    <div>
      <label htmlFor="SelectYear">Select Year</label>
      <select id="SelectYear" onClick={clickHandler}>
        {props.yearlyreturns.length > 0 ? (
          props.yearlyreturns.map((yearlyreturn, index) => (
            <option value={yearlyreturn.year}
               
              key={index}
            >
              {yearlyreturn.year}
            </option>
          ))
        ) : (
          <option>None</option>
        )}
      </select>
    </div>
  );
}

export default SelectYearDropdown;
