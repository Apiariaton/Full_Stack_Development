import React, { useState } from 'react';
import "./NewExpenseForm.css";


const NewExpenseForm = () =>
{

const [userInput,setUserInput] = useState(
{
    enteredTitle:'',
    enteredPrice:'',
    enteredDate:''
}
);

const titleChangeHandler = (event) => {
    setUserInput(
        {
            ...userInput,
            enteredTitle:(event.target.value),
        }
    );
    console.log(userInput.enteredTitle);
};

const priceChangeHandler = (event) => {
    setUserInput(
        {
            ...userInput,
            enteredPrice:(event.target.value)}
    );
};

//How to handle events which interact with a previous state
const dateChangeHandler = (event) => {
    setUserInput(
        {    
        ...userInput,
        enteredDate:(event.target.value)
        }
    );
    console.log(event);
};

const inputChangeHandler = (attribute_identifier,element_event) =>
{
if (attribute_identifier == 'title')
{
titleChangeHandler(element_event);    
}
else if (attribute_identifier == 'date')
{
dateChangeHandler(element_event);
}
else
{
priceChangeHandler(element_event);
}
}


return <form>
        <div class="new-expense__controls">
            <div className="new-expense__control">
                <label>Title</label>  
                <input type="text" onChange={(event) => {inputChangeHandler('title',event)}}/>
            </div>
            <div className="new-expense__control">
                <label>Price</label>  
                <input type="number" onChange={(event) => {inputChangeHandler('price',event)}}/>
            </div>
            <div className="new-expense__control">
                <label>Date</label>  
                <input type="date" min="2019-01-01" max="2023-8-30" onChange={(event) => {inputChangeHandler('date',event)}}/>
            </div>
            <div className="new-expense__actions">
                <button type="submit">Add Expense</button>
            </div>

        </div>

    </form>


}

export default NewExpenseForm;
