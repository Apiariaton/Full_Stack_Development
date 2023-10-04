import React, { useReducer, useState, useCallback } from "react";
import { openNow, restaurant_times } from "./open-now";

function inventoryReducer(state, { type, dish_item, returnedData}) {

  const dishItem = state[dish_item];
  const actionDishItem = dish_item;
  if (type === "ADD") {
    if (dishItem.quantity === 5) {
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


function formValidityReducer(state, { type, fieldName, fieldValue }) {
  if (type === "UPDATE") {
    if (fieldName === "fullName") {
      const regExpressionFN = new RegExp(
        /^([a-zA-Z\-']{2,}\u{0020}[a-zA-Z\-']{2,}\u{0020}?[a-zA-Z-']{2,}?)$/u
      );
      if (regExpressionFN.test(fieldValue)) {
        return { ...state, fullName: fieldValue, fullNameIsValid: true };
      } else {
        return { ...state, fullNameIsValid: false };
      }
    } else if (fieldName === "flAddress") {
      const regExpressionFLA = new RegExp(
        /^([a-zA-Z\-'\d]{2,15}[\u{0020}]?[a-zA-Z0-9'-]{0,15}\u{0020}?[a-zA-Z0-9{2,15}]?)$/u
      );
      if (regExpressionFLA.test(fieldValue)) {
        return { ...state, flAddress: fieldValue, flAddressIsValid: true };
      } else {
        return { ...state, flAddressIsValid: false };
      }
    } else if (fieldName === "slAddress") {
      const regExpressionSLA = new RegExp(
        /^([a-zA-Z\-'0-9]{2,}[\u{0020}]?[a-zA-Z0-9]{2,}\u{0020}?[a-zA-Z0-9]{2,}?)$/u
      );
      if (regExpressionSLA.test(fieldValue)) {
        return { ...state, slAddress: fieldValue, slAddressIsValid: true };
      } else {
        return { ...state, slAddressIsValid: false };
      }
    } else if (fieldName === "postcode") {
      const regExpressionPC = new RegExp(
        /^([a-zA-Z0-9]{3,4}\u{0020}?[a-zA-Z0-9]{3,})$/u
      );
      if (regExpressionPC.test(fieldValue)) {
        return { ...state, postcode: fieldValue };
      } else {
        return { ...state, postcode: "" };
      }
    } else if (fieldName === "postcodeValid") {
      return { ...state, postcodeIsValid: fieldValue };
    }
  } else if (type === "SUBMIT") {
    console.log("Submit logic activated in Reducer function...");
    if (
      state.flAddressIsValid &&
      state.slAddressIsValid &&
      state.fullNameIsValid &&
      state.postcodeIsValid
    ) {
      return { ...state, postcodeIsValid: true, paymentFormIsValid: true };
    } else {
      return { ...state };
    }
  }
};



export const FoodData = React.createContext({});


export default function FoodDataProvider(props) {

  const openCurrently = openNow();  
  const [open,setOpen] = useState(openCurrently);
  const [errorMessage, setErrorMessage] = useState("");
  const [totalPriceItems, setTotalPriceItems] = useState([]);  


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
      try {
      const response = await fetch("https://quappa-373b1-default-rtdb.europe-west1.firebasedatabase.app/menu.json");
      const my_data = await response.json();
      if (response.ok)
      {
      const my_processed_data = await Object.values(my_data)[0];
      console.log(my_processed_data);
      return my_processed_data;
      }
      }
      catch(error)
      {
        return null;
      } 
    }

      const returnedData = await obtainData();

    if (returnedData !== null)
    {
      dispatchDishAddMinus({ type: "UPDATE", dish_item: "dish", returnedData: returnedData}); 
    }
  
  };


  const startingPaymentForm = {
    postcode: "",
    postcodeIsValid: false,
    fullName: "",
    fullNameIsValid: false,
    flAddress: "",
    flAddressIsValid: false,
    slAddress: "",
    slAddressIsValid: false,
    paymentFormIsValid: false,
  };

  const [paymentForm, dispatchFieldValidity] = useReducer(
    formValidityReducer,
    startingPaymentForm
  );

  function inputBlurHandler(event) {
    switch (event.target.id) {
      case "fullName":
        dispatchFieldValidity({
          type: "UPDATE",
          fieldName: "fullName",
          fieldValue: event.target.value,
        });
        break;
      case "flAddress":
        dispatchFieldValidity({
          type: "UPDATE",
          fieldName: "flAddress",
          fieldValue: event.target.value,
        });
        break;
      case "slAddress":
        dispatchFieldValidity({
          type: "UPDATE",
          fieldName: "slAddress",
          fieldValue: event.target.value,
        });
        break;
      case "postcode":
        dispatchFieldValidity({
          type: "UPDATE",
          fieldName: "postcode",
          fieldValue: event.target.value,
        });
        break;
      default:
        break;
    }
  }


  function checkPostCode(postcodeValid){
    dispatchFieldValidity({
      type: "UPDATE",
      fieldName: "postcodeValid",
      fieldValue: [postcodeValid],
    });
    dispatchFieldValidity({ type: "SUBMIT" });
  };




  



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
        restaurant_times: restaurant_times,
        paymentForm,
        inputBlurHandler,
        checkPostCode,
      }}
    >
      {props.children}
    </FoodData.Provider>
  );
};
