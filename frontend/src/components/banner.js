
import * as React from 'react';
import { styled } from '@mui/material/styles';
import {Button, TextField, Typography, Toolbar, AppBar, Avatar} from '@mui/material';
import { Link } from 'react-router-dom';
//import imgBanner from '../images/banner1.jpg';
//import videoBanner from '../videos/Vengadores.mp4'
import '../cssComponents/banner.css'

const PREFIX = 'banner';

const classes = {
  root: `${PREFIX}-root`,
  buttons: `${PREFIX}-buttons`,
  content: `${PREFIX}-content`
};

const Root = styled('div')({
    [`& .${classes.root}`]: {
      //backgroundImage: `url(${imgBanner})`,
      position: 'relative',
      width: '100%',
      height: '440px',
      objectFit: 'contain',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    },

    [`& .${classes.buttons}`]: {
      "& button": {
        left: '75px',
        top: '300px',
        cursor: 'pointer',
        color: '#fff',
        fontWeight: 700,
        borderRadius: '5px', 
        padding: 'spacing(1,4,1,4)',
        marginRight: '1rem',
        backGroundColor: 'rgba(51,51,51,0.5)',
      } ,
      "& button:hover": {
        color: '#000',
        backGroundColor: '#e6e6e6',
      }, 
    },

    [`& .${classes.content}`]: {
      position: 'relative',
      left: '50px',
      top: '10px',
    }
});

export default function Banner(){


    /* funcion onclick que lleve a la pagina de ver el video del banner*/
    /* funcion onclick que ponga mute o no el banner */
    /* funcion añadir a mi lista */
    /* funcion map para poner video del banner  */ 
  

  return (
    <Root className="video-background"> 
    <video autoPlay muted loop>
        { //<source src={videoBanner} type="video/mp4" /> 
        }

    </video>
      <div className="video-overlay">
        <div className={classes.content}>
        <Typography variant="h2" color='white'>
          Movie Title
        </Typography>
        </div>
        <div className={classes.buttons}>
          <Button>Play</Button>
          <Button>My List</Button>
        </div>
      </div>
      
    </Root>
  );
}

