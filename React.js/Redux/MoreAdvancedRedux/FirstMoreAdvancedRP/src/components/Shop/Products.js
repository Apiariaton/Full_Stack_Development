import ProductItem from './ProductItem';
import classes from './Products.module.css';

const DUMMY_PRODUCTS = [
  {
    id: 'p1',
    price: 6,
    title: 'My First Book',
    description: 'The first book I ever wrote',
  },
  {
    id: 'p2',
    price: 12,
    title: 'Second Book',
    description: 'Another great book for reading',
  },
  {
    id: 'p3',
    price: 10,
    title: 'Cooking Essentials',
    description: 'A set of essential cooking tools',
  },
  {
    id: 'p4',
    price: 15,
    title: 'Gaming Console',
    description: 'The latest gaming console for gamers',
  },
  {
    id: 'p5',
    price: 8,
    title: 'Fitness Tracker',
    description: 'Track your fitness goals with this device',
  },
];

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
      {DUMMY_PRODUCTS.map(item => {return (
        <ProductItem
          key={item.id}
          id = {item.id}
          title={item.title} price={item.price}
          description={item.description}
        />
      )})
      }
      </ul>
    </section>
  );
};

export default Products;
