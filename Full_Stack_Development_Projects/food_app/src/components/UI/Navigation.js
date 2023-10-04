import "./Navigation.css";
import React, { useContext, useEffect, useCallback } from "react";
import OpenButton from "../OpenButton/OpenButton";
import Cart from "../Cart/Cart";
import RestaurantName from "../RestaurantName/RestaurantName";
import FoodDataProvider, { FoodData } from "../Store/food-data";
import { useMediaQuery } from "react-responsive";
import { Fragment } from "react";

function Navigation(props) {
  const foodData = useContext(FoodData);

  const mobileFrame = useMediaQuery({ minWidth: 320, maxWidth: 480 });
  
  const updateTotalCost = useCallback(()=>{
    const inner_data = Object.values(foodData.dish_data);

    const total_quantity = inner_data
      .filter((menu_item) => menu_item.quantity)
      .map((items_with_quantity) => items_with_quantity.quantity)
      .reduce((accumulator, currentValue) => accumulator + currentValue, 0);

    const total_price = inner_data
      .filter((menu_item) => menu_item.total_price)
      .map((items_purchased) => items_purchased.total_price)
      .reduce((accumulator, currentValue) => accumulator + currentValue, 0);

    foodData.setTotalPriceItems({
      // ...FoodData.totalPriceItems,
      total_no_dishes: [total_quantity],
      total_cost: [total_price],
    });
  },[foodData.dish_data]);


  useEffect(() => {
    updateTotalCost();
  }, [updateTotalCost,foodData.dish_data]);

  return (

    <Fragment>
      <div className="row_one">
        <OpenButton />
        <div onClick={props.toggleDialogueWindow}>
        <Cart totalPriceItems={foodData.totalPriceItems} />
        </div>
      </div>
      <div className="row_two">
        <RestaurantName></RestaurantName>
      </div>
      <div className="row_three"></div>
    </Fragment>
  );
};


export default Navigation;
