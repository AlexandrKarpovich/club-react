import React  from 'react';
import './Partners-page.scss';

import ListItem from "../../Componets/List-item/List-item";
import ListTitle from "../../Componets/List-title/List-title";
import Image from "../../Componets/Image";
import MainScreenImg from "../../Componets/Main-screen-img/Main-screen-img";
import Title from "../../Componets/Title";
import Text from "../../Componets/Text/Text";
import {Button} from "../../Componets/ui-kit/Button/Button";
import {Link, NavLink} from "react-router-dom";

const PartnersPage = () => {
    return (
        <div className="partners-page">

            <MainScreenImg
                title="Тинькофф Банк"
                text="Первые два месяца — бесплатно"
                btnText="Воспользоваться предложением"
                btnColor="blue"
                picture="/main-screen/tinkoff-big-pic.png"
            />

            <div className="container">
                <div className="section">
                    <Title title="Специальные предложения" />
                    <div className="partners-page__cards">
                        <div className="box partners-page__cards__box">
                            <div className="box__item">
                                <Title title="Первые два месяца — бесплатно" />
                                <Link className="menu__item__link" to="/offers">
                                    <Button label="Воспользоваться предложением" color="blue" size="medium" />
                                </Link>
                            </div>
                            <div className="box__item">
                                <Text text="Задача организации, в особенности же дальнейшее развитие различных форм деятельности позволяет оценить значение направлений прогрессивного развития. С другой стороны постоянное информационно-пропагандистское обеспечение нашей деятельности требуют от нас анализа форм развития. С другой стороны дальнейшее развитие различных форм деятельности требуют определения и уточнения дальнейших направлений развития. Товарищи! " />
                            </div>
                        </div>
                    </div>
                    <div className="partners-page__cards">
                        <div className="box partners-page__cards__box">
                            <div className="box__item">
                                <Title title="Скидка -50% на первую покупку" />

                                <Link className="menu__item__link" to="/offers">
                                    <Button label="Воспользоваться предложением" color="blue" size="medium" />
                                </Link>
                            </div>
                            <div className="box__item">
                                <Text text="Задача организации, в особенности же дальнейшее развитие различных форм деятельности позволяет оценить значение направлений прогрессивного развития. С другой стороны постоянное информационно-пропагандистское обеспечение нашей деятельности требуют от нас анализа форм развития. С другой стороны дальнейшее развитие различных форм деятельности требуют определения и уточнения дальнейших направлений развития. Товарищи! " />
                            </div>
                        </div>
                    </div>
                    <div className="grid-2">
                        <div className="box">
                            <Title title="Тинькофф Банк" />
                            <Text text="Банк для бизнеса" />
                        </div>
                        <div className="box">
                            <div>
                                <div className="title-line">
                                    <Image icon="like-icon.svg" />
                                    <ListTitle listTitle="Не нужно идти в офис и стоять в очереди" />
                                </div>

                                <ul className="list">
                                    <ListItem listItem="Документы для открытия счета привезут представители банка." />
                                    <ListItem listItem="Первые месяцы — бесплатно" />
                                    <ListItem listItem="Тестируйте сервис для бизнеса первые 2 месяца, или первые 6 с даты регистрации бизнеса, если вы ИП и открылись не больше полугода назад." />
                                </ul>
                            </div>
                            <div>
                                <div className="title-line">
                                    <Image icon="like-icon.svg" />
                                    <ListTitle listTitle="Любой вопрос решаем 24/7 без выходных" />
                                </div>
                                <ul className="list">
                                    <ListItem listItem="по телефону" />
                                    <ListItem listItem="в чате в приложении и в личном кабинете" />
                                    <ListItem listItem="по электронной почте" />
                                    <ListItem listItem="Оцените плюсы по сравнению с вашим банком" />
                                </ul>
                            </div>
                            <div>
                                <div className="title-line">
                                    <Image icon="like-icon.svg" />
                                    <ListTitle listTitle="Открытие расчетного счета — бесплатно" />
                                </div>
                                <ul className="list">
                                    <ListItem listItem="Для всех клиентов 2 месяца обслуживания в подарок, для новых ИП — до 6 месяцев в подарок (на тарифе Простой)" />
                                    <ListItem listItem="Персональный менеджер отвечает на вопросы днем, а ночью работает служба поддержки." />
                                    <ListItem listItem="Бесплатные моментальные платежи внутри банка." />
                                    <ListItem listItem="Платежи в другие банки — с 01.00 до 20.00 по Москве." />
                                    <ListItem listItem="Зарплатный проект полностью бесплатен для вас и ваших сотрудников" />
                                    <ListItem listItem="Встроенная бухгалтерия - сама посчитает налогооблагаемый доход и рассчитает налоги по УСН 6% и ЕНВД, а также составит налоговую декларацию и отправит по интернету." />
                                    <ListItem listItem="На остаток по расчетному счету ежемесячно начисляем до 6%" />
                                    <ListItem listItem="Интернет-эквайринг и КупиВкредит для интернет-магазинов" />
                                    <ListItem listItem="Внесение наличных через банкоматы и партнеров: 300 000 точек пополнения по всей России." />
                                    <ListItem listItem="Снятие наличных в банкоматах по всему миру без дополнительных комиссий" />
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PartnersPage;