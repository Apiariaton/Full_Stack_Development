const redux = require('redux');

const nameReducer = (state = {name:"William"},action) => {
    if (action.value && action.value.length > 6)
    {
        return {
            name: action.value,
        };
    }
    else
    {
        return {
            name: state.name,
        };
    }
};

const store = redux.createStore(nameReducer);


const subscribeName = () => {
    const latestState = store.getState().name;
    console.log(latestState);
};

store.subscribe(subscribeName);

subscribeName();

store.dispatch({type: "",value:"Percival"});

subscribeName();