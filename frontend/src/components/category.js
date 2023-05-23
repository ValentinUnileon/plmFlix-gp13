import React from 'react'
import { makeStyles } from '@mui/styles';
import Films from "../components/films";
import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import { useParams } from "react-router-dom";

import axios from "axios";





export default function Categoria({click, categoria, filmLista}) {
    const classes = useStyles();
    const [filmList, setFilmList] = useState([{name: "sadf" }, {name: "asdf"}]);
    
    return (
        <div className={classes.root}>
            <div><label>ss</label></div>
            <div className={classes.container}>
            {filmList.map((film , index) => (
                 <div className={classes.pelis}><Films />
                 </div>
            ))}
            </div>
        </div>
      )
}

const useStyles = makeStyles({
    root: {
        backgroundColor: 'blue',
        width: '100%',
        height: '300px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },

    container:  {
      //position: 'relative',
      display: 'grid' ,
      gridTemplateColumns: 'repeat(5, 370px)',
      gridGap: '15px',
      backgroundColor: 'white',
      height: '90%',
      width: '100%',
      marginTop: '0px',
        
    },

    pelis: {
        backgroundColor: 'red',  
    }
  
  });