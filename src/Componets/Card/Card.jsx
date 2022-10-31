import './Card.scss';
import Image from "../Image";
import { Button } from "../ui-kit/Button/Button";

const Card = ({icon, stock, title, text}) => {

    return (
        <div className="card">
            <Image icon={icon} />

            <div className="card__stock">{stock}</div>
            <h4 className='card__title'>{title}</h4>
            <p className='card__text'>{text}</p>

            <Button size="large" label="Оставить заявку" light="true" />
        </div>
    )
}

export default Card;