import React, { useState } from 'react'
import './MainPage.css'
import GalleryCard from '../../components/Card/GalleryCard.jsx';
import Popup from '../../components/Popup/Popup.jsx';
import start_screen_puppy from './assets/img/pets/start_screen_puppy.png'
import about_pets from './assets/img/pets/about-pets.png'
import arrow from './assets/img/pagination/Arrow.svg'
import arrow_right from './assets/img/pagination/Arrow (1).svg'
import vector from './assets/img/icon/Vector.svg'
import transportation from './assets/img/icon/transportation.svg'
import toys from './assets/img/icon/toys.svg'
import bowls_and_cups from './assets/img/icon/bowls-and-cups.svg'
import shampoos from './assets/img/icon/shampoos.svg'
import vitamins from './assets/img/icon/vitamins.svg'
import medicines from './assets/img/icon/medicines.svg'
import collars_or_leashes from './assets/img/icon/collars-or-leashes.svg'
import sleeping_area from './assets/img/icon/sleeping-area.svg'
import donation_dog from './assets/img/pets/donation-dog.png'
import credit_card from './assets/img/icon/credit-card.svg'
import katrine from './assets/img/pets/pets-katrine.png'
import jennifer from './assets/img/pets/pets-jennifer.png'
import woody from './assets/img/pets/pets-woody.png'
import sophie from './assets/img/pets/pets-sophia.png'
import timmy from './assets/img/pets/pets-timmy.png'
import charly from './assets/img/pets/pets-charly.png'
import scarlett from './assets/img/pets/pets-scarlet.png'
import freddie from './assets/img/pets/pets-freddie.png'

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

