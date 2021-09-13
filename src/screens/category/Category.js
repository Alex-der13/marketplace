import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import CardShort from '../../components/cardShort';
import CardDeploy from '../../components/cardDeploy/CardDeploy';
import Loading from '../../components/loading';
import useActions from '../../store/actions';
import { useSelector } from 'react-redux';
import styles from './Category.module.scss';

const Category = () => {
    const { data, loading } = useSelector(({ books }) => books);
    const basket = useSelector(({ basket }) => basket.list);
    const favorite = useSelector(({ favorite }) => favorite.list);
    const params = useParams();
    const { getBooks, handleAddToBasket, handleAddToFavorites, handleDeleteFromFavorites } = useActions();
    const [activeCard, setActiveCard] = useState({});

    const handleChangeFavorites = (flag, product) => {
        if (flag) handleDeleteFromFavorites(product);
        else handleAddToFavorites(product);
    };

    useEffect(() => {
        getBooks(params.name);
    }, [params.name]);

    useEffect(() => {
        if (params.cardId) {
            const foundCard = data.find((item) => item.ItemId === Number(params.cardId));
            setActiveCard(foundCard);
        }
    }, [params.cardId, data]);
    if (loading) {
        return <Loading />;
    }
    return (
        <div>
            {params.cardId ? (
                <CardDeploy
                    product={activeCard}
                    favorite={favorite}
                    handleAddToBasket={handleAddToBasket}
                    handleChangeFavorites={handleChangeFavorites}
                    isInFavorite={favorite.some((item) => item.ItemId === activeCard.ItemId)}
                    isInBasket={basket.some((item) => item.ItemId === activeCard.ItemId)}
                />
            ) : (
                <div className={styles.category}>
                    {data.map((product) => {
                        const isInFavorite = favorite.some((item) => item.ItemId === product.ItemId);
                        const isInBasket = basket.some((item) => item.ItemId === product.ItemId);
                        const cardPath = `/category/${params.name}/${product.ItemId}`;
                        return (
                            <CardShort
                                key={product.ItemId}
                                isInFavorite={isInFavorite}
                                isInBasket={isInBasket}
                                product={product}
                                cardPath={cardPath}
                                favorite={favorite}
                                handleAddToBasket={handleAddToBasket}
                                handleChangeFavorites={handleChangeFavorites}
                            />
                        );
                    })}
                </div>
            )}
        </div>
    );
};

export default Category;
