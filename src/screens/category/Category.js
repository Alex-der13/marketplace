import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import CardShort from '../../components/cardShort';
import CardDeploy from '../../components/cardDeploy/CardDeploy';
import Loading from '../../components/loading';
import useActions from '../../store/actions';
import { useSelector } from 'react-redux';
import styles from './Category.module.scss';

const Category = ({ changeFavoriteList, favorites }) => {
    const { data, loading } = useSelector(({ books }) => books);
    const basket = useSelector(({ basket }) => basket.list);
    const params = useParams();
    const { getBooks, handleAddToBasket } = useActions();
    const [activeCard, setActiveCard] = useState({});

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
                    handleAddToBasket={handleAddToBasket}
                    changeFavoriteList={changeFavoriteList}
                    isInFavorite={favorites.some((item) => item.ItemId === activeCard.ItemId)}
                    isInBasket={basket.some((item) => item.ItemId === activeCard.ItemId)}
                />
            ) : (
                <div className={styles.category}>
                    {data.map((category) => {
                        const isInFavorite = favorites.some((item) => item.ItemId === category.ItemId);
                        const isInBasket = basket.some((item) => item.ItemId === category.ItemId);
                        const cardPath = `/category/${params.name}/${category.ItemId}`;
                        return (
                            <CardShort
                                key={category.ItemId}
                                isInFavorite={isInFavorite}
                                isInBasket={isInBasket}
                                category={category}
                                cardPath={cardPath}
                                handleAddToBasket={handleAddToBasket}
                                changeFavoriteList={changeFavoriteList}
                            />
                        );
                    })}
                </div>
            )}
        </div>
    );
};

export default Category;
