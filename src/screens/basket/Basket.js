import React from 'react';
import { Typography } from '@material-ui/core';
import { useSelector } from 'react-redux';
import useActions from '../../store/actions';
import styles from './Basket.module.scss';

const Basket = () => {
    const basket = useSelector(({ basket }) => basket.list);
    const { handleDeleteFromBasket } = useActions();
    const totalPrice = basket.reduce((a, item) => a + item.Price, 0);
    const BasketCard = ({
        products: {
            Name,
            PictureUrl,
            Price,
            ItemId,
            Params: { Author },
        },
    }) => (
        <div className={styles.card}>
            <img className={styles.img} src={PictureUrl} alt="book" width="80" height="100" />
            <div className={styles.name_block}>
                <div className={styles.name}>{Name}</div>
                <div className={styles.author}>{Author}</div>
            </div>
            <div className={styles.price}>{Price} руб.</div>
            <div className={styles.delete} onClick={() => handleDeleteFromBasket(ItemId)}></div>
        </div>
    );

    return (
        <div className={styles.basket}>
            <div className={styles.title}>Корзина</div>
            <div className={styles.cards_list}>
                {basket.map((item, index) => (
                    <BasketCard
                        key={index}
                        ItemId={item.ItemId}
                        Name={item.Name}
                        PictureUrl={item.PictureUrl}
                        Price={item.Price}
                        products={item}
                    />
                ))}
            </div>
            <div className={styles.total}>
                <Typography variant="body1">Итого: {totalPrice} руб.</Typography>
            </div>
        </div>
    );
};

export default Basket;
