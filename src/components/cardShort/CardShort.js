import React from 'react';
import { Bookmark } from '@material-ui/icons';
import { Button } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import styles from './CardShort.module.scss';

const CardShort = ({ cardPath, isInBasket, handleAddToBasket, handleChangeFavorites, product, isInFavorite }) => {
    const {
        Name,
        Params: { Author },
        Price,
        PictureUrl,
    } = product;
    const history = useHistory();

    const handleAddToBasketWithParam = () => {
        handleAddToBasket(product);
    };
    const handleOpenCard = () => {
        history.push(cardPath);
    };

    return (
        <div className={styles.Card}>
            <div className={styles.img_block}>
                <img onClick={handleOpenCard} src={PictureUrl} alt="" />
            </div>
            <div onClick={handleOpenCard} className={styles.card_title}>
                {Name}
            </div>
            <div className={styles.card_author}>{Author}</div>
            <div style={{ fontWeight: 'bold' }}>{Price} ₽</div>
            <div className={styles.buttons_block}>
                <Button disabled={isInBasket} variant="contained" color="primary" onClick={handleAddToBasketWithParam}>
                    {isInBasket ? 'В корзине' : 'Купить'}
                </Button>
                <div className={styles.favorite} onClick={() => handleChangeFavorites(isInFavorite, product)}>
                    <Bookmark color={isInFavorite ? 'primary' : 'disabled'} />
                </div>
            </div>
        </div>
    );
};

export default CardShort;
