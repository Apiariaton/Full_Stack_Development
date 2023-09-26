import React, { useEffect, useReducer, useContext, useState, useCallback } from "react";
import "./PayDialogue.css";
import payImage from "../../assets/payImage.jpg";
import vectorBack from "../../assets/vectorBack.png";
import FoodDataProvider, { FoodData } from "../Store/food-data";

//Update to access values of fieldValue dynamically
//Problems: HTML form
//Javascript event listeners within HTML form
//Problem with HTTP request
//Problem with refresh during HTTP request
//Problem with one form interfering with another form
//Problem with the sequencing of React states
//Problem with a bad request caused by a bad object



function PayDialogue(props) {
  const foodData = useContext(FoodData);

  async function validatePostCode(postcode) {
    console.log(postcode);
    const query =
      "https://api.postcodes.io/postcodes/" + postcode + "/validate";
    const response = await fetch(query);
    console.log(response);
    if (response["result"]) return true;
    return false;
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
  }

  const [orderSuccess, updateOrderSuccess] = useState("");
  //Initial state of payment form valid
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
      "",
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
  }

  const submitHandler = useCallback((event)=>{
    event.preventDefault();
    console.log("Button pressed");

    const postcodeValid = validatePostCode(paymentForm.postcode);
    dispatchFieldValidity({
      type: "UPDATE",
      fieldName: "postcodeValid",
      fieldValue: [postcodeValid],
    });
    dispatchFieldValidity({ type: "SUBMIT" });

    if (
      postcodeValid &&
      paymentForm.flAddressIsValid &&
      paymentForm.slAddressIsValid &&
      paymentForm.fullNameIsValid
    ) {
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

  return (
    <React.Fragment>
      <div className="pay_dialogue">
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
                    inputBlurHandler(event);
                  }}
                  onChange={(event) => {
                    inputBlurHandler(event);
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
                    inputBlurHandler(event);
                  }}
                  onChange={(event) => {
                    inputBlurHandler(event);
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
                    inputBlurHandler(event);
                  }}
                  onChange={(event) => {
                    inputBlurHandler(event);
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
                    inputBlurHandler(event);
                  }}
                  onChange={(event) => {
                    inputBlurHandler(event);
                  }}
                />  
                <button type="submit" className="pay">
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
      </div>
    </React.Fragment>
  );
}

export default PayDialogue;
