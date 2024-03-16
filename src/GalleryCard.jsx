import React from 'react';

function GalleryCard({ id, imgSrc, name, setSelectedPet}) {
  const handleLearnMore = () => {
    setSelectedPet({ id, imgSrc, name });
  };  

  return (
    <div className="gallery__item" id={id}>
      <img src={imgSrc} alt="No image" />
      <p className="gallery__item-title">{name}</p>
      <button className="gallery__button" onClick={handleLearnMore}>Learn more</button>
    </div>
  );
}

export default GalleryCard;