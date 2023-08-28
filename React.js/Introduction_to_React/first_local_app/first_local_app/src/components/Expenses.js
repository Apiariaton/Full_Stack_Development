import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";

function Expenses(props)
{
  return <div className="expenses">
        {props.expenses.map(expense => 
            <ExpenseItem
                id = {expense.id}
                title={expense.title}
                price={expense.price}
                date={expense.date}
            />    
            )}
        </div>
}


export default Expenses;
