import React, { Fragment } from 'react'
import classes from './HeaderCartButton.module.css'
import ShoppingCart from '../../assets/cart32.png'

const HeaderCartButton = (props) => {
  return (
    <button className={classes.button}>
      <span className={classes.icon}><img src={ShoppingCart} alt="cart" srcset="" /></span>
      <span className={classes.cart}>Your Cart</span>
      <span className={classes.badge}>3</span>
    </button>
  )
}

export default HeaderCartButton
