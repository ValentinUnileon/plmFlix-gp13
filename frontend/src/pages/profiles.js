import * as React from 'react';
import { makeStyles } from '@mui/styles';
import Profile from "../components/profile";
import { createTheme, ThemeProvider  } from '@mui/material/styles';
import {Button, TextField, Typography, Avatar} from '@mui/material';
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { getEndpoint } from "./const/const";
import axios from "axios";


const useStyles = makeStyles({
  root: {
    backgroundColor: 'black',
    backgroundSize: 'cover',
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  formContainer: {
    position: 'absolute',
    display: 'flex',
    flexDirection: 'column',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: 'rgba(0, 0, 0, 0.88)',
    padding: '2rem',
    borderRadius: '0.5rem',
    boxShadow: '0 0.5rem 1rem rgba(0, 0, 0, 0.9)',
    textAlign: 'center',
  },
  title: {
    marginBottom: '1rem',
    color: 'white',
  },
  avatarContainer: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '2rem',
    gap: '20px' , 
  },
});


export default function Profiles() {


  const { user } = useParams();
  const classes = useStyles();
  const navigate = useNavigate();
  const nuevoPerfil={user: "papi", nombre: "loco"};    //quitar
  const nuevoPerfil2={user: "pepito", nombre: "PEPE"}; //quitar
  const [profilesList, setProfilesList] = useState([nuevoPerfil, nuevoPerfil2]);

  const theme = createTheme();
  theme.typography.h3 = {
    color: 'white', 
    marginBottom: "40px",
    fontSize: '1.2rem',
    '@media (min-width:600px)': {
      fontSize: '7.5rem',
    },
    [theme.breakpoints.up('md')]: {
      fontSize: '2.4rem',
    },
  };

  //FUNCIONES

  function click(profile){
    navigate(`/${profile.user}/${profile.nombre}/principal`);
  }

  //CICLO DE VIDA DEL COMPONENTE

  useEffect(() => {

  axios.get(getEndpoint(`/${user}/counts`))
  .then((response) => {

    //La peticion devuelve el array de perfiles del usuario indicado
    setProfilesList(response.data);   

  });

  }, [])  


  return (
    <div className={classes.root}>
      <div className={classes.formContainer}>
        <ThemeProvider theme={theme}>
          <Typography variant="h3" className={classes.title}>
            ¿Que quieres ver? Elige tu perfil
          </Typography>
        </ThemeProvider>
        <div className={classes.avatarContainer}>

          {profilesList.map((profile , index) => (
              <Profile
                profile={profile}
                click={click}
              />

          ))}

        </div>
      </div>
    </div>
  );
}
