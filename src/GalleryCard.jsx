import React from 'react';

function GalleryCard({ id, imgSrc, name }) {
  return (
    <div className="gallery__item" id={id}>
      <img src={imgSrc} alt="No image" />
      <p className="gallery__item-title">{name}</p>
      <button className="gallery__button">Learn more</button>
    </div>
  );
}

export default GalleryCard;