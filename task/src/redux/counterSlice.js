import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    cart:[]
}

export const counterSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addCart: (state,action) => {
        state.cart.push(action.payload)
    },
    removeCart: (state,action) => {
        state.cart = state.cart.filter((cart) => cart.id !== action.payload.id)
  }
}
})

// Action creators are generated for each case reducer function
export const { addCart,removeCart } = counterSlice.actions

export default counterSlice.reducer