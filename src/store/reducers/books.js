import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    data: [],
    loading: false,
    error: false,
};

export default createSlice({
    name: 'books',
    initialState,
    reducers: {
        fetchBooks: (state) => {
            state.loading = true;
        },
        fetchBooksSuccess: (state, action) => {
            state.loading = false;
            state.data = action.payload;
        },
        fetchBooksError: (state) => {
            state.loading = false;
            state.error = true;
        },
    },
});
