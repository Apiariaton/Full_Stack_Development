import React, { useContext, useCallback, useEffect} from "react";
import FoodDataProvider, { FoodData } from "../Store/food-data";
import "./Item.css";

function Item(props) {
  const foodData = useContext(FoodData);
  const dish_data = foodData.dish_data;
  const item_keys = Object.keys(foodData.dish_data);
  const handleAdd = foodData.handleAdd;
  const handleMinus = foodData.handleMinus;
  const updateMenu = foodData.getUpdatedMenu;

  let content = item_keys.map((item_number, index) => {
        const item = dish_data[item_number];
        console.log(item_number);
        return (
          <div className="item" key={item}>
            <div className="item_bar">
            <div className="name" key={item.name}>
              {item.name}
              {console.log(item.name)}
            </div>
            </div>
            <div className="price_bar">
            <div className="price" key={item.price}>
              {item.price}
            </div>
            </div>
            {/* Object format to pass into Inventory Reducer via dispatchDishAddMinus
//   {
//     type: 'ADD' / 'MINUS',
//     dish_item: item1 / item2 / item3 etc depending on item in question
//   }; */}
            <div className="button_bar">
            <button className="button" key={Math.random()} onClick={()=>{handleMinus(item_number)}}>
              -
            </button>
            <div className="quantity" key={Math.random()}>
              {item.quantity}
            </div>
            <button className="button" key={Math.random()} onClick={()=>{handleAdd(item_number)}}>
              +
            </button>
            </div>
          </div>
        );
      });

  useEffect(()=>{updateMenu()},[]);

  return (
    <React.Fragment>
    {content}
    </React.Fragment>
  );
};

export default Item;
