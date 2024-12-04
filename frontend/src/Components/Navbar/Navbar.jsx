import React, { useState } from 'react';
import './Navbar.css';
import cart_logo from '../Assets/cart_logo.png';
import profil from '../Assets/profil_icon.png';
import searchIcon from '../Assets/search_button.jpg';
import { Link } from 'react-router-dom';
import menu from '../Assets/menu.webp';

export const Navbar = () => {
    const [menuVisible, setMenuVisible] = useState(false);

    const toggleMenu = () => {
        console.log('Menu toggled');
        setMenuVisible((prevVisible) => !prevVisible);
    };

    return (
        <div className="navbar">
            <div className="nav-logo">
                <h2>
                    <Link to="/">Comic Shop</Link>
                </h2>
            </div>

            <div className='nav-menu'>
                <button className='menu-button' onClick={toggleMenu}>
                    <img src={menu} alt="Menu" />
                </button>
                {menuVisible && ( 
                    <ul className='menu-list'>
                        <li><Link to="/all-comic">All Comics</Link></li>
                        <li><Link to="/marvel">Marvel</Link></li>
                        <li><Link to="/star-wars">Star Wars</Link></li>
                        <li><Link to="/european">European</Link></li>
                        <li><Link to="/hungarian">Hungarian</Link></li>
                        <li><Link to="/other">Other</Link></li>
                    </ul>
                )}
            </div>

            <div className='nav-search'>
                <input type="text" placeholder="Search..." />
                <button type="submit" className="search-button">
                    <img src={searchIcon} alt="Search" />
                </button>
            </div>

            <div className='nav-login-cart'>
                <button>
                    <Link to={'/login'}>
                        <img src={profil} alt="Profile" />
                    </Link>
                </button>
                <Link to={'/cart'}>
                    <img src={cart_logo} alt="Cart" />
                </Link>
                <div className="nav-cart-count">0</div>
            </div>
        </div>
    );
};
