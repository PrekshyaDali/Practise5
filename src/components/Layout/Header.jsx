import classes from "./Header.module.css";
import React from "react";

const Header = () => {
  return (
    <React.Fragment>
  
      <header className={classes.header}>
        <h1>React meals</h1>
        <button className={classes.cart}>
          <img
            className={classes.carticon}
            src="/carticon.svg"
            alt="cart icon"
          />
          <p>Your Cart</p>
          <div className={classes.cartnumber}>3</div>
        </button>
      </header>
      <div className = {classes.imagediv}>
        <img class ={classes.backgroundimage}src="/background-image.jpg" alt="background image" />
      </div>
    </React.Fragment>
  );
};
export default Header;
