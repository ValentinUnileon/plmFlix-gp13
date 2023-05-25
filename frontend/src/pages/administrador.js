import * as React from 'react';
import { styled } from '@mui/material/styles';
import {Button, TextField, Typography, Alert, Box} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import {getEndpoint} from './const/const';
import { Divider } from '@mui/material';
import { useState, useEffect } from 'react';
import '../cssComponents/adminStyle.css';

const PREFIX = 'administrador';

const classes = {
  root: `${PREFIX}-root`,
  textField: `${PREFIX}-textField`,
  formContainer: `${PREFIX}-formContainer`,
  textoPrincipal: `${PREFIX}-textoPrincipal`
};

const Root = styled('div')({
  [`& .${classes.root}`]: {
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
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: 'rgba(0, 0, 0, 0.88)',
    padding: '2rem',
    borderRadius: '0.5rem',
    boxShadow: '0 0.5rem 1rem rgba(0, 0, 0, 0.9)',
    marginTop: '0.4%'

  },
  [`& .${classes.textoPrincipal}`]: {
    
    marginTop: '10px',
    fontFamily: 'Verdana',
    }
});

const UserList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get('/api/users')
      .then(response => {
        setUsers(response.data);
      })
      .catch(error => {
        console.error('Error al buscar los usuarios: ', error);
      });
  }, []);

  return (
    <Root>
      <h2 className='textoLista'>Eliminar usuario de la aplicacion</h2>
      <ul>
        {users.map((user) => (
          <li key={user._id}>{user.name}</li>
        ))}
      </ul>
    </Root>
  );
};

const MovieList = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios.get('/api/movies')
      .then(response => {
        setMovies(response.data);
      })
      .catch(error => {
        console.error('Error al buscar las peliculas:', error);
      });
  }, []);

  return (
    <div>
      <h2 className='textoLista'>Eliminar pelicula de la aplicacion</h2>
      <ul>
        {movies.map((movie) => (
          <li key={movie._id}>{movie.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default function Administrador() {



  return (

    <div className={classes.root}>

        <Typography variant="h4" color='white' style={{ fontFamily: 'Palatino', marginTop: '20px'}} className={classes.textoPrincipal}>Página del administrador</Typography>
        <br></br><br></br>

      <Box component="form" noValidate className={classes.formContainer}>
        <div>
          <UserList />
          <Button variant="contained" color="primary" fullWidth sx={{ width: '200px' }}  type="submit">Añadir usuario</Button>
          <MovieList />
          <Button variant="contained" color="primary" fullWidth sx={{ width: '200px' }}  type="submit">Añadir pelicula</Button>
         

        </div>
        <br></br><br></br><br></br>
        <Button variant="contained" color="primary" fullWidth sx={{ width: '100px' }}  type="submit">Volver</Button>
      </Box>

    </div>
  );
}