import React from 'react';
import CardShort from '../../components/cardShort';
import { useSelector } from 'react-redux';
import useActions from '../../store/actions';
import styles from './Favorite.module.scss';

const Favorite = () => {
    const favorite = useSelector(({ favorite }) => favorite.list);
    const { handleAddToBasket, handleDeleteFromFavorites, handleAddToFavorites } = useActions();

    const handleChangeFavorites = (flag, product) => {
        if (flag) handleDeleteFromFavorites(product);
        else handleAddToFavorites(product);
    };

    return (
        <div>
            <span className={styles.title}>Избранное</span>
            <div className={styles.content}>
                {favorite.map((product) => {
                    return (
                        <CardShort
                            key={product.ItemId}
                            product={product}
                            isInFavorite
                            handleChangeFavorites={handleChangeFavorites}
                            handleAddToBasket={handleAddToBasket}
                        />
                    );
                })}
            </div>
        </div>
    );
};

export default Favorite;
