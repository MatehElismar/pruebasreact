import React, { useState, useEffect } from 'react';
/* import { Button } from './Button'; */
import { Link } from 'react-router-dom';
import ReactTooltip from 'react-tooltip';
import '../css/Navbar.css';

function Navbar() {
  const [click, setClick] = useState(false);
  const [/* button */, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  const iconNav = <img className='fav-navbar' src={"/favicon.ico"} alt='iconNav' />;

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            {iconNav}
          PERALSTUDIO 
            
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                Inicio
              </Link>
            </li>
            
            <li className='nav-item'>
              <Link
                to='/portfolio'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Portfolio
              </Link>
            </li>
            
            

            {/* <li>
              <Link
                to='/sign-up'
                className='nav-links-mobile'
                onClick={closeMobileMenu}
              >
                Entrar
              </Link>
            </li> */}
          </ul>
          <div className='icons-navbar'>
          <Link
              data-tip data-for='tooltipgithub'
              className='social-icon-link twitter'
              to={{ pathname: "https://github.com/PeralStudio/" }}
              target='_blank'
              aria-label='Github'
            >
              <i className='fab fa-github' />
            </Link>
            <ReactTooltip backgroundColor="#400180" id='tooltipgithub'>
              Github
            </ReactTooltip>
            <Link
              data-tip data-for='tooltipemail'
              className='social-icon-link email'
              to={{ pathname: "mailto:info@peralstudio.com" }}
              target='_blank'
              aria-label='Email'
            >
              <i className="fas fa-envelope"></i>
            </Link>
            <ReactTooltip backgroundColor="#400180" id='tooltipemail'>
              Email
            </ReactTooltip>
            <Link
              data-tip data-for='tooltipwhatsapp'
              className='social-icon-link whatsapp'
              to={{ pathname: "https://wa.me/34668568818?" }}
              target='_blank'
              aria-label='whatsapp'
            >
              <i className="fab fa-whatsapp"></i>
            </Link>
            <ReactTooltip backgroundColor="#400180" id='tooltipwhatsapp'>
              WhatsApp
            </ReactTooltip>
            </div>
          {/* {button && <Button buttonStyle='btn--outline'>Entrar</Button>} */}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
