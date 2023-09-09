import React, {useContext} from 'react';
import FoodDataProvider, {FoodData} from '../Store/food-data';
import "./RestaurantName.css";

function RestaurantName(){

const foodData = useContext(FoodData);

return (
    <div className="restaurantName">
        {foodData.restaurant_times.r_name}
    </div>
    );
}

export default RestaurantName;