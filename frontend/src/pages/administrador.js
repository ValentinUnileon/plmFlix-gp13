import * as React from 'react';
import { styled } from '@mui/material/styles';
import {Button, TextField, Typography, Alert, Box} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import {getEndpoint} from './const/const';
import { Divider } from '@mui/material';
import { useState, useEffect } from 'react';
import '../cssComponents/adminStyle.css';
import UserList from "../components/UserList";
import MovieList from "../components/MovieList";

const PREFIX = 'administrador';

const classes = {
  root: `${PREFIX}-root`,
  textField: `${PREFIX}-textField`,
  formContainer: `${PREFIX}-formContainer`,
  textoPrincipal: `${PREFIX}-textoPrincipal`
};

const Root = styled('div')({
  [`&.${classes.root}`]: {
    //backgroundImage: 'url(https://www.ribescasals.com/media/catalog/product/cache/ac95d467f39086acf44821b87fe7ae41/t/e/tela-loneta-negra.jpg)',
    backgroundSize: 'cover',
    backgroundColor: '#111',
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignContent: 'center'
  },
  [`& .${classes.textField}`]: {
    '& .MuiInputBase-input': {
      color: '#fff',
    },
    '& .MuiInputLabel-root': {
      color: '#fff',
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: '#fff',
      },
    },
  },
  [`& .${classes.formContainer}`]: {
    

  },
  [`& .${classes.textoPrincipal}`]: {
    
    marginTop: '10px',
    fontFamily: 'Verdana',
    }
});

export default function Administrador() {

  const navigate = useNavigate();

  const goToLogin = () => {
    navigate(`/login`);
  };

  return (

    <Root className={classes.root}>

        

      <Box component="form" noValidate className={classes.formContainer}>
        <div>
        <Typography variant="h4" color='white' style={{ fontFamily: 'Palatino', marginTop: '20px'}} className={classes.textoPrincipal}>Página del administrador</Typography>
        <br></br><br></br>
          <Divider color="grey" variant="fullWidth" />

          <UserList />
          <Button variant="contained" color="primary" fullWidth sx={{ width: '200px' }}  type="submit">Añadir usuario</Button>
          <br></br><br></br>
          <Divider color="grey" variant="fullWidth" />

          <MovieList />
          <Button variant="contained" color="primary" fullWidth sx={{ width: '200px' }}  type="submit">Añadir pelicula</Button>
         

        </div>
        <br></br><br></br><br></br>
        <Button variant="contained" color="primary" fullWidth sx={{ width: '100px' }} onClick={goToLogin}>Volver</Button>
      </Box>

    </Root>
  );
}