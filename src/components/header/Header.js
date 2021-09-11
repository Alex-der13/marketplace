import React from 'react';
import { useHistory, Link } from 'react-router-dom';
import { ButtonGroup, Avatar, Fab } from '@material-ui/core';
import { Favorite, ShoppingBasket } from '@material-ui/icons';
import Routes from '../../routes';
import './Header.css';

const Header = () => {
    const history = useHistory();
    const categories = Routes.find((route) => route.name === 'Categories').subRoutes;

    const openPage = (namePage) => {
        const path = Routes.find((route) => route.name === namePage).path;
        history.push(path);
    };
    console.log(history);
    return (
        <>
            <div className="header__top">
                <div onClick={() => openPage('HomePage')} className="header__top__content__logo">
                    Smart marketplace
                </div>

                <ButtonGroup>
                    <Fab onClick={() => openPage('Favorite')}>
                        <Favorite />
                    </Fab>

                    <Fab onClick={() => openPage('Basket')}>
                        <ShoppingBasket />
                    </Fab>

                    <Fab onClick={() => openPage('Profile')}>
                        <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg">
                            OP
                        </Avatar>
                    </Fab>
                </ButtonGroup>
            </div>

            <div className="header__bottom">
                {categories.map((category, i) => (
                    <Link
                        style={{ color: `${category.path === history.location.pathname ? 'black' : 'grey'}` }}
                        key={i}
                        to={category.path}
                    >
                        {category.rusName}
                    </Link>
                ))}
            </div>
        </>
    );
};

export default Header;
