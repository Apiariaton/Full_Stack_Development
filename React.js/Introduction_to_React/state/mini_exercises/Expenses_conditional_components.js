import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";
import React, { useState } from "react";

function Expenses(props) {
  const [yearSelected, updateYearSelected] = useState("2020");

  let filterInfoText = "2019,2020,2021,2022";

  if (yearSelected === "2019") {
    filterInfoText = "Years not selected: 2020, 2021, 2022";
  } else if (yearSelected === "2020") {
    filterInfoText = "Years not selected: 2019, 2021, 2022";
  } else if (yearSelected === "2021") {
    filterInfoText = "Years not selected: 2019,2020, 2022";
  }
  if (yearSelected === "2022") {
    filterInfoText = "Years not selected: 2019, 2020, 2021";
  }

  function saveSelectedYearToExpenses(selectedYear) {
    updateYearSelected(selectedYear);
    console.log(selectedYear);
  }

  const filteredExpenses = 
     props.expenses.filter(
      (expense) => { return expense.date.getFullYear().toString() === yearSelected}
    );
  

  let expensesContent = <h1 className="text-white">No expenses found.</h1>;
  console.log(filteredExpenses);

  if (filteredExpenses.length > 0) {
    expensesContent = filteredExpenses.map((filteredItem) => {
      return (
        <ExpenseItem
          key={filteredItem.id}
          title={filteredItem.title}
          price={filteredItem.price}
          date={filteredItem.date}
        />
      );
    });
  }
  console.log(filteredExpenses.length);

  /*
{filteredExpenses.length === 0 && <h2 className="text-white"> No Expenses Found </h2>} 
          {filteredExpenses.length && filteredExpenses.map(filteredExpense =>
          {
            return (<ExpenseItem
                key = {filteredExpense.id}
                title={filteredExpense.title}
                price={filteredExpense.price}
                date={filteredExpense.date}
            />);    
          })}


*/

  return (
    <div>
      <ExpensesFilter saveYearToExpenses={saveSelectedYearToExpenses} />
      <h3>{expensesContent}</h3>
      <div className="expenses"></div>
    </div>
  );
}

export default Expenses;
