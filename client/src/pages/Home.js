import React from 'react'
import Cart from '../components/cart/Cart'
import Filter from '../components/Filter/Filter'
import Hero from '../components/Hero/Hero'
import Products from '../components/products/Products'
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { productActions } from "../store/productslice"
import '../index.css'
import { useEffect } from 'react'
import { useState } from 'react'

const Home = () => {
    const showCart = useSelector((state) =>state.cart.showCart)
    const dispatch = useDispatch()

      useEffect(() => {
        fetch("http://localhost:5005/products")
          .then(res => res.json())
          .then(data => {
            dispatch(productActions.getProducts(data))
          })
        // fetch("http://localhost:5005/users")
        //   .then(res => res.json())
        //   .then(d => console.log(d))
      }, [])
    

    return (
        <main>
            <Hero />
            <div className="main-product">
            <Products />
            <Filter />
            </div>
               {showCart && <Cart />}
        </main>
    )
}

export default Home