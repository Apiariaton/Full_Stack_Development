import React, { useReducer, useState, useCallback } from "react";

function inventoryReducer(state, { type, dish_item, returnedData}) {
  //   Object format to pass into Inventory Reducer via dispatchDishAddMinus
  //   {
  //     type: 'ADD' / 'MINUS',
  //     dish_item: item1 / item2 / item3 etc depending on item in question
  //   };
  console.log(type);
  console.log("This is the argument, dish_item" + dish_item);
  const dishItem = state[dish_item];
  console.log("This is the dishItem : " + dishItem);
  const actionDishItem = dish_item;
  console.log(actionDishItem);
  if (type === "ADD") {
    console.log("ADD has been run...");
    if (dishItem.quantity === 5) {
      {
        /* */
      }
      return { ...state, [dish_item]: { ...dishItem, error_code: 1 } };
    } else {
      return {
        ...state,
        [dish_item]: {
          ...dishItem,
          error_code: 0,
          quantity: dishItem.quantity + 1,
          total_price: (dishItem.quantity + 1) * dishItem.price,
        },
      };
    }
  } else if (type === "MINUS") {console.log("MINUS has been run...");
  if (dishItem.quantity === 0) {
    return { ...state, [dish_item]: { ...dishItem, error_code: -1 } };
  } else {
    return {
      ...state,
      [dish_item]: {
        ...dishItem,
        error_code: 0,
        quantity: dishItem.quantity - 1,
        total_price: (dishItem.quantity - 1) * dishItem.price,
      },
    };
  }
}
else if (type === "UPDATE")
{
return {...state,
  ...returnedData,
};
}
}

export const FoodData = React.createContext({
  // dish_data: inventoryData,
  // setErrorMessage: setErrorMessage,
  // errorMessage: errorMessage,
  // totalPriceItems: totalPriceItems,
  // setTotalPriceItems: setTotalPriceItems,
  // dispatchDishAddMinus: dispatchDishAddMinus,
});

//The premise: create a component, which serves as the FoodData.Provider. As a functional component, it can change
//and manage state, as well as including props and props.children. Any values it conveys must be included as value props
//within the values prop and within the original context which was created.
export default function FoodDataProvider(props) {

  
  const d = new Date();
  d.setHours(12, 0, 0);
  const opening = d.getHours();
  console.log(opening);
  let d2 = new Date();
  d2.setHours(22, 0, 0);
  const closing = d2.getHours();
  console.log(closing);

  const restaurant_times = {
    r_name: "Dishoom",
    monday: [opening, closing],
    tuesday: [opening, closing],
    wednesday: [opening, closing],
    thursday: [opening, closing],
    friday: [opening, closing],
    saturday: [opening, closing],
    sunday: [opening, closing],
  };

  const dish_data = {
    item1: {
      name: "Chicken Korma",
      price: 9.99,
      quantity: 0,
      error_code: null,
      total_price: 0,
    },
    item2: {
      name: "Beef Madras",
      price: 10.49,
      quantity: 0,
      error_code: null,
      total_price: 0,
    },
    item3: {
      name: "Garlic Naan",
      price: 2.49,
      quantity: 0,
      error_code: null,
      total_price: 0,
    },};   
  

  const [open,setOpen] = useState(openNow());

  const [errorMessage, setErrorMessage] = useState("");
  const [totalPriceItems, setTotalPriceItems] = useState([]);



  const [inventoryData, dispatchDishAddMinus] = useReducer(
    inventoryReducer,
    dish_data);

  const handleAdd = (dish) => {
    dispatchDishAddMinus({ type: "ADD", dish_item: dish });
  };

  const handleMinus = (dish) => {
    dispatchDishAddMinus({ type: "MINUS", dish_item: dish });
  };

  async function getUpdatedMenu(){
    async function obtainData(){
      const response = await fetch("");
      console.log(response);
      const my_data = await response.json();
      console.log(my_data);
      if (response.ok)
      {
      const my_processed_data = await Object.values(my_data)[0];
      console.log(my_processed_data);
      return my_processed_data;
      }
      else{
      return null;
      }
      }; 

      const returnedData = await obtainData();
      if (returnedData != null)
      {
      dispatchDishAddMinus({ type: "UPDATE", dish_item: "dish", returnedData: returnedData});
      }  
  };

  

    


  function openNow() {
    const time_now = new Date();
    const day = time_now.getDay();
    const time = time_now.getHours();
    console.log(restaurant_times.friday[0]);
    if (
      day == 0 &&
      restaurant_times.sunday[0] <= time < restaurant_times.sunday[1]
    ) {
      return true;
    } else if (
      day == 1 &&
      restaurant_times.monday[0] <= time < restaurant_times.monday[1]
    ) {
      return true;
    } else if (
      day == 2 &&
      restaurant_times.tuesday[0] <= time < restaurant_times.tuesday[1]
    ) {
      return true;
    } else if (
      day == 3 &&
      restaurant_times.wednesday[0] <= time < restaurant_times.wednesday[1]
    ) {
      return true;
    } else if (
      day == 4 &&
      restaurant_times.thursday[0] <= time < restaurant_times.thursday[1]
    ) {
      return true;
    } else if (
      day == 5 &&
      restaurant_times.friday[0] <= time < restaurant_times.friday[1]
    ) {
      return true;
    } else if (
      day == 6 &&
      restaurant_times.saturday[0] <= time < restaurant_times.saturday[1]
    ) {
      return true;
    } else {
      return false;
    }
  }

  return (
    <FoodData.Provider
      value={{
        dish_data: inventoryData,
        setErrorMessage: setErrorMessage,
        errorMessage: errorMessage,
        totalPriceItems: totalPriceItems,
        setTotalPriceItems: setTotalPriceItems,
        handleAdd: handleAdd,
        handleMinus: handleMinus,
        getUpdatedMenu: getUpdatedMenu,
        restaurant_times: restaurant_times
      }}
    >
      {props.children}
    </FoodData.Provider>
  );
};
