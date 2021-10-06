import React from 'react';
import Slider from 'react-slick';
import Books from '../../books';
import CardShort from '../../components/cardShort';
import useActions from '../../store/actions';
import { useSelector } from 'react-redux';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styles from './Home.module.scss';

const Home = () => {
    const basket = useSelector(({ basket }) => basket.list);
    const favorite = useSelector(({ favorite }) => favorite.list);
    const { handleAddToBasket, handleAddToFavorites, handleDeleteFromFavorites } = useActions();

    const handleChangeFavorites = (flag, product) => {
        if (flag) handleDeleteFromFavorites(product);
        else handleAddToFavorites(product);
    };

    const books = Books.children.filter((book, i) => i >= 10);

    const SampleNextArrow = (props) => {
        const { className, style, onClick } = props;
        return (
            <div
                className={className}
                style={{
                    ...style,
                    display: 'block',
                    height: '17px',
                    width: '19px',
                    borderRadius: '20px',
                    background: 'black',
                }}
                onClick={onClick}
            />
        );
    };

    const SamplePrevArrow = (props) => {
        const { className, style, onClick } = props;
        return (
            <div
                className={className}
                style={{
                    ...style,
                    display: 'block',
                    height: '17px',
                    width: '19px',
                    borderRadius: '20px',
                    background: 'black',
                }}
                onClick={onClick}
            />
        );
    };

    const settingsSlider = {
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
    };

    const settingsSliderMediaMobileTablet = {
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    const settingsNew = {
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
    };

    const settingsNewMediaTablet = {
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
    };

    const settingsNewMediaMobile = {
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    return (
        <div className={styles.home}>
            <div className={styles.block}>
                <div className={styles.slider}>
                    <Slider {...settingsSlider}>
                        <img className={styles.image} src="https://www.bookvoed.ru/files/6389/22/79.png" />
                        <img className={styles.image} src="https://www.bookvoed.ru/files/6389/23/32.png" />
                        <img className={styles.image} src="https://www.bookvoed.ru/files/6389/23/30.png" />
                    </Slider>
                </div>
                <div className={styles.new}>
                    <div className={styles.title}>Новинки</div>
                    <Slider {...settingsNew}>
                        {books.map((product) => {
                            const isInFavorite = favorite.some((item) => item.ItemId === product.ItemId);
                            const isInBasket = basket.some((item) => item.ItemId === product.ItemId);
                            const cardPath = `/category/children/${product.ItemId}`;
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
                    </Slider>
                </div>
                <div className={styles.promo}>
                    <div className={styles.title}>Акции</div>
                    <div className={styles.img_block}>
                        <img src="https://www.bookvoed.ru/files/1790/18/78.png" />
                        <img src="https://www.bookvoed.ru/files/1790/18/81.png" />
                        <img src="https://www.bookvoed.ru/files/1790/18/64.png" />
                    </div>
                </div>
            </div>
            <div className={styles.block_media_tablet}>
                <div className={styles.slider_media_tablet}>
                    <Slider {...settingsSliderMediaMobileTablet}>
                        <img className={styles.image} src="https://www.bookvoed.ru/files/6389/22/79.png" />
                        <img className={styles.image} src="https://www.bookvoed.ru/files/6389/23/32.png" />
                        <img className={styles.image} src="https://www.bookvoed.ru/files/6389/23/30.png" />
                    </Slider>
                </div>
                <div className={styles.new_media_tablet}>
                    <div className={styles.title}>Новинки</div>
                    <Slider {...settingsNewMediaTablet}>
                        {books.map((product) => {
                            const isInFavorite = favorite.some((item) => item.ItemId === product.ItemId);
                            const isInBasket = basket.some((item) => item.ItemId === product.ItemId);
                            const cardPath = `/category/children/${product.ItemId}`;
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
                    </Slider>
                </div>
                <div className={styles.promo_media_tablet}>
                    <div className={styles.title}>Акции</div>
                    <div className={styles.img_block}>
                        <img src="https://www.bookvoed.ru/files/1790/18/78.png" />
                        <img src="https://www.bookvoed.ru/files/1790/18/81.png" />
                        <img src="https://www.bookvoed.ru/files/1790/18/64.png" />
                    </div>
                </div>
            </div>
            <div className={styles.block_media_mobile}>
                <div className={styles.slider_media_mobile}>
                    <Slider {...settingsSliderMediaMobileTablet}>
                        <img className={styles.image} src="https://www.bookvoed.ru/files/6389/22/79.png" />
                        <img className={styles.image} src="https://www.bookvoed.ru/files/6389/23/32.png" />
                        <img className={styles.image} src="https://www.bookvoed.ru/files/6389/23/30.png" />
                    </Slider>
                </div>
                <div className={styles.new_media_mobile}>
                    <div className={styles.title}>Новинки</div>
                    <Slider {...settingsNewMediaMobile}>
                        {books.map((product) => {
                            const isInFavorite = favorite.some((item) => item.ItemId === product.ItemId);
                            const isInBasket = basket.some((item) => item.ItemId === product.ItemId);
                            const cardPath = `/category/children/${product.ItemId}`;
                            return (
                                <div className={styles.content} key={product.ItemId}>
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
                                </div>
                            );
                        })}
                    </Slider>
                </div>
                <div className={styles.promo_media_mobile}>
                    <div className={styles.title}>Акции</div>
                    <div className={styles.img_block}>
                        <img src="https://www.bookvoed.ru/files/1790/18/78.png" />
                        <img src="https://www.bookvoed.ru/files/1790/18/81.png" />
                        <img src="https://www.bookvoed.ru/files/1790/18/64.png" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
