import React from 'react';

function Card({ id, imgSrc, name, onDelete,  setSelectedPet }) {
  const handleDelete = () => {
    onDelete(id);
  };

  const handleLearnMore = () => {
    setSelectedPet({ id, imgSrc, name });
  };  

  return (
    <div className="gallery__item-card" id={id}>
      <img src={imgSrc} alt="No image" />
      <p className="gallery__item-title">{name}</p>
      <button className="gallery__button" onClick={handleLearnMore}>Learn more</button>
      <button className="gallery__delete" onClick={handleDelete}>Delete</button>
    </div>
  );
}

export default Card;