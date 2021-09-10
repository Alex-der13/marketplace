import React, { useState } from 'react';
import Header from './components/header';
import { Basket, Favorite } from './screens';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Category from './screens/category/Category';

const App = () => {
    const [basketList, setBasketList] = useState([]);
    const [favoriteList, setFavoriteList] = useState([]);
    
    const addBasket = (product) => {
        setBasketList([...basketList, product]);
    };
    
    const deleteFromBasket = (productId) => {
        setBasketList(basketList.filter((item) => item.ItemId !== productId));
    };

    const changeFavoriteList = (product) => {
        const isProduct = favoriteList.some((item) => item.ItemId === product.ItemId);
        if (isProduct) {
            setFavoriteList(favoriteList.filter((item) => item.ItemId !== product.ItemId));
        } else {
            setFavoriteList([...favoriteList, product]);
        }
    };

    console.log(favoriteList);
    return (
        <div style={{ maxWidth: '1278px', margin: '0 auto' }}>
            <Router>
                <Header />
                <Switch>
                    <Route path="/" exact>
                        <Category
                            favorites={favoriteList}
                            basketList={basketList}
                            addBasket={addBasket}
                            changeFavoriteList={changeFavoriteList}
                        />
                    </Route>
                    <Route path="/basket">
                        <Basket basketList={basketList} deleteFromBasket={deleteFromBasket} />
                    </Route>
                    <Route path="/favorite">
                        <Favorite favoriteList={favoriteList} changeFavoriteList={changeFavoriteList} />
                    </Route>
                    <Route path="/category/:name">
                        <Category
                            favorites={favoriteList}
                            basketList={basketList}
                            addBasket={addBasket}
                            changeFavoriteList={changeFavoriteList}
                        />
                    </Route>
                </Switch>
            </Router>
        </div>
    );
};

export default App;
