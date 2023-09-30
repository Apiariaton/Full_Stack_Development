import {configureStore} from '@reduxjs/toolkit';
import quantitySliceReducer from "./quantity-slice";
import cartToggleSliceReducer from "./cart-toggle-slice";


const store = configureStore(
{reducer : {quantity: quantitySliceReducer,cartToggle: cartToggleSliceReducer}
}
);

export default store;