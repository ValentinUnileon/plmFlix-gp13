import * as React from 'react';
import {Button, TextField, Typography, Alert, Box} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import {getEndpoint} from './const/const';
import { makeStyles } from '@mui/styles';


const useStyles = makeStyles({
  root: {
    backgroundImage: 'url(https://assets.nflxext.com/ffe/siteui/vlv3/efb4855d-e702-43e5-9997-bba0154152e0/1844f11c-1c2c-453b-80d4-2287d580c455/ES-es-20230417-popsignuptwoweeks-perspective_alpha_website_medium.jpg)',
    backgroundSize: 'cover',
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
    boxShadow: '0 0.5rem 1rem rgba(0, 0, 0, 0.9)'
  }
});

export default function Login() {

  const [showError, setshowError] = React.useState(false);

  const navigate = useNavigate();

  const classes = useStyles();
    
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    let payload = {
      user: data.get('email'),
      password: data.get('password'),
    }

    axios.post(getEndPoint('/login'), payload)
    .then((response)=> {
      navigate(`/${response.data.username}/profiles`);
      console.log("segurooo");
    })
    .catch((error)=>{
      
      setshowError(true);
      console.log("ERROR");
    
    });

  };

  return (
    <div className={classes.root}>
      <Box sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}>
      {
        showError &&
        <Alert severity="error">Usuario o contraseña mal</Alert>
      }
        <Box component="form" onSubmit={handleSubmit} noValidate className={classes.formContainer}>
          <Typography variant="h4" frontWeight = 'bold' color='white'>Iniciar sesión</Typography>
          <TextField label='Correo electrónico' className={classes.textField} margin="normal" fullWidth id="email" name="email" autoComplete="email" required autoFocus/>
          <TextField label='Contraseña' type="password" className={classes.textField} margin="normal" fullWidth id="password" name="password" required  />
          <Button variant="contained" color="primary" fullWidth type="submit">Iniciar Sesion</Button>
        </Box>
      </Box>
    </div>
  );
}