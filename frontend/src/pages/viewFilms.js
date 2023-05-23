import * as React from 'react';
//import {Button, TextField, Typography} from '@mui/material';
import { makeStyles } from '@mui/styles';
import Header from "../components/header"
import Banner from "../components/banner";
import Footer from "../components/footer";
import Categoria from "../components/category";



export default function ViewFilms(){
    const classes = useStyles();
  return (
    <div className={classes.root}>
¡       olaaaaaaaaaaaaaaaaaa
        
    </div>
  )
}

const useStyles = makeStyles({
    root:  {
      backgroundColor: '#111',
      width: '100%',
      height:'100%',
    },

    container: {
      margin: '10px 10px 10px 10px',
    }
});
