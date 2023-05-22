import * as React from 'react';
//import {Button, TextField, Typography} from '@mui/material';
import { makeStyles } from '@mui/styles';
import Header from "../components/header"
import Banner from "../components/banner";
import Footer from "../components/footer";
import Films from "../components/films";

export default function Home(){
    const classes = useStyles();
  return (
    <div className={classes.root}>
        <Header />
        <Banner />
        nombre categoria
    
        <Films />
        nombre categoria
        <Films />
        nombre categoria
        <Films />

        <Footer />
        
    </div>
  )
}

const useStyles = makeStyles({
    root:  {
      backgroundColor: '#111',
      width: '100%',
      height:'100%',
    },
});
