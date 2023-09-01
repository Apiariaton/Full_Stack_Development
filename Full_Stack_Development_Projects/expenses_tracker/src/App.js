import Expenses from "./components/Expenses/Expenses";
import CardNoBs from "./components/UI/CardNoBs";
import NewExpense from "./components/NewExpenses/NewExpense";
import MonthlyShoppingList from "./components/Misc/MonthlyShoppingList";
import ShoppingList from "./components/Misc/ShoppingList";
import React, { useState } from "react";

const DUMMY_EXPENSES = [
  // 2019
  { id: 0, title: "Car Service", price: 100, date: new Date(2019, 0, 1) },
  { id: 1, title: "Vacation", price: 150, date: new Date(2019, 6, 2) },
  { id: 2, title: "Electronics", price: 75, date: new Date(2019, 11, 3) },
  // ... (repeat for February to December 2019)

  // 2020
  { id: 36, title: "Car Service", price: 120, date: new Date(2020, 3, 1) },
  { id: 37, title: "Dining Out", price: 80, date: new Date(2020, 5, 2) },
  { id: 38, title: "Healthcare", price: 200, date: new Date(2020, 7, 3) },
  // ... (repeat for February to December 2020)

  // 2021
  { id: 72, title: "Car Service", price: 90, date: new Date(2021, 8, 1) },
  { id: 73, title: "Home Improvement", price: 60, date: new Date(2021, 6, 2) },
  { id: 74, title: "Entertainment", price: 110, date: new Date(2021, 2, 3) },
  // ... (repeat for February to December 2021)

  // 2022
  { id: 108, title: "Car Service", price: 130, date: new Date(2022, 5, 1) },
  { id: 109, title: "Clothing", price: 95, date: new Date(2022, 4, 2) },
  { id: 110, title: "Travel", price: 70, date: new Date(2022, 8, 3) },
  // ... (repeat for February to December 2022)
];


function App() {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  function addExpenseHandler(additionalExpense){
    setExpenses((prevExpenses) => {
        return [...prevExpenses, additionalExpense];
      })};
    
  

  return (
    <div className="expenses">
      <NewExpense add_expense={addExpenseHandler} />
      <CardNoBs>
        <Expenses expenses={expenses}></Expenses>
      </CardNoBs>
      <MonthlyShoppingList></MonthlyShoppingList>
    </div>
  );
}

export default App;
