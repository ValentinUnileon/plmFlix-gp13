import React from 'react'
import { makeStyles } from '@mui/styles';
import Box from '@mui/material/Box';
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
import NavigationIcon from '@mui/icons-material/Navigation';



export default function Cartel() {
    const classes = useStyles();
    return (

      <div className={classes.root}>

        <Box
        sx={{
            width: 370,
            height: 200,
             backgroundSize: 'cover',
            backgroundImage: `url(${"https://img.youtube.com/vi/sec80NHLdmU/0.jpg"})`,
            backgroundColor: 'primary.dark',
            backgroundPosition: 'center',
            opacity: [0.9, 0.8, 0.7],
           
        }}
        >
 
        </Box>


        
      </div>
    )
  }

  const useStyles = makeStyles({
    root:  {
      position: 'relative',
      width: '80%',
      height: '1500px',
      marginTop: '20px',
    },
  
  });