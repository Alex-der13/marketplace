import React from 'react';
import { useHistory, Link, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Badge from '@material-ui/core/Badge';
import { withStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import FavoriteIcon from '@material-ui/icons/Favorite';
import PersonIcon from '@material-ui/icons/Person';
import Routes from '../../routes';
import styles from './Header.module.scss';

const Header = () => {
    const basketCounter = useSelector(({ basket }) => basket.list.length);
    const favoriteCounter = useSelector(({ favorite }) => favorite.list.length);
    const history = useHistory();
    const categories = Routes.find((route) => route.name === 'Categories').subRoutes;
    const location = useLocation();
    const openPage = (namePage) => {
        const path = Routes.find((route) => route.name === namePage).path;
        history.push(path);
    };
    const StyledBadge = withStyles((theme) => ({
        badge: {
            right: -3,
            top: 13,
            border: `2px solid ${theme.palette.background.paper}`,
            padding: '0 4px',
        },
    }))(Badge);
    return (
        <>
            <div className={styles.header__top}>
                <div onClick={() => openPage('HomePage')} className={styles.content__logo}></div>

                <div>
                    <IconButton aria-label="cart">
                        <StyledBadge
                            onClick={() => openPage('Favorite')}
                            badgeContent={favoriteCounter}
                            color="secondary"
                        >
                            <FavoriteIcon fontSize="large" />
                        </StyledBadge>
                    </IconButton>
                    <IconButton aria-label="cart">
                        <StyledBadge onClick={() => openPage('Basket')} badgeContent={basketCounter} color="secondary">
                            <ShoppingCartIcon fontSize="large" />
                        </StyledBadge>
                    </IconButton>
                    <IconButton aria-label="cart">
                        <StyledBadge onClick={() => openPage('Profile')} color="secondary">
                            <PersonIcon fontSize="large" />
                        </StyledBadge>
                    </IconButton>
                </div>
            </div>

            <div className={styles.header__bottom}>
                {categories.map((category, i) => (
                    <Link
                        style={{ fontWeight: `${category.path === location.pathname ? 'bold' : ''}` }}
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
