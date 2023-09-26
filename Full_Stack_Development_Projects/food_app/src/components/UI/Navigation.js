import "./Navigation.css";
import React, { useContext, useEffect } from "react";
import OpenButton from "../OpenButton/OpenButton";
import Cart from "../Cart/Cart";
import RestaurantName from "../RestaurantName/RestaurantName";
import FoodDataProvider, { FoodData } from "../Store/food-data";

function Navigation(props) {
  const foodData = useContext(FoodData);

  useEffect(() => {
    const dish__data  = foodData.dish_data;
    const inner_data = Object.values(dish__data);
    console.log("Inner Data: ");
    console.log(inner_data);
    let quantity_total = inner_data.filter(
      (inner_data_point) => inner_data_point.quantity
    );
    let price_total = inner_data.filter(
      (inner_data_point) => (inner_data_point.total_price)
    );
    console.log(price_total);
    quantity_total = quantity_total.map((quantity_total)=>quantity_total.quantity);
    price_total = price_total.map((price_total)=>(price_total.total_price));
    console.log("Quantity Total: ");
    console.log(quantity_total);
    const total_price = price_total.reduce(
      (accumulator, currentValue) => accumulator + currentValue,
    0);

    const total_quantity = quantity_total.reduce(
      (accumulator, currentValue) => accumulator + currentValue,
      0
    );
    console.log(total_quantity);
    foodData.setTotalPriceItems({
      // ...FoodData.totalPriceItems,
      total_no_dishes: [total_quantity],
      total_cost: [total_price],
    });
  }, [foodData.dish_data]);

  return (
    // totalPriceItems, setTotalPriceItems
    <div className="grid_space">
      <div className="unit_one">
        <OpenButton/>
      </div>
      <div className="unit_two"></div>
      <div className="unit_three" onClick={props.toggleDialogueWindow}>
        <Cart totalPriceItems={foodData.totalPriceItems}/>
      </div>
      <div className="unit_four"></div>
      <div className="unit_five">
        <RestaurantName></RestaurantName>
      </div>
      <div className="unit-six"></div>
      <div className="unit-seven"></div>
      <div className="unit-eight"></div>
      <div className="unit-nine"></div>
    </div>
  );
}

export default Navigation;
