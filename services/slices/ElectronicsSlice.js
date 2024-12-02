import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'

export const fetchElectronics = createAsyncThunk('Electronics/fetchElectronics', async () => {
    const response = await fetch('http://react.mimixd.app:25565/api/electronics')
    const data = await response.json();
    return data
})

//too lazy for HomeSlice.js
export const fetchRandom = createAsyncThunk('Electronics/fetchRandom', async () => {
    const response = await fetch('http://react.mimixd.app:25565/api/recommended')
    const data = await response.json();
    return data
})

const ElectronicsSlice = createSlice({
    name: 'electronics',
    initialState:{
        electronics: [],
        error: null,
        state: 'idle',
    },
    reducers:{},
    extraReducers: (builder) => {
        builder
            .addCase(fetchElectronics.pending, (state) => {
                state.status = 'Loading'
            })
            .addCase(fetchElectronics.fulfilled, (state, action) => {
                state.status = "Succeeded"
                state.electronics = action.payload
            })
            .addCase(fetchRandom.fulfilled, (state, action) => {
                state.status = "Succeeded"
                state.electronics = action.payload
            })
            .addCase(fetchElectronics.rejected, (state, action) => {
                state.status = "Failed"
                state.action = action.error.message
            })
    }
})

export default ElectronicsSlice.reducer