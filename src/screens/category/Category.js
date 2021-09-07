import React, { useState, useEffect } from 'react';
import { CircularProgress } from '@material-ui/core';
import { useParams } from 'react-router-dom';
import CardAll from '../../components/card';
import './Category.css';

const Category = ({ addBasket, changeFavoriteList, favorites }) => {
    const [data, setData] = useState([]);
    const params = useParams();

    useEffect(() => {
        fetch(`http://localhost:3000/${params.name || 'arts'}`)
            .then((response) => response.json())
            .then((res) => setData(res));
    }, [params]);

    if (!data.length) {
        return <CircularProgress />;
    }

    return (
        <div
            style={{
                margin: '0 auto',
                width: '100%',
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'space-between',
            }}
        >
            {data.map((category) => {
                const isInFavorite = favorites.some((item) => item.ItemId === category.ItemId);
                return (
                    <CardAll
                        key={category.ItemId}
                        isInFavorite={isInFavorite}
                        category={category}
                        addBasket={addBasket}
                        changeFavoriteList={changeFavoriteList}
                    />
                );
            })}
        </div>
    );
};

export default Category;
