import './Footer.scss';
import Image from "../Image";
import ListTitle from "../List-title/List-title";
import ListItem from "../List-item/List-item";
import React from "react";
import Title from "../Title";
import Text from "../Text/Text";

const Footer = () => {
  return (
    <div className='footer'>
      <div className="container">
          <div className="footer__inner">
              <div className="footer__up-line">
                  <Title title="МТТ – федеральный провайдер интеллектуальных решений для бизнеса в сфере телекоммуникаций и IT" />
                  <a className="social" href="#">
                      Мы в социальных сетях
                      <div className="social-icon">
                          <Image icon="ei_sc-vk.svg" />
                      </div>
                  </a>
              </div>

             <div className="footer__menu">
                 <div>
                     <ListTitle listTitle="Телефония для бизнеса" />
                     <ul className="list">
                         <ListItem listItem="Номер 8800" />
                         <ListItem listItem="Городские номера" />
                         <ListItem listItem="Красивые номера" />
                         <ListItem listItem="Интеграция с CRM" />
                         <ListItem listItem="Коллтрекинг" />
                         <ListItem listItem="SIM-карты для бизнеса" />
                     </ul>
                 </div>
                 <div>
                     <ListTitle listTitle="Виртуальная АТС" />
                     <ul className="list">
                         <ListItem listItem="IP-телефония" />
                         <ListItem listItem="Запись разговоров" />
                         <ListItem listItem="Голосовое меню" />
                         <ListItem listItem="Речевая аналитика" />
                     </ul>
                 </div>
                 <div>
                     <ListTitle listTitle="Голосовой робот" />
                     <ul className="list">
                         <ListItem listItem="Информирование" />
                         <ListItem listItem="Реактивация базы / брошенная корзина" />
                         <ListItem listItem="Информирование" />
                     </ul>
                 </div>
             </div>
            <div className="copy">
                <Text text="© 2022 МТТ. Все права защищены." />
            </div>

          </div>
      </div>
    </div>
  )
}

export default Footer;