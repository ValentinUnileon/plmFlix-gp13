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
    height: "50px",
    position: 'sticky',
    top: 0,
    left: 0,
    right: 0,
    display: 'flex',
    alignItems: 'center',
    zIndex: 1,
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
    width: '100%',
    display: 'flex', 
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: '0px 15px 0px',
  },
  item: {
    color: 'white',
  }
});


export default function Header(){
  const classes = useStyles();
  const [show, setShow] = useState(false);
  
  const hideHeader = () =>{
    if(window.scrollY < 15){
      setShow(false);
    }else{
      setShow(true);
    }
  }


  useEffect(() => {
    window.addEventListener("scroll", hideHeader);
    return () => window.removeEventListener("scroll", hideHeader);
  },[])


  return (
    <div className={`${classes.root} ${!show && classes.transparent}`} elevation={0}>
      <div className={classes.toolbar}>
        <Link to="/login">
          <img src={logoNetflix} alt="logo Netflix" className={classes.logo} />
        </Link>
        <Link to="/profiles" className={classes.item}>
          Peliculas
        </Link>
        <Link to="/profiles" className={classes.item}>
          Series
        </Link>
        <Link to="/profiles" className={classes.item}>
          <Avatar className={classes.avatar}></Avatar>
        </Link>
      </div>
    </div>
      
  )
}



