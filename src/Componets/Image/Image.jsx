import './Image.scss';

const Image = ({icon}) => {
  return (
    <img className="card-logo" src={`images/${icon}`} />
  )
}

export default Image;