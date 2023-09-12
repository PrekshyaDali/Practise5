import { useContext } from "react";
import classes from "./MealItem.module.css";
import MealItemForm from "./MealItemForm";
import CartContext from "../../store/cart-context";


const MealItem = (props) => {
 const cartctx =  useContext(CartContext);
  const price = `$${props.price.toFixed(2)}`; // Define price here
const AddToCartHandler = amount =>{
  cartctx.addItem({
    id: props.id,
    name: props.name,
    amount: amount,
    price:props.price
  })

}
  return (
    <li className={classes.meal}>
      <div className={classes.items}>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{price}</div>
      </div>
      <div>
        <MealItemForm onAddToCart={AddToCartHandler}></MealItemForm>
      </div>
    </li>
  );
};

export default MealItem;
