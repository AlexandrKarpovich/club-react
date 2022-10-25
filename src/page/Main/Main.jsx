import Grid from '../../Componets/Grid/Grid';
import Slider from '../../Componets/Slider';
import Button from "../../Componets/Button";
import 'normalize.css';
import './Main.scss';

const Main = () => {
  return (
    <div className="main">
      <Slider />
      <div className="container">
        <Grid />
        <Button btn="Показать больше" color="blue" />
      </div>
    </div>
  )
}

export default Main;