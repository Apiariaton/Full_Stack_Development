import Expenses from "./components/Expenses/Expenses";
import CardNoBs from "./components/UI/CardNoBs";
import NewExpense from "./components/NewExpenses/NewExpense";
import MonthlyShoppingList from "./components/Misc/MonthlyShoppingList";
import ShoppingList from "./components/Misc/ShoppingList";

function App() {

  const expenses = [
    {
      id: 0,
      title: "Car Insurance",
      price: 677,
      date: new Date(2021, 3, 2023),
    },

    { id: 1, title: "Groceries", price: 80, date: new Date(2021, 3, 2023) },

    { id: 2, title: "Book", price: 8, date: new Date(2021, 3, 2023) },
  ];

  return (
    <div className="expenses">
      <NewExpense/>
      <CardNoBs>
      <Expenses expenses={expenses}></Expenses>
      </CardNoBs>
      <MonthlyShoppingList></MonthlyShoppingList>
    </div>
  );
}

export default App;
