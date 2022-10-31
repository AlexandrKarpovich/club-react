import './Header.scss';
import Image from "../Image";
import {Link} from "react-router-dom";
import {Button} from "../ui-kit/Button/Button";

const Header = () => {
  return (
    <div className='header'>
      <div className="container">
        <div className="header__inner">
          <Image icon="logo.svg" />

          <ul className="menu">
            <li className="menu__item">
              <Link className="menu__item__link" to="/"> Партнеры </Link>
            </li>
            <li className="menu__item">
              <Link className="menu__item__link" to="/about"> О клубе </Link>
            </li>
            <li className="menu__item">
              <Link className="menu__item__link" to="/parthers"> Предложения</Link> </li>
            <li className="menu__item">
              <Link className="menu__item__link" to="/offers"> Зарабатывайте с МТТ</Link>
            </li>
          </ul>


          <Link to="/authorization"><Button label="Вход" light="true" /></Link>

          {/*<button className="button">Вход</button>*/}
        </div>
      </div>
    </div>
  )
}

export default Header;