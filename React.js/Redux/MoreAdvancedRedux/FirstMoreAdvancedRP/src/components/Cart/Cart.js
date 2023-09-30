import Card from '../UI/Card';
import classes from './Cart.module.css';
import CartItem from './CartItem';
import { useSelector } from 'react-redux';

const Cart = (props) => {
const cartItems = useSelector(state=>state.quantity.items);
console.log("Cart Items:",cartItems);

// itemId: newItem.id,
// price: newItem.price,
// quantity: 1,
// totalPrice: newItem.price,
// name: newItem.title,

  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>
        {cartItems.map((item)=> 
        {console.log("Item:",item,"item.name",item.name);
        return (<CartItem key={item.id}
          item={{id: item.id, title: item.name, quantity: item.quantity, total: item.totalPrice , price: item.price}}
        />)})
        }
      </ul>
    </Card>
  );
};

export default Cart;
