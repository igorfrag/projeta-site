import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';
import { FaInstagram } from 'react-icons/fa';

function Footer() {
  return (
    <div className='footer-container'>
      <div className='footer-links'>
        <div className='footer-link-wrapper'>
          <div className='footer-link-items'>
            <h2>Contate-nos</h2>
            <Link to='/contato'>Contato</Link>
          </div>
        </div>
        <div className='footer-link-wrapper'>
          <div className='footer-link-items'>
            <h2>Siga a Projeta</h2>
            <Link
              to={'//www.instagram.com/projetacrilico/'}
              target='_blank'
              aria-label='Instagram'
            >
              Instagram
            </Link>
          </div>
        </div>
      </div>
      <section className='social-media'>
        <div className='social-media-wrap'>
          <div className='footer-logo'></div>
          <small className='website-rights'>PROJETACRILICO © 2021</small>
          <div className='social-icons'>
            <Link
              className='social-icon-link'
              to={'//www.instagram.com/projetacrilico/'}
              target='_blank'
              aria-label='Instagram'
            >
              <FaInstagram />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
