import React from 'react'
import classes from './MealItemForm.module.css'

const MealItemForm = () => {
  return (
    <form className={classes.form}>
        <div className={classes.amount}>
        <div>Amount</div>
        <div className={classes.number}>1</div>
        </div>
        <button>+Add</button>
    </form>
  )
}

export default MealItemForm