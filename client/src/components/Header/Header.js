import React from 'react';
import "./Header.scss"
import {words} from "../../words"
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { cartActions } from '../../store/cartSlice';
const Header = () => {
  const cartItems = useSelector(state => state.cart.cartItems)
  const showCart = useSelector((state) =>state.cart.showCart)
  const dispatch = useDispatch()
  
    let sum = 0

  cartItems.forEach(item=> {
    
    sum+=item.qty
  
  })
    return (
        
            <header>
                <img src='../images/logo-home-png-7417.png' alt="logo"/>
                <h3>{words.header}</h3>
                <button onClick={()=>dispatch(cartActions.setShowCart(!showCart))} >
                    <span className='cart-icon'>
                        <AiOutlineShoppingCart />
                    </span>
                    <span className = "span">{sum}</span>
                </button>    
            </header>
    
    )
}

export default Header
