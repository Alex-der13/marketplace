import React, { useState } from 'react'
import Login from './login/Login';
import './Header.css';
import HeaderMenu from './headerMenu/HeaderMenu';
import HeaderTop from './headerTop/HeaderTop';


const Header = () => {

    const [isOpenModal, setIsOpenModal] = useState(false)

    const handleIsOpenModal = () => {
        setIsOpenModal(!isOpenModal);
    };

    return (
        <div className="header">
            <div>
                <HeaderTop
                    handleIsOpenModal={handleIsOpenModal}
                />
                <HeaderMenu />
            </div>
            <Login
                isOpenModal={isOpenModal}
                handleIsOpenModal={handleIsOpenModal}
            />
        </div >
    )
}

export default Header
