import classes from "./Cart.module.css";
import Modal from "../UI/Modal";
import { useContext, useState } from "react";
import CartContext from "../../store/cart-context";

const Cart = (props) => {
  const cartCtx = useContext(CartContext);
  const [totalAmount, setTotalAmount] = useState(0);

  const cartItems = (
    <ul
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        listStyle: "none",
        justifyContent: "center"
      }}>
      {cartCtx.items.map((item) => (
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            listStyle: "none",
            width: "100%",
            padding: "1rem",
          }}>
          <li
            key={item.id}
            style={{
              fontSize: "1.5rem",
              fontWeight: "bold",
            
            }}>
            {item.name}
          </li>
          <li
            key={item.id}
            style={{
              fontSize: "1.5rem",
              fontWeight: "bold",
            }}>
            {item.amount}
          </li>
          <li
            key={item.id}
            style={{
              fontSize: "1.5rem",
              fontWeight: "bold",
            }}>
            {item.price}
          </li>
          <li
            key={item.id}
            style={{
              fontSize: "1.5rem",
              fontWeight: "bold",
            }}>
            {(item.price * item.amount).toFixed(2)}
          </li>
        </div>
      ))}
    </ul>
  );

  return (
    <Modal onClose={props.onClose}>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          listStyle: "none",
          width: "100%",
          padding: "1rem",
          borderBottom: "1px solid #ccc",
          marginBottom: "1rem",
          
        }}>
        <h2
          style={{
            fontSize: "1.5rem",
            fontWeight: "bold",
          }}>
          Your Cart
        </h2>
        <span
          style={{
            fontSize: "1.5rem",
            fontWeight: "bold",
          }}>
          Amount
        </span>
        <span
          style={{
            fontSize: "1.5rem",
            fontWeight: "bold",
          }}>
          Price
        </span>
        <span
          style={{
            fontSize: "1.5rem",
            fontWeight: "bold",
          }}>
          Total
        </span>
      </div>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{cartCtx.totalAmount.toFixed(2)}</span>
      </div>

      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={props.onClose}>
          Close
        </button>
        <button className={classes.button}>Order</button>
      </div>
    </Modal>
  );
};

export default Cart;
