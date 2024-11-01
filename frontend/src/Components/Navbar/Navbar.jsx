import './Navbar.css'
import React, { useState } from 'react'; 
import cart_logo from '../Assets/cart_logo.png'
import profil from '../Assets/profil_icon.png'
import searchIcon from '../Assets/search_button.jpg'
import menu from '../Assets/menu.webp';

export const Navbar = () => {

    const [menuVisible, setMenuVisible] = useState(false); 

    const toggleMenu = () => {
      setMenuVisible(!menuVisible);
    };

  return (
    <div className='navbar'> 

    <div className='nav-logo'>
        <h2>Comic Shop</h2> 
    </div>

    <div className='nav-menu'>
        <button className='menu-button' onClick={toggleMenu}>
          <img src={menu} alt="Menu" />
        </button>
        {menuVisible && ( 
          <ul className='menu-list'>
            <li>All Comic</li>
            <li>Marvel</li>
            <li>DC</li>
            <li>Star Wars</li>
            <li>European</li>
            <li>Hungarian</li>
            <li>Other</li>
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
    <button><img src={profil} alt="profil" /></button>
    <img src={cart_logo} alt="" />
    <div className="nav-cart-count">0</div>
    </div>

    </div>
  )
}
