import React from 'react';
import { useHistory, Link, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Badge from '@material-ui/core/Badge';
import { withStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import FavoriteIcon from '@material-ui/icons/Favorite';
import PersonIcon from '@material-ui/icons/Person';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MenuIcon from '@material-ui/icons/Menu';
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

    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <>
            <div className={styles.top}>
                <div className={styles.logo_block}>
                    <div onClick={() => openPage('HomePage')} className={styles.content__logo}></div>
                    <div className={styles.btns}>
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
                            <StyledBadge
                                onClick={() => openPage('Basket')}
                                badgeContent={basketCounter}
                                color="secondary"
                            >
                                <ShoppingCartIcon fontSize="large" />
                            </StyledBadge>
                        </IconButton>
                        <IconButton aria-label="cart">
                            <StyledBadge onClick={() => openPage('Profile')} color="secondary">
                                <PersonIcon fontSize="large" />
                            </StyledBadge>
                        </IconButton>
                    </div>
                    <div className={styles.burger_media}>
                        <Button aria-controls="menu" aria-haspopup="true" onClick={handleClick}>
                            <MenuIcon fontSize="large" />
                        </Button>
                        <Menu id="menu" anchorEl={anchorEl} keepMounted open={Boolean(anchorEl)} onClose={handleClose}>
                            <div className={styles.user_menu}>
                                <div className={styles.element}>
                                    <Link
                                        style={{
                                            fontWeight: `${'/favorite' === location.pathname ? 'bold' : ''}`,
                                        }}
                                        to={'/favorite'}
                                    >
                                        Избранное
                                    </Link>
                                </div>
                                <div className={styles.element}>
                                    <Link
                                        style={{
                                            fontWeight: `${'/basket' === location.pathname ? 'bold' : ''}`,
                                        }}
                                        to={'/basket'}
                                    >
                                        Корзина
                                    </Link>
                                </div>
                                <div className={styles.element}>
                                    <Link
                                        style={{
                                            fontWeight: `${'/profile' === location.pathname ? 'bold' : ''}`,
                                        }}
                                        to={'/profile'}
                                    >
                                        Профиль
                                    </Link>
                                </div>
                            </div>
                            <div className={styles.content_links}>
                                {categories.map((category, i) => (
                                    <MenuItem key={i}>
                                        <Link
                                            style={{
                                                fontWeight: `${category.path === location.pathname ? 'bold' : ''}`,
                                            }}
                                            key={i}
                                            to={category.path}
                                        >
                                            {category.rusName}
                                        </Link>
                                    </MenuItem>
                                ))}
                            </div>
                        </Menu>
                    </div>
                </div>
            </div>

            <div className={styles.bottom}>
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

            {/*<div className={styles.tablet}>
                    <div className={styles.top_media}>
                        

                        <div onClick={() => openPage('HomePage')} className={styles.content__logo}></div>

                        <div className={styles.btns}>
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
                            </div>
                            <div>
                                <IconButton aria-label="cart">
                                    <StyledBadge
                                        onClick={() => openPage('Basket')}
                                        badgeContent={basketCounter}
                                        color="secondary"
                                    >
                                        <ShoppingCartIcon fontSize="large" />
                                    </StyledBadge>
                                </IconButton>
                            </div>
                            <div>
                                <IconButton aria-label="cart">
                                    <StyledBadge onClick={() => openPage('Profile')} color="secondary">
                                        <PersonIcon fontSize="large" />
                                    </StyledBadge>
                                </IconButton>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={styles.mobile}>
                    <div className={styles.top}>
                        <div className={styles.burger_media}>
                            <Button aria-controls="bottom-menu" aria-haspopup="true" onClick={handleClickTablet}>
                                <MenuIcon />
                            </Button>
                            <Menu
                                id="bottom-menu"
                                anchorEl={anchorEl2}
                                keepMounted
                                open={Boolean(anchorEl2)}
                                onClose={handleCloseTablet}
                            >
                                {categories.map((category, i) => (
                                    <MenuItem className={styles.menu_item} key={i}>
                                        <Link
                                            style={{ fontWeight: `${category.path === location.pathname ? 'bold' : ''}` }}
                                            key={i}
                                            to={category.path}
                                        >
                                            {category.rusName}
                                        </Link>
                                    </MenuItem>
                                ))}
                            </Menu>
                        </div>

                        <div onClick={() => openPage('HomePage')} className={styles.content__logo}></div>

                        <div className={styles.btns}>
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
                            </div>
                            <div>
                                <IconButton aria-label="cart">
                                    <StyledBadge
                                        onClick={() => openPage('Basket')}
                                        badgeContent={basketCounter}
                                        color="secondary"
                                    >
                                        <ShoppingCartIcon fontSize="large" />
                                    </StyledBadge>
                                </IconButton>
                            </div>
                            <div>
                                <IconButton aria-label="cart">
                                    <StyledBadge onClick={() => openPage('Profile')} color="secondary">
                                        <PersonIcon fontSize="large" />
                                    </StyledBadge>
                                </IconButton>
                            </div>
                        </div>

                        <div className={styles.btns_media}>
                            <Button aria-controls="top-menu" aria-haspopup="true" onClick={handleClick}>
                                Menu
                            </Button>
                            <Menu
                                id="top-menu"
                                anchorEl={anchorEl}
                                keepMounted
                                open={Boolean(anchorEl)}
                                onClose={handleClose}
                            >
                                <MenuItem onClick={() => openPage('Basket')} className={styles.menu_item}>
                                    Basket <div className={styles.menu_counter}>{basketCounter}</div>
                                </MenuItem>
                                <MenuItem onClick={() => openPage('Favorite')}>
                                    Favorite <div className={styles.menu_counter}>{favoriteCounter}</div>
                                </MenuItem>
                                <MenuItem onClick={() => openPage('Profile')}>Profile</MenuItem>
                            </Menu>
                        </div>
                    </div>
                </div> */}
        </>
    );
};

export default Header;
