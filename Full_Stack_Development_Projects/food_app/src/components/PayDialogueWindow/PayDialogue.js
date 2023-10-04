import React, { useEffect, useReducer, useContext, useState, useCallback } from "react";
import "./PayDialogue.css";
import payImage from "../../assets/payImage.jpg";
import vectorBack from "../../assets/vectorBack.png";
import FoodDataProvider, { FoodData } from "../Store/food-data";
import {useMediaQuery} from 'react-responsive';

function PayDialogue(props){

  const mobileFrame = useMediaQuery({minWidth: 320,maxWidth:480});


  const foodData = useContext(FoodData);

  async function validatePostCode(postcode) {
    console.log(postcode);
    const query =
      "https://api.postcodes.io/postcodes/" + postcode + "/validate";
    const response = await fetch(query);
    console.log(response);
    if (response["result"]) return true;
    return false;
  };

    async function sendCustomerDataToFirebase(event) {
    
      const time_of_order = new Date().toString();
      const customerAddress =
        paymentForm.flAddress +
        "\n" +
        paymentForm.slAddress +
        "\n" +
        paymentForm.postcode;
  
      const { fullName: customerName } = paymentForm;
      let customerItems = Object.values(foodData.dish_data);
      let orderedItems = customerItems.filter((item) => item.quantity > 0);
      let filteredKeys = Object.keys(foodData.dish_data);
      filteredKeys = filteredKeys.filter((filteredKey) =>
        orderedItems.includes(foodData.dish_data[filteredKey])
      );
      let orderItemDictionary = orderedItems.reduce((acc, item, index) => {
        acc[filteredKeys[index]] = item;
        return acc;
      }, {});
      let totalPrice = Object.values(orderItemDictionary).reduce(
        (acc, item, index) => {
          acc += item.quantity * item.price;
          return acc;
        },
        0
      );
  
      const customerOrder = {
        orderTime: time_of_order,
        customerOrderItems: orderItemDictionary,
        customerOrderTotal: totalPrice,
        customerName: customerName,
        customerAddress: customerAddress,
      };
  
  
      console.log(customerOrder);
      try {
      const response = await fetch(
        "https://quappa-373b1-default-rtdb.europe-west1.firebasedatabase.app/customer_orders.json",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(customerOrder),
        }
      );
  
      if (response.ok) {
        console.log("Order successful"); 
        return true;
      } else {  
        console.log("Order unsuccessful");
        return false;
      }
    }
    catch (error)
    {
      console.log("There was an error",error);
    }
    };


  const paymentForm = foodData.paymentForm;

  const [orderSuccess, updateOrderSuccess] = useState("");
  //Initial state of payment form valid
  


  const submitHandler = useCallback((event)=>{
    event.preventDefault();
    console.log("Button pressed");

    const postcodeValid = validatePostCode(paymentForm.postcode);
    console.log("paymentForm",paymentForm);
    if (
      postcodeValid &&
      paymentForm.flAddressIsValid &&
      paymentForm.slAddressIsValid &&
      paymentForm.fullNameIsValid
    ) 
    {
      const orderSuccess = sendCustomerDataToFirebase();
      if (orderSuccess) updateOrderSuccess("Your order was successful!");
      else {
        updateOrderSuccess("Your order was not successful. Please contact us via telephone...");
      }
    }
    else {
      updateOrderSuccess("Please check that you have entered all your information properly...");
    }
  },[paymentForm]);



 let nonMobileContent = <div className="pay_dialogue">
  <div className="first_column">
    <div className="back_panel">
      <img
        height="70vh"
        src={vectorBack}
        onClick={props.backDialogue}
      ></img>
    </div>
    <table className="total_table">
      <tr>
        <td>Total:</td>
        <td>£{(Math.round(foodData.totalPriceItems.total_cost * 100) / 100).toFixed(2)}</td>
      </tr>
    </table>
    <br/>
    {orderSuccess}
    <form
      onSubmit={(event) => {
        submitHandler(event);
      }}
    >
      <table className="pay_form">
        <tr>
          <td>
          <input
            className="first_entries"
            placeholder="Full Name"
            id="fullName"
            onBlur={(event) => {
              foodData.inputBlurHandler(event);
            }}
            onChange={(event) => {
              foodData.inputBlurHandler(event);
            }}
          />
          </td>
        </tr>
        <tr>
          <td>
          <input
            className="first_entries"
            placeholder="First Line Address"
            id="flAddress"
            onBlur={(event) => {
              foodData.inputBlurHandler(event);
            }}
            onChange={(event) => {
              foodData.inputBlurHandler(event);
            }}
          />
          </td>
        </tr>
        <tr>
          <td>
          <input
            className="first_entries"
            placeholder="Second List Address"
            id="slAddress"
            onBlur={(event) => {
              foodData.inputBlurHandler(event);
            }}
            onChange={(event) => {
              foodData.inputBlurHandler(event);
            }}
          />
          </td>
        </tr>
        <tr>
          <td>
          <input
            className="first_entries"
            placeholder="Postcode"
            id="postcode"
            onBlur={(event) => {
              foodData.inputBlurHandler(event);
            }}
            onChange={(event) => {
              foodData.inputBlurHandler(event);
            }}
          />  
          <button type="submit" className="pay first_entries">
            Pay 
          </button>
          </td>
        </tr>
      </table>
    </form>
  </div>
  <div className="second_column">
    <div className="button_div">
      <button className="pay_exit" onClick={props.closeAllDialogues}>
        X
      </button>
    </div>
    <div className="image_placeholder"></div>
  </div>
