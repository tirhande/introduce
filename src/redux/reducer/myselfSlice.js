import { createSlice } from '@reduxjs/toolkit'

export const myselfSlice = createSlice({
    name: 'myself',
    initialState: {
        dialogOpen: false,
    },
    reducers: {
        setDialogOpen: (state, action) => {
            state.dialogOpen = action.payload;
        },
    },
})

export const { setDialogOpen } = myselfSlice.actions

export default myselfSlice.reducer