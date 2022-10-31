import React from 'react';
import './Offers-page.scss';

import MainScreenImg from "../../Componets/Main-screen-img/Main-screen-img";
import Input from "../../Componets/Input/Input";
import {Button} from "../../Componets/ui-kit/Button/Button";
import Title from "../../Componets/Title";
import Text from "../../Componets/Text/Text";

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
            <div className="section">
                <div className="container">
                    <div className="offers-page__cards">
                        <div className="box">
                            <Title title="Тинькофф Банк" />
                            <Text text="Банк для бизнеса" />
                        </div>
                        <div className="box">
                            <Text text="Задача организации, в особенности же дальнейшее развитие различных форм деятельности позволяет оценить значение направлений прогрессивного развития. С другой стороны постоянное информационно-пропагандистское обеспечение нашей деятельности требуют от нас анализа форм развития. С другой стороны дальнейшее развитие различных форм деятельности требуют определения и уточнения дальнейших направлений развития. Товарищи! " />
                        </div>
                    </div>
                </div>
            </div>

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
                            <div className="agree">
                                <Input type="checkbox" name="scales" checked />
                                <Text text="Я даю свое согласие на обработку персональных данных" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    );
}

export default OffersPage;