import './Image.scss';

const Image = ({icon}) => {
  return (
    <img className="image" src={`images/${icon}`} />
  )
}

export default Image;