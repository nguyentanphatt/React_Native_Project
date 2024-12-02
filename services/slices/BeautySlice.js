import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'

export const fetchBeauty = createAsyncThunk('Beauty/fetchBeauty', async () => {
    const response = await fetch('http://react.mimixd.app:25565/api/beauty')
    const data = await response.json();

    return data
})

export const addBeauty = createAsyncThunk('FreshBeauty/addBeauty', async (newBeauty) => {
    const response = await fetch('http://react.mimixd.app:25565/api/beauty', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newBeauty),
    })
    const data = await response.json()
    return data
})

const BeautySlice = createSlice({
    name: 'beauty',
    initialState:{
        beauty: [],
        error: null,
        state: 'idle',
    },
    reducers:{},
    extraReducers: (builder) => {
        builder
            .addCase(fetchBeauty.pending, (state) => {
                state.status = 'Loading'
            })
            .addCase(fetchBeauty.fulfilled, (state, action) => {
                state.status = "Succeeded"
                state.beauty = action.payload
            })
            .addCase(fetchBeauty.rejected, (state, action) => {
                state.status = "Failed"
                state.action = action.error.message
            })
            .addCase(addBeauty.fulfilled, (state, action) => {
                state.beauty.push(action.payload)
            })
    }
})

export default BeautySlice.reducer