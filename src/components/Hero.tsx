import React from 'react';
import './styles/Hero.scss';

const Hero: React.FC = () => {
  return (
    <main className='Hero'>
      <form className='hero--form'>
        <input type='text' placeholder='Top text' className='form--input' />
        <input type='text' placeholder='Bottom text' className='form--input' />
        <button className='form--button'>Get a new meme image</button>
      </form>
    </main>
  );
};

export default Hero;
