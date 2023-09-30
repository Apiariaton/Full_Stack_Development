import classes from './CartButton.module.css';
import {useDispatch,useSelector} from 'react-redux';
import {cartToggleSliceActions} from '../../store/cart-toggle-slice';

const CartButton = (props) => {
const dispatch = useDispatch();
const cartQuantity = useSelector(state=>state.quantity.totalQuantity);

const toggleCartHandler = () =>
{
  dispatch(cartToggleSliceActions.toggleCartView());
};

  return (
    <button className={classes.button} onClick={()=>{toggleCartHandler()}}>
      <span>My Cart</span>
      <span className={classes.badge}>{cartQuantity}</span>
    </button>
  );
};

export default CartButton;
