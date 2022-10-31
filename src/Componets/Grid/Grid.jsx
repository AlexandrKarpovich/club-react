import Card from '../Card';
import './Grid.scss';

import Image from "../Image";

// static data json
import CardsData from '../../data/cards.json';

const Grid = () => {
  return (
    <div className="grid">
        {
            CardsData.map( card => {
                return (
                    <Card icon="tinkoff.png" stock={card.stock} title={card.title} text={card.text} />
                    // <Button label="Оставить заявку" size="large" light="true" />
                    // <div className="card" key={card.id}>
                    //     <img className="card-logo" src="images/tinkoff.png" />
                    //     <div className="card__stock">{card.stock}</div>
                    //     <h4 className='card__title'>{card.title}</h4>
                    //     <p className='card__text'>{card.text}</p>
                    //     <Button label="Оставить заявку" size="large" light="true" />
                    // </div>
                )
            })
        }

        {/*<Card*/}
        {/*    icon="tinkoff.png"*/}
        {/*    stock="Первые два месяца — бесплатно"*/}
        {/*    title="ТИНЬКОФФ БАНК"*/}
        {/*    text="СЕРВИС ПО ПРИЕМУ ОНЛАЙН ПЛАТЕЖЕЙ"*/}
        {/*/>*/}

    </div>
  )
}

export default Grid;