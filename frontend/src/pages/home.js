import * as React from 'react';
//import {Button, TextField, Typography} from '@mui/material';
import { makeStyles } from '@mui/styles';
import Header from "../components/header"
import Banner from "../components/banner";
import Footer from "../components/footer";
import Categoria from "../components/category";
import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import { useParams } from "react-router-dom";

import axios from "axios";



export default function Home(){

  const navigate = useNavigate();
  const { user, profile } = useParams();
  const [filmList, setFilmList] = useState([  { id: "1", name: "uno" },
  { id: "2", name: "dos" }]);

  const [categoriesList, setCategoriesList] = useState([  { name: "uno" }]);


  function click(){
    console.log("asdfasdf");
    navigate(`/${user}/${profile.name}/${filmList[0]}/viewFilms`);
  }

    const classes = useStyles();
  return (
    <div className={classes.root}>
        <Header />
        <Banner />

        {categoriesList.map((categoria , index) => (
          <div className='container'>
          <Categoria click={click} categoria={categoria}film={filmList}  />
          </div>
        ))}


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

    container: {
      margin: '10px 10px 10px 10px',
    }
});
