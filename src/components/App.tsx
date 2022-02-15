import React from 'react';
import Hero from './Hero';
import Navbar from './Navbar';
import './styles/App.css';

function App(): JSX.Element {
  return (
    <div className='App'>
      <Navbar />
      <Hero />
    </div>
  );
}

export default App;
