import React, { useState } from 'react';
import './Popup.css';
import vector from './img/pagination/Vector (1).svg'

function Popup({onClose, selectedPet}) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
    document.body.classList.toggle('lock');
  };

  const closeModal = () => {
    setIsModalOpen(false);
    onClose();
  };

  return (
    <>
      {isModalOpen && (
        <div class="popup">
          <div class="container">
            <div class="popup__close">
              <button class="popup-modal__button-close" onClick={closeModal}><img src={vector} alt='Close'/></button>
            </div>
            <div class="popup-modal">
              <div class="popup-modal__content">
                <div class="content__img" id={`popup-delete-${selectedPet.id}`}>
                  <img src={selectedPet.imgSrc} alt={selectedPet.name}/>
                </div>
                <div class="popup__content">
                  <h2 class="content__heading">{selectedPet.name}</h2>
                  <h3 class="content__subheading">Dog - Labrador</h3>
                  <div class="content__information">Jennifer is a sweet 2 months old Labrador that is patiently waiting to find a new forever home.
                    This girl really enjoys being able to go outside to run and play, but won't hesitate to play up a storm in the house if she has all of her favorite toys.
                  </div>
                  <div class="content__list">
                    <ul class="list">
                      <li><p><strong>Age: </strong></p><p class="age"></p></li>
                      <li><p><strong>Inoculations: </strong></p><p class="inoculations"></p></li>
                      <li><p><strong>Diseases: </strong></p><p class="diseases"></p></li>
                      <li><p><strong>Parasites: </strong></p><p class="parasites"></p></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            </div>
        </div>
      )}
    </>
  );
}

export default Popup;

