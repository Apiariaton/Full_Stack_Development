import {createSlice} from '@reduxjs/toolkit';


const initialState = {cartVisible:false};

const cartToggleSlice = createSlice(
{
    name:"cartToggleSlice",
    initialState,
    reducers:
    {
        toggleCartView(state){
            state.cartVisible = !state.cartVisible; 
        } 
    }
}
);


export default cartToggleSlice.reducer;
export const cartToggleSliceActions = cartToggleSlice.actions;