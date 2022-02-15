import React from 'react';
import logo from '../assets/logo.svg';
import './styles/Navbar.scss';

const Navbar: React.FC = () => {
  return (
    <div className='Navbar'>
      <header className='Navbar-header'>
        <div className='Navbar-brand'>
          <a className='Navbar-logo-link' href='/'>
            <img src={logo} className='Navbar-logo' alt='logo' />
            <p className='Navbar-title'>Meme Generator</p>
          </a>
        </div>
        <p className='Navbar-desc'>Make memes</p>
      </header>
    </div>
  );
};

export default Navbar;
