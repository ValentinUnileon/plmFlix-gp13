import React from 'react'
import { makeStyles } from '@mui/styles';
import Cartel from "../components/carteles";



export default function Films({film}) {
  const classes = useStyles();

  return (

    <div className={classes.root}>
      <Cartel 
        
      />
    </div>
  )
}

const useStyles = makeStyles({
  root:  {
    position: 'relative',
    width: '370ox',
    height: '150px',
    marginTop: '0px',
  },

});

