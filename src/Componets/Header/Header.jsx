import './Header.scss';
import Image from "../Image";

const Header = () => {
  return (
    <div className='header'>
      <div className="container">
        <div className="header__inner">
          <Image icon="logo.svg" />
          <ul className="menu">
            <li className="menu__item">Партнеры</li>
            <li className="menu__item">О клубе</li>
            <li className="menu__item">Предложения</li>
            <li className="menu__item">Зарабатывайте с МТТ </li>
          </ul>
          <button className="button">Вход</button>
        </div>
      </div>
    </div>
  )
}

export default Header;