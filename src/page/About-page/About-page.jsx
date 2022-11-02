import React from 'react';
import "./About-page.scss";

import Title from "../../Componets/Title";
import Text from "../../Componets/Text/Text";
import Image from "../../Componets/Image";
import MainScreenImg from "../../Componets/Main-screen-img/Main-screen-img";

const AboutPage = () => {
    return (
        <div className="about-page">
            <MainScreenImg
                title="О бизнес клубе МТТ"
                text="Только клиентам МТТ Бизнес доступны скидки, бонусы и уникальные условия предоставления услуг наших партнёров."
                btnText="Вступить в клуб"
                btnColor="blue"
                picture="/main-screen/about-main-pic.svg"
            />

            <div className="container">
                <div className="section">
                    <div className="row">
                        <Title title="Бизнес Клуб МТТ" />
                        <Text text="Конструкторы сайтов – получайте скидку на создание сайтов и LandingPage
                            Открытие расчетного счета – бонусы и скидки от банков-партнеров
                            CRM системы – льготные условия на обслуживание
                            MyTarget – купоны и скидки на продвижение в социальных сетях и т.д." />
                    </div>
                    <div className="row">
                        <Title title="Как войти в Бизнес клуб МТТ?" />
                        <Text text="Достаточно стать абонентом сервиса МТТ Бизнес. Если вы еще не сделали этого, сейчас самое время пройти регистрацию. Так вы получите доступ к постоянно обновляемым уникальным предложениям целого ряда компаний." />
                    </div>
                    <div className="row">
                        <Title title="Как воспользоваться бонусами и скидками?" />
                        <Text text="Выберите компанию из числа наших партнеров и оформите заявку на предоставление выбранной услуги.
При заключении договора сообщите, что вы являетесь клиентом МТТ.
Получите услугу от компании-партнера на самых выгодных условиях." />
                    </div>

                    <div className="grid-card-box">
                        <div className="box">
                            <Text text="Специально для вас отобраны самые интересные, полезные и выгодные предложения от проверенных компаний, предлагающих услуги для развития бизнеса."/>
                            <Image icon="/box/box-img-1.svg" />
                        </div>
                        <div className="box">
                            <Text text="Прежде чем добавить партнёра в структуру Бизнеса клуба, мы оцениваем стоимость и комплекс предоставляемых услуг, масштаб, историю и имидж компании, а также отзывы наших клиентов."/>
                            <Image icon="/box/box-img-2.svg" />
                        </div>
                        <div className="box">
                            <Text text="Все клиенты МТТ Бизнес автоматически становятся участниками Бизнес клуба МТТ и получают доступ к скидкам сразу после подписания договора."/>
                            <Image icon="/box/box-img-3.svg" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AboutPage;