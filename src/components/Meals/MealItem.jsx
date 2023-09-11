import classes from "./MealItem.module.css";
import MealItemForm from "./MealItemForm";


const MealItem = (props) => {
  const price = `$${props.price.toFixed(2)}`; // Define price here

  return (
    <li className={classes.meal}>
      <div className={classes.items}>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{price}</div>
      </div>
      <div>
        <MealItemForm></MealItemForm>
      </div>
    </li>
  );
};

export default MealItem;
