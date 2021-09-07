import React from 'react';
import './Favorite.css';
import CardAll from '../../components/card';

const Favorite = ({ favoriteList, addBasket, changeFavoriteList }) => {
    return (
        <div>
            <div className="favorite">
                <div className="favorite__list">
                    {favoriteList.map((category) => {
                        const isInFavorite = favoriteList.some((item) => item.ItemId === category.ItemId);
                        return (
                            <CardAll
                                key={category.ItemId}
                                category={category}
                                isInFavorite={isInFavorite}
                                changeFavoriteList={changeFavoriteList}
                                addBasket={addBasket}
                            />
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default Favorite;
