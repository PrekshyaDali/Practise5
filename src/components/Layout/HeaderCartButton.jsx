import classes from './HeaderCartButton.module.css'

const HeaderCartButton = () => {
  return (
    <>
      <button className={classes.cart}>
        <img className={classes.carticon} src="/carticon.svg" alt="cart icon" />
        <p>Your Cart</p>
        <div className={classes.cartnumber}>3</div>
      </button>
    </>
  );
};

export default HeaderCartButton;