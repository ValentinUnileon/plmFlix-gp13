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
    
  }

});



export default function Films({film}) {

  /* film.name para el nombre del video */
  /* film.url para el link del video */

  console.log("componente film",film);
  const navigate = useNavigate();
  const { user, profile } = useParams();


  function handleClick(film){
    console.log("categori");
    click(film);  
  }

  function click(){
    console.log("asdfasdf");
    navigate(`/${user}/${profile.name}/${film.title}/viewFilms`);
  }

  useEffect(() => {
    const rootElement = document.getElementById(`film-${film._id}`);
    if (rootElement) {
      rootElement.style.backgroundImage = `url(${film.thumbnailUrl})`;
    }
  }, []);


  return (
    <Root className={classes.root} onClick={() => handleClick(film)} >

      <div className={classes.cartel} id={`film-${film._id}`} />
    </Root>
  );
}

