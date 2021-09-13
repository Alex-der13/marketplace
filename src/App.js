import React from 'react';
import Header from './components/header';
import { Basket, Favorite, Category, Home } from './screens';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import styles from './App.module.scss';

const App = () => {
    return (
        <div className={styles.App}>
            <Router>
                <Header />
                <Switch>
                    <Route path="/" exact>
                        <Home />
                    </Route>
                    <Route path="/basket">
                        <Basket />
                    </Route>
                    <Route path="/favorite">
                        <Favorite />
                    </Route>
                    <Route path="/category/:name/:cardId?">
                        <Category />
                    </Route>
                </Switch>
            </Router>
        </div>
    );
};

export default App;
