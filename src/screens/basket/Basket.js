import React from 'react';
import { Typography } from '@material-ui/core';
import './Basket.css';

const Basket = ({ basketList, deleteFromBasket }) => {
    const totalPrice = basketList.reduce((a, item) => a + item.Price, 0);
    const BasketCard = ({ Name, PictureUrl, Price, ItemId }) => (
        <div className="basket__list__card">
            <div className="basket__list__card__delete" onClick={() => deleteFromBasket(ItemId)}></div>
            <img src={PictureUrl} alt="book" width="80" height="100" />
            <div className="basket__list__card__name">
                <div className="basket__list__card__name__product_name">{Name}</div>
                <div className="basket__list__card__name__supplier_name"></div>
            </div>
            <div className="basket__list__card__price">{Price} руб.</div>
        </div>
    );

    return (
        <div className="basket">
            <div className="basket__list">
                {basketList.map((item, index) => (
                    <BasketCard
                        key={index}
                        ItemId={item.ItemId}
                        Name={item.Name}
                        PictureUrl={item.PictureUrl}
                        Price={item.Price}
                    />
                ))}
            </div>
            <div className="basket__total">
                <Typography variant="body1">Итого: {totalPrice} руб.</Typography>
            </div>
        </div>
    );
};

export default Basket;
