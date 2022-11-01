import Grid from '../../Componets/Grid/Grid';
import 'normalize.css';
import './Main-page.scss';
import Search from "../../Componets/Search";
import {Button} from "../../Componets/ui-kit/Button/Button";
import MainScreen from "../../Componets/Main-screen/Main-screen";

const MainPage = () => {
  return (
    <div className="main-page">
        <MainScreen
            title="Зарабатывайте на рекомендациях МТТ"
            text="Рекомендуйте МТТ от себя лично и зарабатывайте до 20% ежемесячно от расходов каждого клиента!"
            btnText="Подробнее"
            btnColor="blue"
        />

      <div className="container">
          <div className="section">
              <div className="tabs">
                  <Button size="small" label="Все сферы" light="true" />
                  <Button size="small" label="Создание сайтов" light="true" />
                  <Button size="small" label="Маркетинг и реклама" light="true" />
                  <Button size="small" label="Банки" light="true" />
                  <Button size="small" label="CRM" light="true" />
                  <Button size="small" label="Логистика" light="true" />
                  <Button size="small" label="Учетные системы" light="true" />
                  <Button size="small" label="Вебинары и мероприятия" light="true" />
              </div>
              <Search />
              <Grid />
              <Button size="large" label="Показать больше" color="blue" />
          </div>
      </div>
    </div>
  )
}

export default MainPage;