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
    const [filmList, setFilmList] = useState([{name: "sadf" }, {name: "asdf"}, {name: "asdf"}, {name: "asdf"}]);
    
    return (
        <div className={classes.root}>
            <div className={classes.titulo}>
                Titulo de la categoria.
            </div>
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
        width: '100%',
        height: 'auto',
    },

    container:  {
      display: 'flex',
      maxHeight: '100%',
      maxWidth: '100vw',
      overflowX: 'auto',
      "& container::-webkit-scrollbar":{
        width: '0',
    }
    },
    titulo: {
        color: 'white',
        fontSize: '25px',
    },

    pelis: {
        minWidth:'370px',
        height: '200px',
        lineHeight: '200px',
        marginRight: '0px',
    }
  });