</div>;

let mobileContent = 
<div className="pay_dialogue_mobile">
  <div className="button_div">
  <button className="pay_exit" onClick={props.closeAllDialogues}>
        X
      </button>
    </div>
  <div className="image_placeholder_mobile"></div>
    <div className="back_panel">
      <img
        height="70vh"
        src={vectorBack}
        onClick={props.backDialogue}
      ></img>
    </div>
    <table className="total_table_mobile">
      <tr>
        <td>Total:</td>
        <td>£{(Math.round(foodData.totalPriceItems.total_cost * 100) / 100).toFixed(2)}</td>
      </tr>
    </table>
    <br/>
    {orderSuccess}
    <form
      onSubmit={(event) => {
        submitHandler(event);
      }}
    >
      <table className="pay_form_mobile">
        <tr>
          <td>
          <input
            className="first_entries_mobile"
            placeholder="Full Name"
            id="fullName"
            onBlur={(event) => {
              foodData.inputBlurHandler(event);
            }}
            onChange={(event) => {
              foodData.inputBlurHandler(event);
            }}
          />
          </td>
        </tr>
        <tr>
          <td>
          <input
            className="first_entries_mobile"
            placeholder="First Line Address"
            id="flAddress"
            onBlur={(event) => {
              foodData.inputBlurHandler(event);
            }}
            onChange={(event) => {
              foodData.inputBlurHandler(event);
            }}
          />
          </td>
        </tr>
        <tr>
          <td>
          <input
            className="first_entries_mobile"
            placeholder="Second List Address"
            id="slAddress"
            onBlur={(event) => {
              foodData.inputBlurHandler(event);
            }}
            onChange={(event) => {
              foodData.inputBlurHandler(event);
            }}
          />
          </td>
        </tr>
        <tr>
          <td>
          <input
            className="postcode"
            placeholder="Postcode"
            id="postcode"
            onBlur={(event) => {
              foodData.inputBlurHandler(event);
            }}
            onChange={(event) => {
              foodData.inputBlurHandler(event);
            }}
          />  
          <button type="submit" className="pay">
            Pay 
          </button>
          </td>
        </tr>
      </table>
    </form>
</div>;


  return (
    <React.Fragment>
      {mobileFrame && mobileContent}
      {!mobileFrame && nonMobileContent}
    </React.Fragment>
  );
};

export default PayDialogue;
