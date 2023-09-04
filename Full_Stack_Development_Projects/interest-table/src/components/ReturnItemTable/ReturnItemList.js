import React, {useState} from 'react';
import ReturnItem from './ReturnItem';
import styles from "./ReturnItemTable.module.css";


function ReturnItemList(props)
{
{//Filter version: State descension via selectedYear prop from Investments | Investments selectYearHandler(updateYearSelected(chosenYear)) where chosenYear = event.target.value Capture User's Year preference
// const filteredData = props.yearReturnData.filter(yearReturnData.year === selectedYear)


}
    let returnItemList = <tbody><tr></tr></tbody>; 
     if (Array.isArray(props.yearlyreturns) && (props.yearlyreturns).length > 0)
     {
        if (props.yearselected == 0)
        {
        returnItemList = <tbody> {props.yearlyreturns.map((yearlyreturn,index)=>{return <ReturnItem yearlyreturn={yearlyreturn} key={index}/> })} </tbody>;
        }
        else
        {
        let filteredContent = props.yearlyreturns.filter((yearlyreturn,index) => yearlyreturn.year <= props.selectedyear);    
        console.log(filteredContent);
        returnItemList = <tbody> {filteredContent.map((yearlyreturn,index)=>{return <ReturnItem yearlyreturn={yearlyreturn} key={index}/> })} </tbody>;
        }    
    }    
    

    return returnItemList;
} 


    


export default ReturnItemList;