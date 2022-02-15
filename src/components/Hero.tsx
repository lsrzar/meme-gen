import React from 'react';
import './styles/Hero.scss';

// const YellowTextField = styled(TextField)({
//   margin: 'auto',
//   '& label.Mui-focused': {
//     color: 'rgb(255, 208, 21)',
//   },
//   '& .MuiInput-underline:after': {
//     borderBottomColor: 'rgb(255, 208, 21)',
//   },
//   '& .MuiOutlinedInput-root': {
//     width: '230px',
//     height: '55px',
//     padding: '10px',
//     '&:hover fieldset': {
//       borderColor: 'rgb(255, 208, 21)',
//     },
//     '&.Mui-focused fieldset': {
//       borderColor: 'rgb(255, 208, 21)',
//     },
//   },
// });

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
