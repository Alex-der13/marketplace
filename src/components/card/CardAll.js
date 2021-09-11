import React from 'react';
import { Bookmark } from '@material-ui/icons';
import { Button } from '@material-ui/core';
import styles from './Card.module.scss';

const CardAll = ({ addBasket, isInBasket, changeFavoriteList, category, isInFavorite }) => {
    const { Name, Params:{Author}, Price, PictureUrl } = category;

    const handleAddToBasket = () => {
      addBasket(category);
    };

    return (
        <div className={styles.Card}>
            <div className={styles.img_block}>
                <img src={PictureUrl} alt="book" />
            </div>
            <div className={styles.card_title}>{Name}</div>
            <div style={{ color: '#9c9c9c' }}>{Author}</div>
            <div style={{ fontWeight: 'bold' }}>{Price} ₽</div>
            <div className={styles.buttons_block}>
                <Button disabled={isInBasket} variant="contained" color="primary" onClick={handleAddToBasket}>
                    {isInBasket ? 'В корзине' : 'Купить' }
                </Button>
                <div className={styles.card_favorite_btn} onClick={() => changeFavoriteList(category)}>
                    <Bookmark color={isInFavorite ? 'primary' : 'disabled'} />
                </div>
            </div>
        </div>
    );
};

export default CardAll;
