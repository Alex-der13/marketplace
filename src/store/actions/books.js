import data from '../../books/Arts.json'
import {Books} from '../reducers'

const {fetchBooks, fetchBooksSuccess, fetchBooksError} = Books.actions

export const getBooks = () => async (dispatch) => {
    try {
        dispatch(fetchBooks());
        /* const { data } = await getBooksApi(teamId, environment); */
        dispatch(fetchBooksSuccess(data));
    } catch (e) {
        dispatch(fetchBooksError());
    }
};