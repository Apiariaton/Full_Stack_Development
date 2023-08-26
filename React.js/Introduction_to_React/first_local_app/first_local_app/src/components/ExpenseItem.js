import "./bootstrap.css";
import "./ExpenseItem.css";

function ExpenseItem(props) {
  const expenseDate = new Date(2023,3,28);
  //const expenseTitle = 'Car Insurance';
  const expensePrice = 650.67; 
  const expenseList = ["Flour","Garlic","Chorizo"];


  return (
    <div className="expense-item">
      <div className="">{props.id}</div>
      <div className="text-white">{props.date.toISOString()}</div>
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price text-white">${props.price}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
