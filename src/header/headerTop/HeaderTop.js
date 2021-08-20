import React, { useState } from 'react'
import './HeaderTop.css'
import { Link, useHistory } from 'react-router-dom'

const HeaderTop = ({ handleIsOpenModal }) => {
  const [searchInput, setSearchInput] = useState('Search for products')
  const history = useHistory()

  const changeSearchInput = () => {
    setSearchInput('')
  }

  const openHomePage = () => {
    history.push('/')
  }

  return (
        <div>
            <div className="header__top">
                <div className="header__top__content">
                    <div onClick={openHomePage} className="header__top__content__logo">Smart marketplace</div>
                    <div className="header__top__content__search">
                        <input
                            onClick={changeSearchInput}
                            onChange={e => setSearchInput(e.target.value)}
                            className="header__top__content__search__input"
                            type="text"
                            value={searchInput} />
                        <div className="header__top__content__search__btn">Search</div>
                    </div>
                    <span onClick={handleIsOpenModal} className="btn header__top__content__login">Log in</span>
                    <span className="header__top__content__sign_up">Sign Up</span>
                    <div className="header__top__content__wishlist"></div>
                    <Link to="/basket">
                        <div className="header__top__content__basket"></div>
                    </Link>
                </div>
            </div>
        </div>
  )
}

export default HeaderTop
