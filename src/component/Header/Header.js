import { faUserCircle } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import logo from '../../logo.png'
import './Header.css'

const Header = () => {
    const profileIcon = <FontAwesomeIcon icon={faUserCircle} className="icon" />
    
    return (
        <div className="header">
            <div className="name-wrapper">
                <img src={logo} alt="logo" className="logo" />
                <div className="name">
                    <h1><a href="/home">Teachers.com</a></h1>
                    <p>Hire Teachers at your Fingertips!</p>
                </div>
            </div>
            <div className="account-wrapper">
                <h2>Total Budget: &nbsp;</h2>
                <h1>250 <small>K</small></h1>
                {profileIcon}
                <h2><a href="/profile/iftakher-hossen">Iftakher Hossen</a></h2>
            </div>
        </div>
    );
};

export default Header;