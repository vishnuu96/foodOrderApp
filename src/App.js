import React, { useState } from "react";
import Header from "./components/Layout/Header";

import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import CartProvider from "./components/store/CartProvider";

function App() {

  const [cartIsShown, setCartIsShown] = useState(false)
 const cartShowhandler=()=>{
  setCartIsShown(true)
 }
 const hideCartHandler=()=>{
  setCartIsShown(false)
 }

  return (
    <CartProvider>
    {cartIsShown && <Cart onClose={hideCartHandler}/>}
    <Header onShowCart={cartShowhandler} />
    <main>
      <Meals />
    </main>
  </CartProvider>
  );
}

export default App;
