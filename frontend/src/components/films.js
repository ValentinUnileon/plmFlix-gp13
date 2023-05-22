import React from 'react'
import { makeStyles } from '@mui/styles';
import Cartel from "../components/carteles";

export default function Films() {
  const classes = useStyles();
  return (
    /* funcion onClick que lleve a la pagina de visualizacion del video */
    /*  */
    /*  */
    <div className={classes.root}>
      <Cartel />
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

