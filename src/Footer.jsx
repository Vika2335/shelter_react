import React from 'react'
import './Footer.css'
import mail from './img/icon/mail.svg'
import phone from './img/icon/phone.svg'
import pin from './img/icon/pin.svg'
import footer_puppy from './img/pets/footer-puppy.png'

function Footer() {
    return (
      <>
        <footer id="footer">
          <div className="container">
            <div className="footer__content">
              <div className="content">
                <div className="footer__contacts">
                  <p className="footer__contacts-title">For questions and suggestions</p>
                  <div className="footer__contacts-mail">
                    <a className="https://www.google.com/intl/ru/gmail/about/"><img src={mail} alt="No image"/></a>
                    <p className="mail">email@shelter.com</p>
                  </div>
                  <div className="footer__contacts-phone">
                    <a href="tel: +13 674 567 75 54"><img src={phone} alt="No image"/></a>
                    <p className="phone">+13 674 567 75 54</p>
                  </div>
                </div>
                <div className="footer__locations">
                  <p className="footer__locations-title">We are waiting for your visit</p>
                  <div className="footer__locations-boston">
                    <a href="https://www.google.com/maps/d/viewer?mid=1jf-JyjY4kV1k39pwUYCy4yDfvXQ&hl=en_US&ll=42.359895385593276%2C-71.0931515&z=13"><img src={pin} alt="No image"/></a>
                    <p className="boston">1 Central Street, Boston<br/>
                        (entrance from the store)</p>
                  </div>
                  <div className="footer__locations-london">
                    <a href="https://www.google.com/maps/d/viewer?mid=1Pj2ly5dkJoaHqvs6qMmwFA6uajQ&hl=en_US&ll=51.51796379153545%2C-0.15640582429611083&z=12"><img src={pin} alt="No image"/></a>
                    <p className="london">18 South Park, London</p>
                  </div>
                </div>
              </div>
              <div className="footer__content-img">
                <img src={footer_puppy} alt="No image"/>
              </div>
            </div>
          </div>
        </footer>
      </>
    )
  }
  
  export default Footer