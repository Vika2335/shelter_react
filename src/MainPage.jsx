import React from 'react'
import './MainPage.css'
import start_screen_puppy from './img/pets/start-screen-puppy.png'
import about_pets from './img/pets/about-pets.png'
import arrow from './img/pagination/Arrow.svg'
import arrow_right from './img/pagination/Arrow (1).svg'
import vector from './img/icon/Vector.svg'
import transportation from './img/icon/transportation.svg'
import toys from './img/icon/toys.svg'
import bowls_and_cups from './img/icon/bowls-and-cups.svg'
import shampoos from './img/icon/shampoos.svg'
import vitamins from './img/icon/vitamins.svg'
import medicines from './img/icon/medicines.svg'
import collars_or_leashes from './img/icon/collars-or-leashes.svg'
import sleeping_area from './img/icon/sleeping-area.svg'
import donation_dog from './img/pets/donation-dog.png'
import credit_card from './img/icon/credit-card.svg'

function MainPage() {
    return (
      <>
        <section className="start-screen">
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
                      <button className="button-img">
                        <img src={arrow} alt="No image"/>
                      </button>
                    </div>
                    <div className="carousel-slider" id="carousel-slider">
                      <div className="carousel" id="carousel">
                        <div className="slider-line" id="slider-left">
                          <div className="slider__item">
                            <p className="slider__item-title">Katrine</p>
                            <button className="slider__button">Learn more</button>
                          </div>
                          <div className="slider__item">
                            <p className="slider__item-title">Jennifer</p>
                            <button className="slider__button">Learn more</button>
                          </div>
                          <div className="slider__item">
                            <p className="slider__item-title">Woody</p>
                            <button className="slider__button">Learn more</button>
                          </div>
                        </div>
                        <div className="slider-line" id="slider-center"></div>
                        <div className="slider-line" id="slider-right"></div>
                      </div>
                    </div>
                    <div className="slider__button-pag-1" id="button-right">
                      <button className="button-img">
                        <img src={arrow_right} alt="No image"/>
                      </button>
                    </div>
                  </div>
                  <div className="pets-content-link">
                    <a href="/our_pets.html"><button className="link__button">Get to know the rest</button></a>
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
        </main>
      </>
    )
  }
  
  export default MainPage