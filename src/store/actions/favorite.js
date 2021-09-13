import { Favorite } from '../reducers';

const { addToFavorites, deleteFromFavorites } = Favorite.actions;

export const handleAddToFavorites = (product) => (dispatch) => {
    dispatch(addToFavorites(product));
};
export const handleDeleteFromFavorites = (product) => (dispatch) => {
    console.log('test');
    dispatch(deleteFromFavorites(product));
};
