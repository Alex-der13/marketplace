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
                                        ??????????????????
                                    </Link>
                                </div>
                                <div className={styles.element}>
                                    <Link
                                        style={{
                                            fontWeight: `${'/basket' === location.pathname ? 'bold' : ''}`,
                                        }}
                                        to={'/basket'}
                                    >
                                        ??????????????
                                    </Link>
                                </div>
                                <div className={styles.element}>
                                    <Link
                                        style={{
                                            fontWeight: `${'/profile' === location.pathname ? 'bold' : ''}`,
                                        }}
                                        to={'/profile'}
                                    >
                                        ??????????????
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
        </>
    );
};

export default Header;
