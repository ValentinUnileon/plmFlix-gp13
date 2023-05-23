import * as React from 'react';
import {Button, TextField, Typography, Alert, Box} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import {getEndpoint} from './const/const';
import { makeStyles } from '@mui/styles';
import { Divider } from '@mui/material';

const useStyles = makeStyles({
  root: {
    backgroundImage: 'url(https://www.ribescasals.com/media/catalog/product/cache/ac95d467f39086acf44821b87fe7ae41/t/e/tela-loneta-negra.jpg)',
    backgroundSize: 'cover',
    backgroundColor: '#111',
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignContent: 'center'
  },
  textField: {
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
  formContainer: {
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
  textoPrincipal: {
    
    marginTop: '10px',
    fontFamily: 'Verdana'
  }
});

export default function Configuration() {

  const [showError, setshowError] = React.useState(false);

  const navigate = useNavigate();

  const classes = useStyles();
    
  const handleSubmit = (event) => {
    event.preventDefault();
   



  };

  const actualizarNombre = () => {

    console.log('Se hizo clic en el botón');
  };

  const actualizarContraseña = () => {

    console.log('Se hizo clic en el botón');
  };

  return (
    <div className={classes.root}>

        <Typography variant="h4" frontWeight = 'bold' color='white' style={{ fontFamily: 'Palatino', marginTop: '12px' }} className={classes.textoPrincipal}>Configuración de usuario</Typography>
        <br></br><br></br>


        <Box component="form" onSubmit={handleSubmit} noValidate className={classes.formContainer}>
          <Typography variant="h5" frontWeight = 'bold' style={{ fontFamily: 'Palatino' }} color='white'>Cambiar nombre de usuario</Typography>
          <TextField label='Nuevo nombre' className={classes.textField} margin="normal" fullWidth id="email" name="email" autoComplete="email"  autoFocus/>
          <Button variant="contained" color="primary" fullWidth sx={{ width: '200px' }} onClick={actualizarNombre} type="submit">Cambiar nombre</Button>

            <br></br><br></br>
          <Divider color="grey" variant="fullWidth" />
          <br></br>

          <Typography variant="h5" frontWeight = 'bold' style={{ fontFamily: 'Palatino' }} color='white'>Cambiar contraseña</Typography>
          <TextField label='Contraseña actual' type="password" className={classes.textField} margin="normal" fullWidth id="oldPassword" name="oldPassword"   />
          <TextField label='Nueva contraseña' type="password" className={classes.textField} margin="normal" fullWidth id="newPassword" name="newPassword"   />
          <Button variant="contained" color="primary" fullWidth sx={{ width: '250px' }} onClick={actualizarContraseña} type="submit">Cambiar contraseña</Button>

          <br></br><br></br>
          <Divider color="grey" variant="fullWidth" />
          <br></br><br></br>

          <Button variant="contained" color="primary" fullWidth type="submit">Editar perfiles</Button>
        </Box>
    </div>
  );
}