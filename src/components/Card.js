import React from 'react'
import '../style/Card.css';
import star from '../resources/star.png'

const Card = (props) => {
  const starUrl = "https://assets.stickpng.com/images/580b585b2edbce24c47b2913.png"

  const saveInLocal = () =>{
    let favorites = `${localStorage.getItem('favorites')}|${props.imageUrl}`;
    localStorage.setItem('favorites', favorites); 
    alert("Agregado a favoritos");
    props.clickStar(props.imageUrl);
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