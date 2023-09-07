import React from 'react'
import classes from '../UI/Model.module.css'


const ModelBox = (props) => {
  const cls=classes.model 
  return (
    <div className={cls}>{props.children}</div>
  )
}

export default ModelBox