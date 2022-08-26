import React, { useState } from 'react';
import './cart.scss'

const CheckoutForm = ({onClose}) => {

    const onSubmit =(e)=>{
        e.preventDefault();
        if(value.name!==""){

            const order = {
                name: value.name,
                email: value.email,
            }
            console.log(order)
        }else{
            alert("Pls provides all inputs")
        }
        
    }
    const [value, setValue] = useState("");
    const onChange =(e)=>{
        setValue((prevState)=>({...prevState,[e.target.name]:e.target.value}))
    }
    

    return (
        <form onSubmit={onSubmit}>
            <span onClick={onClose}>&times;</span>
            <div className="cart-checkout">
                <div className="checkout-input">
                    <label>Name</label>
                    <input type="text" name="name" onChange ={onChange}/>
                </div>
                <div className="checkout-input">
                    <label>Email</label>
                    <input type="email" name="email" required onChange ={onChange} />
                </div>
                <button type="submit">Checkout</button>
            </div>
        </form>
    );
};

export default CheckoutForm;
