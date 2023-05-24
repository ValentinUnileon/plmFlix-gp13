import React from 'react'
import { styled } from '@mui/material/styles';
import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import { useParams } from "react-router-dom";



const PREFIX = 'films';

const classes = {
  root: `${PREFIX}-root`,
  cartel: `${PREFIX}-cartel`
};

const Root = styled('div')({
  [`&.${classes.root}`]: {
    position: 'relative',
    width: '370px',
    height: '200px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },

  [`& .${classes.cartel}`]: {
    width: '95%',
    height: '95%',
    backgroundSize: 'cover',
    position: 'relative',
    backgroundImage: `url(${"https://img.youtube.com/vi/sec80NHLdmU/0.jpg"})`,
  }

});



export default function Films({film}) {

  /* film.name para el nombre del video */
  /* film.url para el link del video */

  const navigate = useNavigate();
  const { user, profile } = useParams();
  const [filmList, setFilmList] = useState([  { id: "1", name: "uno" },
  { id: "2", name: "dos" }, { id: "3", name: "tres" }, { id: "4", name: "cuatro" }]);

  function handleClick(film){
    console.log("categori");
    click(film);  
}

function click(){
  console.log("asdfasdf");
  navigate(`/${user}/${profile.name}/${filmList[0]}/viewFilms`);
}
  return (
    <Root className={classes.root} onClick={() => handleClick(film)} >
      <div className={classes.cartel}></div>
    </Root>
  );
}

