import { Button, Grid, styled, TextField } from '@mui/material';
import React from 'react';
import './styles/Hero.css';

const YellowTextField = styled(TextField)({
  '& label.Mui-focused': {
    color: 'rgb(255, 208, 21)',
  },
  '& .MuiInput-underline:after': {
    borderBottomColor: 'rgb(255, 208, 21)',
  },
  '& .MuiOutlinedInput-root': {
    width: '230px',
    height: '55px',
    padding: '10px',
    '&:hover fieldset': {
      borderColor: 'rgb(255, 208, 21)',
    },
    '&.Mui-focused fieldset': {
      borderColor: 'rgb(255, 208, 21)',
    },
  },
});

const Hero: React.FC = () => {
  return (
    <Grid container justifyContent='center'>
      <Grid container justifyContent='center' className='Hero'>
        <YellowTextField
          id='outlined-basic margin-none'
          label='Top text'
          variant='outlined'
        />
        <YellowTextField
          id='outlined-basic margin-none'
          label='Bottom text'
          variant='outlined'
        />
      </Grid>
      <Button
        id='button-meme-img'
        variant='contained'
        sx={{ backgroundColor: 'rgb(255, 208, 21)' }}
      >
        Get a new meme image
      </Button>
    </Grid>
  );
};

export default Hero;
