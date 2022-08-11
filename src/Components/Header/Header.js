import React from 'react';
import image from '../../images/logo.png';
import '../Header/Header.css';
const Header = () => {
    return (
        <div className="header">
            
            <img src={image} alt="" />
            <nav>
                <a href="/shop">shop</a>
                <a href="/review">Order Review</a>
                <a href="/manage">Manage Inventory</a>
                
            </nav>
        </div>
    );
};

export default Header;