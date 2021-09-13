import { createSlice } from '@reduxjs/toolkit';

export default createSlice({
    name: 'favorite',
    initialState: { list: [] },
    reducers: {
        addToFavorites(state, { payload }) {
            state.list = [...state.list, payload];
        },
        deleteFromFavorites(state, { payload }) {
            console.log(payload);
            state.list = state.list.filter((item) => item.ItemId !== payload.ItemId);
        },
    },
});
