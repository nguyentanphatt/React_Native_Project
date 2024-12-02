import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'

export const fetchCart = createAsyncThunk('Cart/fetchCart', async () => {
    const response = await fetch('http://react.mimixd.app:25565/api/cart')
    const data = await response.json();
    return data
})

export const clearCart = createAsyncThunk('Cart/clearCart', async () => {
    const response = await fetch('http://react.mimixd.app:25565/api/cart/clear')
    const data = await response.json();
    return data
})

export const addCart = createAsyncThunk('Cart/addCart', async (newItem) => {
    const response = await fetch('http://react.mimixd.app:25565/api/cart', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newItem),
    })
    const data = await response.json()
    return data
})

export const removeCartItem = createAsyncThunk('Cart/removeCartItem', async (newItem) => {
    const response = await fetch('http://react.mimixd.app:25565/api/cart/remove', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name: newItem
        }),
    })
    const data = await response.json()
    return data
})

const CartSlice = createSlice({
    name: 'cart',
    initialState:{
        cart: [],
        error: null,
        state: 'idle',
    },
    reducers:{},
    extraReducers: (builder) => {
        builder
            .addCase(fetchCart.pending, (state) => {
                state.status = 'Loading'
            })
            .addCase(fetchCart.fulfilled, (state, action) => {
                state.status = "Succeeded"
                state.cart = action.payload
            })
            .addCase(fetchCart.rejected, (state, action) => {
                state.status = "Failed"
                state.action = action.error.message
            })
            .addCase(addCart.fulfilled, (state, action) => {
                state.status = action.payload
            })
            .addCase(removeCartItem.fulfilled, (state, action) => {
                state.status = action.payload
            })
            .addCase(clearCart.fulfilled, (state, action) => {
                state.cart = action.payload
            })
    }
})

export default CartSlice.reducer