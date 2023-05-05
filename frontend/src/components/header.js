import * as React from 'react';
import { Toolbar, AppBar, Avatar} from '@mui/material';
import { makeStyles } from '@mui/styles';
import logoNetflix from "../images/logoNetflix.png"
import { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';


const useStyles = makeStyles({
  
  root: {
    backgroundColor: '#000',
    top: 0,
    left: 0,
    right: 0,
  },

  logo:  {
    width: '100px',
    cursor: 'pointer',
  },
  transparent: {
    backgroundColor: 'transparent',
  },
  avatar:{
    cursor:'pointer',
  },
  toolbar: {
    display: 'flex', 
    justifyContent: 'space-between',
    alignItems: 'center',
  }
});


export default function Header(){
  const classes = useStyles();
  const [show, setShow] = useState(false);
  
  const hideHeader = () =>{
    if(window.scrollY > 75){
      setShow(true);
    }else{
      setShow(false);
    }
  }


  useEffect(() => {
    window.addEventListener("scroll", hideHeader);
    return () => window.removeEventListener("scroll", hideHeader);
  },[])


  return (
    <AppBar  className={`${classes.root} ${show && classes.transparent}`} position="sticky" elevation={0}>
      <Toolbar className={classes.toolbar}>
        <Link to="/login">
          <img src={logoNetflix} alt="logo Netflix" className={classes.logo} />
        </Link>
        <Link to="/profiles">
          <Avatar className={classes.avatar}></Avatar>
        </Link>
      </Toolbar>
    </AppBar>
  )
}



