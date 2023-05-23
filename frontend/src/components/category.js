import React from 'react'
import { makeStyles } from '@mui/styles';
import Box from '@mui/material/Box';
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
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
            <div><label>ss</label></div>
            <div className={classes.root}>
           
            {filmList.map((film , index) => (
                 <div className={classes.pelis} onClick={() => handleClick(film)} ><Films film={film} /></div>

            ))}

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