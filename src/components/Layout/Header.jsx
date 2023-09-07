import React, { Fragment } from 'react'
// import './Header.css' 
import headerImage from '../../assets/headerBanner.jpg'
import classes from './Header.module.css'
import HeaderCartButton from './HeaderCartButton'

const Header = () => {
  return (
    <React.Fragment>
      <nav className={classes.nav}>
        <h1>ReactMeals</h1>
        <div >
         {/* <button className={classes.cartBtn} >Your Cart</button> */}
         <HeaderCartButton/>
         
        </div>
      </nav>
      <div className={classes['main-img']}>
            <img src={headerImage}/>
      </div>
    </React.Fragment>
  )
}

export default Header