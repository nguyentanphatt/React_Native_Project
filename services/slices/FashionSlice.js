import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'

export const fetchFashion = createAsyncThunk('Fashion/fetchFashion', async () => {
    const response = await fetch('http://react.mimixd.app:25565/api/Fashion')
    const data = await response.json();

    return data
})

export const addFashion = createAsyncThunk('FreshFashion/addFashion', async (newFashion) => {
    const response = await fetch('http://react.mimixd.app:25565/api/Fashion', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newFashion),
    })
    const data = await response.json()
    return data
})

const FashionSlice = createSlice({
    name: 'Fashion',
    initialState:{
        fashion: [],
        error: null,
        state: 'idle',
    },
    reducers:{},
    extraReducers: (builder) => {
        builder
            .addCase(fetchFashion.pending, (state) => {
                state.status = 'Loading'
            })
            .addCase(fetchFashion.fulfilled, (state, action) => {
                state.status = "Succeeded"
                state.fashion = action.payload
            })
            .addCase(fetchFashion.rejected, (state, action) => {
                state.status = "Failed"
                state.action = action.error.message
            })
            .addCase(addFashion.fulfilled, (state, action) => {
                state.fashion.push(action.payload)
            })
    }
})

export default FashionSlice.reducer