import { Books } from '../reducers';
import Data from '../../books';

const { fetchBooks, fetchBooksSuccess, fetchBooksError } = Books.actions;

export const getBooks = (categoryName) => async (dispatch) => {
    try {
        dispatch(fetchBooks());
        // const { data } = await getBooksApi(categoryName);
        setTimeout(() => dispatch(fetchBooksSuccess(Data[categoryName] || [])), 1000);
    } catch (e) {
        dispatch(fetchBooksError());
    }
};
