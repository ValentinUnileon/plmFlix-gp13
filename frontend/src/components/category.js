import React from 'react'
import { makeStyles } from '@mui/styles';
import Box from '@mui/material/Box';
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
import NavigationIcon from '@mui/icons-material/Navigation';
import Films from "../components/films";



export default function Categoria() {
    const classes = useStyles();

    return (
        <div>
            <div><label>ss</label></div>
            <div className={classes.root}>
            <div className={classes.pelis} ><Films /></div>
            <div><Films /></div>
            <div><Films /></div>
            <div><Films /></div>
            <div><Films /></div>
            </div>
        </div>
      )


}

const useStyles = makeStyles({
    root:  {
      position: 'relative',
      display: 'grid' ,
      gridTemplateColumns: 'repeat(5, 370px)',
      gridGap: '15px',
      backgroundColor: '#fff',
      height: '350px',
      width: '100%',
      marginTop: '0px',

    },

    pelis: {
        backgroundColor: '#000',
        width: '370px',
        margin: 'auto',
    },

    titulo: {
        backgroundColor: '#f3ff',  
    }
  
  });