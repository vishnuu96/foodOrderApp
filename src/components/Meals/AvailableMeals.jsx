import React,{Fragment} from 'react'
import classes from './AvailableMeals.module.css'

const DUMMY_MEALS = [
    {
      id: 'm1',
      name: 'Sushi',
      description: 'Finest fish and veggies',
      price: 22.99,
    },
    {
      id: 'm2',
      name: 'Schnitzel',
      description: 'A german specialty!',
      price: 16.5,
    },
    {
      id: 'm3',
      name: 'Barbecue Burger',
      description: 'American, raw, meaty',
      price: 12.99,
    },
    {
      id: 'm4',
      name: 'Green Bowl',
      description: 'Healthy...and green...',
      price: 18.99,
    },
  ];

const AvailableMeals = () => {
   const mealsList=DUMMY_MEALS.map((meal)=>{
     return <li className={classes.li}>
        
        <p >{meal.name}</p> 
        <p> {meal.price}</p> 
        
        </li>
    })
  return (
    <Fragment>
         <ul className={classes.meals}>
            {mealsList}
         </ul>
    </Fragment>
  )
}

export default AvailableMeals