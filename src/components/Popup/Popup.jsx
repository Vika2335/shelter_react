import React from 'react';
import './Popup.css';
import vector from '../../images/pagination/Vector.svg';
import { data } from '../../utils/data.js';

export function Popup({ onClose, selectedPet }) {
  if (!selectedPet) return null;

  console.log('selectedPet :>> ', selectedPet);

  const petData = data.find(pet => pet.id === selectedPet.id) || {};

  const closeModal = () => {
    onClose();
  };

  return (
    <>
      <div className="popup">
        <div className="container">
          <div className="popup__close">
            <button className="popup-modal__button-close" onClick={closeModal}><img src={vector} alt='Close'/></button>
          </div>
          <div className="popup-modal">
            <div className="popup-modal__content">
              <div className="content__img" id={`${selectedPet.id}`}>
                <img src={selectedPet.imgSrc} alt={selectedPet.name}/>
              </div>
              <div className="popup__content">
                <h2 className="content__heading">{selectedPet.name}</h2>
                <h3 className="content__subheading">{petData.type} - {petData.breed}</h3>
                <div className="content__information">{petData.description}</div>
                <div className="content__list">
                  <ul className="list">
                    <li><p><strong>Age: </strong></p><p className="age">{petData.age}</p></li>
                    <li><p><strong>Inoculations: </strong></p><p className="inoculations">{petData.inoculations}</p></li>
                    <li><p><strong>Diseases: </strong></p><p className="diseases">{petData.diseases}</p></li>
                    <li><p><strong>Parasites: </strong></p><p className="parasites">{petData.parasites}</p></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Popup;
