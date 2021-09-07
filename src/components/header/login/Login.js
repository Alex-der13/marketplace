import React, { useState } from 'react';
import './Login.css';
import { Modal } from '@material-ui/core';

const Login = ({ isOpenModal, handleIsOpenModal }) => {
    const [loginInput, setLoginInput] = useState('Username / Email Address');
    const [passwordInput, setPasswordInput] = useState('Password');

    const changeLoginInput = () => {
        setLoginInput('');
    };

    const changePasswordInput = () => {
        setPasswordInput('');
    };

    return (
        <Modal
            open={isOpenModal}
            onClose={handleIsOpenModal}
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description"
        >
            <div className="login">
                <div onClick={handleIsOpenModal} className="login__body__exit">
                    [img] ×
                </div>
                <div className="login__body">
                    <div className="login__body__logo">Smart marketplace</div>
                    <input
                        onClick={changeLoginInput}
                        onChange={(e) => setLoginInput(e.target.value)}
                        value={loginInput}
                        className="login__body__username_input"
                    ></input>
                    <input
                        onClick={changePasswordInput}
                        onChange={(e) => setPasswordInput(e.target.value)}
                        value={passwordInput}
                        className="login__body__password"
                    ></input>
                    <div className="login__body__keep_forgot">
                        <div className="login__body__keep_forgot__keep">
                            <input type="checkbox" className="login__body__keep_forgot__keep__checkbox"></input>
                            <div className="login__body__keep_forgot__keep__text">Keep me Logged in</div>
                        </div>
                        <div className="login__body__keep_forgot__forgot">Forgot Password?</div>
                    </div>
                    <div className="login__body__btns">
                        <div className="login__body__btns__login_btn">Log in</div>
                        <div className="login__body__btns__guest_btn">Log in as a Guest</div>
                    </div>
                    <div className="login__body__line1">or</div>
                    <div className="login__body__sign_in">
                        <div className="login__body__sign_in__text">Sign in with</div>
                        <div className="login__body__sign_in__sign_with"></div>
                    </div>
                    <div className="login__body__line2"></div>
                    <div className="login__body__register">
                        <div className="login__body__register__question">No have an Account?</div>
                        <div className="login__body__register__register_btn">Register</div>
                    </div>
                </div>
            </div>
        </Modal>
    );
};

export default Login;
