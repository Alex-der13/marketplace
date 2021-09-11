import React, { useEffect } from 'react';
import { CircularProgress } from '@material-ui/core';
import { useParams } from 'react-router-dom';
import CardAll from '../../components/card';
import useActions from '../../store/actions';
import { useSelector } from 'react-redux';
import './Category.css';

const Category = ({ basketList, addBasket, changeFavoriteList, favorites }) => {

    const {data, loading, error} = useSelector(({books})=>books)
    const params = useParams();
    const {getBooks} = useActions()

    useEffect(() => {
        /* fetch(`http://localhost:3000/${params.name || 'arts'}`)
            .then((response) => response.json())
            .then((res) => setData(res)); */
            getBooks()
    }, [params]);

    if (loading) {
        return <CircularProgress />;
    }

    return (
        <div
            style={{
                margin: '0 auto',
                width: '100%',
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'space-between'
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
