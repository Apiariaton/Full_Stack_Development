import "./bootstrap.css";
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";

function ExpenseItem(props) {
  //const expenseTitle = 'Car Insurance';
  //const expensePrice = 650.67;
  //const expenseList = ["Flour", "Garlic", "Chorizo"];

  return (
    <div className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price text-white">${props.price}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
