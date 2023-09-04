import React from 'react';

// //     <td>props.yearlyreturns.yearly</td>
function ReturnItem(props)
{
    return (<tr>
      <td>{props.yearlyreturn.year}</td>
        <td>{props.yearlyreturn.savingsEndOfYear}</td>
        <td>{props.yearlyreturn.startingInterestRate}</td>
         <td>{props.yearlyreturn.yearlyInterest}</td>
        <td>{props.yearlyreturn.yearlyContribution}</td>
      </tr>);


}

export default ReturnItem;