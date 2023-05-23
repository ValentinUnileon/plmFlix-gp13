import React from 'react'
import { makeStyles } from '@mui/styles';
import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import { useParams } from "react-router-dom";



export default function Films({film}) {
  const classes = useStyles();
  /* film.name para el nombre del video */
  /* film.url para el link del video */

  const navigate = useNavigate();
  const { user, profile } = useParams();
  const [filmList, setFilmList] = useState([  { id: "1", name: "uno" },
  { id: "2", name: "dos" }]);

  function handleClick(film){
    console.log("categori");
    click(film);  
}

function click(){
  console.log("asdfasdf");
  navigate(`/${user}/${profile.name}/${filmList[0]}/viewFilms`);
}
  return (

    <div className={classes.root} onClick={() => handleClick(film)} >
      <div className={classes.cartel}></div>
    </div>
  )
}

const useStyles = makeStyles({
  root:  {
    position: 'relative',
    backgroundColor: 'green',
    width: '370ox',
    height: '200px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },

  cartel: {
    width: '95%',
    height: '95%',
    backgroundSize: 'cover',
    backgroundColor: 'gray',
    //position: 'relative',
    //backgroundImage: `url(${"https://img.youtube.com/vi/sec80NHLdmU/0.jpg"})`,
  }

});

