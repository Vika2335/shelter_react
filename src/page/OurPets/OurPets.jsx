import React, { useState, useEffect } from 'react'
import './OurPets.css'
import Popup from '../../components/Popup/Popup.jsx'; 
import GalleryCard from '../../components/Card/GalleryCard.jsx'
import { data } from '../../utils/data.js';

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

/*function adaptiv() {
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
}*/ 

function OurPets() {
  const [currentPage, setCurrentPage] = useState(1);
  const [maxPages, setMaxPages] = useState(6);
  const [pets, setPets] = useState([]);
  const [selectedPet, setSelectedPet] = useState(null);

  useEffect(() => {
    const page1 = data;
    const page2 = shuffle([...data]);
    const page3 = shuffle([...data]);
    const page4 = shuffle([...data]);
    const page5 = shuffle([...data]);
    const page6 = shuffle([...data]);

    const pages = [page1, page2, page3, page4, page5, page6];

    setPets(pages[currentPage - 1]);
  }, [currentPage]);

  useEffect(() => {
    updatePaginationButtons();
  }, [currentPage, maxPages]);

  useEffect(() => {
    const forwardBtn = document.querySelector('#forward');
    const backBtn = document.querySelector('#back');

    forwardBtn.addEventListener('click', nextPage);
    backBtn.addEventListener('click', previousPage);

    return () => {
      forwardBtn.removeEventListener('click', nextPage);
      backBtn.removeEventListener('click', previousPage);
    };
  }, []);

  useEffect(() => {
    updatePaginationButtons();
  }, [currentPage, maxPages]);

  function updatePaginationButtons() {
    const firstbackBtn = document.querySelector('#firstback');
    const lastforwardBtn = document.querySelector('#lastforward');
    const forwardBtn = document.querySelector('#forward');
    const backBtn = document.querySelector('#back');

    if (firstbackBtn && lastforwardBtn) {
      if (currentPage > 1) {
        firstbackBtn.removeAttribute('disabled');
        backBtn.removeAttribute('disabled');
      } else {
        firstbackBtn.setAttribute('disabled', 'true');
        backBtn.setAttribute('disabled', 'true');
      }

      if (currentPage === maxPages) {
        lastforwardBtn.setAttribute('disabled', 'true');
        forwardBtn.setAttribute('disabled', 'true');
      } else {
        lastforwardBtn.removeAttribute('disabled');
        forwardBtn.removeAttribute('disabled');
      }
    }

    const centralBtn = document.querySelector('#page');
    centralBtn.innerHTML = currentPage;
  }

  function nextPage() { 
    if (currentPage < maxPages) {
      setCurrentPage(page => page + 1);
    }
  }
  
  function previousPage() {
    if (currentPage > 1) {
      setCurrentPage(page => page - 1);
    }
  }

  const openPopup = (pet) => {
    setSelectedPet(pet);
  };
  
  const closePopup = () => {
    setSelectedPet(null);
  };

  return (
    <>
      <main>
        <section className="our_pets">
          <div className="container">
            <div className="pets">
              <div className="pets-content">
                <h1 className="pets-content__heading">Our friends who are looking for a house</h1>
                <div className="gallery">
                  {pets.map((pet, index) => (
                    <GalleryCard key={index} id={pet.id} imgSrc={pet.img} name={pet.name} setSelectedPet={openPopup}/>
                  ))}
                </div>
                <div className="nav">
                  <div className="pagination">
                    <button className="pagination__button-img" id="firstback" onClick={() => setCurrentPage(1)}>
                      &lt;&lt;
                    </button>
                    <button className="pagination__button-img" id="back" onClick={() => previousPage()}>
                      &lt;
                    </button>
                    <button className="pagination__button-img pagination__button" id="page">{currentPage}</button>
                    <button className="pagination__button-img nav-img" id="forward" onClick={() => nextPage()}>
                      &gt;
                    </button>
                    <button className="pagination__button-img nav-img" id="lastforward" onClick={() => setCurrentPage(6)}>
                      &gt;&gt;
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <Popup onClose={closePopup} selectedPet={selectedPet} />
      </main> 
    </>
  )
}
  
export default OurPets