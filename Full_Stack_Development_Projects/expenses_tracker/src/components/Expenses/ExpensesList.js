import React from 'react';
import ExpenseItem from './ExpenseItem';
import './ExpensesList.css';

function ExpensesList(props){


if (props.items.length === 0){
    return <h1 className="text-white">No expenses found.</h1>;
} 
else {
    return <ul className="expenses-list">

   {props.items.map((item) => {return <ExpenseItem
         key={item.id}
         title={item.title}
         price={item.price}
         date={item.date}
       ></ExpenseItem>})
    }
    </ul>
 }
}

export default ExpensesList;