import { createSlice } from "@reduxjs/toolkit"


const initialState = {
  cartItems:[],
  showCart: false,
}
const cartSlice = createSlice({
            name: 'cart',
            initialState,
            reducers: {
                addItem : (state, action)=>{
                    
                },
                removeItem :(state, action)=>{

                },
                setShowCart :(state, action)=>{
                  state.showCart = action.payload;
                },
            },
})
    
  // Action creators are generated for each case reducer function


export const cartActions = cartSlice.actions

export default cartSlice.reducer