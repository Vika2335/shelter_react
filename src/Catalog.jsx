import React, { useState } from 'react';
import Card from './Card';
import AddCard from './AddCard.jsx';
import Popup from './Popup.jsx';
import './Catalog.css';
import katrine from './img/pets/pets-katrine.png';
import jennifer from './img/pets/pets-jennifer.png';
import woody from './img/pets/pets-woody.png';
import sophie from './img/pets/pets-sophia.png';
import timmy from './img/pets/pets-timmy.png';
import charly from './img/pets/pets-charly.png';
import scarlett from './img/pets/pets-scarlet.png';
import freddie from './img/pets/pets-freddie.png';

function generateUniqueId() {
  return Math.random().toString();
}

function Catalog() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPet, setSelectedPet] = useState(null);

  const [pets, setPets] = useState([
    { id: generateUniqueId(), imgSrc: katrine, name: 'Katrine' },
    { id: generateUniqueId(), imgSrc: jennifer, name: 'Jennifer' },
    { id: generateUniqueId(), imgSrc: woody, name: 'Woody' },
    { id: generateUniqueId(), imgSrc: sophie, name: 'Sophia' },
    { id: generateUniqueId(), imgSrc: timmy, name: 'Timmy' },
    { id: generateUniqueId(), imgSrc: charly, name: 'Charly' },
    { id: generateUniqueId(), imgSrc: scarlett, name: 'Scarlett' },
    { id: generateUniqueId(), imgSrc: freddie, name: 'Freddie' },
  ]);

  const openModal = () => {
    setIsModalOpen(true);
    document.body.classList.toggle('lock');
  };

  const closeModal = () => {
    setIsModalOpen(false);
    document.body.classList.toggle('lock');
  };

  const addCard = (newCardData) => {
    const newCard = {
      id: generateUniqueId(),
      ...newCardData
    };
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
                  <Card key={pet.id} id={pet.id} imgSrc={pet.imgSrc} name={pet.name} onDelete={() => deleteCard(pet.id)} setSelectedPet={setSelectedPet} />
                ))}
              </div>
              <div className='addCard'>
                <button className='add' onClick={openModal}>Add card</button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Popup onClose={closeModal} selectedPet={selectedPet} />
      <AddCard isOpen={isModalOpen} onClose={closeModal} onSave={addCard} />
    </main>
  );
}

export default Catalog;
