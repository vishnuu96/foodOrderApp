import React, { Fragment } from 'react'
import ModelBox from './ModelBox'
import classes from '../UI/SummeryModel.module.css'

const SummeryModel = () => {
  return (
       <ModelBox  className={classes.md}>
        <h1 className={classes.h1} >Delicious Food, Delivered To You</h1>
        <p className={classes.summery}>choose your favourite meal from our broad selection of available means and enjoy a delicious lunch or dinner at home</p>

        <p className={classes.summery}>all our meals are cooked with high quality ingredients,jusr-in-time and of course by experienced chefs!</p>
        </ModelBox>
    
  )
}

export default SummeryModel