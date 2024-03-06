import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'

function Header() {
    return (
      <>
        <section className='start-screen'>
          <div className='container'>
            <header className="header">
              <div className="logo">
                <p className="logo__heading">Cozy House</p>
                <div className="logo__subheading">Shelter for pets in Boston</div>
              </div>
              <div className="menu__button">
                <span></span>
              </div>
              <div className="wrapper-menu">
                <nav className="menu">
                  <ul className="menu-list">
                    <li><Link to="/">About the shelter</Link></li>
                    <li><Link to="/OurPets.jsx">Our pets</Link></li>
                    <li><a href="#help">Help the shelter</a></li>
                    <li><a href="#footer">Contacts</a></li>
                  </ul>
                </nav>
              </div>
            </header>
          </div>
        </section>
      </>
    )
  }
  
  export default Header