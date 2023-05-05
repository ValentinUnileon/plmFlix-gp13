import * as React from 'react';
//import {Button, TextField, Typography} from '@mui/material';
import { makeStyles } from '@mui/styles';
import Header from "../components/header"
import Banner from "../components/banner"
import Footer from "../components/footer"

export default function Home(){
    const classes = useStyles();
  return (
    <div className={classes.root}>
        <Header />
        <Banner />
        <h1>Tu prima</h1>
        <h1>Tu prima</h1>
        <h1>Tu prima</h1>
        <h1>Tu prima</h1>
        <h1>Tu prima</h1>
        <h1>Tu prima</h1>
        <h1>Tu prima</h1>
        <h1>Tu prima</h1>
        <h1>Tu prima</h1>
        <h1>Tu prima</h1>
        <h1>Tu prima</h1>
        <h1>Tu prima</h1>
        <h1>Tu prima</h1>
        <h1>Tu prima</h1>
        <h1>Tu prima</h1>
        <h1>Tu prima</h1>
        <h1>Tu prima</h1>
        <h1>Tu prima</h1>
        <h1>Tu prima</h1>
        <h1>Tu prima</h1>
        <Footer />
    </div>
  )
}

const useStyles = makeStyles({
    root:  {
      backgroundColor: '#ffff',
    },
});
