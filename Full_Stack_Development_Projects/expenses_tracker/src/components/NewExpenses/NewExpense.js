import React, {useState} from "react";
import NewExpenseForm from "./NewExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {

  const [showExpenseForm,setShowExpenseForm] = useState(1);

  function clickHandler__show(){
    setShowExpenseForm(0);
  }

  function clickHandler__cancel(){
    setShowExpenseForm(1);
  }

  const onSaveExpenseDataHandler = (enteredExpenseData) =>
  {
    const expenseData = {
        ...enteredExpenseData,
        id : Math.random().toString()
    };
    console.log(expenseData);
    props.add_expense(expenseData);

  }   

  const expenseFormContent = (showExpenseForm === 0) 
  ? <NewExpenseForm clickHandler__cancel={clickHandler__cancel} addExpenseHandler={props.addExpenseHandler} onSaveExpenseData={onSaveExpenseDataHandler}></NewExpenseForm>
  : <button onClick={clickHandler__show}>Add New Expense</button>;


  return (
    <div className="new-expense">
      <div>{expenseFormContent}</div>
    </div>
  );
};

export default NewExpense;
