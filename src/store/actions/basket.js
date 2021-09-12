import { Basket } from '../reducers';

const { addToBasket, deleteFromBasket } = Basket.actions;

export const handleAddToBasket = (product) => (dispatch) => {
    dispatch(addToBasket(product));
};
export const handleDeleteFromBasket = (product) => (dispatch) => {
    dispatch(deleteFromBasket(product));
};
