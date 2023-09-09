import React, {useContext} from 'react';
import basket from "../../assets/basket.jpg";
import "./Cart.css";
import FoodDataProvider, {FoodData} from '../Store/food-data';

function Cart(props)
{
const foodData = useContext(FoodData);
const quantity = foodData.totalPriceItems;

return <div className="cart">
        <img src={basket} height="30vh" width="30vw" className="basket"></img>
        <h1>{quantity.total_no_dishes}</h1>
        <h1>{/*quantity.total_cost*/}</h1>
        </div>



}

export default Cart;