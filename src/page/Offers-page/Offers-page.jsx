import React from 'react';
import './Offers-page.scss';

import MainScreenImg from "../../Componets/Main-screen-img/Main-screen-img";
import Input from "../../Componets/Input/Input";
import {Button} from "../../Componets/ui-kit/Button/Button";
import Title from "../../Componets/Title";

const OffersPage = () => {
    return (
        <div className="offers-page">
            <MainScreenImg
                title="Тинькофф Банк"
                text="Первые два месяца — бесплатно"
                btnText="Воспользоваться предложением"
                btnColor="blue"
                picture="/main-screen/tinkoff-big-pic.png"
            />

            <div className="form-registration">
                <div className="container">
                    <div className="form-registration__inner">
                        <div className="form-registration__box">
                            <Title title="Для того, чтобы воспользоваться предложением заполните форму" />
                        </div>
                        <div className="form-registration__box">
                            <Input clas="input" type="text" name="name" placeholder="имя" />
                            <Input clas="input" type="tel" name="number" placeholder="телефон" />
                            <Input clas="input" type="email" name="email" placeholder="E-mail" />
                            <Button label="Воспользоваться предложением" color="blue" size="large" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default OffersPage;