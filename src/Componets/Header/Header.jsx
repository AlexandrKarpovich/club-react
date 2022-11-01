import React, {useEffect} from 'react';

import './Header.scss';
import Image from "../Image";
import {Link} from "react-router-dom";
import {Button} from "../ui-kit/Button/Button";

const Header = () => {
  const [ menuOpen, setMenuOpen ] = React.useState(false);

  // body class
  useEffect(() => {
    document.body.classList.toggle('mobile-menu-open', menuOpen);
  },[menuOpen])

  const setActive = ({ isActive }) =>(isActive ? " active" : "");

  return (
    <div className='header'>
      <div className="container">
        <div className="header__inner">
          <Image icon="logo.svg" />

          <ul  className={`menu ${menuOpen ? 'open' : 'hidden'}`}>
            <li className={({ isActive }) =>(isActive ? " active" : "")}>
              <Link className="menu__item__link" to="/"> Партнеры </Link>
            </li>
            <li className={({ isActive }) =>(isActive ? " active" : "")}>
              <Link className="menu__item__link" to="/about"> О клубе </Link>
            </li>
            <li className={({ isActive }) =>(isActive ? " active" : "")}>
              <Link className="menu__link" to="/parthers"> Предложения</Link> </li>
            <li className={({ isActive }) =>(isActive ? " active" : "")}>
              <Link className="menu__item__link" to="/offers"> Зарабатывайте с МТТ</Link>
            </li>
          </ul>


          <div className="header-btns">
            <Link to="/authorization">
              <Button label="Вход" light="true" />
            </Link>

            <div className="burger" onClick={() => {
              setMenuOpen(o => !o);
            }}>{ menuOpen
                  ? <Image icon="burger-close-icon.svg" />
                  : <Image icon="burger-open-icon.svg" />
              }
              </div>
          </div>
          </div>
      </div>
    </div>
  )
}

export default Header;