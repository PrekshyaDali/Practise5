import classes from "./Header.module.css";
import React from "react";
import HeaderCartButton from "./HeaderCartButton";
import MealsSummary from "../Meals/Mealssummary";

const Header = () => {
  return (
    <React.Fragment>
      <header className={classes.header}>
        <h1>React meals</h1>
        <HeaderCartButton></HeaderCartButton>
      </header>
      <div className={classes.imagediv}>
        <img
          class={classes.backgroundimage}
          src="/background-image.jpg"
          alt="background image"
        />
      </div>
    </React.Fragment>
  );
};
export default Header;
