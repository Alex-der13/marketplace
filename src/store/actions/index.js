import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getBooks } from './books';
import { handleAddToBasket, handleDeleteFromBasket } from './basket';

const useActions = () => {
    const dispatch = useDispatch();
    return bindActionCreators({ getBooks, handleAddToBasket, handleDeleteFromBasket }, dispatch);
};

export default useActions;
