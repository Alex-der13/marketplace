import React from 'react';
import { useHistory, Link, useLocation } from 'react-router-dom';
import { ButtonGroup, Avatar, Fab } from '@material-ui/core';
import { Favorite, ShoppingBasket } from '@material-ui/icons';
import Routes from '../../routes';
import './Header.css';

const Header = () => {
    const history = useHistory();
    const location = useLocation()
    const categories = Routes.find((route) => route.name === 'Categories').subRoutes;

    const openPage = (namePage) => {
        const path = Routes.find((route) => route.name === namePage).path;
        history.push(path);
    };
    
    return (
        <>
            <div className="header__top">
                <div onClick={() => openPage('HomePage')} className="header__top__content__logo"></div>

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
                        style={{ borderBottom: `${category.path === location.pathname ? '1px solid black' : ''}` }}
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
