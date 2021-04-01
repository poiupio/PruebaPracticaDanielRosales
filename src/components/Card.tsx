import '../style/Card.css';
import star from '../resources/star.png'

interface cardProps {
  clickStar?: Function,
  haveStar: boolean,
  imageUrl: string
}

const Card = (props: cardProps) => {
  const saveInLocal = () =>{
    if(props.clickStar) props.clickStar(props.imageUrl);
  }

  return (
    <div className="image-card">
      {
        props.haveStar ? <img className="star" src={star} title="Agregar a favoritos" onClick={saveInLocal} alt="favoriteStar" /> : ""
      }
      <img className="rounded float-left" src={props.imageUrl} alt="cardImage" />
    </div>
  )
}

export default Card;