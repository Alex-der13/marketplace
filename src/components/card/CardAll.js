import React from 'react';
import { Bookmark } from '@material-ui/icons';
import { Button } from '@material-ui/core';
import './Card.css';

const CardAll = ({ addBasket, changeFavoriteList, category, isInFavorite }) => {
    const { Name, Params, Price, PictureUrl } = category;

    return (
        <div
            style={{
                margin: '50px 10px 10px',
                width: '160px',
                height: '360px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
            }}
        >
            <div
                style={{
                    marginBottom: '10px',
                    width: '130px',
                    height: '200px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'flex-end',
                }}
            >
                <img src={PictureUrl} alt="book" style={{ margin: '0 auto' }} />
            </div>
            <div className="card_title">{Name}</div>
            <div style={{ color: '#9c9c9c' }}>{Params.Author}</div>
            <div style={{ fontWeight: 'bold' }}>{Price} ₽</div>
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                }}
            >
                <Button variant="contained" color="primary" onClick={() => addBasket(category)}>
                    Купить
                </Button>
                <div onClick={() => changeFavoriteList(category)}>
                    <Bookmark color={isInFavorite ? 'primary' : 'disabled'} />
                </div>
            </div>
        </div>
    );
};

export default CardAll;
