import './Card.scss';
import CardStock from "../Card-stock";
import CardTitle from "../Card-title";
import Image from "../Image";
import CardText from "../Card-text";
import Button from "../Button";

const Card = ({icon, stock, title, text, btn}) => {
  return (
    <div className="card">
        <Image icon={icon} />
        <CardStock stock={stock} />
        <CardTitle title={title} />
        <CardText text={text} />
        <Button btn={btn} />
    </div>
  )
}

export default Card;