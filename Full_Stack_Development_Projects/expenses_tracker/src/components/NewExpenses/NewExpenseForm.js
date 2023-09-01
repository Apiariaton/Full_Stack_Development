import React, { useState } from "react";
import "./NewExpenseForm.css";

const NewExpenseForm = (props) => {
  const [itemPrice, setItemPrice] = useState("");
  const [itemTitle, setItemTitle] = useState("");
  const [itemDate, setItemDate] = useState("");

  function priceChangeHandler(event) {
    setItemPrice(event.target.value);
  }

  function titleChangeHandler(event) {
    setItemTitle(event.target.value);
  }

  function dateChangeHandler(event) {
    setItemDate(event.target.value);
  }

  function submitChangeHandler(event) {
    event.preventDefault();
    const expenseData = {
      title: itemTitle,
      price: +itemPrice,
      date: new Date(itemDate),
    };

    
    props.onSaveExpenseData(expenseData);
    console.log(expenseData);
    setItemDate("");
    setItemPrice("");
    setItemTitle("");
  }

  return (
    <form onSubmit={submitChangeHandler}>
      <div class="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" value={itemTitle} onChange={titleChangeHandler} />
        </div>
        <div className="new-expense__control">
          <label>Price</label>
          <input type="number" value={itemPrice} onChange={priceChangeHandler} />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2023-8-30"
            value={itemDate}
            onChange={dateChangeHandler}
          />
        </div>
        <div className="new-expense__actions">
          <button type="submit">Add Expense</button>
          <button type="button" onClick={props.clickHandler__cancel}>Cancel</button>
        </div>
      </div>
    </form>
  );
};

export default NewExpenseForm;
