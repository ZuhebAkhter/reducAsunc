import { useDispatch,useSelector} from 'react-redux';
import classes from './CartButton.module.css';
import { toggle } from '../../store/uiSlice'; 

const CartButton = (props) => {
  const cartItem=useSelector(state => state.cart.totalQuantity)
  const dispatc=useDispatch();
  const toggeleCartHandler=()=>{
    dispatc(toggle())
  }
  return (
    <button className={classes.button} onClick={toggeleCartHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>{cartItem}</span>
    </button>
  );
};

export default CartButton;
