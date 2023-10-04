import React, { useState, useContext, useMemo, useCallback } from "react";
import "./DialogueWindow.css";
import Item from "./Item";
import FoodDataProvider, { FoodData } from "../Store/food-data";

function DialogueWindow(props) {
  
  const foodData = useContext(FoodData);


  let dish__data = foodData.dish_data;
  let allItems = useMemo(()=>{return Object.values(dish__data)});
  const first_item = allItems[0];
  let filteredItems = allItems.filter((item) => item.quantity !== 0);

  let dish_data_keys = Object.keys(dish__data);
  let dish_data_names = Object.values(dish__data).map(item=>item.name);

  const names_items_dictionary = dish_data_names.reduce((acc,key,index)=>
  {
    acc[key] = dish_data_keys[index];
    return acc;
  }, {});
  console.log(names_items_dictionary);



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
          {/* Example case - not the best use case as  */}
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
    <tr>
        <td></td>
        <td></td>
        <th></th>
        <td></td>
    </tr>
  </tfoot>
        </table>
      </div>
      <div className="place_order_container">
      <button className="place_order" onClick={props.showPayDialogue}>Place Order</button>
      </div>    
    </div>
  );
}

export default DialogueWindow;
