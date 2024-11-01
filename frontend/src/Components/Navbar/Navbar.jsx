import './Navbar.css'

import cart_logo from '../Assets/cart_logo.png'
import profil from '../Assets/profil_icon.png'
import searchIcon from '../Assets/search_button.jpg'

export const Navbar = () => {

  return (
    <div className='navbar'> 

    <div className='nav-logo'>
        <h2>Comic Shop</h2> 
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
