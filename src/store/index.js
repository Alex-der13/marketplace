import { configureStore } from '@reduxjs/toolkit';
import { Basket, Books } from './reducers';

export const store = configureStore({
    reducer: { books: Books.reducer, basket: Basket.reducer },
});
