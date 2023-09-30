import {configureStore,createSlice} from '@reduxjs/toolkit';

const initialState = {value: "Wahay"};

const nameSlice = createSlice(
{
    name: "NAME",
    initialState,    
    reducers : {
        capitalise(state){
            state.value = (state.value).toUpperCase();
        },
        lowercase(state){
            state.value = (state.value).toLowerCase();
        },
        neenaw(state){
            state.value = state.value + "NeeNaw";
        },
        randomString(state,action)
        {
            state.value = state.value + action.payload;
        }
    }
}
);


const store = configureStore({reducer: nameSlice.reducer});

export const nameActions = nameSlice.actions;

export default store;






