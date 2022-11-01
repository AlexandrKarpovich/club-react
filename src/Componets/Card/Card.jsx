import './Card.scss';
import Image from "../Image";
import { Button } from "../ui-kit/Button/Button";
import {NavLink} from "react-router-dom";
import React from "react";

const Card = ({icon, stock, title, text}) => {

    return (
        <div className="card">
            <div className="img">
                <Image icon={icon} />
            </div>

            <div className="card__stock">{stock}</div>
            <h4 className='card__title'>{title}</h4>
            <p className='card__text'>{text}</p>

            <NavLink className="menu__item__link" to="/parthers">
                <Button size="large" label="Оставить заявку" light="true" />
            </NavLink>
        </div>
    )
}

export default Card;