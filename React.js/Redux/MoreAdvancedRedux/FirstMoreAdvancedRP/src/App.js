import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import {useSelector} from 'react-redux';

function App() {
const cartViewable = useSelector(state=>state.cartToggle.cartVisible);

  return (
    
    <Layout>
      {cartViewable &&
      <Cart />}
      <Products />
    </Layout>
  );
}

export default App;
