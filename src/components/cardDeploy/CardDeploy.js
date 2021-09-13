import React from 'react';
import { Bookmark } from '@material-ui/icons';
import { Button } from '@material-ui/core';
import Loading from '../loading';
import styles from './CardDeploy.module.scss';

const CardDeploy = ({ product, isInBasket, handleAddToBasket, handleChangeFavorites, isInFavorite }) => {
    const handleAddToBasketWithParam = () => {
        handleAddToBasket(product);
    };

    if (!product) {
        return <Loading />;
    }
    return (
        <div className={styles.CardDeploy}>
            <img src={product.PictureUrl} alt="book" />
            <div className={styles.info}>
                <div className={styles.title_top}>{product.Name}</div>
                <div className={styles.author}>{product.Params && product.Params.Author}</div>
                <div className={styles.price}>{product.Price} руб.</div>
                <div className={styles.buttons_block}>
                    <Button
                        size="large"
                        disabled={isInBasket}
                        variant="contained"
                        color="primary"
                        onClick={handleAddToBasketWithParam}
                    >
                        {isInBasket ? 'В корзине' : 'Купить'}
                    </Button>
                    <div className={styles.favorite} onClick={() => handleChangeFavorites(isInFavorite, product)}>
                        <Bookmark fontSize="large" color={isInFavorite ? 'primary' : 'disabled'} />
                    </div>
                </div>
                <div className={styles.description}>
                    <div className={styles.title_bottom}>Описание</div>
                    <div className={styles.text}>
                        «Свита короля» — продолжение бестселлеров Норы Сакавич «Лисья нора» и «Король Воронов» и третья
                        часть сенсационной трилогии «Все ради игры». Время на исходе. Оказавшись в Университете
                        Пальметто, Нил Джостен знал, что не доживет до конца года, но теперь, когда смерть не за горами,
                        он больше чем прежде хочет жить. Дружба с Лисами была опрометчивой затеей, а поцелуй с одним из
                        них — затеей немыслимой. Пока «Лисы» пытаются во что бы то ни стало выйти в финал чемпионата,
                        Нил сражается за свою жизнь, ведь теперь ей угрожает не только Рико Морияма, но и мафиозный клан
                        Балтиморского Мясника. Правда — единственный шанс Нила на спасение, однако она может привести к
                        гибели всех, кто ему дорог...
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CardDeploy;
