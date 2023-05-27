import * as React from 'react';
import { styled } from '@mui/material/styles';
import {Button, TextField, Typography, Alert, Box} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useState } from "react";
import {getEndpoint} from './const/const';
import { Divider } from '@mui/material';
import Profile from "../components/profile";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

const PREFIX = 'configuration';

const classes = {
  root: `${PREFIX}-root`,
  textField: `${PREFIX}-textField`,
  formContainer: `${PREFIX}-formContainer`,
  textoPrincipal: `${PREFIX}-textoPrincipal`,
  perfiles:`${PREFIX}-perfiles`,
  avatar:`${PREFIX}-avatar`,
  botonEliminar:`${PREFIX}-botonEliminar`
};

const Root = styled('div')({
  [`&.${classes.root}`]: {
    //backgroundImage: 'url(https://www.ribescasals.com/media/catalog/product/cache/ac95d467f39086acf44821b87fe7ae41/t/e/tela-loneta-negra.jpg)',
    backgroundSize: 'cover',
    backgroundColor: '#111',
    height: '100vh',
     width: '100vw',
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
    alignItems: 'center' // alinea los componentes hijos en el centro del contendor
  },

  [`& .${classes.avatar}`]: {
    marginLeft: 0, padding: '10px'   
  },

  [`& .${classes.botonEliminar}`]: {
    margin: '0 auto'
  },

});

export default function Configuration() {

  const { user } = useParams();

  const navigate = useNavigate();

  const [showError, setshowError] = React.useState(false);
  const [profilesList, setProfileList] = useState([]);
  const [nuevoNombre, setNuevoNombre] = useState('')

  useEffect(() => {

    console.log("EL USUARIO ANTES", user)

    axios.get(getEndpoint(`/${user}/profiles`))
    .then((response) => {
      setProfileList(response.data);
    });

  }, []);


    
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  const actualizarNombre = () => {

    console.log("Se hizo clic en el botón actualizar nombre");

    if(nuevoNombre != ''){
      console.log("usuario del axios", user )
      const query = {username: nuevoNombre}
      axios.put(getEndpoint(`/${user}/profiles/change`), query)
      .then((response) => {
       console.log("nombre actualizado");
      });


      const url = new URL(window.location.href);

      url.searchParams.set(user, nuevoNombre);
      window.history.replaceState(null, '', url.toString());
    } 



  };

  const actualizarContraseña = () => {

    console.log('Se hizo clic en el botón');
  };

  function borrar(profile){
    console.log("borrando")

    if(profilesList.length>1){
      console.log(profilesList.length, "asdlf");
      axios.delete(getEndpoint(`/${user}/${profile.name}`))
      .then((response) => {
  
        if(response.status === 200){
  
          setProfileList(profilesList.filter((perfil) => perfil._id !== profile._id));
  
        }else{
          console.log("Fallo al intentar borrar perfil", profile.name);
        }
      });

    }

  }

  const handleChangeNombre = (event) => {
    setNuevoNombre(event.target.value);
  };


  return (
    <Root className={classes.root}>



        <Box component="form" onSubmit={handleSubmit} noValidate className={classes.formContainer}>
          
        <Typography variant="h4" frontWeight = 'bold' color='white' style={{ fontFamily: 'Palatino', marginTop: '12px' }} className={classes.textoPrincipal}>Configuración de usuario</Typography>
        <br></br><br></br>
          <Typography variant="h5" frontWeight = 'bold' style={{ fontFamily: 'Palatino' }} color='white'  >Cambiar nombre de usuario</Typography>
          <TextField label='Nuevo nombre' className={classes.textField} margin="normal" fullWidth id="email" name="email" autoComplete="email" value={nuevoNombre} onChange={handleChangeNombre} autoFocus/>
          <Button variant="contained" color="primary" fullWidth sx={{ width: '200px' }} onClick={() => actualizarNombre()}type="submit">Cambiar nombre</Button>

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

                  <div className={classes.avatar}>
                  <Profile profile={profile} />
                  </div>


                   <div className={classes.botonEliminar}> 
                   <Button variant="contained" color="primary" fullWidth type="submit" onClick={() => borrar(profile)} >X</Button> 
                   </div>

                </div>



          ))}


        </Box>
    </Root>
  );
}