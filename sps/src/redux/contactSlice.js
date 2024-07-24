import { createSlice } from "@reduxjs/toolkit";

const contactReducerSlice = createSlice({
    name: 'contact',
    initialState: null, 
    reducers: {
        setContact: (state, action) => action.payload,
    },
});

export const { setContact } = contactReducerSlice.actions;

export default contactReducerSlice.reducer;