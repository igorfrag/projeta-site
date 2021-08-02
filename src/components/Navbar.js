import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Button } from './Button';
import './Navbar.css';
import { IconContext } from 'react-icons/lib';

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

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

  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <div className='navbar'>
          <div className='navbar-container container'>
            <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
              <img
                src='images\projetaLogo.svg'
                alt='Logo Projetacrilico'
                className='navbar-logo-image'
              />
            </Link>
            <div className='menu-icon' onClick={handleClick}>
              {click ? <FaTimes /> : <FaBars />}
            </div>
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
              <li className='nav-item'>
                <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                  Home
                </Link>
              </li>
              <li className='nav-item'>
                <Link
                  to='/servicos'
                  className='nav-links'
                  onClick={closeMobileMenu}
                >
                  Serviços
                </Link>
              </li>
              <li className='nav-btn'>
                {button ? (
                  <Link className='btn-link' to='/contato'>
                    <Button buttonStyle='btn--outline'>Contate-nos</Button>
                  </Link>
                ) : (
                  <Link
                    className='btn-link'
                    to='/contato'
                    onClick={closeMobileMenu}
                  >
                    <Button buttonStyle='btn--outline' buttonSize='btn--mobile'>
                      Contate-nos
                    </Button>
                  </Link>
                )}
              </li>
            </ul>
          </div>
        </div>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;
