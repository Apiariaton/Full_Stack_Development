import React, { useState, useContext } from "react";
import "./DialogueWindow.css";
import Item from "./Item";
import FoodDataProvider, { FoodData } from "../Store/food-data";

function DialogueWindow(props) {
  const foodData = useContext(FoodData);

  // value={{
  //     foodData.dish_data: inventoryData,
  //     setErrorMessage: setErrorMessage,
  //     errorMessage: errorMessage,
  //     totalPriceItems: totalPriceItems,
  //     setTotalPriceItems: setTotalPriceItems,
  //     handleAdd: handleAdd,
  //     handleMinus: handleMinus,
  //     restaurant_times: restaurant_times
  //   }

  // item6: {
  //     name: "Roti",
  //     price: 1.99,
  //     quantity: 0,
  //     error_code: null,
  //     total_price: 0,
  //   },
  //   item7: {
  //     name: "Chicken Tikka Masala",
  //     price: 10.99,
  //     quantity: 0,
  //     error_code: null,
  //     total_price: 0,
  //   },

  let dish__data = foodData.dish_data;
  let allItems = Object.values(dish__data);
  console.log(allItems);
  console.log(allItems[0]);
  const first_item = allItems[0];
  console.log([first_item.quantity]);
  console.log([allItems[0].quantity]);
  let filteredItems = allItems.filter((item) => item.quantity !== 0);
  console.log("This is the filtered items array");
  console.log(filteredItems);

  let dish_data_keys = Object.keys(dish__data);
  let dish_data_names = Object.values(dish__data).map(item=>item.name);
  console.log("Dish Data names");
  console.log(dish_data_names);

  const names_items_dictionary = dish_data_names.reduce((acc,key,index)=>
  {
    acc[key] = dish_data_keys[index];
    return acc;
  }, {});
  console.log(names_items_dictionary);

  //let name_array = Object.fromEntries(dish_data.map((key)=>([key].name : key));

  //   const handleAdd = foodData.handleAdd;
  //   const handleMinus = foodData.handleMinus;

  //   const ordered_items = dish__data.filter((item) => (item.quantity != 0));

  return (
    <div className="dialogue_window">
      <div className="exit_button" onClick={props.closeDialogueWindow}> <button>X</button></div>
      <div className="dialogue_blank"></div>
      <div className="dialogue_window_banner"></div>
      <div className="dialogue_window_body">
        <table>
          <thead>
            <tr>
              <th>Item</th>
              <th> Quantity </th>
              <th></th>
              <th>Price </th>
            </tr>
          </thead>
          {filteredItems.map((item) => {
            return (
              <React.Fragment>
                <tr>
                  <td>{item.name}</td>
                  <td>{item.quantity}</td>
                  <td className="addm_button"><button onClick={()=>{foodData.handleMinus([names_items_dictionary[item.name]])}}>-</button><button onClick={()=>{foodData.handleAdd([names_items_dictionary[item.name]])}}>+</button></td>
                  <td>{item.price}</td>
                </tr>
              </React.Fragment>
            );
          })}
          
          <tfoot>
    <tr>
    <td></td>
    <td></td>
      <th scope="row">Total</th>
      <td> {(Math.round(foodData.totalPriceItems.total_cost * 100) / 100).toFixed(2)} </td>
    </tr>
  </tfoot>
        </table>

      </div>
    </div>
  );
}

export default DialogueWindow;
