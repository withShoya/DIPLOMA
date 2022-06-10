import './Header.scss';
import {NavLink, Link, useNavigate} from 'react-router-dom';
import {useState, useContext} from 'react';
import {LoggedInContext} from '../../contexts/LoggedInContext.js';
import {UserContext} from '../../contexts/UserContext.js';

function Header(props) {
  const {isLoggedIn, setIsLoggedIn} = useContext(LoggedInContext);
  const {setUserLogin} = useContext(UserContext);

  const [showMenu, setIsShowMenu] = useState(false);

  function openMenu() {
    setIsShowMenu(true)
  };

  function closeMenu() {
    setIsShowMenu(false);
  }

  function handleLogOut() {
    setIsLoggedIn(false);
    if(localStorage.getItem('loggedIn')) {
      localStorage.removeItem('loggedIn');
    }
    if(localStorage.getItem('userLogin')) {
      localStorage.removeItem('userLogin');
    }
    setUserLogin('');
  }

  return (
    <header className="header">
      <h2 className='header__title neonText'>СОВИНТО</h2>
      <nav className="header__nav">
        {isLoggedIn ?
        <>
        <ul className="header__links header__links_left">
          <li className="header__links-item header__links-item_logo">
          </li>
          <li className="header__links-item header__links-item_left">
          <NavLink className="header__link header__link_type_home" to="/">Главная</NavLink>
          </li>
          <li className="header__links-item header__links-item_left">
          <NavLink className="header__link header__link_type_home" to="/cart">Корзина</NavLink>
          </li>
          <li className="header__links-item header__links-item_left">
          <NavLink className="header__link header__link_type_home" to="/about">О нас</NavLink>
          </li>
        </ul>
        <Link className="header__link header__link_type_account" onClick={handleLogOut} to="/">Выйти из аккаунта</Link>
        <button className="header__menu-button" onClick={openMenu}></button>
        <div className={!showMenu ? "header__menu-wrapper" : "header__menu-wrapper header__menu-wrapper_visible"}>
          <div className={!showMenu ? "header__menu-links-wrapper" : "header__menu-links-wrapper visible-animation"}>
            <button className="header__menu-button-close" onClick={closeMenu}></button>
            <ul className="header__menu-links">
              <li className="header__menu-links-item">
                <NavLink className="header__menu-link" onClick={closeMenu} to="/">Главная</NavLink>
              </li>
              <li className="header__menu-links-item">
                <NavLink className="header__menu-link" onClick={closeMenu} to="/cart">Корзина</NavLink>
              </li>
              <li className="header__menu-links-item">
                <NavLink className="header__menu-link" onClick={closeMenu} to="/about">О нас</NavLink>
              </li>
              <li className="header__menu-links-item">
                <NavLink className="header__menu-link header__menu-link_type_account" onClick={handleLogOut} to="/profile">Выйти из аккаунта</NavLink>
              </li>
            </ul>
          </div>
        </div>
        </>
        :
        <>
        <ul className="header__links header__links_right">
          <li className="header__links-item header__links-item_left">
            <Link className="header__link header__link_type_signin" to="/signin">Войти</Link>
          </li>
          <li className="header__links-item header__links-item_left">
            <Link className="header__link header__link_type_signup" to="/signup">Зарегистрироваться</Link>
          </li>
          <li className="header__links-item header__links-item_left">
            <NavLink className="header__link header__link_type_about" to="/about">О компании</NavLink>
          </li>
        </ul>
        </>
        }
      </nav>
    </header>
  )
}

export default Header;
