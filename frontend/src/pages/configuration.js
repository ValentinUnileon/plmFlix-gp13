import * as React from 'react';
import { styled } from '@mui/material/styles';
import {Button, TextField, Typography, Alert, Box} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useState } from "react";
import {getEndpoint} from './const/const';
import { Divider } from '@mui/material';
import Profile from "../components/profile";

const PREFIX = 'configuration';

const classes = {
  root: `${PREFIX}-root`,
  textField: `${PREFIX}-textField`,
  formContainer: `${PREFIX}-formContainer`,
  textoPrincipal: `${PREFIX}-textoPrincipal`,
  perfiles:`${PREFIX}-perfiles`
};

const Root = styled('div')({
  [`&.${classes.root}`]: {
    //backgroundImage: 'url(https://www.ribescasals.com/media/catalog/product/cache/ac95d467f39086acf44821b87fe7ae41/t/e/tela-loneta-negra.jpg)',
    backgroundSize: 'cover',
    backgroundColor: '#111',
    height: '100%',

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
    fontFamily: 'Verdana'
  },
  [`& .${classes.perfiles}`]: {
    
    display: 'flex',
    justifyContent: 'center',
    
  },

});

export default function Configuration() {

  const [showError, setshowError] = React.useState(false);

  const navigate = useNavigate();

  const profile ={

    name: "hola",
    
  }
  const [profilesList, setProfileList] = useState([profile, profile, profile ]);


    
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  const actualizarNombre = () => {

    console.log('Se hizo clic en el botón');
  };

  const actualizarContraseña = () => {

    console.log('Se hizo clic en el botón');
  };
  function borrar(profile){
    console.log("borrando")
  }



  return (
    <Root className={classes.root}>



        <Box component="form" onSubmit={handleSubmit} noValidate className={classes.formContainer}>
          
        <Typography variant="h4" frontWeight = 'bold' color='white' style={{ fontFamily: 'Palatino', marginTop: '12px' }} className={classes.textoPrincipal}>Configuración de usuario</Typography>
        <br></br><br></br>
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

          <Typography variant="h5" frontWeight = 'bold' style={{ fontFamily: 'Palatino' }} color='white'>Eliminar perfil</Typography>

          <br></br><br></br>
          {profilesList.map((profile , index) => (

                <div className={classes.perfiles}>

                  <Profile
                    profile={profile}
                    click={borrar} />

                   <div className={classes.a}> 
                   <button>asdf</button>  
                   </div>

                </div>



          ))}

          <Button variant="contained" color="primary" fullWidth type="submit">Editar perfiles</Button>
        </Box>
    </Root>
  );
}