function MainPage() {
  const pets = [
    { imgSrc: katrine, name: 'Katrine' },
    { imgSrc: jennifer, name: 'Jennifer' },
    { imgSrc: woody, name: 'Woody' },
    { imgSrc: sophie, name: 'Sophia' },
    { imgSrc: timmy, name: 'Timmy' },
    { imgSrc: charly, name: 'Charly' },
    { imgSrc: scarlett, name: 'Scarlett' },
    { imgSrc: freddie, name: 'Freddie' },
  ]; 
  const shuffledPets = shuffle(pets);

  const [visibleCardsPets, setVisibleCardsPets] = useState(shuffledPets.slice(0, 3));
  const [leftCardsPets, setLeftCardsPets] = useState(shuffledPets.slice(3, 6));
  const [rightCardsPets, setRightCardsPets] = useState(shuffledPets.slice(-3));

  const [isTransitionLeft, setIsTransitionLeft] = useState(false);
  const [isTransitionRight, setIsTransitionRight] = useState(false);

  const [selectedPet, setSelectedPet] = useState(null);

  function moveLeft() {
    setIsTransitionLeft(true);
    setIsTransitionRight(false);
  
    const newVisible = leftCardsPets.slice(0, 3);
    const newLeft = leftCardsPets.slice(3).concat(visibleCardsPets.slice(0, 1));
    const newRight = visibleCardsPets.slice(1).concat(rightCardsPets.slice(-1));
  
    setVisibleCardsPets(newVisible);
    setLeftCardsPets(newLeft);
    setRightCardsPets(newRight);
  }
  
  function moveRight() {
    setIsTransitionRight(true);
    setIsTransitionLeft(false);
  
    const newVisible = rightCardsPets.slice(-3);
    const newRight = rightCardsPets.slice(0, -3).concat(visibleCardsPets.slice(-1));
    const newLeft = visibleCardsPets.slice(0, -1).concat(leftCardsPets.slice(0, 1));
  
    setVisibleCardsPets(newVisible);
    setRightCardsPets(newRight);
    setLeftCardsPets(newLeft);
  }  
  const openPopup = (pet) => {
    setSelectedPet(pet);
  };

  const closePopup = () => {
    setSelectedPet(null);
  };

  return (
    <>
      <section className="start-screen-main">
        <div className="container">
          <div className="start-screen__content">
            <section className="not-only">
              <div className="start-content">
                <h1 className="start-content__heading">Not only people need a house</h1>
                <p className="start-content__subheading">We offer to give a chance to a little and nice puppy with an extremely
                    wide and open heart. He or she will love you more than anybody else in the world, you will see!</p>
                <div className="button">
                  <a href="#our-friends"><button className="start-content__button">Make a friend</button></a>
                </div>
              </div>
              <div className="not-only__img">
                <img src={start_screen_puppy} alt="No image" />
              </div>
            </section>
          </div>
        </div>
      </section>
      <main>
        <section>
          <div className="container">
            <div className="about">
              <div className="about__img">
                <img src={about_pets} alt="No image"/>
              </div>
              <div className="about-content">
                <p className="about-content__heading">About the shelter "Cozy House"</p>
                <p className="about-content__subheading-paragraph">Currently we have 121 dogs and 342 cats on our hands and
                statistics show that only 20% of them will find a family. The others will continue to live with us and will be waiting for a lucky
                chance to become dearly loved.</p>
                <p className="about-content__subheading-paragraph">We feed our wards with the best food and make sure that they
                do not get sick, feel comfortable (including psychologically) and well. We are supported by 87 volunnteers and 28 employees of
                varios skill levels. About 12% of the animals are taken by the shelter staff. Taking care of the animals, they become attached
                to the pets and would hardly ever leave them alone.</p>
              </div>
            </div>
          </div>
        </section>
        <section id="our-friends">
          <div className="container">
            <div className="pets">
              <div className="pets-content">
                <p className="pets-content__heading">Our friends who are looking for a house</p>
                <div className="slider">
                  <div className="slider__button-pag" id="button-left">
                    <button className="button-img" onClick={moveLeft}>
                      <img src={arrow} alt="No image"/>
                    </button>
                  </div>
                  <div className="carousel-slider" id="carousel-slider">
                    <div className={`carousel ${isTransitionLeft ? "transition-left" : ""} ${isTransitionRight ? "transition-right" : ""}`} id="carousel">
                      <div className="slider-line" id="slider-left">
                        {leftCardsPets.map((pet, index) => (
                          <GalleryCard key={index} id={pet.id} imgSrc={pet.imgSrc} name={pet.name} setSelectedPet={openPopup}/>
                        ))}
                      </div>
                      <div className="slider-line" id="slider-center">
                        {visibleCardsPets.map((pet, index) => (
                          <GalleryCard key={index} id={pet.id} imgSrc={pet.imgSrc} name={pet.name} setSelectedPet={openPopup}/>
                        ))}
                      </div>
                      <div className="slider-line" id="slider-right">
                        {rightCardsPets.map((pet, index) => (
                          <GalleryCard key={index} id={pet.id} imgSrc={pet.imgSrc} name={pet.name} setSelectedPet={openPopup}/>
                        ))} 
                      </div>
                    </div>
                  </div>
                  <div className="slider__button-pag-1" id="button-right">
                    <button className="button-img" onClick={moveRight}>
                      <img src={arrow_right} alt="No image"/>
                    </button>
                  </div>
                </div>
                <div className="pets-content-link">
                  <a href="/ourpets"><button className="link__button">Get to know the rest</button></a>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="help">
          <div className="container">
            <div className="help">
              <div className="help-content">
                <p className="help-content__heading">How you can help our shelter</p>
                <div className="icon-list">
                  <div className="icon-list__item">
                    <img src={vector} alt="No image"/>
                    <p className="icon-list__item-title">Pet food</p>
                  </div>
                  <div className="icon-list__item">
                    <img src={transportation} alt="No image"/>
                    <p className="icon-list__item-title">Transportation</p>
                  </div>
                  <div className="icon-list__item">
                    <img src={toys} alt="No image"/>
                    <p className="icon-list__item-title">Toys</p>
                  </div>
                  <div className="icon-list__item">
                    <img src={bowls_and_cups} alt="No image"/>
                    <p className="icon-list__item-title">Bowls and cups</p>
                  </div>
                  <div className="icon-list__item">
                    <img src={shampoos} alt="No image"/>
                    <p className="icon-list__item-title">Shampoos</p>
                  </div>
                  <div className="icon-list__item">
                    <img src={vitamins} alt="No image"/>
                    <p className="icon-list__item-title">Vitamins</p>
                  </div>
                  <div className="icon-list__item">
                    <img src={medicines} alt="No image"/>
                    <p className="icon-list__item-title">Medicines</p>
                  </div>
                  <div className="icon-list__item">
                    <img src={collars_or_leashes} alt="No image"/>
                    <p className="icon-list__item-title">Collars / leashes</p>
                  </div>
                  <div className="icon-list__item">
                    <img src={sleeping_area} alt="No image"/>
                    <p className="icon-list__item-title">Sleeping areas</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="section-donation">
          <div className="container">
            <div className="donation">
              <div className="donation-img">
                <img src={donation_dog} alt="No image"/>
              </div>
              <div className="donation__content">
                <p className="donation__content-heading">You can also make a donation</p>
                <p className="donation__content-subheading">Name of the bank / Type of bank account</p>
                <div className="credit-card">
                  <img src={credit_card} alt="No image"/>
                  <a><p className="credit-card__item-title">8380 2880 8028 8791 7435</p></a>
                </div>
                <p className="information">Legal information and lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas a ipsum at libero sagittis dignissim sed ac diam. Praesent ultrices maximus tortor et vulputate. Interdum et malesuada fames ac ante ipsum primis in faucibus.</p>
              </div>
            </div>
          </div>
        </section>
        <Popup onClose={closePopup} selectedPet={selectedPet} />
      </main>
    </>
  )
}

export default MainPage