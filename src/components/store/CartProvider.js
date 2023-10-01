

import React, { useReducer } from "react";
import CartContext from "./cart-context";

const initialCartState={
    items:[],
    totalAmount:0
}

const cartReducer=(state,action)=>{
    if(action.type==='ADD'){
     const updatedItems=state.items.concat(action.item)
     const updatedTotalAmount=state.totalAmount + action.item.price*action.item.amount

     return {
        items:updatedItems,
        totalAmount:updatedTotalAmount
     }
    }
    return initialCartState
}

const CartProvider = (props) => {


    const [cartState, dispatch] = useReducer(cartReducer,initialCartState)

    const addItemHandler=(item)=>{
       dispatch({type:'ADD',item:item})
    }

    const removeItemHandler=(id)=>{
        dispatch({type:'REMOVE',id:id})
    }

    const cartContext={
        items:cartState.items,
        totalAmount:cartState.totalAmount,
        addItem:addItemHandler,
        removeItem:removeItemHandler,
    }
  return (
    <CartContext.Provider value={cartContext}>
        {props.children}
    </CartContext.Provider>
  )
}

export default CartProvider