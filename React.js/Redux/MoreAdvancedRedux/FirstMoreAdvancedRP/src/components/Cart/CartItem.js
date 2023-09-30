import classes from './CartItem.module.css';
import {quantitySliceActions} from '../../store/quantity-slice';
import {useDispatch} from 'react-redux';

const CartItem = (props) => {
  const {id, title, quantity, total, price } = props.item;
  console.log("Props.item:",props.item,"title:",title,"quantity:",quantity,"price:",price);
  const dispatch = useDispatch();

  const oneChangeHandler = (positive) =>
  {
    if (positive)
    dispatch(quantitySliceActions.addItemToCart(props.item));
    else
    {
    dispatch(quantitySliceActions.removeItemFromCart(id));
    }
  };

  return (
    <li className={classes.item}>
      <header>
        <h3>{title}</h3>
        <div className={classes.price}>
          {/* ${total.toFixed(2)}{' '} */}
          {/* <span className={classes.itemprice}>(${props.item && price.toFixed(2)}/item)</span> */}
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{quantity}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={()=>{oneChangeHandler(false)}}>-</button>
          <button onClick={()=>{oneChangeHandler(true)}}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
