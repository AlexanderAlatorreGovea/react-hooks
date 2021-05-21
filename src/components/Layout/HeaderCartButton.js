import React, { useContext, useEffect, useState } from "react";
import CartIcon from "../Cart/CartIcon";
import CartContext from "../../store/cart-context";

import classes from "./HeaderCartButton.module.css";

const HeaderCartButton = (props) => {
  const cartCtx = useContext(CartContext);
  const [btnIsHighlighted, setBtnIsHighlighted] = useState(false);
  const numberOfCartItems = cartCtx.items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);

  const { items } = cartCtx;

  const btnClasses = `${classes.button} ${btnIsHighlighted && classes.bump}`;

  useEffect(() => {
    if (cartCtx.items.length === 0) {
      return;
    }

   const timer = setBtnIsHighlighted(true);
    setTimeout(() => {
        setBtnIsHighlighted(false)
    }, 300)
    return () => {
        clearTimeout(timer)
    };
  }, [items]);

  return (
    <button className={btnClasses} onClick={props.show}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{numberOfCartItems}</span>
    </button>
  );
};

export default HeaderCartButton;
