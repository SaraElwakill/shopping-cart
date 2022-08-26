import { createSlice } from "@reduxjs/toolkit"


const initialState = {} 
const usersSlice = createSlice({
            name: 'users',
            initialState,
            reducers: {
                signIn : (state, action)=>{
                    
                }
            },
})
    
  // Action creators are generated for each case reducer function


  export const usersActions = usersSlice.actions
  
  export default usersSlice.reducer