import {useSelector, useDispatch} from 'react-redux';


import classes from './Counter.module.css';

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector(state => state.counter);
  const show = useSelector(state=>state.showCounter);

  const incrementHandler = () => {
    dispatch({type:"increment",value:1});
  };

  const decrementHandler = () => {
    dispatch({type:"decrement",value:1});
  };

  const fivePlusHandler = () => {
    dispatch({type:"increment",value:5})
  };

  const toggleCounterHandler = (
   
  ) => {dispatch({type:"toggle"});};

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value} hidden={show}>{counter}</div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
      <button onClick={incrementHandler}>Increment</button>
      <button onClick={fivePlusHandler}>Increase by 5</button>
      <button onClick={decrementHandler}>Decrement</button>
    </main>
  );
};

export default Counter;
