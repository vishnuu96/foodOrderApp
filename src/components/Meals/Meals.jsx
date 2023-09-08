import React, { Fragment } from 'react'
import SummeryModel from './SummeryModel'
import AvailableMeals from './AvailableMeals'

const Meals = () => {
  return (
    <Fragment>
      <SummeryModel/>
      <AvailableMeals/>
    </Fragment>
  )
}

export default Meals