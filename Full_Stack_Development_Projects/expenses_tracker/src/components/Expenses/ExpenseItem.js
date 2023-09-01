import React, {useState} from 'react';
import "../UI/bootstrap.css";
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
//import ExpensesSent from "./ExpensesSent";


function ExpenseItem(props) {
  //const expenseTitle = 'Car Insurance';
  //const expensePrice = 650.67;
  //const expenseList = ["Flour", "Garlic", "Chorizo"];
  const [title,setTitle] = useState(props.title);
  
  
  const clickHandler = () =>
  {
    setTitle("Updated!");
    console.log(title);
  };

  return (
    <li className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price text-white">${props.price}</div>
      </div>
      <button onClick={clickHandler}>Change title</button>
      
    </li>
  );
}

export default ExpenseItem;
