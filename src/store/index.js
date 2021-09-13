import { configureStore } from '@reduxjs/toolkit';
import { Basket, Books, Favorite } from './reducers';

export const store = configureStore({
    reducer: { books: Books.reducer, basket: Basket.reducer, favorite: Favorite.reducer },
});
