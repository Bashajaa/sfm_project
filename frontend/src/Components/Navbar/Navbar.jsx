import React, { useState, useEffect, useRef } from 'react';
import './Navbar.css';
import cart_logo from '../Assets/cart_logo.png';
import profil from '../Assets/profil_icon.png';
import searchIcon from '../Assets/search_button.png';
import { Link, useNavigate } from 'react-router-dom'; 
import menu from '../Assets/menu.webp';

export const Navbar = () => {
    const [menuVisible, setMenuVisible] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);  
    const menuRef = useRef(null);
    const navigate = useNavigate(); 

   
    const handleClickOutside = (event) => {
        if (menuRef.current && !menuRef.current.contains(event.target)) {
            setMenuVisible(false);
        }
    };

    // Bejelentkezett felhasználó státusza
    useEffect(() => {
        document.addEventListener('click', handleClickOutside);
        
        setIsLoggedIn(localStorage.getItem('user') !== null); 
        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, []);

    // Kijelentkezés
    const handleLogout = () => {
        localStorage.removeItem('user'); 
        setIsLoggedIn(false);  
        navigate('/');  
    };

    // Rendelések oldalra navigálás
    const handleOrders = () => {
        navigate('/orders'); 
    };

    return (
        <div className="navbar">
            <div className="nav-logo">
                <h2>
                    <Link to="/">Comic Shop</Link>
                </h2>
            </div>

            <div className="nav-menu" ref={menuRef}>
                <button className="menu-button" onClick={() => setMenuVisible(!menuVisible)}>
                    <img src={menu} alt="Menu" />
                </button>
                {menuVisible && (
                    <ul className="menu-list">
                        <li><Link to="/category/all-comic">All Comic</Link></li>
                        <li><Link to="/category/super-hero">Super Hero</Link></li>
                        <li><Link to="/category/manga">Manga</Link></li>
                        <li><Link to="/category/horror">Horror</Link></li>
                        <li><Link to="/category/sci-fi">Sci-fi</Link></li>
                        <li><Link to="/category/fantasy">Fantasy</Link></li>
                    </ul>
                )}
            </div>

            <div className="nav-search">
                <input type="text" placeholder="Search..." />
                <button type="submit" className="search-button">
                    <img src={searchIcon} alt="Search" />
                </button>
            </div>

            <div className="nav-login-cart">
                {isLoggedIn ? (
                    <button onClick={() => setMenuVisible(!menuVisible)}>
                        <img src={profil} alt="Profile" />
                    </button>
                ) : (
                    <Link to={'/login'}>
                        <img src={profil} alt="Profile" />
                    </Link>
                )}
                {isLoggedIn && menuVisible && (
                    <div className="dropdown-menu">
                        <button onClick={handleOrders}>My Orders</button>
                        <button onClick={handleLogout}>Logout</button>
                    </div>
                )}
                <Link to={'/cart'}>
                    <img src={cart_logo} alt="Cart" />
                </Link>
                <div className="nav-cart-count">0</div>
            </div>
        </div>
    );
};
