import React from 'react'
import { makeStyles } from '@mui/styles';
import Box from '@mui/material/Box';
import { Container } from "@mui/system";
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
import {Grid} from "@mui/material";
import NavigationIcon from '@mui/icons-material/Navigation';
import Films from "../components/films";
import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import { useParams } from "react-router-dom";

import axios from "axios";





export default function Categoria({click, categoria, filmLista}) {
    const classes = useStyles();
    const [filmList, setFilmList] = useState([filmLista]);

    function handleClick(film){
        console.log("categori");
        click(film);  
    }
    return (

        
        <div>
            <div className={classes.titulo}><label>asdfasdfasdf</label></div>
        
            <Grid container spacing={2}>

            {filmList.map((film , index) => (

                <Container maxW_idth={"sm"}>

                <Grid item xs={2} key={index}>
                 <div className={classes.pelis} onClick={() => handleClick(film)} ><Films film={film} /></div>
                 </Grid >

                 </Container>

            ))}

         

            </Grid>
         
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
        backgroundColor: '#fff5',
        width: '370px',
        margin: 'auto',
    },

    titulo: {
        backgroundColor: '#f3ff',  
    }
  
  });