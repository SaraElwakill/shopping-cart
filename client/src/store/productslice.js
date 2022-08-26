import { createSlice } from "@reduxjs/toolkit"
//import data from '../data.json'

const initialState = [] 
const productsSlice = createSlice({
            name: 'products',
            initialState,
            reducers: {
                getProducts : (state, action)=>{
                    return state = action.payload
                },
                addProducts :(state, action)=>{
                    state.push(action.payload)
                },
            },
})
    
  // Action creators are generated for each case reducer function


  export const productActions = productsSlice.actions
  
  export default productsSlice.reducer