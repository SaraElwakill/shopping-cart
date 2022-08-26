import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { cartActions } from '../../store/cartSlice';
import './cart.scss'
import CheckoutForm from './CheckoutForm';


const Cart = () => {
  const [checkout,setCheckout] = useState(false)
  const showCart = useSelector((state) =>state.cart.showCart)
  const cartItems = useSelector(state => state.cart.cartItems)
  const dispatch = useDispatch()

  const onRemove = (product) => {
    const filteredCart = cartItems.filter(x => x._id !== product._id)
    if (product.qty > 1) {
      product.qty -= 1
      dispatch(cartActions.removeItem([...filteredCart, product]))

    } else {
      dispatch(cartActions.removeItem(filteredCart))
    }
  }


  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems))
  }, [cartItems])

  let sum = 0
  let total = 0

  cartItems.forEach(item=> {
    
    sum+=item.qty
    total+=item.qty*item.price
  
  })
  

  const onSelection = ()=>{
    setCheckout(true)
  }
  const onClose =()=>{
    setCheckout(false)
  }



  


  return (
    <>
      <div className="overlay" onClick={()=>dispatch(cartActions.setShowCart(!showCart))} ></div>

      <div className='cart-container' >
        <h3>{sum!==0 ? 'The Number of items :' + sum : "The cart is Empty"}</h3>

        {!checkout && (<div className="cart-frame">
          {cartItems.map(product =>
              <div className="cart-card" key={product.id}>
                <img src={product.imageUrl} alt={product.title} />
                <div className="cart-info">
                  <div>
                    <p>{product.title}</p>
                    <p>Number of items :{product.qty}</p>
                    <p>{product.price * product.qty} </p>
                  </div>
                  <button onClick ={()=>onRemove(product)}>Remove</button>
                </div>
              </div>
            )}
          </div>)}

          {(cartItems.length !== 0 && !checkout) && (<div className="cart-footer">
            <div className="cart-total">Total Price : {total} $</div>
            <button onClick={onSelection}>Select Products</button>
          </div>)}
          {checkout && <CheckoutForm 
              onClose={onClose}
              showCart={showCart}
              />}
          
      </div>
    </>  
  );
};

export default Cart;
