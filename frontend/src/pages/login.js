import * as React from 'react';
import {Button, TextField, Typography} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import {getEndPoint} from './const/const';
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
  textfield:{
    '& .MuiInputBase-input':{
      color: 'white',
    },
    '& .MuiOutLinedInput-root .MuiOutlinedInput-notchedOutline': {
      borderColor: 'white',
    },
    '& .MuiOutLinedInput-root:hover .MuiOutlinedInput-notchedOutline':{
      borderColor: 'white',
    },
    '& .MuiOutLinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline':{
      borderColor: 'white',
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
      navigate(`/${response.data.user}/counts`);
      console.log(response.data);
    })
    .catch((error)=>{
      setshowError(true);
    });

  };

  return (
    <div className={classes.root}>
      <div className={classes.formContainer}>
        <form>
          <Typography variant="h4" frontWeight = 'bold' color='white'>Iniciar sesión</Typography>
          <TextField label='Correo electrónico' className={classes.textfield} margin="normal" fullWidth/>
          <TextField label='Contraseña' type="password" className={classes.textfield} margin="normal" fullWidth/>
          <Button variant="contained" color="primary" fullWidth>Iniciar Sesion</Button>
        </form>
      </div>
    </div>
  );
}