import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getBooks } from './books';
import { handleAddToBasket, handleDeleteFromBasket } from './basket';
import { handleAddToFavorites, handleDeleteFromFavorites } from './favorite';

const useActions = () => {
    const dispatch = useDispatch();
    return bindActionCreators(
        { getBooks, handleAddToBasket, handleDeleteFromBasket, handleAddToFavorites, handleDeleteFromFavorites },
        dispatch,
    );
};

export default useActions;
