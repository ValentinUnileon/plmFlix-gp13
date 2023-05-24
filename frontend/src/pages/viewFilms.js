import * as React from 'react';
import { styled } from '@mui/material/styles';
import Header from "../components/header"
import Banner from "../components/banner";
import Footer from "../components/footer";
import Categoria from "../components/category";



const PREFIX = 'viewFilms';

const classes = {
  root: `${PREFIX}-root`,
  container: `${PREFIX}-container`
};

const Root = styled('div')({
    [`&.${classes.root}`]: {
      backgroundColor: '#111',
      width: '100%',
      height:'100%',
    },

    [`& .${classes.container}`]: {
      margin: '10px 10px 10px 10px',
    }
});



export default function ViewFilms(){

  return (
    <Root className={classes.root}>
      <Header />

      <Footer />
    </Root>
  );
}
