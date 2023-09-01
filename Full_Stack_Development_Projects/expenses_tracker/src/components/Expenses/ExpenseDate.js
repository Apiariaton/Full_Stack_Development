import "../UI/bootstrap.css";
import "./ExpenseDate.css";

function ExpenseDate(props) {
    const month = props.date.toLocaleString("en-GB", { month: "long" });
    const day = props.date.toLocaleString("en-GB", { day: "2-digit" });
    const year = props.date.getFullYear();
    return (
    <div className="expense-date">
      <div className="expense-date__day text-white">{day}</div>
      <div className="expense-date__month text-white">{month}</div>
      <div className="expense-date__year text-white">{year}</div>
    </div>
  );
}

export default ExpenseDate;
