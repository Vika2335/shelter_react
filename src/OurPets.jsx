import React, { useState, useEffect } from 'react'
import { data } from './scripts/data';
import './OurPets.css'
import GalleryCard from './GalleryCard.jsx'
import katrine from './img/pets/pets-katrine.png'
import jennifer from './img/pets/pets-jennifer.png'
import woody from './img/pets/pets-woody.png'
import sophie from './img/pets/pets-sophia.png'
import timmy from './img/pets/pets-timmy.png'
import charly from './img/pets/pets-charly.png'
import scarlett from './img/pets/pets-scarlet.png'
import freddie from './img/pets/pets-freddie.png'

function shuffle(array) {
  let currentIndex = array.length,  randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex > 0) {
  
    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
  
    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }

  return array;
}

function adaptiv() {
  const windowInnerWidth = window.innerWidth;
  let countPage = 0;

  switch (true) {
    case windowInnerWidth > 768:
      countPage = 6;
      break;
    case windowInnerWidth > 320:
      countPage = 8;
      break;
    default:
      countPage = 16;
      break;
  }

  return countPage;
}

function OurPets() {
  function generateUniqueId() {
    return Math.random().toString();
  }

  const petsGallery = [
    { id: generateUniqueId(), imgSrc: katrine, name: 'Katrine' },
    { id: generateUniqueId(), imgSrc: jennifer, name: 'Jennifer' },
    { id: generateUniqueId(), imgSrc: woody, name: 'Woody' },
    { id: generateUniqueId(), imgSrc: sophie, name: 'Sophia' },
    { id: generateUniqueId(), imgSrc: timmy, name: 'Timmy' },
    { id: generateUniqueId(), imgSrc: charly, name: 'Charly' },
    { id: generateUniqueId(), imgSrc: scarlett, name: 'Scarlett' },
    { id: generateUniqueId(), imgSrc: freddie, name: 'Freddie' },
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const [maxPages, setMaxPages] = useState(adaptiv());

  useEffect(() => {
    displayPage(currentPage);
  }, [currentPage]);

  useEffect(() => {
    const handleResize = () => {
      setMaxPages(adaptiv());
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  function displayPage(page) {
    const pagePets = shuffle(petsGallery);

    const gallery = document.querySelector('.gallery');
    gallery.innerHTML = '';

    pagePets.forEach((pet, index) => {
      if (index >= (page - 1) * maxPages && index < page * maxPages) {
        const item = document.createElement('div');
        item.classList.add('gallery__item');
        item.id = pet.id;
        item.innerHTML = `
          <img src="${pet.imgSrc}" alt="No image">
          <p class="gallery__item-title">${pet.name}</p>
          <button class="gallery__button">Learn more</button>
        `;
        gallery.appendChild(item);
      }
    });

    updatePaginationButtons();
    disabledBtn();

    const galleryItems = document.querySelectorAll('.gallery__item');
    galleryItems.forEach(galleryItem => generatePopupGallery(galleryItem));
  }

  function updatePaginationButtons() {
    const firstbackBtn = document.querySelector('#firstback');
    const lastforwardBtn = document.querySelector('#lastforward');
    const forwardBtn = document.querySelector('#forward');
    const backBtn = document.querySelector('#back');

    firstbackBtn.addEventListener('click', firstPage);
    lastforwardBtn.addEventListener('click', lastPage);
    forwardBtn.addEventListener('click', nextPage);
    backBtn.addEventListener('click', previousPage);

    const centralBtn = document.querySelector('#page');
    centralBtn.innerHTML = currentPage;
  }

  function disabledBtn() {
    const firstbackBtn = document.querySelector('#firstback');
    const lastforwardBtn = document.querySelector('#lastforward');
    const forwardBtn = document.querySelector('#forward');
    const backBtn = document.querySelector('#back');

    if (currentPage > 1) {
      backBtn.removeAttribute('disabled');
      firstbackBtn.removeAttribute('disabled');
    }

    if (currentPage === 1) {
      backBtn.setAttribute('disabled', 'true');
      firstbackBtn.setAttribute('disabled', 'true');
    }

    if (currentPage === maxPages) {
      forwardBtn.setAttribute('disabled', 'true');
      lastforwardBtn.setAttribute('disabled', 'true');
    }

    if (currentPage < maxPages) {
      forwardBtn.removeAttribute('disabled');
      lastforwardBtn.removeAttribute('disabled');
    }
  }

  function firstPage() {
    setCurrentPage(1);
  }

  function lastPage() {
    setCurrentPage(maxPages);
  }

  function nextPage() { 
    if (currentPage < maxPages) {
      setCurrentPage(currentPage + 1);
    }
  }

  function previousPage() {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  }

  function generatePopupGallery(galleryItem) {
    const onClickHandler = () => {
      const popup = document.querySelector('.popup');

      let pets = {};
      pets = data.find(gallery => gallery.id === galleryItem.id);

      popup.classList.toggle('active');
      document.body.classList.toggle('lock');

      dataModal(pets);

      close();
    };

    return onClickHandler;
  }

  function dataModal(pets) {
    document.querySelector('.content__heading').innerHTML = pets.name;
    document.querySelector('.content__subheading').innerHTML = pets.type + ' - ' + pets.breed;
    document.querySelector('.content__information').innerHTML = pets.description;
    document.querySelector('.age').innerHTML = pets.age;
    document.querySelector('.inoculations').innerHTML = pets.inoculations;
    document.querySelector('.diseases').innerHTML = pets.diseases;
    document.querySelector('.parasites').innerHTML = pets.parasites;
    document.querySelector('.content__img img').setAttribute('src', pets.img);
  }

  function close() {
    const onClickHandler = () => {
      const popup = document.querySelector('.popup');
      popup.classList.remove('active');
      document.body.classList.remove('lock');
    };

    return onClickHandler;
  }

  return (
    <>
      <main>
        <section className="our_pets">
          <div className="container">
            <div className="pets">
              <div className="pets-content">
                <h1 className="pets-content__heading">Our friends who are looking for a house</h1>
                <div className="gallery">
                  {petsGallery.map((pet, index) => (
                    <GalleryCard key={index} imgSrc={pet.img} name={pet.name}/>
                  ))}
                </div>
                <div className="nav">
                  <div className="pagination">
                    <button className="pagination__button-img" id="firstback">
                      &lt;&lt;
                    </button>
                    <button className="pagination__button-img" id="back">
                      &lt;
                    </button>
                    <button className="pagination__button-img pagination__button" id="page">1</button>
                    <button className="pagination__button-img nav-img" id="forward">
                      &gt;
                    </button>
                    <button className="pagination__button-img nav-img" id="lastforward">
                      &gt;&gt;
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main> 
    </>
  )
}
  
export default OurPets