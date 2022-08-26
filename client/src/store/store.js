import { configureStore } from '@reduxjs/toolkit'
import productsSlice from './productslice'
import cartSlice from './cartSlice'
import usersSlice from './usersSlice'

export const store = configureStore({
  reducer: {
    products: productsSlice,
    cart : cartSlice,
    users : usersSlice,
  },
})