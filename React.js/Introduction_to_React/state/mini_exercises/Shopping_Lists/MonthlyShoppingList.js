import ShoppingList from './ShoppingList';
import React, {useState} from 'react';
import '../UI/bootstrap.css';

function MonthlyShoppingList()
{
    const [monthlyShoppingList,setMonthlyShoppingList] = useState([]);

    function saveWeeklyShoppingData(newWeeklyShoppingItem,prevState)
    {
        setMonthlyShoppingList([...monthlyShoppingList,newWeeklyShoppingItem]);
    }

    return (<div>
        <div className="text-warning">This Month's Shopping Items: <ul>{monthlyShoppingList.map((item,index)=>
        {
        return (
            <li key={index}>{item}</li>
        )
        })}</ul></div>
        <ShoppingList saveShoppingItemToMonthlyShoppingList={saveWeeklyShoppingData}></ShoppingList>
    </div>);

}

export default MonthlyShoppingList;