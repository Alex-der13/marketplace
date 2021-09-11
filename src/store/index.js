import { configureStore } from '@reduxjs/toolkit'
import {Books} from './reducers'

export const store = configureStore({
  reducer: {books: Books.reducer},
})