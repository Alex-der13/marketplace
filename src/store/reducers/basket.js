import { createSlice } from '@reduxjs/toolkit';

export default createSlice({
    name: 'basket',
    initialState: { list: [] },
    reducers: {
        addToBasket(state, { payload }) {
            state.list = [...state.list, payload];
            console.log(state);
        },
        deleteFromBasket(state, { payload }) {
            state.list = state.list.filter((item) => item.ItemId !== payload.ItemId);
        },
    },
});
