import React, { useState } from 'react';
import Header from './components/header';
import { Basket, Favorite } from './screens';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Category from './screens/category/Category';

const App = () => {
    const [favoriteList, setFavoriteList] = useState([]);

    const changeFavoriteList = (product) => {
        const isProduct = favoriteList.some((item) => item.ItemId === product.ItemId);
        if (isProduct) {
            setFavoriteList(favoriteList.filter((item) => item.ItemId !== product.ItemId));
        } else {
            setFavoriteList([...favoriteList, product]);
        }
    };

    return (
        <div style={{ maxWidth: '1278px', margin: '0 auto' }}>
            <Router>
                <Header favoriteCounter={favoriteList.length} />
                <Switch>
                    <Route path="/" exact>
                        <Category favorites={favoriteList} changeFavoriteList={changeFavoriteList} />
                    </Route>
                    <Route path="/basket">
                        <Basket />
                    </Route>
                    <Route path="/favorite">
                        <Favorite favoriteList={favoriteList} changeFavoriteList={changeFavoriteList} />
                    </Route>
                    <Route path="/category/:name/:cardId?">
                        <Category favorites={favoriteList} changeFavoriteList={changeFavoriteList} />
                    </Route>
                </Switch>
            </Router>
        </div>
    );
};

export default App;
