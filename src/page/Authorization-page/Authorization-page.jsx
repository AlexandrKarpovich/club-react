import React from 'react';
import './Authorization-page.scss';

import {Button} from "../../Componets/ui-kit/Button/Button";
import Input from "../../Componets/Input/Input";
import Title from "../../Componets/Title";
import Text from "../../Componets/Text/Text";
import MainScreenImg from "../../Componets/Main-screen-img/Main-screen-img";

const AuthorizationPage = () => {
    return (
        <div className="authorization-page">
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
                            <Title title="Авторизация в личном кабинете MTT Бизнес" />
                            <Text text="Для того чтобы ознакомиться с предложением необходимо авторизоваться" />
                            {/*<Text text="Разъясняющий текст, что нужно ввести данные из личного кабинета МТТ." />*/}
                        </div>
                        <div className="form-registration__box">
                            <Input clas="input" type="text" name="name" placeholder="Логин" />
                            <Input clas="input" type="password" name="password" placeholder="Пароль" />
                            <Button label="Войти" size="large" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AuthorizationPage;