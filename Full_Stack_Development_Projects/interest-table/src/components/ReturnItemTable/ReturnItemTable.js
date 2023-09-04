import React, {useState} from 'react';
import ReturnItemList from './ReturnItemList';
import styles from "./ReturnItemTable.module.css";
import SelectYearDropdown from '../SelectYearDropdown/SelectYearDropdown.';

function ReturnItemTable(props){

    const [yearSelected, setYearSelected] = useState(0);

    //
    function selectYearHandler(event)
    {
       let value = event.target.value !== "None" ? event.target.value : "";
       setYearSelected(value); 
    }
    
     
    
    let returnItemList = "";
    if (Array.isArray(props.yearlyreturns) && props.yearlyreturns.length > 0)
    {
        returnItemList = <ReturnItemList yearselected={yearSelected} yearlyreturns={props.yearlyreturns}></ReturnItemList>;

    }
    else
    {
        returnItemList = <p1> No items to be shown </p1>;
    }
    
    

    return (<div>
        {/*<SelectYearDropdown saveyeartofilter={selectYearHandler} yearlyreturns={props.yearlyreturns}></SelectYearDropdown>*/}
        <table className={styles.result}>
    <thead>
      <tr>
        <th>Year</th>
        <th>Total Savings</th>
        <th>Interest (Year)</th>
        <th>Total Interest</th>
        <th>Invested Capital</th>
      </tr>
    </thead>

 {/* Todo: Show below table conditionally (only once result data is available) */}
        {/* Show fallback text if no data is available */}
    
    
    {/*When complete, add filter by year dropdown */}
    {returnItemList}
  </table>
  </div>
);
}

export default ReturnItemTable;