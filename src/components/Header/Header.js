import React from 'react';
import logo from '../../images/Logo.png'
import './Header.css'

const Header = () => {
    return (
        <nav className='header'>
            <img src={logo} alt="" />
            <h1 className='title'>Get Ready To Burn</h1>
        </nav>
    );
};

export default Header;