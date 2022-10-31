import React from 'react';
import './Authorization-page.scss';
import MainScreen from "../../Componets/Main-screen/Main-screen";
import Search from "../../Componets/Search";
import Grid from "../../Componets/Grid";
import {Button} from "../../Componets/ui-kit/Button/Button";
import Input from "../../Componets/Input/Input";
import Title from "../../Componets/Title";
import Text from "../../Componets/Text/Text";

const AuthorizationPage = () => {
    return (
        <div className="authorization-page">
            <MainScreen
                title="Зарабатывайте на рекомендациях МТТ"
                text="Рекомендуйте МТТ от себя лично и зарабатывайте до 20% ежемесячно от расходовкаждого клиента!"
                btnText="Подробнее"
                btnColor="blue"
            />

            <div className="form-registration">
                <div className="container">
                    <div className="form-registration__inner">
                        <div className="form-registration__box">
                            <Title title="Авторизация в личном кабинете MTT Бизнес" />
                            <Text text="Для того чтобы ознакомиться с предложением необходимо авторизоваться" />
                            <Text text="Разъясняющий текст, что нужно ввести данные из личного кабинета МТТ." />
                        </div>
                        <div className="form-registration__box">
                            <Input clas="input" type="text" name="name" placeholder="Пароль" />
                            <Input clas="input" type="password" name="password" placeholder="Пароль" />
                            <Button label="Воспользоваться предложением" color="blue" size="large" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AuthorizationPage;