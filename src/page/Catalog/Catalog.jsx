import React, { useState } from 'react';
import Card from '../../components/Card/Card.jsx';
import AddCard from '../../components/AddCard/AddCard.jsx';
import Popup from '../../components/Popup/Popup.jsx';
import './Catalog.css';
import { data } from '../../utils/data.js'

function generateUniqueId() {
  return Math.random().toString();
}

function Catalog() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPet, setSelectedPet] = useState(null);

  const [pets, setPets] = useState(data);

  const openModal = () => {
    setIsModalOpen(true);
    document.body.classList.toggle('lock');
  };

  const closeModal = () => {
    setIsModalOpen(false);
    document.body.classList.toggle('lock');
  };

  const closePopup = () => {
    setSelectedPet(null);
  };

  const addCard = (newCardData) => {
    const newCard = {
      id: generateUniqueId(),
      ...newCardData
    };
    data.push(newCard);
    setPets([...pets, newCard]);
    closeModal();
  };

  const deleteCard = (id) => {
    setPets(pets.filter(pet => pet.id !== id));
  };

  return (
    <main>
      <section className="our_pets">
        <div className="container">
          <div className="pets">
            <div className="pets-content">
              <h1 className="pets-content__heading">Our friends who are looking for a house</h1>
              <div className="catalog">
                {pets.map(pet => (
                  <Card key={pet.id} id={pet.id} imgSrc={pet.img} name={pet.name} onDelete={() => deleteCard(pet.id)} setSelectedPet={setSelectedPet}/>
                ))}
              </div>
              <div className='addCard'>
                <button className='add' onClick={openModal}>Add card</button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Popup onClose={closePopup} selectedPet={selectedPet}/>
      <AddCard isOpen={isModalOpen} onClose={closeModal} onSave={addCard} />
    </main>
  );
}

export default Catalog;
