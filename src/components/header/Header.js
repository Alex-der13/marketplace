import React, { useState } from 'react'
import { useHistory, Link } from 'react-router-dom'
import { ButtonGroup, Avatar, Fab, Button } from '@material-ui/core'
import { Favorite, ShoppingBasket } from '@material-ui/icons'
import Routes from '../../routes'
import './Header.css'

const Header = () => {
  const [isOpenModal, setIsOpenModal] = useState(false)
  const history = useHistory()
  const categories = Routes.find((route) => route.name === 'Categories').subRoutes

  const handleIsOpenModal = () => {
    setIsOpenModal(!isOpenModal)
  }

  const openPage = (namePage) => {
    const path = Routes.find((route) => route.name === namePage).path
    history.push(path)
  }

  return (
    <>
      <div className="header__top">
        <div onClick={() => openPage('HomePage')} className="header__top__content__logo">Smart marketplace</div>

        <ButtonGroup>
          <Fab onClick={() => openPage('Favorites')}>
            <Favorite />
          </Fab>

          <Fab onClick={() => openPage('Basket')}>
            <ShoppingBasket />
          </Fab>

          <Fab onClick={() => openPage('Profile')}>
            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg">OP</Avatar>
          </Fab>
        </ButtonGroup>
      </div>

      <div className="header__bottom">
        {categories.map((category, i) => (
          <Link key={i} to={category.path}>{category.rusName}</Link>
        ))}
      </div>
    </>
  )
}

export default Header
