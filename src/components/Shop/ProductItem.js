import { useDispatch } from 'react-redux';
import Card from '../UI/Card';
import classes from './ProductItem.module.css';
import { addItemtoCart } from '../../store/cartSlice';

const ProductItem = (props) => {
  const dispatch = useDispatch();
  const addToCartHandler=()=>{
  dispatch(addItemtoCart({
   id,
   title,
   price
  }))
  }
  const { title, price, description,id } = props;

  return (
    <li className={classes.item}>
      <Card>
        <header>
          <h3>{title}</h3>
          <div className={classes.price}>${price.toFixed(2)}</div>
        </header>
        <p>{description}</p>
        <div className={classes.actions}>
          <button onClick={addToCartHandler}>Add to Cart</button>
        </div>
      </Card>
    </li>
  );
};

export default ProductItem;
