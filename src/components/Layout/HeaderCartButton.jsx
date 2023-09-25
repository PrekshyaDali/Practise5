import classes from './HeaderCartButton.module.css'
import { useContext } from 'react';
import CartContext from '../../store/cart-context';
import Cart from '../Cart/Cart';
const HeaderCartButton = (props) => {

const cartCtx = useContext(CartContext)

console.log(cartCtx.items)

const numberOfUniqueItems = cartCtx.items.length

  return (
    <>
      <button onClick={props.onClick} className={classes.cart}>
        <img className={classes.carticon} src="/carticon.svg" alt="cart icon" />
        <p>Your Cart</p>
        <div className={classes.cartnumber}>{numberOfUniqueItems}</div>
      </button>
    </>
  );
};

export default HeaderCartButton;