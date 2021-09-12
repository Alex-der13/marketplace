import React from 'react';
import CardShort from '../../components/cardShort';
import useActions from '../../store/actions';
import styles from './Favorite.module.scss';

const Favorite = ({ favoriteList, changeFavoriteList }) => {
    const { handleAddToBasket } = useActions();
    return (
        <div>
            <span className={styles.title}>Избранное</span>
            <div className={styles.content}>
                {favoriteList.map((category) => {
                    const isInFavorite = favoriteList.some((item) => item.ItemId === category.ItemId);
                    return (
                        <CardShort
                            key={category.ItemId}
                            category={category}
                            isInFavorite={isInFavorite}
                            changeFavoriteList={changeFavoriteList}
                            handleAddToBasket={handleAddToBasket}
                        />
                    );
                })}
            </div>
        </div>
    );
};

export default Favorite;
