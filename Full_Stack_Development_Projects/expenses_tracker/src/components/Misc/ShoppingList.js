import React, {useState} from 'react';
import '../UI/bootstrap.css';

function ShoppingList(props)
{

const [shoppingList,updateShoppingList] = useState([]); 
const [shoppingItem,updateShoppingItem] = useState("");

function changeHandler(event)
{
updateShoppingItem(event.target.value);
}


function submitHandler(event,prevState)
{

event.preventDefault();
updateShoppingList([...shoppingList,shoppingItem]);
props.saveShoppingItemToMonthlyShoppingList(shoppingItem);
updateShoppingItem("");
}

return <div>
    <ul>
    {shoppingList.map((item,index) => (
    <li className="text-white" key={index}>
        {item}
    </li>
    ))
    }
    </ul>

<form onSubmit={submitHandler}>
<input type="text" value={shoppingItem} onChange={changeHandler}></input>    
</form>
<button type="submit">
Add Shopping Item
</button> 
</div>
}

export default ShoppingList;