import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'

export const fetchFruits = createAsyncThunk('FreshFruits/fetchFruits', async () => {
    const response = await fetch('http://react.mimixd.app:25565/api/fruits/all')
    const data = await response.json();
    return data
})

export const addFruits = createAsyncThunk('FreshFruits/addFruits', async (newFruits) => {
    const response = await fetch('http://react.mimixd.app:25565/api/fruits/all', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newFruits),
    })
    const data = await response.json()
    return data
})

const fruitsSlice = createSlice({
    name: 'fruits',
    initialState:{
        fruits: [],
        error: null,
        state: 'idle',
    },
    reducers:{},
    extraReducers: (builder) => {
        builder
            .addCase(fetchFruits.pending, (state) => {
                state.status = 'Loading'
            })
            .addCase(fetchFruits.fulfilled, (state, action) => {
                state.status = "Succeeded"
                state.fruits = action.payload
            })
            .addCase(fetchFruits.rejected, (state, action) => {
                state.status = "Failed"
                state.action = action.error.message
            })
            .addCase(addFruits.fulfilled, (state, action) => {
                state.fruits.push(action.payload)
            })
    }
})

export default fruitsSlice.reducer