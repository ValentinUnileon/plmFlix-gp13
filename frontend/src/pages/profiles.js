import * as React from 'react';
//import { Box, Avatar, Icons } from 'grommet';
import { makeStyles } from '@mui/styles';


import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import {getEndPoint} from './const/const';


import {Button, TextField, Typography, Avatar} from '@mui/material';

//import {Icons} from 'grommet-icons';

const useStyles = makeStyles({
    root: {
      backgroundImage: 'url(https://assets.nflxext.com/ffe/siteui/vlv3/efb4855d-e702-43e5-9997-bba0154152e0/1844f11c-1c2c-453b-80d4-2287d580c455/ES-es-20230417-popsignuptwoweeks-perspective_alpha_website_medium.jpg)',
      backgroundSize: 'cover',
      height: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignContent: 'center',
      display: "grid",
      gridTemplateColumns: "repeat(4,1fr)",
      gripGap: "5px",
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

  

export default function Profiles() {
  const classes = useStyles();
    return (


        <div className={classes.root}>
        <div className={classes.formContainer}>
            

          <Typography style={{color: 'white'}}>Elige un perfil</Typography>

            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" size="100%" />
            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" size="100%" />
          
        </div>
      </div>


    )
}