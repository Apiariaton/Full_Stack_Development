const redux = require('redux');



const directionReducer = (state={direction:"STATIONARY"},action) =>
{
if (action.type === "MOVE")
{
    if (action.name === "UP")
    {
        return {
            direction: "UP",
        }
    }
    else if (action.name === "DOWN")
    {
        return {
            direction: "DOWN",
        }
    }
}
};


const store = redux.createStore(directionReducer);


const directionSubscriber = () =>
{
    const latestState = store.getState();
    console.log(latestState);
}


store.subscribe(directionSubscriber);


directionSubscriber();
store.dispatch({type:"MOVE", name:"UP"});
directionSubscriber();
store.dispatch({type:"MOVE",name:"DOWN"});
directionSubscriber();