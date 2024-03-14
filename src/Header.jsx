import React, {useState} from 'react'
import './Header.css'
import { Link, useLocation, Outlet } from 'react-router-dom'

function Header() {
  const location = useLocation();

  const [menuActive, setIsMenuActive] = useState(false);

  const handleMenuClick = () => {
    setIsMenuActive(!menuActive);
    document.body.classList.toggle('lock');
  };

  return (
    <>
      <section className={ `start-screen ${ location.pathname === '/' ? 'start-screen-main' : 'start-screen-ourpets' }` }>
        <div className='container'>
          <header className={ `header ${ location.pathname === '/' ? 'header-main' : 'header-ourpets' }` }>
            <Link className="logo" to="/">
              <p className={ `logo__heading ${ location.pathname === '/' ? 'logo__heading-main' : 'header-logo__heading' }` }>Cozy House</p>
              <div className={ `logo__heading ${ location.pathname === '/' ? 'logo__subheading-main' : 'header-logo__subheading' }` }>Shelter for pets in Boston</div>
            </Link>
            <div className="menu__button" onClick={handleMenuClick}>
              <span></span>
            </div>
            <div className={`wrapper-menu ${menuActive ? 'active' : ''}`}>
              <nav className={ `menu ${ location.pathname === '/' ? 'menu-main' : 'menu-ourpets' }` }>
                <ul className="menu-list">
                  <li><Link to="/">About the shelter</Link></li>
                  <li><Link to="/ourpets">Our pets</Link></li>
                  <li><Link to="/catalog">Catalog</Link></li>
                  <li><a href="#help">Help the shelter</a></li>
                  <li><a href="#footer">Contacts</a></li>
                </ul>
              </nav>
            </div>
            <Outlet />
          </header>
        </div>
      </section>
    </>
  )
}  
  
export default Header