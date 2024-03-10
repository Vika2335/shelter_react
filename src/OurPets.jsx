import React from 'react'
import './OurPets.css'
import katrine from './img/pets/pets-katrine.png'
import jennifer from './img/pets/pets-jennifer.png'
import woody from './img/pets/pets-woody.png'
import sophie from './img/pets/pets-sophia.png'
import timmy from './img/pets/pets-timmy.png'
import charly from './img/pets/pets-charly.png'
import scarlett from './img/pets/pets-scarlet.png'
import freddie from './img/pets/pets-freddie.png'

function OurPets() {
    return (
      <>
        <main>
          <section className="our_pets">
            <div className="container">
              <div className="pets">
                <div className="pets-content">
                  <h1 className="pets-content__heading">Our friends who are looking for a house</h1>
                  <div className="gallery">
                    <div className="gallery__item">
                      <img src={katrine} alt="No image"/>
                      <p className="gallery__item-title">Katrine</p>
                      <button className="gallery__button">Learn more</button>
                    </div>
                    <div className="gallery__item">
                      <img src={jennifer} alt="No image"/>
                      <p className="gallery__item-title">Jennifer</p>
                      <button className="gallery__button">Learn more</button>
                    </div>
                    <div className="gallery__item">
                      <img src={woody} alt="No image"/>
                      <p className="gallery__item-title">Woody</p>
                      <button className="gallery__button">Learn more</button>
                    </div>
                    <div className="gallery__item" id="gallery__item-delete-pets-320">
                      <img src={sophie} alt="No image"/>
                      <p className="gallery__item-title">Sophia</p>
                      <button className="gallery__button">Learn more</button>
                    </div>
                    <div className="gallery__item" id="gallery__item-delete-pets-320">
                      <img src={timmy} alt="No image"/>
                      <p className="gallery__item-title">Timmy</p>
                      <button className="gallery__button">Learn more</button>
                    </div>
                    <div className="gallery__item" id="gallery__item-delete-pets-320">
                      <img src={charly} alt="No image"/>
                      <p className="gallery__item-title">Charly</p>
                      <button className="gallery__button">Learn more</button>
                    </div>
                    <div className="gallery__item" id="gallery__item-delete-pets-320">
                      <img src={scarlett} alt="No image"/>
                      <p className="gallery__item-title">Scarlett</p>
                      <button className="gallery__button">Learn more</button>
                    </div>
                    <div className="gallery__item" id="gallery__item-delete">
                      <img src={freddie} alt="No image"/>
                      <p className="gallery__item-title">Freddie</p>
                      <button className="gallery__button">Learn more</button>
                    </div>
                  </div>
                  <div className="nav">
                    <div className="pagination">
                      <button className="pagination__button-img" /*disabled="true"*/ id="firstback">
                        &lt;&lt;
                      </button>
                      <button className="pagination__button-img" id="back" /*disabled="true"*/>
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