import {createStore} from 'redux';

const initialState = {counter:0, showCounter:true};

const counterReducer = (state = initialState,action) => {

if (action.type === "increment")
{
    return {
        counter: state.counter + action.value,
        showCounter:state.showCounter,
    }

}
else if (action.type === "decrement")
{
    return {
        counter: state.counter - action.value,
        showCounter:state.showCounter,
    }
}
else if (action.type === "toggle")
{
    return {
        counter: state.counter,
        showCounter: !state.showCounter,
    }
}

return state;
};

const store = createStore(counterReducer);



export default store;