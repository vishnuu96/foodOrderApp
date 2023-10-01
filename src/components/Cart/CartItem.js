import React from 'react'
import classes from './CartItem.module.css'

const CartItem = (props) => {
    const price=`$${props.price.toFixed(2)}`
  return (
    <li className={classes['cart-item']}>
        <div>
            <h2>{props.name}</h2>
            <div className={classes.summery} >
                <span className={classes.price}>{price}</span>
                <span className={classes.amount}>{props.amount}</span>
            </div>
        </div>
        <div>
            <buttono onClose={props.onRemove}>-</buttono>
            <button onClick={props.onAdd}>+</button>
        </div>
    </li>
  )
}

export default CartItem