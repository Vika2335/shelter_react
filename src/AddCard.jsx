import React, { useState } from 'react';
import './AddCard.css';

function AddCard({ isOpen, onClose, onSave }) {
  const [formData, setFormData] = useState({
    name: '',
    img: '',
    type: '',
    breed: '',
    description: '',
    age: '',
    inoculations: [],
    diseases: [],
    parasites: []
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSave = () => {
    onSave(formData);
    setFormData({
      name: '',
      img: '',
      type: '',
      breed: '',
      description: '',
      age: '',
      inoculations: [],
      diseases: [],
      parasites: []
    });
  };

  return (
    <>
      {isOpen && (
        <div className="modal__add">
          <div className='container'>
              <div className="modal">
                <h2 className='modal__heading'>Add New Card</h2>
                
                <div className='modal__form'>
                  <label className='input' htmlFor="name">Name:</label>
                  <input className='input-text' type="text" name="name" value={formData.name} onChange={handleChange} />
                  <label className='input' htmlFor="img">Image URL:</label>
                  <input className='input-text' type="text" name="img" value={formData.img} onChange={handleChange} />
                  <label className='input' htmlFor="type">Type:</label>
                  <input className='input-text' type="text" name="type" value={formData.type} onChange={handleChange} />
                  <label className='input' htmlFor="breed">Breed:</label>
                  <input className='input-text' type="text" name="breed" value={formData.breed} onChange={handleChange} />
                  <label className='input' htmlFor="description">Description:</label>
                  <input className='input-text' type="text" name="description" value={formData.description} onChange={handleChange} />
                  <label className='input' htmlFor="age">Age:</label>
                  <input className='input-text' type="text" name="age" value={formData.age} onChange={handleChange} />
                </div>
                
                <div className='modal__button'>
                  <button className='save' onClick={handleSave}>Save</button>
                  <button className='cancel' onClick={onClose}>Cancel</button>
                </div>
              </div>
          </div>
        </div>
      )}
    </>
  );
}

export default AddCard;

