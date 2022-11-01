import Card from '../Card';
import './Grid.scss';

// static data json
import CardsData from '../../data/cards.json';

const Grid = () => {
  return (
    <div className="grid">
        {
            CardsData.map( ({img, stock, title, text}, index) => {
                return (
                    <Card
                        icon={img}
                        stock={stock}
                        title={title}
                        text={text}
                        key={index}
                    />
                )
            })
        }
    </div>
  )
}

export default Grid;