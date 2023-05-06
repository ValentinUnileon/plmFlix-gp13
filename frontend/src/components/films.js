import React from 'react'
import { makeStyles } from '@mui/styles';

export default function Films() {
  const classes = useStyles();
  return (
    /* funcion onClick que lleve a la pagina de visualizacion del video */
    /*  */
    /*  */
    <div className={classes.root}>
      films
      </div>
  )
}

const useStyles = makeStyles({
  root:  {
    position: 'relative',
    width: '100%',
    height: '150px',
    marginTop: '20px',
  },

});

